# Agent Checklist

This is an agent-specific set of principles that builds on established software and operational best practices. It focuses on what makes agents durable, inspectable, and safe to evolve over time.

---

## 1. Declare Agent Identity

An agent is an actor with a defined domain. Give it a stable identity that establishes what it exists to do and the boundaries within which it operates. This includes a clear goal or charter, an explicit scope of responsibility, an owner, and an authority profile describing what actions are permitted without escalation.

Identity is not primarily about prompt control. It is about constraining the problem space the agent is allowed to reason over and act within, so behavior is shaped by domain and intent rather than ad hoc instructions.

---

## 2. Version the Agent

Treat the agent as a versioned bundle: prompts, policies, tool contracts, memory schemas, planners, and evaluators. If you cannot serialize it, diff it, and replay it, you cannot debug it or claim meaningful progress.

Versioning makes improvement explicit and regressions explainable.

---

## 3. Make Hyperparameters Configurable

Agent behavior should be controlled by configurable levers rather than code changes. These include model selection, decoding parameters, planning depth, reflection depth, retrieval settings, tool availability, and budget targets.

Levers exist to explore tradeoffs safely and quickly. The full set of lever values used in a run should always be recorded so outcomes are attributable.

---

## 4. Run Under a Harness

Agents must execute inside a standard harness that controls inputs, metrics, budgets, and tooling. The harness defines what counts as a run, how failures are handled, how retries work, and when execution terminates.

Running under a harness makes agent performance a property of the system, not a performance of the demo.

---

## 5. Externalize Context

The context window is a materialized view of external context. Authoritative context lives outside the model in explicit, durable state such as files, databases, memories, plans, indexes, retrieved facts, and working sets.

Each step compiles that external state into a prompt. Externalizing context keeps state inspectable, portable, and evolvable.

---

## 6. Version Your Evals

Evaluators, rubrics, judge prompts, scoring functions, and datasets are artifacts, not opinions. Store and version them so changes in scores are attributable to agent changes rather than shifting measurement.

Evals should be runnable in the same harness as production runs.

---

## 7. Declare Guardrails

Guardrails are the agent's non-negotiables: termination rules, safety constraints, permission boundaries, schema validity requirements, grounding requirements, escalation rules, and data-handling constraints.

Guardrails are not tuning levers. If a guardrail would be violated, the system must block, fail closed, or escalate in a predictable way. Guardrails should be explicit, machine-checkable, versioned, and enforced by the system, not implied by prompts.

---

## 8. Optimize With Budgets

Budgets are part of the objective. Tokens, latency, tool calls, and cost must be measured and optimized alongside quality or the system will drift into impractical behavior.

Budgets make iteration honest by making tradeoffs visible.

---

## 9. Make Decisions Traceable

Agents should emit a machine-readable decision record that makes outcomes inspectable without exposing private reasoning. This record should capture what was decided, what evidence was used, what external actions were taken, and what guardrails or approvals were involved.

Traceability enables transparency, accountability, and effective debugging.

---

## 10. Package Tools as Components

Tools are reusable components. A packaged tool has a schema-defined interface, documented semantics, explicit permission scope, defined failure modes, timeouts, idempotency or retry behavior, and a harness-friendly mock or simulator.

This keeps agents portable and prevents brittle, one-off integrations.

---

## 11. Enable Human Override

Agents must be operable in the real world. They should be interruptible, steerable, and resumable. Provide mechanisms to stop, pause, or approve steps, override tool choices, inject constraints, and hand off to a human with a clear audit trail.

Human override is how powerful systems remain safe and usable.

---

## 12. Treat Outputs as Training Data

Every run produces value beyond its immediate result. Persist outputs, intermediate artifacts, outcomes, and human edits so they can be reused for future training, preference learning, eval expansion, and regression prevention.

Improvement compounds only when production experience feeds back into the system in a disciplined, attributable way.
