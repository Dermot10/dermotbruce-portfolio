'use client';

import Link from 'next/link';

const projects = [
  { title: 'GCS-Connector', description: 'Integration between Azure Data Lake and Google Cloud Storage', slug: 'gcs-connector' },
  { title: 'Pokedex Game', description: 'Automated Pokémon game powered by AI functionality', slug: 'pokemon-ai-game' },
];

export default function FeaturedProjects() {
  return (
    <section className="relative w-full py-16 bg-[#161B22] text-[#C9D1D9]">
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url(/blue-purple-main.jpg)" }}
      />
      <div className="absolute inset-0 bg-[#161B22]/70 z-0"></div> =={/* Dim overlay */}

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-[#E5E7EB] text-center">Featured Builds</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="block p-6 border rounded-xl transition-shadow duration-300 border-[#30363D] bg-[#161B22] hover:shadow-lg hover:border-[#3B82F6] hover:bg-[#1F222D]"
            >
              <h3 className="font-bold text-xl mb-2 text-[#E5E7EB]">{p.title}</h3>
              <p className="text-[#8B949E]">{p.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
