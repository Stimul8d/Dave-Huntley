---
title: "Erlang: The Original Microservice"
category: "Code & Craft"
order: 5
tags: ["erlang", "distributed systems", "microservices", "architecture"]
summary: "Everyone's reinventing distributed systems. Erlang solved this thirty years ago. Here's what we're all doing wrong."
draft: false
---

Your trendy microservice architecture is just a bad reimplementation of Erlang. **You're spending millions solving problems that Erlang solved in 1986.**

Ericsson built Erlang to handle telephone switches. Not web apps or microservices - proper telecom infrastructure where downtime meant actual financial losses and angry regulators. The kind of systems where "five nines" reliability wasn't a stretch goal, it was the minimum requirement.

**WhatsApp handled 2 million connections per server with Erlang.** Discord processes 5 million events per second with it. Bet365 runs their entire betting platform on it. While the rest of us are juggling containers and praying our service mesh holds up, they're running production systems that just work.

Think that's an exaggeration? You've got containers talking to containers, service meshes handling failover, and orchestration systems managing process supervision. Erlang shipped with all of this built in. Not as bolt-on frameworks. Not as external systems. **Built into the language itself.**

## The Original Solution

Before Docker, before Kubernetes, before anyone talked about microservices, Erlang gave you processes that couldn't share state, message passing for all communication, and hot code reloading. Sound familiar? **That's because you're rebuilding it. Less efficiently.**

## What Message Passing Actually Means

Here's how most microservices communicate:

```javascript
// A typical modern microservice handling payments
// Note all the undefined failure modes

// Service A - The API Gateway
app.post('/process-payment', async (req, res) => {
    try {
        // HTTP call that could fail in countless ways
        const result = await axios.post(
            'http://payment-service/process',
            req.body
        )
        res.json(result.data)
    } catch (error) {
        // What kind of error? Network? Service down?
        // Should we retry? Circuit break? Give up?
        res.status(500).json({ error: 'Payment failed' })
    }
})

// Service B - The Payment Processor
app.post('/process', async (req, res) => {
    // Process crashed? Container died? Network failed?
    // The calling service has no way to know
    res.json({ success: true })
})
```

HTTP calls between services. Retry logic everywhere. Circuit breakers. Load balancers. **Multiple points of failure with different failure modes.**

Here's Erlang:

```erlang
%% Service A - The payment requestor
%% Simple, clear message passing with built-in timeout handling
process_payment(Amount) ->
    % Send a message to the payment service, keeping track of who sent it
    payment_service ! {self(), process, Amount},
    % Wait for the response with a timeout
    receive
        {ok, Result} -> 
            {ok, Result};
        {error, Reason} -> 
            {error, Reason}
    after 5000 ->
        % Explicit timeout handling built in
        {error, timeout}
    end.

%% Service B - The payment processor
%% Clean message handling with no external dependencies
handle_payment() ->
    receive
        {From, process, Amount} ->
            Result = do_process_payment(Amount),
            % Send the result back to whoever asked
            From ! {ok, Result}
    end.
```

Message passing built in. Timeouts handled. Failure modes explicit. **No external dependencies needed.**

## Let It Crash

Everyone talks about graceful failure handling. Erlang's approach? **Let it crash.** Not because it's lazy - because it's right.

Your typical microservice:

```javascript
// Modern error handling - a maze of special cases
class PaymentService {
    async process(payment) {
        try {
            // Multiple points of failure
            await this.validatePayment(payment)
            await this.checkFraud(payment)
            await this.processPayment(payment)
            await this.notifyUser(payment)
        } catch (error) {
            // Trying to handle every possible error case
            if (error instanceof ValidationError)
                return { error: 'Invalid payment' }
            if (error instanceof FraudError)
                return { error: 'Payment suspicious' }
            if (error instanceof ProcessingError)
                return { error: 'Payment failed' }
            // What about NullPointerException?
            // Network timeouts?
            // Out of memory?
            return { error: 'Unknown error' }
        }
    }
}
```

Defensive programming everywhere. Try-catch blocks around everything. Error handling mixed with business logic. **Pure noise.**

Erlang:

```erlang
% A clean payment service implementation
% Notice the lack of error handling code
-module(payment_service).
-behaviour(gen_server).

% The actual business logic - no error handling in sight
handle_call({process, Payment}, _From, State) ->
    Result = do_process_payment(Payment),
    {reply, Result, State}.

% Standard setup code - the supervisor handles failures
init([]) ->
    {ok, #state{}}.

terminate(_Reason, _State) ->
    ok.
```

No error handling in the business logic. The supervisor handles failures. **If it crashes, restart it. If it keeps crashing, restart the whole group.** Simple, reliable, battle-tested.

## Real Distribution

Your microservice architecture spends thousands of lines of YAML configuring containers, orchestration, service discovery and load balancing.

Erlang:

```erlang
% Starting a process on another node
% This is all you need for distributed computing
spawn('nodeB@host', fun() -> process_payment(Amount) end).

% On the other node - nothing special needed
% The runtime handles all the distribution details
```

**No containers. No orchestration. No service mesh.** It's all built in.

## Hot Code Reloading

Want to update a service? With microservices you're building new containers, pushing to registries, updating deployments and praying nothing breaks during the rolling restart.

Erlang:

```erlang
% Reload a module's code while the system is running
l(payment_service).  % That's it - no downtime needed
```

**Code reloaded. No downtime. No deployment pipeline. No container orchestration.**

## What We Lost

Modern microservices have reinvented every wheel Erlang built. We've replaced elegant simplicity with layers of complexity. **We're not building distributed systems. We're building distributed problems.**

Each layer adds complexity. Each abstraction adds failure modes. Each service adds points of failure. And we're paying for the privilege with both money and reliability.

## Why It Matters

This isn't about using Erlang. **It's about understanding that our "modern" solutions often reinvent wheels that have been rolling smoothly for decades.**

The next time you're writing another circuit breaker or debugging a service mesh, remember: you're probably reimplementing Erlang, just worse.

Sometimes the old ways aren't just better. **They're the right solution we forgot about.**
