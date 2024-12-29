---
title: "Good Metrics, Bad Metrics"
publishDate: "2024-02-01"
category: "Leadership & Transformation"
tags: ["metrics", "leadership", "transformation", "lean"]
summary: "Measuring everything is a trap that costs more than you think. Here's how to measure what actually matters."
readingTime: 10
draft: false
---

> What gets measured gets improved.

That quote comes from Peter Drucker, and whilst I've got enormous respect for his wisdom, like all great ideas it's too abstract to be useful without some extra thought. Without that effort, these ideas inevitably get twisted to support whatever agenda someone's pushing. It's not their fault - we all do it. But we're missing the point in our desperate attempt to measure everything.

Here's why that's a terrible idea:

1. It's not actually the point
2. It's far more expensive than you think
3. It causes us to measure what we have, not what we want

A better approach? Stop looking at everything you could measure and start focusing on what actually matters.

## The Measurement Trap

I like the spirit of being scientific in our approach, but **measurement isn't the goal**! 

Take lean adoption as an example. You start measuring cycle-time because that's what everyone does. Fast forward six months - you're staring at a pile of numbers. What now? What would you have done differently six months ago if you had these numbers already? If you can't answer that, what are you measuring for?

"But why not measure everything?" you might say. "It's basically free, and there might be some hidden truth in there." 

**There won't be - you'd have spotted it already. And it's absolutely not free. Not even close.**

## The Hidden Cost of Data

When you decide to measure something, you're saying "I need this data to make better decisions." But every metric you add is another variable in every decision you make. The mental burden alone creates enormous waste.

The lean manufacturing lot call that Muri. The west called it 'Paralysis by Analysis' (as I discussed in [from-values-to-velocity](from-values-to-velocity)). We intrinsically understand the cost of measurement, but we're so swamped by available data that we're terrified of missing something important. 

**That fear comes from not knowing what you're looking for in the first place.**

And so we keep adding metrics to this invisible burden. Just in case.

## The Inventory Problem

**Metrics are inventory.** Just like physical inventory, they:
- Cost money to maintain
- Take up space (mental space in this case)
- Get stale if not used
- Create waste when they pile up

## The Easy Trap

Our brains are wired to prefer simple, quick and easy things. That's brilliant for survival, rubbish for choosing what to measure.

That tendency to take the simpler mental route causes us to measure the least valuable things possible.

## Moving Away vs Moving Towards

The easiest things to measure are the things we want to avoid - usually because we already have that data. But how useful is it, really?

Take "customer satisfaction". It's not quantitative, making it a tough choice. So we look at the data we already have. Fewer bugs must mean higher satisfaction, right? 

**Fatal mistake - what we're actually measuring is customer dissatisfaction.** That's not the same thing! It's useful, but not enough. Significant, but not meaningful.

Moving away from bad things doesn't guarantee you're moving towards good ones. Running away from problems only tells you what to avoid. You need a destination.

## From Warning Signs to Waypoints

Every development team I've worked with has warning signs they track. Build failures. Missed deadlines. Support tickets. Production incidents. They're useful signals, but they're just telling you what's broken.

**The real power comes from turning those warnings into guides.**

Here's what I mean: A spike in support tickets isn't just a warning sign of unhappy customers. It's a waypoint telling you exactly where your documentation needs work, where your UX is confusing, or where your features aren't meeting expectations.

Failed builds aren't just red crosses in your CI pipeline. They're waypoints showing you where your test coverage is thin, where your integration points are brittle, or where your dependencies need updating.

## Making It Real

In practice, this means having two types of metrics:

1. **Warning Metrics**: The essentials you can't ignore
- Build success rate (below 95% is unacceptable)
- Production incidents (more than 2 per week needs immediate attention)
- Support response time (nothing over 24 hours)

2. **Waypoint Metrics**: The improvements you're driving
- Time to resolve incidents (targeting 50% reduction)
- First-time fix rate (aiming for 80%)
- Feature adoption rate (want 60% uptake in first month)

The difference? Warning metrics tell you when to stop and fix something. Waypoint metrics tell you if you're getting better at what matters.

## Setting Real Boundaries

Pick 3-5 warning metrics for your team. Make them quantitative and make them hurt. When you hit these limits, everything stops until they're fixed:

- Test coverage drops below 80%
- Build time exceeds 15 minutes
- More than 3 P1 bugs open
- SLAs missed in the last 24 hours

**These aren't targets - they're boundaries.** They tell you when you're about to walk off a cliff.

## Finding Your Direction

Once your boundaries are set, you need a destination. This isn't about avoiding bad things - it's about achieving good ones.

Want to halve your deployment time? Great. Want your users to actually use that new feature? Brilliant. These are proper goals you can move towards, not just things to avoid.

I'll cover more about finding these goals in my upcoming post about True North, but for now, focus on things you can actually influence.

## Watch for Old Habits

It's dead easy to slip back into measuring everything that moves. Next time you're looking at a dashboard, ask yourself:

**"If this number changed dramatically, would I actually do anything different?"**

If the answer is no, stop measuring it.

## Making It Work

Select metrics carefully, always considering the costs. Set hard boundaries you won't cross, then pick specific improvements you want to make.

**Be brutally honest about both and measure nothing else.**