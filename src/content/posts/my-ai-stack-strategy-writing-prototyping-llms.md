---
author: "Matt Birch"
categories: ["AI"]
date: "2025-07-18"
featured: true
image: "/images/ai-software-stack.webp"
title: "My Proven AI Stack: Strategy, Writing, Prototyping, and More"
description: "Boost your productivity with a lean AI stack: o3 for strategy, Claude for writing, Gemini for prototyping, plus NotebookLM and Deep Research—powered by context engineering."
---

The AI tools world has become paralysis by analysis.

Has this indecision loop been weighing you down?

I was there, too, until I pared down to a handful of tools that each solve a precise problem. Now, instead of chasing demos, I spend my time building. Here’s how I 10× my output without adding more shiny toys.

## The Big Three

1.  **o3 (OpenAI / ChatGPT) – Strategy & Brainstorming**

Before I even begin to write a line of code, I fire up o3. It’s my “think with me” engine.

Need to decompose a complex problem? I feed it a short project brief and ask for a step-by-step plan. Want competitive research? It’ll summarize top articles in seconds. With GPT-4’s extended context window (up to 128K tokens), I can preload past project notes, API docs, or even sprint backlogs—so every response feels like it’s been primed with hours of prep work.

2.  **Claude – Writing & Brand Voice**

Once the outline is in place, I switch to Claude for longform content. Its knack for consistent tone across multi-thousand-word outputs makes it ideal for blog posts, marketing copy, and internal docs.

I give Claude a style sheet as its context. This includes my brand voice, boiled down to five bullet points, and it never drifts into corporate jargon. It’s like having a senior copywriter on demand.

3.  **Gemini – Prototyping & Frontend**

For UI scaffolding and quick proof-of-concepts, Google’s Gemini (especially Gemini Pro) is my go-to.

If I'm building a React component, I simply drop in my Tailwind config and a screenshot of the current design. Gemini then provides responsive classes and placeholder data, which I can build around. When I’m debugging CSS quirks or brainstorming UX flows, it’s faster than context-switching to Stack Overflow.

A recent conversation shows exactly that.

![Google Gemini 2.5 Pro debugging conversation](/images/working-with-google-gemini-2.5-pro.webp)

And, sure enough, the bug was fixed just moments later.

## The Rest of the Arsenal

- **NotebookLM – Summaries & Audio Notes** I feed it meeting transcripts, PDF specs, and brainstorm voice memos. In seconds, I get bullet-point takeaways, action items, and key questions.

No longer am I out of the loop if I can't attend a meeting. It's all there.

- **Deep Research – Structured Source Sweeps** When I need to validate assumptions or pull in fresh data, Deep Research runs a crawl across academic papers, whitepapers, and news sites. It returns vetted citations so I can fact-check fast.

- **Zapier + Pinecone – Automated RAG** A simple Zap pushes new CSV exports into Pinecone, my vector database. My scripts then pull the top-5 most relevant docs into each prompt, so context is always just-in-time.

## Context Engineering: The Glue

A hammer without nails doesn’t work—your prompt is the hammer; context engineering supplies the nails. That means:

- **Preload Goals & Constraints** – A two-sentence brief at the top of every chat.
- **RAG Snippets** – Injected via API calls to your vector store.
- **Memory Hygiene** – Archive irrelevant chats and mark transient threads as “temporary.” A cluttered memory makes hallucinations skyrocket.

By slowing down to bundle these ingredients before each API call, you get consistent, accurate, and brand-aligned outputs every time.

## A Day in My Life

- **Morning Reset** – Archive chats unrelated to current sprints.
- **Project Kickoff** – o3 lays out the sprint backlog.
- **Content Draft** – Claude spins up the blog post using yesterday’s analytics and our brand guide.
- **UI Prototype** – Gemini generates a new settings panel based on Figma specs.
- **Summary & Next Steps** – NotebookLM wraps up stakeholder calls into a digestible memo.

Total time: under 2 hours for what used to take a full day.

## Slow Down to Speed Up

Ditch the tool hoarding. Focus on _why_ you’re reaching for each AI—and give it the context it needs.

With o3, Claude, [Gemini](https://gemini.google.com/), and a few targeted add-ons, you’ll spend less time wrestling with interfaces and more time shipping high-quality work.

Take some time this week to reasses which AI tools are really moving the needle, and help with the use cases that pertain to your workflow.

Trust me, it'll pay dividends.

> **TL;DR:** Build a lean, deliberate AI stack—o3 for strategy: Claude for writing, Gemini for prototyping, plus NotebookLM and Deep Research—powered by RAG and memory hygiene. You'll 10x your workflow.
