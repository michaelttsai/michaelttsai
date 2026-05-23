---
layout: ../../layouts/BlogPost.astro
title: "5 Things I Learned About Prompt Engineering (By Getting It Wrong)"
description: "Prompt engineering looks easy until you try it. Here's what actually made a difference after weeks of trial and error."
date: "2026-05-20"
tags: ["Prompting", "LLMs", "Lessons"]
---

## The myth of the perfect prompt

When I started working with LLMs, I thought prompt engineering was about finding magic words. Write the right incantation, get perfect output. That's not how it works at all.

After weeks of experimenting, here's what actually moved the needle.

## 1. Examples beat instructions

I spent hours writing detailed instructions like "respond in a professional tone with clear structure and actionable takeaways." You know what worked better? Showing the model one example of what good output looks like.

This is called few-shot prompting, and it's the single biggest improvement I've found. Instead of describing what you want, *show* it.

## 2. Let the model think out loud

When I asked for a direct answer to a complex question, the results were hit or miss. When I added "think through this step by step before giving your answer," accuracy jumped noticeably.

This isn't magic either — it's just giving the model space to work through the problem rather than forcing an immediate conclusion.

## 3. Constraints are more useful than freedom

My early prompts were wide open: "write something about X." The results were generic. Adding constraints — a specific audience, a word count, a format, a perspective — consistently produced better output.

It turns out that creativity thrives within boundaries. Same with LLMs.

## 4. The system prompt is underrated

I used to throw everything into the user message. Separating the *role and context* (system prompt) from the *specific task* (user message) made responses more consistent and easier to iterate on.

Think of it like this: the system prompt is who the model is, the user message is what you're asking it to do right now.

## 5. Evaluate, don't vibe-check

The hardest lesson: stop eyeballing output and start measuring it. Even a simple rubric — "does the response include X, Y, and Z?" — catches problems that feel-good reading misses.

I'm still building out my evaluation approach, but even basic scoring has already caught regressions that I would have shipped otherwise.

## What's next

I'm working on building a small toolkit of reusable prompt patterns — templates I can reach for when starting a new project. I'll write about that once it's further along.

---

*If you're just getting started with prompt engineering, my biggest advice is: experiment more, theorize less. The gap between what you read online and what works for your specific use case is where the learning happens.*
