import matter from "gray-matter";
import Link from "next/link";
import retrieveContent, { pathToSlug } from "../utils/funcs";

export default async function ProjectsPage() {
  const files = await retrieveContent({ content: "projects" });

  const projects = files
    .filter((file) => file.name === "index.md")
    .map((file) => {
      const { data } = matter(file.content);
      const slug = pathToSlug(file.path);

      return {
        title: data.title,
        slug,
        shortDescription: data.shortDescription,
        problem: data.problem,
        impact: data.impact,
        tech: Array.isArray(data.tech) ? data.tech : [],
      };
    });

  return (
    <section className="py-20 bg-[#0D1117] text-[#C9D1D9] min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-[#E5E7EB]">
          Selected Projects
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block rounded-2xl border border-[#30363D] bg-[#161B22] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#3B82F6] hover:shadow-xl"
            >
              {/* Title */}
              <h2 className="text-2xl font-semibold text-[#E5E7EB] mb-2">
                {project.title}
              </h2>

              {/* Short description */}
              {project.shortDescription && (
                <p className="text-[#8B949E] mb-4 leading-relaxed">
                  {project.shortDescription}
                </p>
              )}

              {/* Problem */}
              {project.problem && (
                <div className="mb-4">
                  <p className="text-sm uppercase tracking-wide text-[#8B949E] mb-1">
                    Problem
                  </p>
                  <p className="text-[#C9D1D9] line-clamp-3">
                    {project.problem}
                  </p>
                </div>
              )}

              {/* Impact */}
              {project.impact && (
                <div className="mb-6">
                  <p className="text-sm uppercase tracking-wide text-[#8B949E] mb-1">
                    Impact
                  </p>
                  <p className="text-[#C9D1D9] font-medium line-clamp-3">
                    {project.impact}
                  </p>
                </div>
              )}

              {/* Tech stack */}
              {project.tech.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-[#21262D] text-[#C9D1D9]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 6 && (
                    <span className="text-xs px-3 py-1 rounded-full bg-[#21262D] text-[#8B949E]">
                      +{project.tech.length - 6}
                    </span>
                  )}
                </div>
              )}

              {/* Hover affordance */}
              <div className="mt-6 text-sm text-[#3B82F6] opacity-0 transition-opacity group-hover:opacity-100">
                View case study →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
