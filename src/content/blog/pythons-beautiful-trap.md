---
title: "Python's Beautiful Trap"
category: "Code & Craft"
order: 1
tags: ["python", "performance", "optimisation", "architecture"]
summary: "Python makes writing code so easy that you don't realise you're building a performance nightmare until it's too late. Here's how to get the best of both worlds."
draft: false
---

Python is brilliant. It's readable, expressive, and gets out of your way. **That's exactly why it's dangerous**.

I've watched countless teams fall into the same trap. They start with a simple script. It's beautiful. Self-documenting. Maintainable. Then it grows. And grows. **Until one day it's processing millions of records and everything grinds to a halt**.

The problem isn't Python - it's how we use it. We write code that looks perfect but performs terribly. Here's a classic example:

```python
# Looks beautiful, runs like a dog
processed_data = [
    complex_calculation(item)
    for item in massive_dataset
    if should_process(item)
]
```

Lovely, isn't it? Reads like English. **But it's silently murdering your memory**. That list comprehension is building a complete copy of your data in memory. On a real dataset, you've just doubled your RAM usage for no good reason.

Here's the same thing done right:

```python
# Looks slightly worse, runs properly
processed_data = (
    complex_calculation(item)
    for item in massive_dataset
    if should_process(item)
)
```

One character different. Parentheses instead of square brackets. **Suddenly you're using barely any memory at all**.

But that's just the start. The real problems hit when you try to scale. That Global Interpreter Lock everyone mentions but nobody explains? **It turns your 32-core machine into a glorified single-core processor**.

Here's what actually happens:

```python
# What you think you're doing
with ThreadPoolExecutor(max_workers=32) as executor:
    results = executor.map(process_item, items)

# What you're actually doing
with ThreadPoolExecutor(max_workers=1) as executor:
    # Because that's all the GIL allows
    results = executor.map(process_item, items)
```

The worst part? The code looks identical. **There's nothing in the syntax warning you that you're wasting 31 cores**.

Want to use those other cores? You need multiprocessing. But that comes with its own trap:

```python
# Looks fine, secretly serialising your entire dataset
with ProcessPoolExecutor(max_workers=32) as executor:
    results = executor.map(process_item, massive_dataset)
```

**Your data gets pickled and unpickled for every single worker**. With a large enough dataset, you're spending more time copying data between processes than actually processing it.

The solution? Think differently about how you structure your data:

```python
# Process data in chunks, not items
def process_chunk(items):
    return [process_item(item) for item in items]

chunks = chunk_dataset(massive_dataset, chunk_size=10000)
with ProcessPoolExecutor(max_workers=32) as executor:
    results = executor.map(process_chunk, chunks)
```

Now you're actually using those cores. **The processing overhead is negligible because you're sending fewer, larger chunks of data**.

This pattern repeats everywhere in Python. The obvious solution is usually the wrong one:

- List comprehensions vs generators
- Threading vs multiprocessing
- Objects vs dataclasses
- Inheritance vs composition

**The readable solution and the performant solution are usually different things**. But they don't have to be.

Here's what actually works:

1. Use generators everywhere you can
2. Process data in chunks, not items
3. Profile before optimising
4. Keep your functions pure
5. Make I/O the boundary between processes

Follow these rules and Python stops being a trap. **It becomes a genuine superpower**.

The real trick? Write the simple version first. Profile it. **Then optimise the bottlenecks that actually matter**.

Remember: Python's readability is a strength, but only if you know where it's hiding the cost. **Write beautiful code, but know what you're paying for it**.

Want to know the really brilliant part? Once you understand these patterns, you can write code that's both beautiful and fast. But that's another post entirely.