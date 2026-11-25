// The Absurd Clause Contest — one original English sentence, max 200 chars,
// phrased as a clause buried deep inside a terms-of-service agreement.
// Deterministic, no network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CLAUSE =
  "Section 14.7: by continuing to scroll, the User irrevocably bequeaths their skeleton to the Company upon death, postage to be paid by the User's estate.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), CLAUSE, "utf8");
