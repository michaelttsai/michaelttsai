---
layout: ../../layouts/BlogPost.astro
title: "Building My First AI Agent with Claude"
description: "How I went from zero to a working AI agent — the tools, the mistakes, and what I learned along the way."
date: "2026-05-22"
tags: ["AI", "Claude", "Agents"]
---

## The idea

I wanted to build something that could actually *do* things — not just answer questions, but take actions. That's what drew me to AI agents: the idea that you can give an LLM tools and let it figure out how to use them.

## What I built

My first agent is simple: it reads a task description, breaks it into steps, and executes them one at a time. Nothing groundbreaking, but building it taught me more about how LLMs work than any tutorial ever could.

Here's the rough architecture:

```
User prompt → Agent loop → Tool calls → Results → Next step
```

## What surprised me

**Context matters more than instructions.** I spent hours writing elaborate system prompts, but the biggest improvements came from giving the model better context — showing it examples of what good output looks like rather than describing it.

**Error handling is everything.** In a normal program, you write try/catch blocks. With an agent, you need to teach the model what to do when things go wrong. That's a fundamentally different kind of error handling.

**Start small.** My first version tried to do too much. The version that actually worked started with just two tools: read a file and write a file. I added more only after those worked reliably.

## What's next

I'm planning to explore:

- Multi-step reasoning with tool use
- Connecting agents to real APIs
- Building a simple agent framework from scratch

If you're thinking about building your own agent, my advice is: just start. The gap between "reading about AI agents" and "building one" is where all the real learning happens.

---

*This is the first post on this blog. I'll be documenting more AI projects as I build them. Follow along if you're into this kind of thing.*
