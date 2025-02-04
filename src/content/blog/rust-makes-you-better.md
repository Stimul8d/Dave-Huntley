---
title: "Rust Makes You Better"
category: "Code & Craft"
order: 2
tags: ["rust", "systems programming", "performance", "safety"]
summary: "Everyone moans about Rust's learning curve. They're missing the point - the compiler's constraints are exactly what make you a better programmer."
draft: false
---

Rust has a reputation for being hard to learn. **Good. That's exactly what makes it brilliant**.

The compiler isn't just checking your code - it's forcing you to think properly about ownership, lifetimes, and concurrency. These are the exact things that bite you in every language, but usually at runtime when it's far too late.

Let's look at what seems like simple code in C++:

```cpp
std::vector<int> get_numbers() {
    std::vector<int> numbers = {1, 2, 3};
    return &numbers;  // Creates a dangling pointer
}
```

This function creates a list of numbers and returns a pointer to it. The problem with that is the list gets destroyed when the function ends. Your pointer now points to freed memory. **Your programme's about to crash and burn**.

Now look at Rust:

```rust
fn get_numbers() -> &Vec<i32> {
    let numbers = vec![1, 2, 3];
    &numbers  // Compiler error: borrowed value does not live long enough
}
```

Rust stops you cold. It sees that `numbers` only exists inside this function, so returning a reference would be dangerous. **The compiler just prevented a crash before your code even ran**.

Here's another classic footgun. In C++, you can write this:

```cpp
void update_counter(int& counter) {
    counter += 1;  // Potential data race
}
```

That's a shared counter with no synchronisation. Run it in multiple threads and your data's corrupted. The compiler won't warn you. Your tests might not catch it. **You'll find out in production at 3am**.

Rust makes this impossible:

```rust
fn update_counter(counter: &mut i32) {
    *counter += 1;  // Compiler error: cannot borrow `*counter` as mutable
}
```

The compiler spots the potential data race immediately. It's not being pedantic - it's stopping you from writing broken concurrent code.

After a week of fighting the borrow checker, something clicks. You start thinking about ownership automatically. Data races become obvious. Memory leaks feel wrong before you write them.

That knowledge transfers everywhere. Back in Python, you catch yourself thinking "wait, who owns this data?" In Go, you spot lifetime issues before they hit production.

**Rust's difficulty isn't a bug. It's the whole point**.

Those compiler constraints that everyone whines about? They're teaching you to write better code in every language. You're not just learning Rust - you're learning how to think about systems properly.

When you need bare metal performance with zero runtime overhead, Rust delivers:

```rust
fn process_data(data: &[u8]) -> Vec<u8> {
    data.iter()
        .map(|&x| x * 2)
        .collect()
}
```

This isn't just clean code - it compiles down to the same assembly you'd get from C++. **Zero cost abstractions that actually deliver**.

Threading? Rust makes the safe option the obvious one:

```rust
use std::sync::Arc;

let shared_data = Arc::new(vec![1, 2, 3]);
let handle = thread::spawn(move || {
    // Can't accidentally modify shared data
    println!("{:?}", *shared_data);
});
```

**No data races. No runtime overhead. No surprise crashes at midnight**.

The compile times are brutal. The error messages can be overwhelming. But that's not the point.

Rust isn't just giving you tools - it's teaching you how to use them properly. **Every compiler error is a lesson in systems thinking**.

Want to write better code? Learn Rust. Not because you'll use it everywhere, but because it'll make you think properly about code everywhere else.

And when you do need that perfect mix of safety and performance? **You'll already know how to think in Rust**.