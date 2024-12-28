---
title: "Why Refactoring Should Be Your Priority"
publishDate: "2024-12-28"
category: "Engineering Excellence"
tags: ["refactoring", "code quality", "technical debt", "software design"]
summary: "Why unclear code is killing your productivity and what to do about it"
draft: false
---

Developers come to work each day in the hope of refactoring. Yep! Every developer reading this that has worked with crumby code is nodding their head right now. I'll explain why that is but also I want to make the case that it is absolutely in the interest of an organisation to prioritise refactoring in to every iteration/thing you do. 

I'm going to try to illustrate the reasons why without resorting to any code. Non techies are welcome here. If you don't understand what refactoring is, fear not, you will soon.

## The Setup
Let's imagine you are a Manager, a Product person or maybe a Stakeholder at Big Awesome Co for a moment. You work alongside (the nicer way of saying above or over) a team of developers who get through a reasonable amount of work per sprint/whatever But you know they aren't loving their job a lot of the time.

They say the code is "confused, "misleading" and "bloated". They say there aren't enough tests. Maybe they say they need to rewrite it. They might be right. More often than not though, it's more of a red flag that refactoring isn't happening.

## What we want: clarity of intent
We've all received a rushed email from someone that doesn't make any sense. Sometimes the email is of a critical nature and you've got to work with it. You feel like shouting "I don't even know what that means!". It's no fun.

But code doesn't work that way though does it? It either works or doesn't surely! 

I'm afraid it's not that simple. Let's see why.

## The code is confused
Read this sentence aloud for me.

"The complex houses married and single soldiers and their families."

Say what?!

That sentence is grammatically correct. But it's really confusing, isn't it! 

It's a special kind of sentence called a 'Garden Path Sentence'. They're fun little distractions, but not so much fun if you have to decipher them all day, every day. Read it again, it makes sense I promise.

Still not got it? Try this 'refactored' version...

The complex, houses married and single soldiers, and their families. [Penny drops].

It means that single soldiers, as well as married soldiers and their families, are housed in the complex.

Code can be written in a way that works, is syntactically correct, but confusing as hell.

They say the code is "confused". This is what they mean.

## The code is misleading
"More people have been to Russia than I have"

That one makes sense right? Except it doesn't.

This is an example of something called the 'Comparative Illusion' (sometimes called an Escher sentence). At first blush, it looks like it makes sense. But it does not. Go on, try to make sense of it.

Code can be written in a way that looks right, and is simple, but does totally the wrong thing.

If it was our actual intent to say "People have been to Russia more than I have", we could refactor it to say that.

They say the code is "misleading". This is what they mean.

## The code is bloated
"The young male rats that were from the same colony as the rats with symptoms of the disease, but which do not show sign of the disease at this stage of their development were used as the control group"

This one makes, sense and is grammatically correct. But it's a bit of a mouthful eh! Hard to wrangle into a coherent thought. Let's rewrite it.

"The symptom-free, young male rats were used as the control group. 

These rats were from the same colony as the rats showing symptoms of the disease"

This is the most common one we encounter as programmers. It's an example of something that started out simple and became more complex over time by adding extra clauses. We can refactor the original sentence by separating the two statements and make it easier to work with and understand. 

They say the code is "bloated". This is what they mean.

## Summing up: What are you paying for?
Okay, let your brain take a breath for a second. That kind of mental gymnastics is really tiring isn't it?

Nobody in their right mind would want to do that all day long. 

Serious question though… Do we really want to invest our hard earned money in puzzles like that? Or do we want software that is easy to understand, maintain and extend? 

Every time we say there isn't time for refactoring, we force people to spend their time picking apart code and trying to figure out what in the hell it's supposed to do. 

That is a really bad investment.

Every new feature will be harder to integrate. Every bug will be more difficult to fix. Eventually, you will grind to halt. And that's what makes refactoring a business problem.

Favour clarity in design. Prioritise refactoring.