import { principles } from "@/lib/data";
import { Github } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-black selection:text-white">
      <main className="container mx-auto px-6 max-w-5xl pb-32">
        {/* Header / Intro */}
        <section className="pt-20 pb-16 border-b-2 border-black relative">
          {/* GitHub Link Top Right */}
          <div className="absolute top-0 right-0 mt-8 md:mt-12">
            <a
              href="https://github.com/agent-checklist/agent-checklist-io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-sm uppercase tracking-wider hover:bg-black hover:text-white px-3 py-2 transition-all border border-transparent hover:border-black"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
            <h1 className="text-6xl md:text-8xl font-sans font-bold tracking-tighter uppercase leading-none">
              Agent<br/>Checklist
            </h1>
            <div className="mb-2">
              <span className="inline-block bg-black text-white px-3 py-1 font-mono text-xs uppercase tracking-widest">
                Manifesto v1.0
              </span>
            </div>
          </div>
          
          <p className="text-2xl md:text-3xl leading-tight font-medium max-w-3xl mb-8">
            Principles for building agents that are durable, inspectable, and safe to evolve.
          </p>

          <div className="flex flex-col gap-6 items-start">
            <a href="/vision" className="inline-block bg-black text-white px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black transition-all">
              Read the Vision
            </a>
          </div>
        </section>

        {/* Checklist Grid View */}
        <section className="py-16 border-b-2 border-black">
          <h2 className="font-mono text-xs uppercase tracking-widest mb-8 text-muted-foreground">Index</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {principles.map((principle) => (
              <a
                key={principle.id}
                href={`#principle-${principle.id}`}
                className="group bg-background p-6 hover:bg-muted transition-colors duration-200 block h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-sm text-muted-foreground group-hover:text-black transition-colors">
                    {principle.id.toString().padStart(2, '0')}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-black">→</span>
                </div>
                <h3 className="font-bold text-xl mb-1">{principle.title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors line-clamp-2">
                  {principle.summary}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Detailed View */}
        <section className="pt-24 space-y-32">
          {principles.map((principle) => (
            <article
              key={principle.id}
              id={`principle-${principle.id}`}
              className="group"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 border-t border-black pt-8">
                <div className="md:w-1/4 shrink-0">
                  <div className="font-mono text-6xl md:text-7xl font-bold text-black/10 group-hover:text-black transition-colors duration-500">
                    {principle.id.toString().padStart(2, '0')}
                  </div>
                </div>

                <div className="md:w-3/4">
                  <h2 className="text-4xl font-bold mb-4 uppercase tracking-tight">{principle.title}</h2>
                  <div className="inline-block bg-muted px-3 py-1 mb-8">
                    <h3 className="text-sm font-mono font-medium uppercase tracking-wider">
                      {principle.summary}
                    </h3>
                  </div>
                  <p className="text-xl md:text-2xl leading-relaxed font-light text-foreground/90 max-w-prose">
                    {principle.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Footer */}
        <footer className="pt-32 pb-16 border-t-2 border-black mt-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="font-bold text-2xl mb-2">AGENT CHECKLIST</div>
            <p className="text-sm text-muted-foreground max-w-md">
              Constructed for the builders of tomorrow's autonomous systems.
            </p>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            © 2026 / MIT LICENSED
          </div>
        </footer>
      </main>
    </div>
  );
}
