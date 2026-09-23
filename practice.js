const seedData = {
  equipment: [
    ["EQ-101", "Hydraulic Excavator", "HX220", "Durgapur", 12840, "Active"],
    ["EQ-102", "Hydraulic Excavator", "PC210", "Durgapur", 9740, "Maintenance"],
    ["EQ-103", "Surface Miner", "SM2200", "Durgapur", 8350, "Active"],
    ["EQ-201", "Dozer", "D8T", "Dhanbad", 11210, "Active"],
    ["EQ-202", "Wheel Loader", "L120", "Dhanbad", 6860, "Active"],
    ["EQ-301", "Motor Grader", "140K", "Odisha", 7990, "Active"],
    ["EQ-302", "Dump Truck", "HD785", "Odisha", 14550, "Maintenance"],
    ["EQ-303", "Wheel Loader", "WA470", "Odisha", 6200, "Active"]
  ],
  maintenance_orders: [
    ["WO-1001", "EQ-101", "2026-04-08", "Preventive", 4, 18500, "Closed"],
    ["WO-1002", "EQ-102", "2026-04-18", "Corrective", 18, 92000, "Closed"],
    ["WO-1003", "EQ-201", "2026-05-02", "Preventive", 5, 24000, "Closed"],
    ["WO-1004", "EQ-202", "2026-05-16", "Inspection", 2, 6500, "Closed"],
    ["WO-1005", "EQ-301", "2026-05-28", "Corrective", 11, 58000, "Closed"],
    ["WO-1006", "EQ-302", "2026-06-04", "Preventive", 6, 31500, "Closed"],
    ["WO-1007", "EQ-101", "2026-06-12", "Corrective", 9, 48000, "Closed"],
    ["WO-1008", "EQ-103", "2026-06-21", "Preventive", 7, 27000, "Closed"],
    ["WO-1009", "EQ-102", "2026-07-03", "Corrective", 22, 125000, "In Progress"],
    ["WO-1010", "EQ-302", "2026-07-09", "Corrective", 26, 148000, "Open"],
    ["WO-1011", "EQ-103", "2026-07-12", "Corrective", 8, 44000, "Open"],
    ["WO-1012", "EQ-201", "2026-07-18", "Inspection", 3, 8500, "Closed"]
  ],
  spare_part_usage: [
    ["SU-01", "WO-1001", "Engine Oil", "Lubricant", 20, 380],
    ["SU-02", "WO-1001", "Oil Filter", "Filter", 1, 2800],
    ["SU-03", "WO-1002", "Hydraulic Pump", "Spares", 1, 68000],
    ["SU-04", "WO-1002", "Hydraulic Oil", "Lubricant", 40, 420],
    ["SU-05", "WO-1003", "Transmission Oil", "Lubricant", 25, 460],
    ["SU-06", "WO-1003", "Fuel Filter", "Filter", 2, 1600],
    ["SU-07", "WO-1005", "Grader Blade", "GET & UC", 1, 22000],
    ["SU-08", "WO-1005", "Hydraulic Hose", "Spares", 3, 4500],
    ["SU-09", "WO-1006", "Engine Oil", "Lubricant", 30, 380],
    ["SU-10", "WO-1007", "Boom Seal Kit", "Spares", 1, 18500],
    ["SU-11", "WO-1007", "Hydraulic Oil", "Lubricant", 35, 420],
    ["SU-12", "WO-1008", "Cutting Tool", "GET & UC", 6, 2100],
    ["SU-13", "WO-1009", "Hydraulic Cylinder", "Spares", 1, 72000],
    ["SU-14", "WO-1010", "Brake Assembly", "Spares", 2, 36000],
    ["SU-15", "WO-1010", "Tyre 27.00R49", "TTF", 2, 95000],
    ["SU-16", "WO-1011", "Control Valve", "Spares", 1, 28500]
  ]
};

const examples = {
  inspect: `SELECT *
FROM equipment
ORDER BY total_hmr DESC;`,
  filter: `SELECT order_id, equipment_id, cost_inr, status
FROM maintenance_orders
WHERE maintenance_type = 'Corrective'
  AND cost_inr > 50000
ORDER BY cost_inr DESC;`,
  join: `SELECT
  e.site,
  e.equipment_name,
  mo.order_id,
  mo.maintenance_type,
  mo.cost_inr
FROM equipment AS e
JOIN maintenance_orders AS mo
  ON mo.equipment_id = e.equipment_id
ORDER BY mo.cost_inr DESC;`,
  aggregate: `SELECT
  e.site,
  COUNT(mo.order_id) AS order_count,
  SUM(mo.downtime_hrs) AS downtime_hrs,
  SUM(mo.cost_inr) AS maintenance_cost
FROM equipment AS e
JOIN maintenance_orders AS mo
  ON mo.equipment_id = e.equipment_id
GROUP BY e.site
ORDER BY maintenance_cost DESC;`,
  cte: `WITH equipment_cost AS (
  SELECT
    equipment_id,
    SUM(cost_inr) AS total_cost
  FROM maintenance_orders
  GROUP BY equipment_id
)
SELECT
  e.equipment_id,
  e.equipment_name,
  ec.total_cost
FROM equipment AS e
JOIN equipment_cost AS ec
  ON ec.equipment_id = e.equipment_id
WHERE ec.total_cost > (
  SELECT AVG(total_cost)
  FROM equipment_cost
)
ORDER BY ec.total_cost DESC;`
};

const tableMeta = {
  equipment: { grain: "One row represents one registered equipment asset." },
  maintenance_orders: { grain: "One row represents one maintenance work order for an asset." },
  spare_part_usage: { grain: "One row represents one material consumed against a work order." }
};

let SQL;
let db;
let activeTable = "equipment";
let lastResult = null;
let history = JSON.parse(localStorage.getItem("sql-free-history") || "[]");

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

function seedDatabase() {
  if (db) db.close();
  db = new SQL.Database();
  db.run(`
    CREATE TABLE equipment (
      equipment_id TEXT PRIMARY KEY,
      equipment_name TEXT NOT NULL,
      model TEXT NOT NULL,
      site TEXT NOT NULL,
      total_hmr INTEGER NOT NULL,
      status TEXT NOT NULL
    );
    CREATE TABLE maintenance_orders (
      order_id TEXT PRIMARY KEY,
      equipment_id TEXT NOT NULL,
      order_date TEXT NOT NULL,
      maintenance_type TEXT NOT NULL,
      downtime_hrs INTEGER NOT NULL,
      cost_inr INTEGER NOT NULL,
      status TEXT NOT NULL
    );
    CREATE TABLE spare_part_usage (
      usage_id TEXT PRIMARY KEY,
      order_id TEXT NOT NULL,
      material TEXT NOT NULL,
      category TEXT NOT NULL,
      quantity INTEGER NOT NULL,
      unit_cost INTEGER NOT NULL
    );
  `);

  const statements = [
    ["INSERT INTO equipment VALUES (?, ?, ?, ?, ?, ?)", seedData.equipment],
    ["INSERT INTO maintenance_orders VALUES (?, ?, ?, ?, ?, ?, ?)", seedData.maintenance_orders],
    ["INSERT INTO spare_part_usage VALUES (?, ?, ?, ?, ?, ?)", seedData.spare_part_usage]
  ];
  statements.forEach(([sql, rows]) => {
    const statement = db.prepare(sql);
    rows.forEach(row => statement.run(row));
    statement.free();
  });
  refreshExplorer();
}

function execRows(sql) {
  const results = db.exec(sql);
  if (!results.length) return { columns: [], values: [] };
  return results[results.length - 1];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatValue(column, value) {
  if (value === null) return '<span class="null">NULL</span>';
  if (/(cost|spend)/i.test(column) && typeof value === "number") return `₹${value.toLocaleString("en-IN")}`;
  if (typeof value === "number") return value.toLocaleString("en-IN");
  return escapeHtml(value);
}

function renderResultTable(container, result) {
  if (!result.columns.length) {
    container.innerHTML = "";
    return;
  }
  container.innerHTML = `<table><thead><tr>${result.columns.map(column => `<th>${escapeHtml(column)}</th>`).join("")}</tr></thead><tbody>${result.values.map(row => `<tr>${row.map((value, index) => `<td>${formatValue(result.columns[index], value)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
}

function refreshExplorer() {
  if (!db) return;
  const schema = execRows(`PRAGMA table_info(${activeTable});`);
  const nameIndex = schema.columns.indexOf("name");
  const typeIndex = schema.columns.indexOf("type");
  const pkIndex = schema.columns.indexOf("pk");
  $("#column-list").innerHTML = schema.values.map(row => `
    <div><span>${row[pkIndex] ? '<b>PK</b>' : '<i>•</i>'}${escapeHtml(row[nameIndex])}</span><small>${escapeHtml(row[typeIndex])}</small></div>`).join("");

  const preview = execRows(`SELECT * FROM ${activeTable};`);
  renderResultTable($("#free-data-preview"), preview);
  $("#preview-title").textContent = activeTable;
  $("#preview-count").textContent = `${preview.values.length} rows`;
  $("#grain-description").textContent = tableMeta[activeTable].grain;
  $$("#schema-tree button").forEach(button => button.classList.toggle("active", button.dataset.table === activeTable));
}

function updateLineNumbers() {
  const editor = $("#free-sql-editor");
  const count = Math.max(1, editor.value.split("\n").length);
  $("#free-line-numbers").textContent = Array.from({ length: count }, (_, i) => i + 1).join("\n");
  updateCursorPosition();
}

function updateCursorPosition() {
  const editor = $("#free-sql-editor");
  const before = editor.value.slice(0, editor.selectionStart).split("\n");
  $("#cursor-position").textContent = `Ln ${before.length}, Col ${before.at(-1).length + 1}`;
}

function addHistory(query, rowCount, success) {
  const normalized = query.trim();
  history = history.filter(item => item.query !== normalized);
  history.unshift({ query: normalized, rowCount, success, time: new Date().toISOString() });
  history = history.slice(0, 10);
  localStorage.setItem("sql-free-history", JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  const container = $("#query-history");
  if (!history.length) {
    container.innerHTML = '<p class="history-empty">Run a query and it will appear here.</p>';
    return;
  }
  container.innerHTML = history.map((item, index) => {
    const firstLine = item.query.replace(/\s+/g, " ");
    const time = new Date(item.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    return `<button data-history="${index}"><span>${escapeHtml(firstLine)}</span><small>${item.success ? `${item.rowCount} rows` : "error"} · ${time}</small></button>`;
  }).join("");
  $$("#query-history button").forEach(button => button.addEventListener("click", () => {
    $("#free-sql-editor").value = history[Number(button.dataset.history)].query;
    updateLineNumbers();
    showPanel("query-panel");
    $("#free-sql-editor").focus();
  }));
}

function showMessage(type, title, detail) {
  const message = $("#runner-message");
  message.className = `runner-message ${type}`;
  message.innerHTML = `<strong>${escapeHtml(title)}</strong><span>${escapeHtml(detail)}</span>`;
  message.hidden = false;
}

function hideMessage() {
  $("#runner-message").hidden = true;
}

function runQuery() {
  if (!db) return;
  const query = $("#free-sql-editor").value.trim();
  if (!query) {
    showMessage("error", "Nothing to run", "Write a SQL statement or choose a starter query.");
    return;
  }
  const started = performance.now();
  try {
    const results = db.exec(query);
    const elapsed = Math.max(1, Math.round(performance.now() - started));
    const modified = db.getRowsModified();
    lastResult = results.length ? results[results.length - 1] : { columns: [], values: [] };
    const rowCount = lastResult.values.length;
    $("#query-timing").textContent = `${elapsed} ms · ${results.length || 1} statement${results.length === 1 ? "" : "s"}`;
    hideMessage();

    if (lastResult.columns.length) {
      renderResultTable($("#free-result-table"), lastResult);
      $("#free-result-table").hidden = false;
      $("#empty-result").hidden = true;
      $("#result-summary").textContent = `${rowCount} row${rowCount === 1 ? "" : "s"} returned`;
      $("#copy-results").disabled = false;
    } else {
      $("#free-result-table").hidden = true;
      $("#empty-result").hidden = false;
      $("#empty-result strong").textContent = "Statement executed successfully.";
      $("#empty-result p").textContent = `${modified} row${modified === 1 ? "" : "s"} changed. Use Reset data to restore the sample database.`;
      $("#result-summary").textContent = `${modified} row${modified === 1 ? "" : "s"} changed`;
      $("#copy-results").disabled = true;
    }
    addHistory(query, rowCount, true);
    refreshExplorer();
  } catch (error) {
    const elapsed = Math.max(1, Math.round(performance.now() - started));
    $("#query-timing").textContent = `${elapsed} ms · failed`;
    showMessage("error", "SQL error", error.message);
    addHistory(query, 0, false);
  }
}

function simpleFormat(sql) {
  let output = sql.replace(/\s+/g, " ").trim();
  const keywords = /\b(UNION ALL|LEFT JOIN|RIGHT JOIN|INNER JOIN|GROUP BY|ORDER BY|SELECT|FROM|WHERE|JOIN|ON|HAVING|LIMIT|WITH|UNION|VALUES|SET)\b/gi;
  output = output.replace(keywords, match => `\n${match.toUpperCase()}`);
  output = output.replace(/^\n/, "").replace(/,\s*/g, ",\n  ");
  return output;
}

function resultToCsv(result) {
  const quote = value => {
    if (value === null) return "";
    const text = String(value).replaceAll('"', '""');
    return /[",\n]/.test(text) ? `"${text}"` : text;
  };
  return [result.columns.map(quote).join(","), ...result.values.map(row => row.map(quote).join(","))].join("\n");
}

function showPanel(panelId) {
  $$(".workspace-panel").forEach(panel => {
    const active = panel.id === panelId;
    panel.classList.toggle("active", active);
    panel.hidden = !active;
  });
  $$(".workspace-tabs button").forEach(button => button.setAttribute("aria-selected", String(button.dataset.panel === panelId)));
}

let toastTimer;
function toast(message) {
  clearTimeout(toastTimer);
  $("#toast").textContent = message;
  $("#toast").classList.add("show");
  toastTimer = setTimeout(() => $("#toast").classList.remove("show"), 2200);
}

async function initialize() {
  renderHistory();
  updateLineNumbers();

  try {
    SQL = await initSqlJs({ locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.13.0/${file}` });
    seedDatabase();
    $("#engine-state").classList.add("ready");
    $("#engine-state span").textContent = "SQL engine ready";
    $("#run-sql").disabled = false;
  } catch (error) {
    $("#engine-state").classList.add("failed");
    $("#engine-state span").textContent = "Engine unavailable";
    showMessage("error", "SQL engine could not start", error.message);
  }

  $$("#schema-tree button").forEach(button => button.addEventListener("click", () => {
    activeTable = button.dataset.table;
    refreshExplorer();
    showPanel("data-panel");
  }));
  $$(".workspace-tabs button").forEach(button => button.addEventListener("click", () => showPanel(button.dataset.panel)));
  $$(".example-strip button").forEach(button => button.addEventListener("click", () => {
    $("#free-sql-editor").value = examples[button.dataset.example];
    updateLineNumbers();
    $("#free-sql-editor").focus();
  }));

  const editor = $("#free-sql-editor");
  editor.addEventListener("input", updateLineNumbers);
  editor.addEventListener("click", updateCursorPosition);
  editor.addEventListener("keyup", updateCursorPosition);
  editor.addEventListener("keydown", event => {
    if (event.key === "Tab") {
      event.preventDefault();
      editor.setRangeText("  ", editor.selectionStart, editor.selectionEnd, "end");
      updateLineNumbers();
    }
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      runQuery();
    }
  });

  $("#run-sql").addEventListener("click", runQuery);
  $("#format-sql").addEventListener("click", () => {
    editor.value = simpleFormat(editor.value);
    updateLineNumbers();
    toast("Query formatted.");
  });
  $("#clear-editor").addEventListener("click", () => {
    editor.value = "";
    updateLineNumbers();
    editor.focus();
  });
  $("#reset-database").addEventListener("click", () => {
    seedDatabase();
    toast("Sample database restored.");
  });
  $("#clear-history").addEventListener("click", () => {
    history = [];
    localStorage.removeItem("sql-free-history");
    renderHistory();
    toast("Query history cleared.");
  });
  $("#copy-results").addEventListener("click", async () => {
    if (!lastResult) return;
    await navigator.clipboard.writeText(resultToCsv(lastResult));
    toast("Result copied as CSV.");
  });
}

initialize();
