import Link from 'next/link';
import type { Project } from '@/lib/data';

export default function ProjectDetail({ project }: { project: Project }) {
  const titleWords = project.title.split(' ');
  const titleAccent = titleWords.pop();

  return (
    <main className="min-h-screen bg-bg px-6 py-16 lg:px-10 lg:py-24">
      <article className="mx-auto max-w-3xl">
        <Link href="/#projects" className="text-sm font-semibold text-pink underline underline-offset-4 focus-ring">
          ← All projects
        </Link>
        <p className="section-label mb-4 mt-12">Project · {project.status}</p>
        <h1 className="font-display">
          {titleWords.join(' ')} <span className="editorial-accent">{titleAccent}</span>
        </h1>
        <p className="mt-7 text-xl leading-relaxed text-gray">{project.summary}</p>
        <div className="card mt-10 rounded-card p-7 md:p-9">
          <h2 className="font-display">Research question</h2>
          <p className="mt-3 leading-relaxed text-gray">{project.question}</p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section className="card rounded-card p-7">
            <h2 className="font-display">Evidence considered</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-gray">
              {project.evidence.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
          <section className="card rounded-card p-7">
            <h2 className="font-display">Outputs explored</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-gray">
              {project.outputs.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        </div>
        <p className="mt-6 border-t border-border pt-5 text-sm leading-relaxed text-gray">{project.caveat}</p>
        <p className="mt-3 text-sm leading-relaxed text-gray">
          Project status reflects the official RadarSeq site. No live service or production outcome is implied.
        </p>
        <Link href="/#contact" className="btn-pill btn-primary mt-8 focus-ring">
          Discuss a use case
        </Link>
      </article>
    </main>
  );
}
