---
title: "Pragmatic TypeScript"
category: "Code & Craft"
order: 3
tags: ["typescript", "javascript", "types", "design"]
summary: "TypeScript adds massive value when used properly. Here's when to lean in, when to back off, and how to find the sweet spot of type safety."
draft: false
---

TypeScript's brilliant when used properly. The problem is most teams take it too far, turning simple JavaScript into a mess of unnecessary type declarations.

**Types aren't free**. Every interface, type guard and generic adds complexity to your codebase. You need to be ruthlessly pragmatic about where they add value.

Here's where types actually matter:

```typescript
// This needs proper typing - it's an API contract
interface UserResponse {
    id: string;
    name: string;
    roles: string[];
}

// This doesn't - TypeScript can figure it out
const user = {
    id: "123",
    name: "Dave",
    roles: ["admin"]
};
```

The interface matters because it's a contract with other systems. The object declaration doesn't need types because TypeScript's inference is brilliant at this stuff.

**Here's where most teams go wrong**:

```typescript
// Over-engineered nonsense
type UserStatus = "active" | "inactive" | "pending";
type UserRoles = "admin" | "user" | "guest";
type UserId = string & { readonly brand: unique symbol };

interface UserDetails {
    id: UserId;
    name: string;
    status: UserStatus;
    roles: UserRoles[];
}

// What you actually need
interface User {
    id: string;
    name: string;
    status: string;
    roles: string[];
}
```

The first version isn't more type-safe - it's just more complex. **You've added four new types that need maintaining for zero runtime benefit**.

Here's what actually matters:

```typescript
// Type this properly - it crosses system boundaries
async function fetchUser(id: string): Promise<User> {
    const response = await fetch(`/api/users/${id}`);
    return response.json();
}

// Don't type this - inference handles it perfectly
function formatUserName(user: User) {
    return `${user.name} (${user.roles.join(", ")})`;
}
```

The fetch needs typing because it's talking to an API. The formatter doesn't because it's just transforming data we already understand.

**Where types genuinely help**:

1. API contracts
2. Library interfaces
3. Complex data transformations
4. Public function signatures

**Where types get in the way**:

1. Internal implementation details
2. Simple data transformations
3. State management
4. Utility functions

The real power of TypeScript isn't catching every possible type error - it's documenting interfaces and catching bugs that actually matter.

Here's a practical example:

```typescript
// This needs types - it's a complex transformation
function transformUserData<T extends Record<string, any>>(
    data: T[],
    keyMap: Partial<Record<keyof T, string>>
): Record<string, any>[] {
    return data.map(item => {
        const transformed: Record<string, any> = {};
        Object.entries(keyMap).forEach(([oldKey, newKey]) => {
            if (newKey) transformed[newKey] = item[oldKey];
        });
        return transformed;
    });
}

// This doesn't - it's obvious what it does
function isAdmin(user: User) {
    return user.roles.includes("admin");
}
```

The transformer needs types because it's complex and generic. The admin check doesn't because it's dead simple.

**Where to be ruthless**:

1. Delete type annotations that mirror obvious inference
2. Avoid creating types for internal state
3. Don't make interfaces for single-use objects
4. Skip typing simple functions

**Where to invest time**:

1. API interfaces
2. Shared data structures
3. Complex generic functions
4. Public module boundaries

TypeScript's brilliant at catching real bugs and documenting interfaces. **Let it do that job instead of turning your codebase into a type theory exercise**.

The goal isn't perfect type safety - it's catching bugs that matter while keeping your code maintainable.

Want better TypeScript? Write less of it.