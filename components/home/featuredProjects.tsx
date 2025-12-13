const projects = [
  { title: 'GCS-Connector', description: 'Integration between azure data lake and google cloud storage', slug: 'gcs-connector' },
  { title: 'Pokemon Automative Game', description: 'Automated AI Pokedex game', slug: 'tines-automation' },
];

export default function FeaturedProjects() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <a key={p.slug} href={`/projects/${p.slug}`} className="p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">{p.title}</h3>
            <p>{p.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
