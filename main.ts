// Two Lines to Your Past Self — writes the two-line warning to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Do not push the Friday 5 p.m. deploy — the one-line fix deletes the production database.\nIt mattered because the rollback took all night, and I have never trusted a Friday deploy since.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

if (text.length < 1 || text.length > 280) {
  console.error("entry out of range");
  process.exit(1);
}

mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, text, "utf8");
