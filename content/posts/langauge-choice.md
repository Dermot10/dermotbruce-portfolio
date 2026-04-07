---
title: "System Design Choices"
date: "2026-04-07"
tags: ["Software Engineering", "System Design", "Go", "Python"]
summary: "Why I chose Go for performance-critical systems and Python for AI-driven workloads"
---------------------------------------------------------------------------------------------

# System Design Choices

## Choosing the Right Tool for the Job

One of the most important lessons in software engineering is that there is no universally “best” technology — only the right tool for a given problem.

As systems grow more complex, especially with the rise of distributed architectures and AI-driven features, design decisions become less about preference and more about trade-offs. Performance, scalability, developer experience, and ecosystem maturity all play a role.

For my sec-ops decision engine, I’ve started to lean into a hybrid approach: using Go for performance-critical components, and Python for anything related to AI and machine learning.

---

## Why Go for the Gateway

The gateway sits at the edge of the system. It’s responsible for handling incoming alert requests, routing traffic, own the infrastructure integration and process any worker results.

This layer needs to be fast, predictable, and efficient under load.

Go is particularly well-suited to this role:

- **Performance**: Its compiled nature and lightweight concurrency model (goroutines) make it ideal for high-throughput services.
- **Simplicity**: Go’s minimalism reduces cognitive overhead, which is valuable when building infrastructure components.
- **Concurrency**: Handling multiple requests efficiently is a core requirement for a gateway, and Go excels here.
- **Operational reliability**: Static binaries and low runtime overhead make deployments straightforward.

In this context, Go isn’t just a preference — it’s a practical choice for building resilient, production-ready services.

---

## Why Python for AI

On the other side of the system sits a very different problem space: AI.

Here, performance is less critical for the workers than access to powerful AI libraries, rapid experimentation, and ease of iteration.

Python dominates this ecosystem for good reason:

- **Rich ecosystem**: Libraries for machine learning, NLP, and data processing are unmatched.
- **Speed of development**: Prototyping and iterating on ideas is significantly faster.
- **Community and tooling**: The pace of innovation in AI is tightly coupled with Python, so future improvements can be made.

Rather than forcing a single language across the entire stack, it makes more sense to embrace Python where it provides the most value.

---

## Bridging the Gap

Of course, splitting responsibilities across languages introduces its own challenges.

Communication between services becomes a key design consideration. Whether through REST, gRPC, or asynchronous messaging, the interface between Go and Python services needs to be well-defined and resilient.

This is where system design becomes more than just technology selection:

- Clear service boundaries
- Strong contracts between components
- Observability across the system
- Thoughtful handling of latency and failure modes

The goal isn’t just to make components work — it’s to make them work together reliably.

---

## Why This Approach Works for Me

I’ve always been drawn to systems thinking — understanding how different parts of a system interact, rather than focusing on a single layer.

This approach reflects that mindset:

- Go allows me to build solid, high-performance infrastructure
- Python enables rapid exploration in the AI space
- The boundary between them becomes an intentional design decision, not a limitation

It also mirrors how modern systems are evolving. Polyglot architectures are no longer the exception — they’re often the most pragmatic solution.

---

## Key Takeaway

- Good system design is about trade-offs, not preferences. Choosing the right tool for each part of the system leads to better performance, faster iteration, and more maintainable architectures.

---
