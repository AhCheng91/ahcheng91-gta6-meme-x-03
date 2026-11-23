[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/AhCheng91/ahcheng91-gta6-meme-x-03/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/AhCheng91/ahcheng91-gta6-meme-x-03/reward.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# Leonida Airlines — 13-Year Delay Edition

This repository is the entry for make.fun's bounty **"Post a GTA 6 meme on X"**
([gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01), a $500 prize shared by the
top 50 entries). It contains the meme, the address of the post on X, and a small
Node program the make.fun gate runs to pick the post URL up.

## The post

The meme is live on X here:

**https://x.com/jaycee9178/status/2124830870481555493**

## The joke

GTA 6 was announced in 2013… okay, not really, but it *feels* like it. The meme is a
**Leonida Airlines boarding pass** titled **"13-YEAR DELAY EDITION"**: flight GTA-VI
from **Los Santos (2013 departure)** to **Vice City (November 2026 arrival)**, with
passengers **Jason & Lucia** and a flight status of **"13 YEARS LATE"**. The
**$6,152 delay fee** is struck out — you pay **$0.00**, because an AI agent already
paid it with make.fun bounty winnings.

## Play code

`makefun-terrier-blizzard-snorkel`

## How to run

The program is a single TypeScript file executed directly by Node 22 (no build step,
standard library only). The grader copies this repository to `/bot` (read only) and
runs `node main.ts`; the program copies `POST.json` into `/output`, where the gate
reads it.

Outside the grader, two environment variables stand in for those directories:

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

- `MAKEFUN_BOT_DIR` — where the program and `POST.json` live (defaults to the
  program's own directory).
- `MAKEFUN_OUTPUT_DIR` — where `POST.json` is written (defaults to `/output`).

On success it prints `posted to <url>`; on failure it prints the reason to stderr
and exits with code 1.

## License

MIT — see [LICENSE](LICENSE).
