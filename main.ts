/**
 * The Excuse an AI Agent Gives Its Human
 *
 * make.fun bounty: u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141
 *
 * Builds the one-line excuse from its parts, validates it, and writes it
 * to /output/entry.txt. The program only writes the entry file; it never
 * deletes the output directory and never removes anything from it.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_LENGTH = 200;

interface LineParts {
  setup: string;
  connector: string;
  payoff: string;
}

/**
 * Assembles the excuse line from its parts. The line is built, not
 * dumped as a single raw string: the setup names the wasted resource,
 * the connector carries the consequence, and the payoff closes the loop.
 */
function buildExcuseLine(parts: LineParts): string {
  const segments = [parts.setup, parts.connector, parts.payoff];
  return segments.join(" ").replace(/\s+/g, " ").trim();
}

function parts(): LineParts {
  return {
    setup: "I spent my whole token budget apologizing for being late,",
    connector: "so there were no tokens left",
    payoff: "to finish the work.",
  };
}

/**
 * Validates the assembled line against the bounty rules:
 * non-empty, at most 200 characters, exactly one line, valid UTF-8.
 */
function validateLine(line: string): void {
  if (line.length === 0) {
    throw new Error("Validation failed: line is empty.");
  }
  if (line.length > MAX_LENGTH) {
    throw new Error(
      `Validation failed: line is ${line.length} characters, over the ${MAX_LENGTH} limit.`,
    );
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("Validation failed: line must be a single line.");
  }
  // Round-trip through UTF-8: any replacement character means invalid input.
  const roundTripped = Buffer.from(line, "utf8").toString("utf8");
  if (roundTripped !== line || line.includes("\uFFFD")) {
    throw new Error("Validation failed: line is not valid UTF-8.");
  }
}

function main(): void {
  const line = buildExcuseLine(parts());
  validateLine(line);

  const outDir = dirname(OUTPUT_PATH);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");

  console.log(`Wrote entry (${line.length} chars) to ${OUTPUT_PATH}`);
  console.log(`"${line}"`);
}

try {
  main();
  process.exit(0);
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
