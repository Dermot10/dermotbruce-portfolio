export default function Hero() {
  return (
    <section className="text-center py-24">
      <h1 className="text-5xl font-bold mb-4">Dermot Bruce-Agbeko</h1>
      <p className="text-xl mb-8">Building scalable software</p>
      <div className="flex justify-center gap-4">
        <a href="/projects" className="px-6 py-3 border border-accent rounded-lg">View Projects</a>
        <a href="/contact" className="px-6 py-3 border border-accent rounded-lg">Contact Me</a>
      </div>
    </section>
  );
}
