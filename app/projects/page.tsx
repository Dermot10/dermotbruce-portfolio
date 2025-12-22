// 'use client';

import matter from "gray-matter";
import Link from "next/link";
import retrieveContent, { pathToSlug } from "../utils/funcs";

export default async function ProjectsPage() {
  const files = await retrieveContent({ content: "projects" });
  const projects = files
    .filter((file) => file.name === "index.md")
    .map((file) => {
      const { data, content } = matter(file.content);
      const slug = pathToSlug(file.path);

      return {
        title: data.title,
        tech: data.tech?.join(", "),
        slug,
        excerpt: content.slice(0, 140),
      };
    });

  return (
    <section className="py-16 bg-[#161B22] text-[#C9D1D9] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10 text-[#E5E7EB] text-center md:text-left">
          Projects
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block p-6 border rounded-xl border-[#30363D] bg-[#161B22] transition-transform transition-shadow duration-300 hover:shadow-lg hover:border-[#3B82F6] hover:-translate-y-1"
            >
              <h2 className="text-2xl font-semibold text-[#E5E7EB]">{project.title}</h2>

              {project.tech && (
                <p className="text-[#8B949E] mt-1">{project.tech}</p>
              )}

              <p className="mt-3 text-[#C9D1D9]">{project.excerpt}...</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
