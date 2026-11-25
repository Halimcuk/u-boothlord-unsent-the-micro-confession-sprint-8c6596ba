// Unsent: The Micro-Confession Sprint
// Writes one two-part micro-confession to the output text file:
// a To: line naming a former mentor by role only, then the unsent
// message itself, typed plainly late at night and never sent.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "To: My old boss\n" +
  "you were right about not trying to prove myself by burning out. " +
  "i only figured it out this year. " +
  "i don't think i'd have made it through last year without you " +
  "and i never said thank you";

// The text is fixed (no randomness, no trailing newline), so every
// run writes byte-identical output. The gate: 1 to 260 characters total, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 260 || ENTRY.trim().length === 0) {
  throw new Error(`Entry length ${ENTRY.length} fails the 1-260 character gate.`);
}

const outputDir =
  process.env.OUTPUT_DIR || process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outputDir, "entry.txt")}`);
