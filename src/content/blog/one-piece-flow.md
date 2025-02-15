---
title: "One Piece Flow: The Counter-Intuitive Truth"
category: "Lean Thinking"
order: 5
tags: ["lean", "flow", "productivity", "software"]
summary: "Batching work feels efficient but kills your delivery speed. Here's why processing one item at a time gets better results, and how to make it work in software."
draft: false
---

Your development process is probably optimised for efficiency. That's exactly why it's slow.

## The Toyota Revolution

In 1956, Taiichi Ohno visited American supermarkets. What he saw changed manufacturing forever. While American car plants were batch processing everything, supermarkets were restocking one item at a time, exactly when needed.

He took this idea back to Toyota. Stop building cars in large batches. Build them one at a time, triggered by actual demand. Everyone thought he was mad. **Toyota became the most efficient car manufacturer in the world.**

## The Numbers Are Brutal

Let's get specific about batch sizes in software. Imagine four features, each needing design, development, and testing. Each stage takes a day.

Traditional batch approach:
- Design all features: 4 days
- Develop all features: 4 days
- Test all features: 4 days
First feature delivered: Day 12

One piece flow:
- Design, develop, test Feature 1: 3 days
- Design, develop, test Feature 2: 3 days
- Design, develop, test Feature 3: 3 days
- Design, develop, test Feature 4: 3 days
First feature delivered: Day 3

**That's not a small difference. It's transformative.**

## The Hidden Cost of Batching

Every time you batch work, you create hidden dependencies. That innocent-looking pull request with five features? It's not five independent changes. It's five changes that must now be tested, reviewed, and deployed together.

When something goes wrong, everything gets blocked. One bug stops all five features. One review comment holds everything up. One merge conflict affects the entire batch.

The cost isn't linear. **It's exponential.** Double your batch size and you quadruple your risk.

## Making it Work in Software

This isn't theory. Here's how real teams achieve one piece flow:

Mob programming is the ultimate expression of one piece flow in software. The entire team works on one thing, together, in real time. It sounds inefficient. Teams using it properly deliver faster than any other approach I've seen.

Feature toggles let you merge incomplete work without affecting users. Deploy every change, even unfinished features. Toggle them on when they're ready. **The smaller the change, the safer the deploy.**

Continuous integration isn't about running tests automatically. It's about integrating work continuously. That means multiple times per day, not once per sprint.

## The Practicalities

Want to achieve true one piece flow? Start here:

Break features into vertically thin slices. Not horizontal layers, but thin end-to-end pieces of value. Deploy each slice independently.

Test immediately, not later. The moment code is written, it should be tested. Not by a separate team next sprint. By the people writing it, right now.

Stop starting, start finishing. If your team is working on more than two things at once, you're batching. Don't.

## The Reality Check

Toyota bet their entire company on this principle. They were building cars - physical objects with real supply chains and hard constraints.

You're building software. Your constraints are mostly imaginary. If they could do it with cars in 1956, you can do it with software in 2024.

## The Way Forward

The results are clear:
- Batch size of one is faster
- Small changes are safer
- Continuous flow beats scheduled delivery
- Real efficiency comes from finishing, not starting

Stop optimising for resource utilisation. Start optimising for flow. **Your team isn't a resource to be maximised. It's a system to be optimised.**

The choice is simple: Keep batching work because it feels efficient, or deliver faster by focusing on flow.

Ohno was right. One piece at a time wins. Every time.
