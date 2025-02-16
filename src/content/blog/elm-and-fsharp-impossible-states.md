---
title: "Elm and F#: Making Invalid States Impossible"
category: "Code & Craft"
order: 3
tags: ["elm", "f#", "types", "domain modeling"]
summary: "Most bugs come from states that shouldn't exist. Here's how Elm and F#'s type systems eliminate entire classes of errors by making invalid states unrepresentable."
draft: false
---

When we talk about making invalid states unrepresentable, we mean exactly that - making it **mathematically impossible** to create broken states in your system. Not catching them with tests. Not handling them at runtime. Making them impossible to exist in the first place.

## A Different Kind of Type System

Elm and F# aren't just statically typed languages. They're built on a fundamentally different approach to types. One where:
- Null doesn't exist
- Every function returns a value
- Every case must be handled
- Types are proved, not checked

This isn't academic theory - it's practical engineering. When you can't create null values, you can't get null pointer exceptions. When every case must be handled, you can't forget error states. When types are proved rather than checked, entire categories of runtime errors become impossible.

## Why Today's Types Fail Us

Look at how we typically model a remote data fetch:

```typescript
interface UserProfile {
  loading: boolean
  error: Error | null
  data: User | null
}
```

This type allows sixteen possible states. Only three make sense:
- Initial (not started)
- Loading (in progress)
- Done (success or failure)

Every other combination is nonsense. Loading with data? Error with data? Loading with error? Pure noise, yet we write code to handle it all.

## A Better Way

Here's that same data fetch in Elm:

```elm
type RemoteData
    = NotAsked
    | Loading
    | Success User
    | Failure Error
```

No nulls. No impossible combinations. No runtime surprises. The compiler won't let you forget to handle any case. Not through linting or tests - through mathematical certainty.

## Beyond Simple Examples

This matters most when money's involved. Here's a typical payment system in Java:

```java
class Order {
    String status;
    String paymentId;
    String refundId;
    
    boolean isRefundable() {
        return status.equals("PAID") 
            && paymentId != null 
            && refundId == null;
    }
}
```

Every property can be null. Status can be any string. Nothing stops you creating an order that's both paid and refunded with no payment ID. Pure nonsense, yet perfectly valid according to the type system.

Here's reality in F#:

```fsharp
type Order =
    | Draft
    | AwaitingPayment
    | Paid of PaymentId
    | Refunded of PaymentId * RefundId

let isRefundable order =
    match order with
    | Paid _ -> true
    | _ -> false
```

That's it. No null checks. No string comparisons. No runtime surprises. You literally can't create an invalid order - the type system won't let you.

## Pattern Matching with Meaning

Notice how pattern matching works here. The compiler forces you to handle every case. Not through warnings or linting - it simply won't compile if you forget one.

Change the Order type? The compiler shows you every piece of code that needs updating. Not through static analysis or tests - through mathematical proof.

## Beyond Theory

I've seen countless teams spend days debugging payment processing issues. Systems getting into "impossible" states - paid with refund IDs but no payment ID, refunds against non-existent payments, partial states that shouldn't exist.

The same systems in Elm or F#? These bugs can't exist. Not because we're better at testing, but because the type system makes them impossible to create.

## Making it Work

You don't need to switch languages to benefit from this thinking. Even in TypeScript:

```typescript
type Order =
    | { status: 'draft' }
    | { status: 'awaiting-payment' }
    | { status: 'paid', paymentId: string }
    | { status: 'refunded', paymentId: string, refundId: string }
```

Not as elegant, but it captures the core idea: Model your states so that invalid combinations can't exist.

## The Reality

Every payment bug I've seen in production came from the same root cause: systems that could represent invalid states. Not from coding errors, not from edge cases, but from fundamental modeling problems that better type systems would have prevented.

You don't have to live with these problems. You don't have to spend days debugging impossible states. With the right type system and proper modeling, these entire classes of bugs simply cease to exist.

The next time you're writing another null check or type guard, ask yourself: Why are you allowing these invalid states to exist at all?

Better yet - stop allowing them. Use types that make the impossible impossible.
