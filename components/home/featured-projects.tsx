'use client';

import Link from 'next/link';

const projects = [
  { title: 'GCS-Connector', description: 'Integration between azure data lake and google cloud storage', slug: 'gcs-connector' },
  { title: 'Pokedex Game', description: 'Automated pokemon game powered by a variety of AI functionality', slug: 'tines-automation' },
];

export default function FeaturedProjects() {
  return (
    <section className="w-full py-12"
    style={{
          backgroundImage: "url(/blue-circuit.jpg)",
          backgroundSize: "cover", 
          backgroundPosition: "center",
        }}>
      <h2 className="text-3xl font-semibold mb-6">Featured Builds</h2>
      <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p) => (
        <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="p-6 border rounded-xl hover:shadow-lg transition block"
          >
            <h3 className="font-bold text-xl mb-2">{p.title}</h3>
            <p>{p.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
