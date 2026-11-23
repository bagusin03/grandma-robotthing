// One Word From Grandma entry for make.fun
// "u-0xkianno-one-word-from-grandma-f04bed16".
// Writes exactly one word to /output/entry.txt: the word a grandma
// would text about AI.
// Fully offline and deterministic: no network, no clock, no randomness,
// no environment reads. The word is a fixed string literal below.
// Why this word: a grandma who does not know the name for AI just calls
// the whole thing "robotthing" — one warm, baffled, run-together word,
// lowercase the way she types, tied straight to robots, and fresh
// against the obvious picks (Robots, ChatGPT, Skynet). No spaces,
// no punctuation tricks, 10 bytes, well inside the 1-30 character gate.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "robotthing";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
