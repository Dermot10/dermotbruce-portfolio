export default function About(){
  return (
    <section className="py-12">
        <div className="mx-auto max-w-prose text-center">
            <h2 className="text-3xl font-semibold mb-6">About</h2>
            <p>
                I’m Dermot, a software engineer with four years of experience building
                clean, scalable, and reliable systems.
            </p>

            <p className="mt-4">
                My background is rooted in backend engineering, focused on delivering
                performant and maintainable systems. Over the next year, I’m intentionally
                expanding into SaaS-style development by building and shipping complete,
                production-ready products end to end.
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                <li>Go</li>
                <li>Next.js / React</li>
                <li>Python</li>
                <li>PostgreSQL</li>
            </ul>
        </div>
    </section>
  );
}
