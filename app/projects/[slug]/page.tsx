// pages/projects/[...slug].tsx
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import retrieveContent from "../../utils/funcs";

interface ProjectPageProps {
  params: { slug: string[] } | Promise<{ slug: string[] }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug || [];
  const slugPath = slugArray.join("/"); // e.g. pokemon-ai-game/pokedex

  // fetch all projects recursively
  const projects = await retrieveContent({ content: "projects" });

  // find the matching project
  const projectFile = projects.find((proj) => {
    // normalize path relative to "projects"
    let pathSlug = proj.path.replace(/^projects\//, "").replace(/\.md$/, "");
    pathSlug = pathSlug.endsWith("/index") ? pathSlug.replace(/\/index$/, "") : pathSlug;

    // fallback for single-file projects
    if (!proj.path.endsWith(".md") && proj.type === "file") {
      pathSlug = proj.path.replace(/^projects\//, "");
    }

    return pathSlug === slugPath;
  });

  if (!projectFile) return <p>Project not found</p>;

  const { data, content } = matter(projectFile.content);
  const contentHtml = (await remark().use(html).process(content)).toString();

  return (
    <article className="max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">{data.title || "Untitled Project"}</h1>

      {data.tech && <p className="text-text-muted mb-2">Tech: {data.tech.join(", ")}</p>}
      {data.link && (
        <p className="text-text-muted mb-8">
          <a href={data.link} target="_blank" rel="noopener noreferrer" className="underline">
            Live Demo / Repo
          </a>
        </p>
      )}

      <div className="prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
