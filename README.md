# SQL Query Lab

An interactive SQL practice website focused on **Subqueries, CTEs, Query Design, joins, aggregations, and window functions**.

## Visit the website

**[Open SQL Query Lab](https://saurabh-kumar-983.github.io/sql-query-lab/)**

[Open the Free Practice workspace](https://saurabh-kumar-983.github.io/sql-query-lab/practice.html)

## Features

- Guided analyst challenges with hints and reference solutions
- Three linked fleet-maintenance tables
- Live in-browser SQL runner powered by SQLite/WebAssembly
- Table and schema explorer
- Query history saved in the browser
- Expected output tables and design explanations
- Responsive desktop and mobile interface

## Sample tables

- `equipment`
- `maintenance_orders`
- `spare_part_usage`

## Run locally

No build step is required.

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

> Serve the project through a local web server rather than opening the HTML files directly, because the SQL engine loads a WebAssembly file.

## Pages

- `index.html` — guided SQL challenge track
- `practice.html` — free-practice SQL workspace

The embedded sample data is fictional and intended for learning.
