---
title: "Platform Engineering from the Trenches: Scaling Without Imploding"
category: "Engineering Excellence"
order: 6
series: "Platform Engineering from the Trenches"
part: 3
tags: ["platform-engineering", "scaling", "federation", "engineering"]
summary: "Your platform worked for one team. Now you've got twenty. Here's how to scale without drowning in process."
draft: false
---

When platforms grow beyond their first team, everything breaks. The practices that worked brilliantly for one team become bottlenecks for twenty. Here's how to scale without drowning in process.

## The Multi-Team Problem

Most platform teams crumble under scale. Not because the technology fails, but because they try to centralise everything. Your carefully curated platform becomes a backlog of pull requests from teams you barely work with.

Here's what actually lands in your PR queue:

```hcl
# PR #127: Add custom health check support for auth service
module "platform_service" {
  source = "central-platform/service/v1"
  name   = "auth-service"
  
  health_check = {
    type = "tcp"  # Was http only
    port = 9090   # Non-standard port needed
    interval = 45 # Longer interval for slow startup
  }
}

# PR #128: Add structured logging for payment processing
module "platform_service" {
  source = "central-platform/service/v1"
  name   = "payment-service"
  
  logging = {
    format = "json"      # Team needs ELK integration
    fields = ["txn_id"]  # Extra fields for tracing
    retention = 90       # Compliance requirement
  }
}

# PR #129: Custom scaling for notification spikes
module "platform_service" {
  source = "central-platform/service/v1"
  name   = "notification-service"
  
  scaling = {
    min = 10        # Higher baseline needed
    max = 100       # Support event spikes
    metric = "sqs"  # Scale on queue depth
  }
}
```

Each PR is reasonable. Each team has valid needs. **But your platform team has become a bottleneck.** They're reviewing changes they don't fully understand for use cases they've never seen. This isn't scaling - it's centralised planning with extra steps.

## Federation Done Right

Platforms should make the right thing easy. That applies to platform development too. Stop trying to control everything centrally and start treating your platform like what it is - a product other teams build on.

Here's what good federation looks like:

```hcl
# Core platform pattern
module "core_service" {
  source = "platform/core/v1"
  name   = "payment-service"
}

# Team-specific extension
module "payment_service" {
  source = "platform/patterns/payment"
  
  core_config = module.core_service
  
  # Team owns this code, platform team reviews interfaces
  payment_specific_config = {
    processor = "stripe"
    retry_pattern = "exponential"
  }
}
```

**Core patterns stay simple. Teams extend them safely.** Platform teams review interfaces, not implementations. Everyone moves faster.

## Standards vs Guidelines

Some things need to be standard - security, compliance, core infrastructure. Everything else should be guidelines. The moment you try to standardise things teams should own, you create resistance.

Take logging. You need certain fields for security and debugging. Everything else is preference:

```hcl
# Core logging pattern - enforced
module "logging" {
  source = "patterns/observability"
  
  required_fields = {
    service_name  = var.name
    environment   = var.env
    trace_id      = var.trace_id
  }
  
  # Teams can add what they need
  additional_fields = var.team_fields
}
```

**Make non-negotiables clear and make everything else flexible.** Good standards spread through adoption, not enforcement.

## Multiple Business Units

Different business units have different needs. Retail teams need different patterns from data science teams. Finance has different compliance requirements from marketing. **Trying to force one platform to serve everyone perfectly serves no one well.**

Instead of one monolithic platform, build a platform of platforms:

```hcl
# Core capabilities everyone needs
module "enterprise_baseline" {
  source = "platform/core"
  
  security_baseline = "enterprise"
  compliance_level = var.business_unit_compliance
}

# Business unit specific patterns
module "retail_service" {
  source = "retail/patterns/service"
  
  core = module.enterprise_baseline
  retail_specific = var.config
}
```

Platform teams become enablers, not gatekeepers. They help business units build and maintain their own patterns while ensuring core standards.

## Keeping It Together

Mixed teams naturally form platform guilds at scale. Not another approval board - a genuine community of practice. Engineers who've solved similar problems sharing what works.

The trick isn't enforcing consistency - it's making consistency beneficial. Share code, share patterns, share learnings. Let teams copy what works and adapt what doesn't. **Good ideas spread naturally when they actually solve problems.**

## The Federation Pattern

Core platform teams need to own security foundations, compliance requirements, and core infrastructure patterns. Business unit teams own their implementation details, deployment patterns, and team tooling. When something's truly common, pull it up. When something's specific, push it down.

Most companies overcomplicate this. They build elaborate governance structures, platform review boards, and standards councils. None of it works because **you can't process your way to good engineering.**

Great platforms at scale need rock-solid core patterns that teams can extend safely. They need clear interfaces, clean boundaries, and real autonomy balanced with real responsibility. Review the interfaces, not the implementations. Share knowledge, not control.

## The Reality of Scale

Your platform exists to accelerate delivery safely. Whether you're supporting one team or one hundred, that fundamental truth doesn't change. The only question is whether you're helping or getting in the way.

Next time you're stuck in a platform review board meeting, ask yourself: Is this making things better, or just making them more complicated? The answer tells you everything you need to know.

## Why It All Matters

This series started with a simple truth - most developer platforms fail because they focus on the wrong things. They fail because they prioritise control over enablement, process over progress, and standardisation over speed.

Building a platform that works means understanding what developers actually need. Building a team that delivers means mixing deep expertise with practical experience. Scaling that platform means trusting teams to solve their own problems while giving them the tools to solve them well.

Get these things right and you build more than a platform. You build a capability that grows with your organisation. Get them wrong and you're just adding process and calling it progress.

The choice is yours. Choose wisely.