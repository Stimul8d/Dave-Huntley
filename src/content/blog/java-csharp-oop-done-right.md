---
title: "Java & C#: OOP Done Right"
category: "Code & Craft"
order: 4
tags: ["java", "c#", "oop", "software design"]
summary: "Object-oriented programming isn't dead - it was just done wrong. Here's what Java and C# can teach us about building maintainable systems."
draft: false
---

Everyone loves to hate on Java and C#. Too verbose. Too ceremonial. Too "enterprise". They're missing the point entirely.

## The Real Value of OOP

Most developers learn object-oriented programming through trivial examples. Animals that make noises. Shapes that calculate areas. Pure nonsense that makes OOP look pointless.

OOP is about managing complexity in large systems. Not about inheritance hierarchies or getter methods, but about clearly defined boundaries and explicit dependencies.

## Managing State is Hard

Every system that lasts long enough becomes a state management problem. The dream of pure functions transforming immutable data falls apart the moment you need to track who changed what, when and why.

Here's what most codebases end up with:

```typescript
// Data model
interface User {
    id: string
    name: string
    email: string
    preferences: {
        theme: string
        notifications: boolean
    }
}

// API endpoint
app.put('/users/:id/preferences', async (req, res) => {
    const user = await db.users.findOne({ id: req.params.id })
    user.preferences = req.body
    await db.users.save(user)
    res.json(user)
})

// React component
function UserPreferences({ user }) {
    const updatePreferences = async (preferences) => {
        const response = await fetch(`/api/users/${user.id}/preferences`, {
            method: 'PUT',
            body: JSON.stringify(preferences)
        })
        // Cross your fingers and hope
    }
}
```

Looks clean. Works fine. Right up until you need to prevent conflicting updates, track who changed what, or maintain consistency across a dozen microservices. Then it falls apart spectacularly.

Here's what proper state management looks like:

```csharp
public class User 
{
    private readonly IAuditLog _auditLog;
    private readonly IEventBus _eventBus;
    
    public string Id { get; private set; }
    public string Email { get; private set; }
    private UserPreferences _preferences;
    
    public Result<UserPreferences> UpdatePreferences(
        UserPreferences newPreferences,
        string reason,
        User modifier
    ) {
        if (!CanModify(modifier))
            return Result.Unauthorized();
            
        var oldPreferences = _preferences;
        
        _preferences = newPreferences;
        _auditLog.Record(
            "preferences_updated",
            oldPreferences,
            newPreferences,
            reason,
            modifier
        );
        
        _eventBus.Publish(new PreferencesUpdatedEvent(
            Id, oldPreferences, newPreferences
        ));
        
        return Result.Success(_preferences);
    }
}
```

More code? Yes. More maintainable? Also yes. Every state change is tracked. Every modification is audited. Every update publishes events that other systems can react to. This isn't ceremony - it's survival.

## Dependencies Matter

The Node example above hides its dependencies. That works brilliantly until you need different payment providers for different regions, mock gateways for testing, or circuit breakers for external calls.

Suddenly explicit dependencies start looking rather smart:

```csharp
public class PaymentService 
{
    private readonly IPaymentGatewayFactory _gatewayFactory;
    private readonly IAuditLog _auditLog;
    private readonly ICircuitBreaker _breaker;
    
    public PaymentService(
        IPaymentGatewayFactory gatewayFactory,
        IAuditLog auditLog,
        ICircuitBreaker breaker
    ) {
        _gatewayFactory = gatewayFactory;
        _auditLog = auditLog;
        _breaker = breaker;
    }
    
    public async Task<Result<PaymentResult>> ProcessPayment(
        Payment payment
    ) {
        var gateway = _gatewayFactory.CreateFor(payment.Region);
            
        return await _breaker.ExecuteAsync(async () => {
            var result = await gateway.Charge(payment);
            await _auditLog.Record("payment_processed", payment);
            return result;
        });
    }
}
```

This isn't ceremony - it's clarity. Every dependency is explicit. Testing is trivial. New requirements slot in naturally.

## Modern C# vs Java

C# embraced functional features:

```csharp
public record PaymentResult(
    string TransactionId,
    decimal Amount,
    string Currency
);

public record class Payment 
{
    public required string Id { get; init; }
    public required decimal Amount { get; init; }
    public required string Currency { get; init; }
}
```

Java doubled down on encapsulation:

```java
public final class Payment {
    private final String id;
    private final BigDecimal amount;
    private final String currency;
    
    private Payment(Builder builder) {
        this.id = builder.id;
        this.amount = builder.amount;
        this.currency = builder.currency;
    }
    
    public static Builder builder() {
        return new Builder();
    }
}
```

Both work. Both have their place. The difference is in what they optimise for - C# for expressiveness, Java for control.

## When to Use What

OOP isn't always right. Pure functions work brilliantly for data transformations, validation rules, and business calculations. Don't force objects where simple functions would work better.

But when you're managing complex state, handling side effects, or maintaining audit trails? That's where proper OOP shines. Not because it's fancy or enterprise, but because it gives you the tools to manage complexity that actually matters.

## The Reality Check

Your clever functional solution works brilliantly for small projects. But there's a reason banks don't run on Elm. Large systems need explicit state management, clear audit trails, and controlled evolution.

Java and C# force you to think about these things. Not because they're old or enterprise, but because they're designed for systems that need to last.

The next time you mock Java's verbosity or C#'s ceremony, ask yourself: Would your clever one-liner survive a decade of maintenance by a hundred different developers?

Sometimes, boring is better. Sometimes, explicit is right. Sometimes, the enterprise way isn't completely mad.
