export interface Principle {
  id: number;
  title: string;
  summary: string;
  description: string;
}

export const principles: Principle[] = [
  {
    id: 1,
    title: "Declare Agent Identity",
    summary: "Define domain and boundaries",
    description: "An agent is an actor with a defined domain. Give it a stable identity that establishes what it exists to do and the boundaries within which it operates. This includes a clear goal or charter, an explicit scope of responsibility, an owner, and an authority profile describing what actions are permitted without escalation."
  },
  {
    id: 2,
    title: "Version the Agent",
    summary: "Serialize, diff, and replay",
    description: "Treat the agent as a versioned bundle: prompts, policies, tool contracts, memory schemas, planners, and evaluators. If you cannot serialize it, diff it, and replay it, you cannot debug it or claim meaningful progress."
  },
  {
    id: 3,
    title: "Make Hyperparameters Configurable",
    summary: "Control behavior with levers",
    description: "Agent behavior should be controlled by configurable levers rather than code changes. These include model selection, decoding parameters, planning depth, reflection depth, retrieval settings, tool availability, and budget targets."
  },
  {
    id: 4,
    title: "Run Under a Harness",
    summary: "Execute inside a standard harness",
    description: "Agents must execute inside a standard harness that controls inputs, metrics, budgets, and tooling. The harness defines what counts as a run, how failures are handled, how retries work, and when execution terminates."
  },
  {
    id: 5,
    title: "Externalize Context",
    summary: "Context lives outside the model",
    description: "The context window is a materialized view of external context. Authoritative context lives outside the model in explicit, durable state such as files, databases, memories, plans, indexes, retrieved facts, and working sets."
  },
  {
    id: 6,
    title: "Version Your Evals",
    summary: "Evaluators are artifacts, not opinions",
    description: "Evaluators, rubrics, judge prompts, scoring functions, and datasets are artifacts, not opinions. Store and version them so changes in scores are attributable to agent changes rather than shifting measurement."
  },
  {
    id: 7,
    title: "Declare Guardrails",
    summary: "Define the non-negotiables",
    description: "Guardrails are the agent's non-negotiables: termination rules, safety constraints, permission boundaries, schema validity requirements, grounding requirements, escalation rules, and data-handling constraints."
  },
  {
    id: 8,
    title: "Optimize With Budgets",
    summary: "Make tradeoffs visible",
    description: "Budgets are part of the objective. Tokens, latency, tool calls, and cost must be measured and optimized alongside quality or the system will drift into impractical behavior."
  },
  {
    id: 9,
    title: "Make Decisions Traceable",
    summary: "Emit machine-readable decision records",
    description: "Agents should emit a machine-readable decision record that makes outcomes inspectable without exposing private reasoning. This record should capture what was decided, what evidence was used, what external actions were taken, and what guardrails or approvals were involved."
  },
  {
    id: 10,
    title: "Package Tools as Components",
    summary: "Reusable with clear interfaces",
    description: "Tools are reusable components. A packaged tool has a schema-defined interface, documented semantics, explicit permission scope, defined failure modes, timeouts, idempotency or retry behavior, and a harness-friendly mock or simulator."
  },
  {
    id: 11,
    title: "Enable Human Override",
    summary: "Interruptible, steerable, resumable",
    description: "Agents must be operable in the real world. They should be interruptible, steerable, and resumable. Provide mechanisms to stop, pause, or approve steps, override tool choices, inject constraints, and hand off to a human with a clear audit trail."
  },
  {
    id: 12,
    title: "Treat Outputs as Training Data",
    summary: "Production feeds back into the system",
    description: "Every run produces value beyond its immediate result. Persist outputs, intermediate artifacts, outcomes, and human edits so they can be reused for future training, preference learning, eval expansion, and regression prevention."
  }
];
