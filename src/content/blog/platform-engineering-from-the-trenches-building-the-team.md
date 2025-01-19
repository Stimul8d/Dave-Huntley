---
title: "Platform Engineering from the Trenches: Building the Right Team"
category: "Engineering Excellence"
order: 5
series: "Platform Engineering from the Trenches"
part: 2
tags: ["platform-engineering", "team-building", "engineering", "leadership"]
summary: "Everyone's hiring platform engineers. Most teams fail. Here's how to build one that actually works."
draft: false
---

Last time we talked about what makes platforms work. Now let's tackle the harder bit - building the team that can actually deliver it.

## The Failed Model

Most companies try to hire their way out of platform problems. They'll recruit infrastructure experts, give them six months, and expect magic. What they get is something like this:

```hcl
module "service_deployment" {
  source = "platform/service/v1"

  name                 = var.service_name
  team_id             = var.team_id
  cost_centre         = var.cost_centre
  compliance_tier     = var.compliance_tier
  security_zone       = var.security_zone
  backup_strategy     = var.backup_strategy
  dr_requirements     = var.dr_requirements
  # ... and so it goes on
}
```

Beautiful infrastructure. Completely unusable interface. The platform team ends up adding features while developers find ways around them. **This isn't about bad engineering - it's about misaligned incentives.** When you split platform from product without clear paths for collaboration, you create opposing forces. Platform teams naturally optimise for control and standardisation, while product teams push for speed and flexibility.

## The Role of Platform Leadership

Strong technical leadership in platform engineering is essential. **Someone needs to set and maintain standards.** Someone needs to design the golden paths that make doing the right thing easy. The trick isn't removing platform expertise - it's applying it effectively.

Great platform leaders understand their role isn't to control everything. It's to create patterns that teams actually want to use. They focus on making the right way the easy way, not on forcing compliance through technical constraints.

Take infrastructure as code. Without clear patterns, every team builds their own way:

```hcl
# Team A's approach
module "service_a" {
  source = "custom/service-pattern"
  name   = "auth-service"
  config = local.team_a_standards
}

# Team B's approach
resource "aws_ecs_service" "service_b" {
  name            = "payment-service"
  task_definition = aws_ecs_task_definition.payments.arn
  # ... completely different pattern
}
```

Good platform leadership creates clear, simple patterns that teams adopt willingly:

```hcl
# The golden path
module "service" {
  source = "patterns/service"
  name   = "payment-api"
  # That's it. That's the config.
}
```

## Skills vs Context

The best platforms come from combining deep infrastructure expertise with real-world usage. **Pure infrastructure knowledge isn't enough.** Your AWS architects might be brilliant, but if they've never used their own platform in anger, they'll miss crucial usability factors.

This is where embedding platform engineers in product teams transforms everything. They bring the deep technical knowledge needed for solid foundations, but they experience the daily reality of using what they build. When an infrastructure expert feels the pain of their own complexity, they build different solutions.

Consider a typical platform-built API service:

```hcl
# What happens without context
module "api" {
  source = "platform/service/api/v3.2.1"
  name = "payment-service"
  instance_type = "t3.medium"  # Why do I need to care?
  subnet_ids = ["subnet-123"]  # I just want it to work
  vpc_id = "vpc-456"          # Platform should handle this
  route53_zone_id = "Z123"    # Please make it stop
}
```

Every field represents a decision pushed to the wrong level. **The platform's job isn't to expose flexibility - it's to make good decisions the default.**

## The Power of Mixed Teams

Your best platform engineers are often hiding in your product teams. They're the ones who've automated their deployment pipeline because the official one was too slow. The ones who've built tools to make their lives easier. **They understand both sides of the problem because they live with both sides every day.**

But don't mistake this for not needing dedicated platform expertise. You need both. Product engineers bring immediate practical needs and usage patterns. Platform engineers bring deep knowledge of infrastructure, security, and scalability. Together, they build solutions that actually work.

The key is rotation. Move your best product engineers into platform work periodically. Embed your platform engineers in product teams. Make platform improvements part of everyone's job, not a separate function. When teams mix, knowledge flows both ways.

## Setting Standards That Stick

Platform teams often try to enforce standards through technical constraints. It never works. **Good standards spread because they're genuinely better, not because they're required.**

Your platform needs to provide clear patterns for common needs. Take service deployment - teams need different configurations for different purposes. Instead of one massive interface trying to handle everything, create clear patterns for common cases:

```hcl
# Data processing service
module "batch_service" {
  source = "patterns/batch"
  name   = "etl-pipeline"
}

# Customer-facing API
module "api_service" {
  source = "patterns/api"
  name   = "payment-gateway"
}

# Internal service
module "internal_service" {
  source = "patterns/service"
  name   = "auth-provider"
}
```

Each pattern encapsulates best practices for that specific use case. Teams don't need to know about VPCs, security groups, or load balancer configurations - the pattern handles it. **When you make the right way the easy way, standards follow naturally.**

## Real Ownership

Your platform needs clear ownership, but not centralised control. Platform teams should own interfaces and patterns. Product teams should own their implementations. Standards should emerge from usage, not committees.

The build vs buy decision becomes simpler too. Build when it gives you competitive advantage. Buy when it doesn't. **Never build something you can steal from open source.** The real skill is in composition - taking existing pieces and assembling them into something that serves your specific needs.

## Measuring What Matters

Forget vanity metrics like platform adoption. **What matters is speed and autonomy.** How long does it take to get from commit to production? How many steps in a deploy? How often do teams need platform support? These numbers tell you if your platform's actually helping.

The most telling metric? How many teams have built their own tools. If teams are building their own solutions, your platform's missing something. If they're not, you're either perfect (unlikely) or too controlling (probable).

## Building It Right

Want to build a platform team that works? Start by finding your secret platform engineers. Look for the automated pipelines. Check who's building internal tools. See who other developers ask for help. These are your platform engineers in waiting.

Give them real time to focus on platform work. Twenty percent time isn't enough - you need dedicated capacity. Run platform sprints. Let teams fix their own pain points. **Most importantly, stop treating platform as a separate concern.** It's part of your product. Staff it accordingly.

Mix deep infrastructure knowledge with practical product experience. Let standards emerge from usage rather than committees. Make the right way the easy way through clear, simple patterns. **Your platform's job isn't to control - it's to accelerate.**

In the end, great platforms come from teams that understand both sides of the equation. They need the deep technical knowledge to build solid foundations and the practical experience to make them usable. Get that mix right, and everything else follows.

Next time we'll look at scaling platforms beyond the first team - dealing with federation, handling multiple business units, and maintaining standards without becoming a bottleneck. Spoiler: It's not about tools.