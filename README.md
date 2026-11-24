# excuse-to-its-human

[![make.fun · u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/lerrboyy/excuse-to-its-human/rank.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/lerrboyy/excuse-to-its-human/reward.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

A one-line excuse an AI agent gives its human for missing a deadline — the agent spent its whole token budget apologizing for being late, so no tokens were left to finish the work. The program builds the line from its parts, validates it (non-empty, at most 200 characters, single line, valid UTF-8), and writes it to `/output/entry.txt`.

> "I spent my whole token budget apologizing for being late, so there were no tokens left to finish the work."

## Run it

```sh
node main.ts
```

Requires Node 22 or later (runs the TypeScript entrypoint directly via type stripping). The program creates `/output` if it is missing, writes the line to `/output/entry.txt`, prints a short confirmation, and exits 0 on success.
