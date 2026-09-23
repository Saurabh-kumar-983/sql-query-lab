const datasets = {
  equipment: [
    { equipment_id: "EQ-101", equipment_name: "Hydraulic Excavator", model: "HX220", site: "Durgapur", total_hmr: 12840, status: "Active" },
    { equipment_id: "EQ-102", equipment_name: "Hydraulic Excavator", model: "PC210", site: "Durgapur", total_hmr: 9740, status: "Maintenance" },
    { equipment_id: "EQ-103", equipment_name: "Surface Miner", model: "SM2200", site: "Durgapur", total_hmr: 8350, status: "Active" },
    { equipment_id: "EQ-201", equipment_name: "Dozer", model: "D8T", site: "Dhanbad", total_hmr: 11210, status: "Active" },
    { equipment_id: "EQ-202", equipment_name: "Wheel Loader", model: "L120", site: "Dhanbad", total_hmr: 6860, status: "Active" },
    { equipment_id: "EQ-301", equipment_name: "Motor Grader", model: "140K", site: "Odisha", total_hmr: 7990, status: "Active" },
    { equipment_id: "EQ-302", equipment_name: "Dump Truck", model: "HD785", site: "Odisha", total_hmr: 14550, status: "Maintenance" },
    { equipment_id: "EQ-303", equipment_name: "Wheel Loader", model: "WA470", site: "Odisha", total_hmr: 6200, status: "Active" }
  ],
  maintenance_orders: [
    { order_id: "WO-1001", equipment_id: "EQ-101", order_date: "2026-04-08", maintenance_type: "Preventive", downtime_hrs: 4, cost_inr: 18500, status: "Closed" },
    { order_id: "WO-1002", equipment_id: "EQ-102", order_date: "2026-04-18", maintenance_type: "Corrective", downtime_hrs: 18, cost_inr: 92000, status: "Closed" },
    { order_id: "WO-1003", equipment_id: "EQ-201", order_date: "2026-05-02", maintenance_type: "Preventive", downtime_hrs: 5, cost_inr: 24000, status: "Closed" },
    { order_id: "WO-1004", equipment_id: "EQ-202", order_date: "2026-05-16", maintenance_type: "Inspection", downtime_hrs: 2, cost_inr: 6500, status: "Closed" },
    { order_id: "WO-1005", equipment_id: "EQ-301", order_date: "2026-05-28", maintenance_type: "Corrective", downtime_hrs: 11, cost_inr: 58000, status: "Closed" },
    { order_id: "WO-1006", equipment_id: "EQ-302", order_date: "2026-06-04", maintenance_type: "Preventive", downtime_hrs: 6, cost_inr: 31500, status: "Closed" },
    { order_id: "WO-1007", equipment_id: "EQ-101", order_date: "2026-06-12", maintenance_type: "Corrective", downtime_hrs: 9, cost_inr: 48000, status: "Closed" },
    { order_id: "WO-1008", equipment_id: "EQ-103", order_date: "2026-06-21", maintenance_type: "Preventive", downtime_hrs: 7, cost_inr: 27000, status: "Closed" },
    { order_id: "WO-1009", equipment_id: "EQ-102", order_date: "2026-07-03", maintenance_type: "Corrective", downtime_hrs: 22, cost_inr: 125000, status: "In Progress" },
    { order_id: "WO-1010", equipment_id: "EQ-302", order_date: "2026-07-09", maintenance_type: "Corrective", downtime_hrs: 26, cost_inr: 148000, status: "Open" },
    { order_id: "WO-1011", equipment_id: "EQ-103", order_date: "2026-07-12", maintenance_type: "Corrective", downtime_hrs: 8, cost_inr: 44000, status: "Open" },
    { order_id: "WO-1012", equipment_id: "EQ-201", order_date: "2026-07-18", maintenance_type: "Inspection", downtime_hrs: 3, cost_inr: 8500, status: "Closed" }
  ],
  spare_part_usage: [
    { usage_id: "SU-01", order_id: "WO-1001", material: "Engine Oil", category: "Lubricant", quantity: 20, unit_cost: 380 },
    { usage_id: "SU-02", order_id: "WO-1001", material: "Oil Filter", category: "Filter", quantity: 1, unit_cost: 2800 },
    { usage_id: "SU-03", order_id: "WO-1002", material: "Hydraulic Pump", category: "Spares", quantity: 1, unit_cost: 68000 },
    { usage_id: "SU-04", order_id: "WO-1002", material: "Hydraulic Oil", category: "Lubricant", quantity: 40, unit_cost: 420 },
    { usage_id: "SU-05", order_id: "WO-1003", material: "Transmission Oil", category: "Lubricant", quantity: 25, unit_cost: 460 },
    { usage_id: "SU-06", order_id: "WO-1003", material: "Fuel Filter", category: "Filter", quantity: 2, unit_cost: 1600 },
    { usage_id: "SU-07", order_id: "WO-1005", material: "Grader Blade", category: "GET & UC", quantity: 1, unit_cost: 22000 },
    { usage_id: "SU-08", order_id: "WO-1005", material: "Hydraulic Hose", category: "Spares", quantity: 3, unit_cost: 4500 },
    { usage_id: "SU-09", order_id: "WO-1006", material: "Engine Oil", category: "Lubricant", quantity: 30, unit_cost: 380 },
    { usage_id: "SU-10", order_id: "WO-1007", material: "Boom Seal Kit", category: "Spares", quantity: 1, unit_cost: 18500 },
    { usage_id: "SU-11", order_id: "WO-1007", material: "Hydraulic Oil", category: "Lubricant", quantity: 35, unit_cost: 420 },
    { usage_id: "SU-12", order_id: "WO-1008", material: "Cutting Tool", category: "GET & UC", quantity: 6, unit_cost: 2100 },
    { usage_id: "SU-13", order_id: "WO-1009", material: "Hydraulic Cylinder", category: "Spares", quantity: 1, unit_cost: 72000 },
    { usage_id: "SU-14", order_id: "WO-1010", material: "Brake Assembly", category: "Spares", quantity: 2, unit_cost: 36000 },
    { usage_id: "SU-15", order_id: "WO-1010", material: "Tyre 27.00R49", category: "TTF", quantity: 2, unit_cost: 95000 },
    { usage_id: "SU-16", order_id: "WO-1011", material: "Control Valve", category: "Spares", quantity: 1, unit_cost: 28500 }
  ]
};

const challenges = [
  {
    title: "Above the fleet average",
    level: "Foundation",
    pattern: "Scalar subquery",
    scenario: "Operations wants a quick list of high-hour equipment for condition-review planning.",
    task: "Return equipment whose total_hmr is greater than the average total_hmr of the full fleet. Sort highest HMR first.",
    requirements: ["Output: equipment_id, equipment_name, total_hmr", "Use a subquery in WHERE", "Sort descending"],
    hints: ["First write a subquery that returns one value: AVG(total_hmr).", "Compare each outer row with that scalar result inside the WHERE clause."],
    checks: [
      { test: q => /select[\s\S]*equipment_id[\s\S]*equipment_name[\s\S]*total_hmr/i.test(q), message: "Select equipment_id, equipment_name, and total_hmr." },
      { test: q => /where[\s\S]*total_hmr\s*>\s*\([\s\S]*avg\s*\(\s*total_hmr\s*\)[\s\S]*from\s+equipment[\s\S]*\)/i.test(q), message: "Use a scalar AVG(total_hmr) subquery in WHERE." },
      { test: q => /order\s+by[\s\S]*total_hmr[\s\S]*desc/i.test(q), message: "Sort total_hmr in descending order." }
    ],
    solution: `SELECT
  equipment_id,
  equipment_name,
  total_hmr
FROM equipment
WHERE total_hmr > (
  SELECT AVG(total_hmr)
  FROM equipment
)
ORDER BY total_hmr DESC;`,
    output: [
      { equipment_id: "EQ-302", equipment_name: "Dump Truck", total_hmr: 14550 },
      { equipment_id: "EQ-101", equipment_name: "Hydraulic Excavator", total_hmr: 12840 },
      { equipment_id: "EQ-201", equipment_name: "Dozer", total_hmr: 11210 },
      { equipment_id: "EQ-102", equipment_name: "Hydraulic Excavator", total_hmr: 9740 }
    ],
    note: "The inner query produces one fleet-level benchmark. The outer query keeps row-level detail while comparing each equipment record with that single value."
  },
  {
    title: "Open corrective risk",
    level: "Foundation",
    pattern: "EXISTS",
    scenario: "The maintenance lead needs every asset currently exposed to an unresolved corrective job—without duplicate equipment rows.",
    task: "Return equipment with at least one Corrective maintenance order whose status is Open or In Progress. Sort by equipment_id.",
    requirements: ["Output: equipment_id, equipment_name, site", "Use EXISTS", "Correlate on equipment_id"],
    hints: ["EXISTS answers a yes/no question; do not select columns from the subquery for display.", "Correlate maintenance_orders to the current equipment row with mo.equipment_id = e.equipment_id."],
    checks: [
      { test: q => /\bexists\s*\(/i.test(q), message: "Use EXISTS for the yes/no relationship test." },
      { test: q => /mo\.equipment_id\s*=\s*e\.equipment_id|e\.equipment_id\s*=\s*mo\.equipment_id/i.test(q), message: "Correlate the inner and outer queries on equipment_id using aliases e and mo." },
      { test: q => /maintenance_type\s*=\s*'corrective'/i.test(q), message: "Filter the inner query to Corrective orders." },
      { test: q => /status\s+in\s*\(\s*'open'\s*,\s*'in progress'\s*\)|status\s+in\s*\(\s*'in progress'\s*,\s*'open'\s*\)/i.test(q), message: "Limit status to Open and In Progress with IN (...)." }
    ],
    solution: `SELECT
  e.equipment_id,
  e.equipment_name,
  e.site
FROM equipment AS e
WHERE EXISTS (
  SELECT 1
  FROM maintenance_orders AS mo
  WHERE mo.equipment_id = e.equipment_id
    AND mo.maintenance_type = 'Corrective'
    AND mo.status IN ('Open', 'In Progress')
)
ORDER BY e.equipment_id;`,
    output: [
      { equipment_id: "EQ-102", equipment_name: "Hydraulic Excavator", site: "Durgapur" },
      { equipment_id: "EQ-103", equipment_name: "Surface Miner", site: "Durgapur" },
      { equipment_id: "EQ-302", equipment_name: "Dump Truck", site: "Odisha" }
    ],
    note: "EXISTS avoids multiplying equipment rows when an asset has several matching orders. The database can stop searching as soon as the first match is found."
  },
  {
    title: "Never maintained",
    level: "Foundation",
    pattern: "NOT EXISTS",
    scenario: "A data-quality review suspects that one active asset has never entered the maintenance workflow.",
    task: "Find Active equipment for which no maintenance order exists. Return the asset identity and site.",
    requirements: ["Output: equipment_id, equipment_name, site", "Use NOT EXISTS", "Filter Active assets"],
    hints: ["Start from equipment because that is the population you must preserve.", "Use NOT EXISTS with a correlated order lookup; avoid NOT IN because nullable keys can create surprises."],
    checks: [
      { test: q => /not\s+exists\s*\(/i.test(q), message: "Use NOT EXISTS to express the anti-join." },
      { test: q => /mo\.equipment_id\s*=\s*e\.equipment_id|e\.equipment_id\s*=\s*mo\.equipment_id/i.test(q), message: "Correlate maintenance_orders to equipment on equipment_id." },
      { test: q => /e\.status\s*=\s*'active'|status\s*=\s*'active'/i.test(q), message: "Restrict the outer population to Active equipment." }
    ],
    solution: `SELECT
  e.equipment_id,
  e.equipment_name,
  e.site
FROM equipment AS e
WHERE e.status = 'Active'
  AND NOT EXISTS (
    SELECT 1
    FROM maintenance_orders AS mo
    WHERE mo.equipment_id = e.equipment_id
  );`,
    output: [
      { equipment_id: "EQ-303", equipment_name: "Wheel Loader", site: "Odisha" }
    ],
    note: "This is an anti-join: begin with the complete equipment population, then exclude any row for which a related order can be found."
  },
  {
    title: "Unusually expensive orders",
    level: "Intermediate",
    pattern: "Correlated subquery",
    scenario: "Finance wants exceptions, not just costly orders: flag jobs that are expensive relative to the same asset’s own history.",
    task: "Return each maintenance order whose cost_inr is above the average order cost for that same equipment_id. Sort highest cost first.",
    requirements: ["Output: order_id, equipment_id, cost_inr", "Correlated AVG subquery", "Sort descending"],
    hints: ["The benchmark changes for every outer order, so correlate the subquery by equipment_id.", "Compare mo.cost_inr with AVG(mo2.cost_inr) where mo2.equipment_id = mo.equipment_id."],
    checks: [
      { test: q => /avg\s*\(\s*mo2\.cost_inr\s*\)/i.test(q), message: "Calculate AVG(mo2.cost_inr) in the inner query." },
      { test: q => /mo2\.equipment_id\s*=\s*mo\.equipment_id|mo\.equipment_id\s*=\s*mo2\.equipment_id/i.test(q), message: "Correlate the benchmark to the current order's equipment_id." },
      { test: q => /mo\.cost_inr\s*>\s*\(/i.test(q), message: "Compare each outer order cost with the correlated subquery." },
      { test: q => /order\s+by[\s\S]*cost_inr[\s\S]*desc/i.test(q), message: "Sort cost_inr descending." }
    ],
    solution: `SELECT
  mo.order_id,
  mo.equipment_id,
  mo.cost_inr
FROM maintenance_orders AS mo
WHERE mo.cost_inr > (
  SELECT AVG(mo2.cost_inr)
  FROM maintenance_orders AS mo2
  WHERE mo2.equipment_id = mo.equipment_id
)
ORDER BY mo.cost_inr DESC;`,
    output: [
      { order_id: "WO-1010", equipment_id: "EQ-302", cost_inr: 148000 },
      { order_id: "WO-1009", equipment_id: "EQ-102", cost_inr: 125000 },
      { order_id: "WO-1007", equipment_id: "EQ-101", cost_inr: 48000 },
      { order_id: "WO-1011", equipment_id: "EQ-103", cost_inr: 44000 },
      { order_id: "WO-1003", equipment_id: "EQ-201", cost_inr: 24000 }
    ],
    note: "Correlation creates a context-specific benchmark. An order is compared with its asset’s history, not with a potentially misleading fleet-wide average."
  },
  {
    title: "Q2 site performance",
    level: "Intermediate",
    pattern: "Filter + aggregate CTEs",
    scenario: "Leadership needs a clean Q2 view of completed maintenance impact by operating site.",
    task: "Use at least two CTEs: first isolate Closed Q2 2026 orders, then aggregate order_count, total_downtime_hrs, and total_cost_inr by site. Sort by total cost descending.",
    requirements: ["At least 2 named CTEs", "2026-04-01 ≤ date < 2026-07-01", "Closed orders only"],
    hints: ["Build filtered_orders first, with only the Q2 Closed rows you need.", "Join that smaller set to equipment in a second CTE, aggregate to site grain, then select from it."],
    checks: [
      { test: q => /with\s+\w+\s+as\s*\([\s\S]*\)\s*,\s*\w+\s+as\s*\(/i.test(q), message: "Define at least two named CTEs separated by a comma." },
      { test: q => /order_date\s*>=\s*'2026-04-01'/i.test(q) && /order_date\s*<\s*'2026-07-01'/i.test(q), message: "Use an inclusive lower bound and exclusive upper bound for Q2." },
      { test: q => /status\s*=\s*'closed'/i.test(q), message: "Limit the base CTE to Closed orders." },
      { test: q => /count\s*\([\s\S]*order_id[\s\S]*\)/i.test(q) && /sum\s*\([\s\S]*downtime_hrs[\s\S]*\)/i.test(q) && /sum\s*\([\s\S]*cost_inr[\s\S]*\)/i.test(q), message: "Calculate order count, downtime, and cost aggregates." }
    ],
    solution: `WITH filtered_orders AS (
  SELECT order_id, equipment_id, downtime_hrs, cost_inr
  FROM maintenance_orders
  WHERE status = 'Closed'
    AND order_date >= '2026-04-01'
    AND order_date < '2026-07-01'
),
site_summary AS (
  SELECT
    e.site,
    COUNT(fo.order_id) AS order_count,
    SUM(fo.downtime_hrs) AS total_downtime_hrs,
    SUM(fo.cost_inr) AS total_cost_inr
  FROM filtered_orders AS fo
  JOIN equipment AS e
    ON e.equipment_id = fo.equipment_id
  GROUP BY e.site
)
SELECT *
FROM site_summary
ORDER BY total_cost_inr DESC;`,
    output: [
      { site: "Durgapur", order_count: 4, total_downtime_hrs: 38, total_cost_inr: 185500 },
      { site: "Odisha", order_count: 2, total_downtime_hrs: 17, total_cost_inr: 89500 },
      { site: "Dhanbad", order_count: 2, total_downtime_hrs: 7, total_cost_inr: 30500 }
    ],
    note: "Each CTE has one job: filter at order grain, then summarize at site grain. That makes business rules testable before presentation logic is applied."
  },
  {
    title: "Above-average asset spend",
    level: "Advanced",
    pattern: "Multi-stage CTEs",
    scenario: "The reliability manager wants assets whose cumulative maintenance spend is above the average across the entire registered fleet, including assets with no orders.",
    task: "Build three logical stages: total cost per equipment (preserve all equipment), fleet average of those totals, then return equipment above that average.",
    requirements: ["Use LEFT JOIN", "COALESCE missing cost to 0", "At least 2 CTEs + final query"],
    hints: ["Start from equipment and LEFT JOIN orders so EQ-303 remains in the benchmark population.", "Create equipment_costs, calculate fleet_avg from it, then CROSS JOIN or scalar-reference the one-row benchmark."],
    checks: [
      { test: q => /left\s+join\s+maintenance_orders/i.test(q), message: "Use LEFT JOIN so equipment with no orders stays in the population." },
      { test: q => /coalesce\s*\(\s*sum\s*\([\s\S]*cost_inr[\s\S]*\)\s*,\s*0\s*\)/i.test(q), message: "COALESCE the summed cost to zero." },
      { test: q => /with\s+[\s\S]*as\s*\([\s\S]*\)\s*,[\s\S]*as\s*\(/i.test(q), message: "Use named CTE stages for equipment totals and fleet average." },
      { test: q => /avg\s*\(\s*total_cost_inr\s*\)/i.test(q), message: "Average the already-aggregated equipment totals." }
    ],
    solution: `WITH equipment_costs AS (
  SELECT
    e.equipment_id,
    e.equipment_name,
    COALESCE(SUM(mo.cost_inr), 0) AS total_cost_inr
  FROM equipment AS e
  LEFT JOIN maintenance_orders AS mo
    ON mo.equipment_id = e.equipment_id
  GROUP BY e.equipment_id, e.equipment_name
),
fleet_average AS (
  SELECT AVG(total_cost_inr) AS avg_cost_inr
  FROM equipment_costs
)
SELECT
  ec.equipment_id,
  ec.equipment_name,
  ec.total_cost_inr
FROM equipment_costs AS ec
CROSS JOIN fleet_average AS fa
WHERE ec.total_cost_inr > fa.avg_cost_inr
ORDER BY ec.total_cost_inr DESC;`,
    output: [
      { equipment_id: "EQ-102", equipment_name: "Hydraulic Excavator", total_cost_inr: 217000 },
      { equipment_id: "EQ-302", equipment_name: "Dump Truck", total_cost_inr: 179500 }
    ],
    note: "The benchmark is calculated after every registered asset has one total-cost row. Preserving zero-order equipment prevents survivorship bias in the fleet average."
  },
  {
    title: "Most expensive closed job per site",
    level: "Advanced",
    pattern: "CTE + ROW_NUMBER",
    scenario: "Regional managers need one auditable example: the highest-cost completed work order at each site.",
    task: "Join orders to equipment, rank Closed orders inside each site by cost_inr descending, and return rank 1. Break cost ties by latest order_date.",
    requirements: ["ROW_NUMBER()", "PARTITION BY site", "Filter rn = 1 outside the window query"],
    hints: ["Window functions do not reduce rows, so calculate rn in a CTE.", "Use PARTITION BY e.site ORDER BY mo.cost_inr DESC, mo.order_date DESC."],
    checks: [
      { test: q => /row_number\s*\(\s*\)\s*over\s*\(/i.test(q), message: "Use ROW_NUMBER() OVER (...)." },
      { test: q => /partition\s+by\s+e?\.?site/i.test(q), message: "Partition the ranking by site." },
      { test: q => /order\s+by\s+mo\.cost_inr\s+desc\s*,\s*mo\.order_date\s+desc/i.test(q), message: "Rank by cost descending and use latest order_date as the tie-breaker." },
      { test: q => /where\s+(?:\w+\.)?rn\s*=\s*1/i.test(q), message: "Filter rn = 1 in the outer query." }
    ],
    solution: `WITH ranked_orders AS (
  SELECT
    e.site,
    mo.order_id,
    mo.equipment_id,
    mo.cost_inr,
    ROW_NUMBER() OVER (
      PARTITION BY e.site
      ORDER BY mo.cost_inr DESC, mo.order_date DESC
    ) AS rn
  FROM maintenance_orders AS mo
  JOIN equipment AS e
    ON e.equipment_id = mo.equipment_id
  WHERE mo.status = 'Closed'
)
SELECT site, order_id, equipment_id, cost_inr
FROM ranked_orders
WHERE rn = 1
ORDER BY site;`,
    output: [
      { site: "Dhanbad", order_id: "WO-1003", equipment_id: "EQ-201", cost_inr: 24000 },
      { site: "Durgapur", order_id: "WO-1002", equipment_id: "EQ-102", cost_inr: 92000 },
      { site: "Odisha", order_id: "WO-1005", equipment_id: "EQ-301", cost_inr: 58000 }
    ],
    note: "Ranking keeps the complete candidate set visible and makes tie-breaking explicit. Filtering rn outside the CTE cleanly separates calculation from selection."
  },
  {
    title: "Stop the one-to-many fan-out",
    level: "Expert",
    pattern: "Pre-aggregate, then join",
    scenario: "A dashboard query joins orders directly to part usage. Orders with multiple parts duplicate downtime hours and inflate site totals.",
    task: "Return each site's distinct order_count, correct total_downtime_hrs, and total_parts_spend. First aggregate parts to one row per order, then join at compatible grain.",
    requirements: ["Part spend = quantity × unit_cost", "Aggregate usage by order_id first", "Preserve orders without parts"],
    hints: ["Your first CTE should make spare_part_usage one row per order_id.", "LEFT JOIN that order-level result to maintenance_orders; after that, summing downtime is safe."],
    checks: [
      { test: q => /sum\s*\(\s*quantity\s*\*\s*unit_cost\s*\)/i.test(q), message: "Calculate parts spend as SUM(quantity * unit_cost)." },
      { test: q => /group\s+by\s+order_id/i.test(q), message: "Aggregate spare-part usage to order_id grain before joining." },
      { test: q => /left\s+join\s+\w+[\s\S]*order_id/i.test(q), message: "LEFT JOIN the order-level parts CTE so orders without usage are preserved." },
      { test: q => /count\s*\(\s*(?:distinct\s+)?(?:mo\.)?order_id\s*\)/i.test(q) && /sum\s*\(\s*(?:mo\.)?downtime_hrs\s*\)/i.test(q), message: "Return order_count and summed downtime at site grain." }
    ],
    solution: `WITH parts_by_order AS (
  SELECT
    order_id,
    SUM(quantity * unit_cost) AS parts_spend
  FROM spare_part_usage
  GROUP BY order_id
),
order_facts AS (
  SELECT
    mo.order_id,
    mo.equipment_id,
    mo.downtime_hrs,
    COALESCE(pbo.parts_spend, 0) AS parts_spend
  FROM maintenance_orders AS mo
  LEFT JOIN parts_by_order AS pbo
    ON pbo.order_id = mo.order_id
)
SELECT
  e.site,
  COUNT(ofc.order_id) AS order_count,
  SUM(ofc.downtime_hrs) AS total_downtime_hrs,
  SUM(ofc.parts_spend) AS total_parts_spend
FROM order_facts AS ofc
JOIN equipment AS e
  ON e.equipment_id = ofc.equipment_id
GROUP BY e.site
ORDER BY total_parts_spend DESC;`,
    output: [
      { site: "Odisha", order_count: 3, total_downtime_hrs: 43, total_parts_spend: 308900 },
      { site: "Durgapur", order_count: 6, total_downtime_hrs: 68, total_parts_spend: 241500 },
      { site: "Dhanbad", order_count: 3, total_downtime_hrs: 10, total_parts_spend: 14700 }
    ],
    note: "Pre-aggregating the many-side restores one row per order before downtime is summed. Matching grains is the reliable fix; DISTINCT is not a substitute for query design."
  }
];

if (Array.isArray(window.SQL_CHALLENGE_BANK) && window.SQL_CHALLENGE_BANK.length) {
  challenges.splice(0, challenges.length, ...window.SQL_CHALLENGE_BANK);
}

const state = {
  table: "equipment",
  sortKey: null,
  sortDirection: 1,
  challenge: 0,
  activeLevel: "Beginner",
  challengeSearch: "",
  hintIndex: -1,
  completed: new Set(JSON.parse(localStorage.getItem("sql-lab-completed-120") || "[]")),
  drafts: JSON.parse(localStorage.getItem("sql-lab-drafts-120") || "{}")
};

let guidedDb = null;

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const formatCell = (key, value) => {
  if (value === null || value === undefined) return '<span class="null">NULL</span>';
  if (/(cost|spend)/i.test(key) && typeof value === "number") return `₹${value.toLocaleString("en-IN")}`;
  if (typeof value === "number") return value.toLocaleString("en-IN");
  return String(value);
};

function renderTable(container, rows, sortable = false) {
  if (!rows.length) {
    container.innerHTML = '<div style="padding:2rem;color:var(--faint);text-align:center">No rows match this filter.</div>';
    return;
  }
  const headers = Object.keys(rows[0]);
  container.innerHTML = `<table><thead><tr>${headers.map(key => `<th ${sortable ? `data-key="${key}" tabindex="0"` : ""}>${key}${sortable && state.sortKey === key ? (state.sortDirection === 1 ? " ↑" : " ↓") : ""}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr>${headers.map(key => `<td>${formatCell(key, row[key])}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
}

function renderDataset() {
  const search = $("#table-search").value.trim().toLowerCase();
  let rows = datasets[state.table].filter(row => Object.values(row).some(value => String(value).toLowerCase().includes(search)));
  if (state.sortKey) {
    rows = [...rows].sort((a, b) => {
      if (a[state.sortKey] === b[state.sortKey]) return 0;
      return (a[state.sortKey] > b[state.sortKey] ? 1 : -1) * state.sortDirection;
    });
  }
  renderTable($("#data-table"), rows, true);
  $("#row-count").textContent = `${rows.length} of ${datasets[state.table].length} rows`;
  $$("#data-table th[data-key]").forEach(th => {
    const sort = () => {
      const key = th.dataset.key;
      state.sortDirection = state.sortKey === key ? state.sortDirection * -1 : 1;
      state.sortKey = key;
      renderDataset();
    };
    th.addEventListener("click", sort);
    th.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") sort(); });
  });
}

function saveDraft() {
  state.drafts[state.challenge] = $("#sql-editor").value;
  localStorage.setItem("sql-lab-drafts-120", JSON.stringify(state.drafts));
}

function renderChallengeList() {
  const search = state.challengeSearch.trim().toLowerCase();
  const visible = challenges.map((challenge, index) => ({ challenge, index })).filter(({ challenge }) => {
    const levelMatch = challenge.level === state.activeLevel;
    const searchMatch = !search || `${challenge.title} ${challenge.pattern} ${challenge.task}`.toLowerCase().includes(search);
    return levelMatch && searchMatch;
  });
  $("#challenge-list").innerHTML = visible.length ? visible.map(({ challenge, index }) => `
    <li><button data-index="${index}" class="${index === state.challenge ? "active" : ""} ${state.completed.has(index) ? "complete" : ""}" ${index === state.challenge ? 'aria-current="step"' : ""}>
      <span class="nav-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="nav-title">${challenge.title}</span>
      <span class="nav-state">✓</span>
    </button></li>`).join("") : '<li class="no-challenges">No challenges match this search.</li>';
  $$("#challenge-list button").forEach(button => button.addEventListener("click", () => loadChallenge(Number(button.dataset.index))));
}

function updateProgress() {
  const count = state.completed.size;
  $("#progress-label").textContent = `${count} / ${challenges.length} complete`;
  $("#progress-bar").style.width = `${count / challenges.length * 100}%`;
  localStorage.setItem("sql-lab-completed-120", JSON.stringify([...state.completed]));
}

function updateLineNumbers() {
  const lines = Math.max(1, $("#sql-editor").value.split("\n").length);
  $("#line-numbers").textContent = Array.from({ length: lines }, (_, i) => i + 1).join("\n");
}

function tablesUsedBy(query) {
  return ["equipment", "maintenance_orders", "spare_part_usage"]
    .filter(table => new RegExp(`\\b${table}\\b`, "i").test(query));
}

function renderChallengeBrief(challenge) {
  $("#challenge-scenario").textContent = challenge.scenario;
  $("#challenge-task").textContent = challenge.task;
  const tables = tablesUsedBy(challenge.solution);
  const requirements = [
    `Result grain: ${challenge.grain || "one row per qualifying record"}`,
    `Tables to use: ${tables.join(", ")}`,
    ...challenge.requirements
  ];
  $("#challenge-requirements").innerHTML = requirements.map(item => `<li>${item}</li>`).join("");

  const summary = $("#challenge-output-summary");
  const columns = $("#challenge-output-columns");
  if (!guidedDb) {
    summary.textContent = `Build ${challenge.grain || "the requested result"}. Exact columns will appear when the SQL engine is ready.`;
    columns.innerHTML = "";
    return;
  }

  try {
    const expected = executeSql(challenge.solution);
    const rowWord = expected.values.length === 1 ? "row" : "rows";
    const columnWord = expected.columns.length === 1 ? "column" : "columns";
    summary.textContent = `${expected.values.length} ${rowWord} × ${expected.columns.length} ${columnWord}. Result grain: ${challenge.grain || "one row per qualifying record"}.`;
    columns.innerHTML = expected.columns.map(column => `<code>${column}</code>`).join("");
  } catch (error) {
    summary.textContent = `Build ${challenge.grain || "the requested result"} using the columns named in the task.`;
    columns.innerHTML = "";
  }
}

function loadChallenge(index) {
  saveDraft();
  state.challenge = Math.max(0, Math.min(challenges.length - 1, index));
  state.hintIndex = -1;
  const challenge = challenges[state.challenge];
  state.activeLevel = challenge.level;
  $("#challenge-number").textContent = `Challenge ${String(state.challenge + 1).padStart(2, "0")}`;
  $("#challenge-level").textContent = challenge.level;
  $("#challenge-level").dataset.level = challenge.level;
  $("#challenge-pattern").textContent = challenge.pattern;
  $("#challenge-name").textContent = challenge.title;
  renderChallengeBrief(challenge);
  $("#sql-editor").value = state.drafts[state.challenge] || "";
  $("#feedback").hidden = true;
  $("#hint-panel").hidden = true;
  $("#output-card").hidden = true;
  $("#show-hint").textContent = "Show hint";
  $("#previous-challenge").disabled = state.challenge === 0;
  $("#next-challenge").disabled = state.challenge === challenges.length - 1;
  const levelChallenges = challenges.filter(item => item.level === challenge.level);
  const levelPosition = levelChallenges.indexOf(challenge) + 1;
  $("#pagination-label").textContent = `${state.challenge + 1} of ${challenges.length} · ${challenge.level} ${levelPosition}/30`;
  $$("#level-tabs button").forEach(button => button.setAttribute("aria-selected", String(button.dataset.level === state.activeLevel)));
  updateLineNumbers();
  renderChallengeList();
}

function executeSql(query) {
  if (!guidedDb) throw new Error("The SQL engine is still loading.");
  const resultSets = guidedDb.exec(query);
  return resultSets.length ? resultSets[resultSets.length - 1] : { columns: [], values: [] };
}

function resultRows(result) {
  return result.values.map(row => Object.fromEntries(result.columns.map((column, index) => [column, row[index]])));
}

function normalizedValues(result) {
  return result.values.map(row => row.map(value => typeof value === "number" ? Number(value.toFixed(8)) : value));
}

function showOutput() {
  const challenge = challenges[state.challenge];
  let result;
  try {
    result = executeSql(challenge.solution);
  } catch (error) {
    const feedback = $("#feedback");
    feedback.className = "feedback error";
    feedback.innerHTML = `<strong>Reference query error.</strong>${error.message}`;
    feedback.hidden = false;
    return;
  }
  const output = resultRows(result);
  $("#output-title").textContent = challenge.title;
  $("#output-count").textContent = `${output.length} row${output.length === 1 ? "" : "s"}`;
  renderTable($("#output-table"), output);
  $("#design-note").textContent = challenge.note;
  $("#output-card").hidden = false;
  requestAnimationFrame(() => $("#output-card").scrollIntoView({ behavior: "smooth", block: "nearest" }));
}

function normalizeQuery(query) {
  return query.replace(/--.*$/gm, " ").replace(/\/\*[\s\S]*?\*\//g, " ").replace(/\s+/g, " ").trim().toLowerCase();
}

function checkQuery() {
  saveDraft();
  const query = normalizeQuery($("#sql-editor").value);
  const feedback = $("#feedback");
  if (!query) {
    feedback.className = "feedback error";
    feedback.innerHTML = "<strong>The editor is empty.</strong>Write an approach first, or use a hint to get started.";
    feedback.hidden = false;
    return;
  }
  const challenge = challenges[state.challenge];
  if (/\b(insert|update|delete|drop|alter|create|replace|pragma|attach|detach|vacuum)\b/i.test(query) || !/^(select|with)\b/i.test(query)) {
    feedback.className = "feedback error";
    feedback.innerHTML = "<strong>Read-only challenge.</strong>Use a SELECT or WITH query. Data-changing statements belong in Free Practice.";
    feedback.hidden = false;
    return;
  }
  try {
    const actual = executeSql($("#sql-editor").value);
    const expected = executeSql(challenge.solution);
    const sameShape = actual.columns.length === expected.columns.length && actual.values.length === expected.values.length;
    const sameValues = JSON.stringify(normalizedValues(actual)) === JSON.stringify(normalizedValues(expected));
    if (!sameShape || !sameValues) {
      feedback.className = "feedback error";
      feedback.innerHTML = `<strong>Query ran, but the result differs.</strong>Expected ${expected.values.length} rows and ${expected.columns.length} columns; your query returned ${actual.values.length} rows and ${actual.columns.length} columns. Check filters, grain, grouping, and ordering.`;
      feedback.hidden = false;
      return;
    }
  } catch (error) {
    feedback.className = "feedback error";
    feedback.innerHTML = `<strong>SQL error.</strong>${error.message}`;
    feedback.hidden = false;
    return;
  }
  state.completed.add(state.challenge);
  updateProgress();
  renderChallengeList();
  feedback.className = "feedback success";
  feedback.innerHTML = "<strong>Correct result.</strong>Your query matches the expected row set, column count, and ordering.";
  feedback.hidden = false;
  showOutput();
}

function showHint() {
  const challenge = challenges[state.challenge];
  state.hintIndex = Math.min(state.hintIndex + 1, challenge.hints.length - 1);
  $("#hint-panel").innerHTML = `<strong>HINT ${state.hintIndex + 1} OF ${challenge.hints.length}</strong>${challenge.hints[state.hintIndex]}`;
  $("#hint-panel").hidden = false;
  $("#show-hint").textContent = state.hintIndex === challenge.hints.length - 1 ? "Last hint shown" : "Next hint";
}

function revealQuery() {
  const challenge = challenges[state.challenge];
  $("#sql-editor").value = challenge.solution;
  updateLineNumbers();
  saveDraft();
  const feedback = $("#feedback");
  feedback.className = "feedback success";
  feedback.innerHTML = "<strong>Reference query revealed.</strong>Read it from the innermost grain outward, then compare it with your original approach.";
  feedback.hidden = false;
  showOutput();
}

let toastTimer;
function toast(message) {
  clearTimeout(toastTimer);
  $("#toast").textContent = message;
  $("#toast").classList.add("show");
  toastTimer = setTimeout(() => $("#toast").classList.remove("show"), 2200);
}

function initialize() {
  $("#check-query").disabled = true;
  $("#reveal-query").disabled = true;
  $("#check-query").innerHTML = 'Loading SQL… <span aria-hidden="true">◌</span>';
  renderDataset();
  loadChallenge(0);
  updateProgress();

  $$("#level-tabs button").forEach(button => button.addEventListener("click", () => {
    state.activeLevel = button.dataset.level;
    state.challengeSearch = "";
    $("#challenge-search").value = "";
    const firstIndex = challenges.findIndex(challenge => challenge.level === state.activeLevel);
    loadChallenge(firstIndex);
  }));
  $("#challenge-search").addEventListener("input", event => {
    state.challengeSearch = event.target.value;
    renderChallengeList();
  });

  $$(".table-tabs button").forEach(button => button.addEventListener("click", () => {
    state.table = button.dataset.table;
    state.sortKey = null;
    $("#table-search").value = "";
    $$(".table-tabs button").forEach(tab => tab.setAttribute("aria-selected", String(tab === button)));
    renderDataset();
  }));
  $("#table-search").addEventListener("input", renderDataset);
  $("#sql-editor").addEventListener("input", () => { updateLineNumbers(); saveDraft(); });
  $("#sql-editor").addEventListener("keydown", event => {
    if (event.key === "Tab") {
      event.preventDefault();
      const editor = event.currentTarget;
      editor.setRangeText("  ", editor.selectionStart, editor.selectionEnd, "end");
      updateLineNumbers();
    }
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
      event.preventDefault();
      checkQuery();
    }
  });
  $("#check-query").addEventListener("click", checkQuery);
  $("#show-hint").addEventListener("click", showHint);
  $("#reveal-query").addEventListener("click", revealQuery);
  $("#clear-query").addEventListener("click", () => {
    $("#sql-editor").value = "";
    updateLineNumbers();
    saveDraft();
    $("#feedback").hidden = true;
    $("#output-card").hidden = true;
    $("#sql-editor").focus();
  });
  $("#previous-challenge").addEventListener("click", () => loadChallenge(state.challenge - 1));
  $("#next-challenge").addEventListener("click", () => loadChallenge(state.challenge + 1));
  $("#start-practice").addEventListener("click", () => {
    $("#challenge-lab").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => $("#sql-editor").focus(), 500);
  });
  $("#reset-progress").addEventListener("click", () => {
    state.completed.clear();
    state.drafts = {};
    localStorage.removeItem("sql-lab-completed-120");
    localStorage.removeItem("sql-lab-drafts-120");
    updateProgress();
    loadChallenge(0);
    toast("Progress and drafts reset.");
  });
}

async function initializeGuidedDatabase() {
  try {
    const SQL = await initSqlJs({ locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.13.0/${file}` });
    guidedDb = new SQL.Database();
    guidedDb.run(`
      CREATE TABLE equipment (equipment_id TEXT PRIMARY KEY, equipment_name TEXT, model TEXT, site TEXT, total_hmr INTEGER, status TEXT);
      CREATE TABLE maintenance_orders (order_id TEXT PRIMARY KEY, equipment_id TEXT, order_date TEXT, maintenance_type TEXT, downtime_hrs INTEGER, cost_inr INTEGER, status TEXT);
      CREATE TABLE spare_part_usage (usage_id TEXT PRIMARY KEY, order_id TEXT, material TEXT, category TEXT, quantity INTEGER, unit_cost INTEGER);
    `);
    const loaders = [
      ["INSERT INTO equipment VALUES (?, ?, ?, ?, ?, ?)", datasets.equipment, ["equipment_id", "equipment_name", "model", "site", "total_hmr", "status"]],
      ["INSERT INTO maintenance_orders VALUES (?, ?, ?, ?, ?, ?, ?)", datasets.maintenance_orders, ["order_id", "equipment_id", "order_date", "maintenance_type", "downtime_hrs", "cost_inr", "status"]],
      ["INSERT INTO spare_part_usage VALUES (?, ?, ?, ?, ?, ?)", datasets.spare_part_usage, ["usage_id", "order_id", "material", "category", "quantity", "unit_cost"]]
    ];
    loaders.forEach(([sql, rows, fields]) => {
      const statement = guidedDb.prepare(sql);
      rows.forEach(row => statement.run(fields.map(field => row[field])));
      statement.free();
    });
    $("#check-query").disabled = false;
    $("#reveal-query").disabled = false;
    $("#check-query").innerHTML = 'Check result <span aria-hidden="true">▶</span>';
    renderChallengeBrief(challenges[state.challenge]);
  } catch (error) {
    const feedback = $("#feedback");
    feedback.className = "feedback error";
    feedback.innerHTML = `<strong>SQL engine could not start.</strong>${error.message}`;
    feedback.hidden = false;
    $("#check-query").innerHTML = "Engine unavailable";
  }
}

initialize();
initializeGuidedDatabase();
