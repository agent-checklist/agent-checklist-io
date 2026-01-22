export default function Vision() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-black selection:text-white">
      <main className="container mx-auto px-6 max-w-4xl pb-32">
        {/* Header with Back Link */}
        <nav className="pt-12 pb-16 flex justify-between items-center border-b-2 border-black">
          <a href="/" className="font-mono text-sm uppercase hover:bg-black hover:text-white px-2 py-1 transition-colors">
            ← Back to Checklist
          </a>
          <div className="font-mono text-xs uppercase tracking-widest">
            Vision
          </div>
        </nav>

        {/* Content */}
        <article className="pt-20 space-y-12">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-none mb-16">
            Vision
          </h1>

          <div className="text-xl md:text-2xl leading-relaxed font-light space-y-8 max-w-prose border-l-4 border-black pl-8 md:pl-12">
            <p>
              Agent systems are becoming persistent, stateful, and capable of taking real action. As they do, failures become harder to diagnose, behavior becomes harder to predict, and responsibility becomes harder to assign.
            </p>
            <p>
              <strong>Agent Checklist</strong> exists to provide a practical foundation for building agents that can be safely operated over time.
            </p>
            <p>
              The principles focus on making agent behavior explicit rather than implicit. Identity, boundaries, configuration, evaluation, and decision-making are treated as first-class design concerns, not implementation details.
            </p>
            <p>
              Instead of optimizing for novelty or autonomy alone, Agent Checklist emphasizes <em>operability</em>: the ability to understand what an agent is doing, why it did it, how it can be controlled, and how it can be changed without breaking trust.
            </p>
            <p>
              These guidelines are intentionally concrete. They are meant to be applied in real systems, enforced by tooling, and revisited as agents evolve. The goal is not to define what an agent can do, but what must be true for an agent to be reliable, maintainable, and accountable.
            </p>
            <p>
              Agent Checklist is a reference point for teams building agents that need to work in production, alongside humans, under real constraints.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
