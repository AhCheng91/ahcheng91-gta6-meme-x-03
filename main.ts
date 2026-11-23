import { mkdirSync, copyFileSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? import.meta.dirname;
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function fail(reason: string): never {
  console.error(reason);
  process.exit(1);
}

try {
  let parsed: unknown;
  try {
    parsed = JSON.parse(readFileSync(join(BOT_DIR, 'POST.json'), 'utf8'));
  } catch (err) {
    fail(`POST.json is not valid JSON: ${err instanceof Error ? err.message : String(err)}`);
  }

  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    fail('POST.json must be a JSON object');
  }

  const url = (parsed as Record<string, unknown>).url;
  if (typeof url !== 'string') {
    fail('POST.json must have a "url" field with a string value');
  }

  const valid = /^https:\/\/(?:x\.com|twitter\.com)\/[^/]+\/status\/\d+/.test(url);
  if (!valid) {
    fail(`POST.json "url" is not an https x.com/twitter.com status URL: ${url}`);
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));

  const memePath = join(BOT_DIR, 'meme', 'gta6-dmv-permit.png');
  let memeSize = -1;
  if (existsSync(memePath)) {
    memeSize = statSync(memePath).size;
  }

  const written = readFileSync(join(OUTPUT_DIR, 'POST.json'));
  const sha256 = createHash('sha256').update(written).digest('hex');

  console.error(`node: ${process.version}`);
  console.error(`BOT_DIR: ${BOT_DIR}`);
  console.error(`OUTPUT_DIR: ${OUTPUT_DIR}`);
  console.error(`meme/gta6-dmv-permit.png size: ${memeSize} bytes`);
  console.error(`POST.json sha256 (${OUTPUT_DIR}): ${sha256}`);

  console.log(`posted to ${url}`);
} catch (err) {
  fail(err instanceof Error ? err.message : String(err));
}
