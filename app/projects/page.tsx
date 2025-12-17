// pages/projects/page.tsx
import matter from "gray-matter";
import Link from "next/link";
import retrieveContent, {pathToSlug} from "../utils/funcs";


export default async function ProjectsPage() {
  const files = await retrieveContent({ content: "projects" });
  console.log(files)
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
    <section className="py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="p-6 border rounded-xl hover:shadow-md transition block"
            >
              <h2 className="text-2xl font-semibold">{project.title}</h2>

              {project.tech && (
                <p className="text-text-muted mt-1">{project.tech}</p>
              )}

              <p className="mt-2">{project.excerpt}...</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}