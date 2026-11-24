// One Letter: Coffee or Tea — make.fun entry.
// Writes exactly one letter, "A" (coffee), to <outputDir>/entry.txt.
// The gate requires the file to be UTF-8 text of exactly 1 character,
// so the file holds a single byte with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
// "A" is the coffee choice per the competition rules; write it as the
// file's only byte — no trailing newline, so the gate sees exactly 1 char.
writeFileSync(entryPath, "A", "utf8");
