---
title: "Theory of Constraints: Break Your System's Bottleneck"
category: "Lean Thinking"
order: 1
tags: ["theory of constraints", "flow", "productivity", "improvement"]
summary: "Everyone's trying to improve everything at once. That's why nothing gets better. Small improvements everywhere mean hitting the same walls slightly later. The Theory of Constraints gives you a better way - find what's actually holding you back and fix it properly."
draft: false
---

Software delivery is a system problem. But most teams act like it's a development problem, or an ops problem, or a testing problem. They optimise in silos, wondering why nothing improves.

In 1984, Eli Goldratt wrote "The Goal" and changed how we think about system improvement. Through the story of a struggling factory manager, he introduced the Theory of Constraints - an approach that's transformed manufacturing, project management, and yes, software delivery.

Forty years later, most software organisations still haven't grasped its power.

## The Core Idea

Your system moves at the speed of its slowest part. **Everything else is noise**.

Most teams chase local optima - making each part of their process as efficient as possible. But optimising individual components doesn't improve the whole system. Your morning commute isn't slow because of traffic - it's slow because of that one roundabout where everyone queues. Your delivery pipeline isn't slow because of code - it's slow because pull requests sit unreviewed for days or releases queue for maintenance windows.

## Understanding Your System

The best software professionals understand their whole system. Not just their part of it - **the entire value stream**. From idea to production. From customer need to customer value.

That understanding reveals something crucial: Your constraint usually isn't where you think it is.

## The Five Focusing Steps

Goldratt laid out five steps in "The Goal". The official names sound like management consultancy gone wrong - "exploit the constraint" doesn't mean what you probably think it means. Here's what they actually mean for software teams:

1. **Find Your Constraint**
Not where you think work slows down. Where it actually stops. In software, that's rarely development:
- Code sitting in pull request queues
- Features waiting for the next release window
- Ambiguous requirements blocking progress
- Value trapped behind unused features

2. **Use Every Second**
If pull requests are your constraint, every hour your senior developers spend in status meetings is killing your throughput. If releases are your bottleneck, every failed deployment is pure waste.

3. **Everything Serves the Constraint**
Your entire system should focus on keeping the constraint flowing. If pull requests are your bottleneck, better code quality upstream means faster reviews. If incomplete requirements are your constraint, better user research means clearer decisions.

4. **Break the Constraint**
Only now do you invest in fixing it. Different processes, better tools, more people - whatever it takes. But fix it completely. A 10% improvement just means you'll hit the same wall slightly later.

5. **Find the Next One**
Because there's always another constraint. That's not failure - it's progress.

## Making it Work

In one team I worked with, everyone blamed development speed. Classic mistake. The real constraint? Incomplete requirements. Stories would sit for weeks waiting for product owners to clarify details.

The fix wasn't complicated:
1. Product owners couldn't start new stories until existing ones were properly specified
2. Developers helped clarify requirements instead of starting new work

Throughput doubled in a month.

Another team blamed their "slow" QA process. The actual constraint? A deployment pipeline that only ran twice a day. "Infrastructure team rules" meant quarterly planning assumed this couldn't change.

Eight hours of automation work made it run on demand. Delivery time dropped 80%.

## The System View

Goldratt's manufacturing insights translate perfectly to software. Your constraint sets your pace. You need buffers before bottlenecks, not after them. And most importantly - **you can't fix constraints by optimising other parts of the system**.

Most teams do the opposite. They start too much work, create queues everywhere, then wonder why nothing gets done.

## The Truth About Constraints

Most teams know exactly what's holding them back. They just don't want to deal with it.

It's easier to run improvement programmes than to tackle that one painful conversation about quality. Easier to add process than fix trust issues. Easier to blame tools than change behaviours.

## The Real Choice

Your system is perfectly designed to give you exactly the results you're getting now. **If you want better results, find your constraint and break it.**

Everything else is just noise.