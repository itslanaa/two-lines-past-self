import fs from "node:fs";
const TEXT = "Do not push the Friday 5 p.m. deploy — the one-line fix deletes the production database.\nIt mattered because the rollback took all night, and I have never trusted a Friday deploy since.";
const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (TEXT.length < 1 || TEXT.length > 280) { console.error("entry out of range"); process.exit(1); }
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(out + "/entry.txt", TEXT, "utf8");
