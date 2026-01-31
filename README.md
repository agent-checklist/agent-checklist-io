# Agent Checklist

Agent Checklist is a set of practical principles for building autonomous agents that can be safely operated, maintained, and evolved over time.

As agents move beyond single prompts and stateless calls, they begin to manage state, make decisions, invoke tools, incur cost, and take actions in the world. Without clear structure, these systems become difficult to understand, debug, and control.

This repository defines a shared foundation for agent design that prioritizes operability, safety, and long-term maintainability.

## Purpose

The goal of Agent Checklist is to help teams design agent systems whose behavior is explicit rather than implicit.

The principles focus on:

- Clear agent identity and boundaries
- Versioned and reproducible behavior
- Externalized state and configuration
- Observable execution and traceable decisions
- Human oversight and control

These concerns are treated as first-class design requirements, not implementation details.

## Scope

Agent Checklist is intended for:

- Persistent or long-running agents
- Agents that plan, reason, or act across multiple steps
- Tool-using agents with real side effects
- Systems that must operate under cost, safety, or compliance constraints
- Teams that need to debug, audit, or evolve agent behavior over time

The checklist is model-agnostic and framework-agnostic. It can be applied to agents built with any LLM, orchestration layer, or infrastructure stack.

## Contributing

Contributions are welcome.

If you have operational experience building or running agent systems, feedback and proposed improvements are encouraged. Contributions should focus on clarity, enforceability, and real-world applicability.

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on proposing changes, reporting issues, and submitting pull requests.

## Cite / Reference

If you use or adapt this checklist in writing, talks, or documentation,
a link back to this repository is appreciated.

Example:
"Agent Checklist – A 12-factor–inspired set of principles for building agents"
https://github.com/agent-checklist/agent-checklist-io
