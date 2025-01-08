---
title: "Why Limits Make You Faster"
category: "Lean Thinking"
order: 4
tags: ["lean", "flow", "wip-limits", "productivity", "queue-theory", "littles-law"]
summary: "Every team I've ever seen try to do too many things at once has failed. Here's the science behind why limits actually make you faster."
draft: false
---

You know that feeling when everything's urgent but nothing's getting done? When every status update is "nearly there" but somehow nothing ever ships? When your team is working flat out but delivery is slower than ever?

**You're hitting the natural laws of flow, and you can't hack your way around them.**

## The Traffic Problem

Picture a motorway at rush hour. What happens when it gets too busy? Everything slows down. Add more cars and it gets worse. Eventually, total gridlock.

**The same thing happens to your delivery pipeline.**

The more work you try to push through your system, the slower everything moves. Past a certain point, adding more work makes everything slower. Much slower.

Let me prove it to you.

## The Maths Behind the Madness

Here's what happens when you have too much work in progress. Not opinions, not theory - actual maths:

<div class="flex justify-center my-8">
  <img src="/Dave-Huntley/blog/queue-theory/utilisation-impact.svg" alt="Queue theory impact on delivery time" class="w-full max-w-3xl" />
</div>

That curve isn't a theory. It's queue theory - the same maths that explains traffic jams, call centre performance, and yes, your development pipeline.

When utilisation hits 100%, cycle time goes to infinity. **You literally never finish anything.**

## Queue Theory: Why This Actually Happens

That curve isn't just an observation - it's a mathematical certainty. In any system with variability (which is every software team ever), queues form. Once they form, they follow predictable patterns. The relationship between utilisation and wait time isn't linear - it's exponential.

<div class="flex justify-center my-8">
  <img src="/Dave-Huntley/blog/queue-theory/queue-formation.svg" alt="How queues form in variable systems" class="w-full max-w-3xl" />
</div>

Think about what happens when your system hits 80% utilisation. You're not just waiting 80% longer - you're waiting four times as long. At 90%, it's ten times. At 95%, you might as well give up and go home. **This isn't about working harder. It's about working within mathematical limits.**

## Little's Law: The Formula That Proves It

There's a formula that governs every queue in the world: L = λW. It looks simple, but it's devastatingly powerful. L is the average number of items in your system, λ (lambda) is your arrival rate, and W is your average wait time.

This law is universal. It applies to supermarket checkouts, call centres, and yes, your development pipeline.

<div class="flex justify-center my-8">
  <img src="/Dave-Huntley/blog/queue-theory/littles-law.svg" alt="Little's Law visualized" class="w-full max-w-3xl" />
</div>

When you increase work in progress, you're directly increasing wait times. Want to deliver faster? You've got two options: speed up your process or reduce work in progress. And here's the kicker - speeding up the process is bloody hard. Reducing WIP is relatively easy.

**You can't cheat mathematics.**

## The Real Cost of Context Switching

"But we're not a factory!" I hear you cry. "Developers can work on multiple things!"

Let's see what actually happens when you context switch:

<div class="flex justify-center my-8">
  <img src="/Dave-Huntley/blog/queue-theory/context-switch-cost.svg" alt="The real cost of context switching" class="w-full max-w-3xl" />
</div>

Every time you switch tasks, you're burning productive hours getting back into flow state. The more complex the work, the longer it takes to get back into it. With three projects on the go, you're losing 40% of your effective capacity just switching between them. That's two days a week spent just remembering what you were doing.

## The Psychology of Flow

Flow state isn't just some productivity buzzword. It's a measurable cognitive state that fundamentally changes how our brains work. When a developer achieves flow state, their brain activity literally changes - focusing all resources on the task at hand.

Getting into flow takes time. Your brain needs about 15-20 minutes of uninterrupted focus just to begin reaching this state. But here's the kicker: any interruption resets that clock completely. That Slack message? Clock starts over. That "quick question"? Back to zero.

<div class="flex justify-center my-8">
  <img src="/Dave-Huntley/blog/queue-theory/flow-state.svg" alt="Flow state achievement and maintenance" class="w-full max-w-3xl" />
</div>

What makes this worse is that the benefits of flow compound over time. A developer who maintains flow state for two hours isn't just getting twice the output of one hour - they're hitting problems with their full cognitive capacity, making better decisions, and writing cleaner code.

**Your brain isn't built for multitasking. It's built for deep focus.**

## What Flow Actually Looks Like

Most teams I work with think they're doing fine because everyone's busy. But there's a massive difference between busy and productive. Look at what happens when you actually limit work in progress:

<div class="flex justify-center my-8">
  <img src="/Dave-Huntley/blog/queue-theory/flow-comparison.svg" alt="Comparison of flow with and without WIP limits" class="w-full max-w-3xl" />
</div>

Same team, same capacity, completely different results. **The team working on fewer things gets more done.** Not because they're working harder, but because they're working smarter.

## Real System Dynamics

Different types of work affect flow differently. Feature development demands the highest cognitive load and suffers most from interruption. Each context switch can waste hours of productive time. Maintenance work tends to be more predictable, with lower switching costs. You can batch it effectively without the same penalties.

Production support is its own beast entirely. It's highly variable and will absolutely destroy flow state for your feature teams if you don't handle it separately. You need dedicated capacity for this - trying to share it just makes everything worse.

<div class="flex justify-center my-8">
  <img src="/Dave-Huntley/blog/queue-theory/work-types.svg" alt="Different work types and their flow characteristics" class="w-full max-w-3xl" />
</div>

The key isn't treating all work the same - it's understanding how different work types affect your system and setting appropriate limits for each.

## Making It Real

I once worked with a team that was "at capacity" but delivering nothing. They had fifteen projects "in progress". Here's what their board looked like:

<div class="flex justify-center my-8">
  <img src="/Dave-Huntley/blog/queue-theory/before-after-board.svg" alt="Before and after implementing WIP limits" class="w-full max-w-3xl" />
</div>

We implemented strict WIP limits. Active projects dropped from fifteen to three. Average delivery time fell from 90 days to 15. Quality improved dramatically because people could actually focus. Team morale went up because things were actually getting done.

**They delivered more by doing less.**

## Implementation Patterns That Work

The size and structure of your team determines how you should implement WIP limits. Small teams work best with per-person limits - they're simple to understand and flexible enough to handle varying skills. Larger teams need per-stage limits to prevent bottlenecks and encourage swarming.

If you're dealing with mixed work types, you need separate limits for each type. Don't let support work steal capacity from feature development. Don't let maintenance work block critical features.

<div class="flex justify-center my-8">
  <img src="/Dave-Huntley/blog/queue-theory/wip-strategies.svg" alt="Different WIP limit strategies compared" class="w-full max-w-3xl" />
</div>

The specific numbers matter less than the fact that you have them and stick to them.

## Measuring What Matters

Forget utilisation - it's a vanity metric that drives the wrong behaviour. Focus on outcomes. Lead time tells you how long things actually take to deliver, including all the waiting and blockers. Flow efficiency shows you how much of that time was actually spent working versus sitting in queues.

<div class="flex justify-center my-8">
  <img src="/Dave-Huntley/blog/queue-theory/key-metrics.svg" alt="Key metrics for measuring flow" class="w-full max-w-3xl" />
</div>

Most teams are shocked to find their flow efficiency is under 15%. That means 85% of their cycle time is pure waste. Getting to 30% is transformative. Getting beyond that requires serious system changes.

## Setting Real Limits

Want to make this work? Here are the steps:

1. Count your current WIP. Don't estimate. Count actual work in flight right now. Yes, it's probably horrifying.
2. Cut it in half. Yes, really. No, those aren't special exceptions.
3. Set clear limits: 2 items per developer, 3 items in review, 2 items in test.
4. Stick to them ruthlessly. No exceptions. No emergencies.

## The Pushback You'll Get

"But everything's urgent!"
Really? Then why isn't anything getting done?

"We can't say no to stakeholders!"
You're already saying no. You're just lying about it.

"People will be idle!"
Good. That's your signal to pull in new work.

## The Choice

You can keep pretending that doing everything at once works. You can ignore the maths, ignore the science, and ignore the evidence.

Or you can set some limits and start delivering.

Your call.