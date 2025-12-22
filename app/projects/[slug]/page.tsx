import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import retrieveContent from "../../utils/funcs";

interface ProjectPageProps {
  params: { slug: string[] };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const slugPath = Array.isArray(resolvedParams.slug)
  ? resolvedParams.slug.join("/")
  : resolvedParams.slug || ""; // e.g. pokemon-ai-game

  const projects = await retrieveContent({ content: "projects" });

  // Find the folder that contains the index.md
  const projectFile = projects.find((proj) => {
    let pathSlug = proj.path.replace(/^projects\//, "");
    return pathSlug.endsWith("index.md") && pathSlug.replace("/index.md", "") === slugPath;
  });

  if (!projectFile) return <p>Project not found</p>;

  const { data, content } = matter(projectFile.content);
  const contentHtml = (await remark().use(html).process(content)).toString();

  const projectFolder = projectFile.path
    .replace(/^projects\//, "")
    .replace("/index.md", "");

  const screenshots = (data.screenshots || []).map(
    (filename: string) =>
      `https://raw.githubusercontent.com/Dermot10/dermotbruce-content/main/projects/${projectFolder}/${filename}`
  );
  return (
    <article className="max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      {Array.isArray(data.tech) && (
        <div className="flex flex-wrap gap-2 mb-6">
          {data.tech.map((tech: string) => (
            <span
              key={tech}
              className="text-sm px-3 py-1 rounded-full bg-surface-muted text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      {data.link && (
        <p className="text-text-muted mb-8">
          <a href={data.link} target="_blank" rel="noopener noreferrer" className="underline">
            Live Demo / Repo
          </a>
        </p>
      )}

      {/* Render images */}
      {/* First screenshot as hero (optional) */}
      {screenshots.length > 0 && (
        <img
          src={screenshots[0]}
          alt={`${data.title} hero`}
          className="rounded-xl shadow-lg mb-8 w-full"
          loading="lazy"
        />
      )}

      {/* Remaining screenshots in grid */}
      {screenshots.length > 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {screenshots.slice(1).map((src: string, i: number) => (
            <img
              key={i}
              src={src}
              alt={`${data.title} screenshot ${i + 2}`} // +2 because first is hero
              className="rounded-xl shadow-md transition-transform duration-500 hover:-translate-y-1 hover:shadow-xl"
              loading="lazy"
            />
          ))}
        </div>
      )}


      <div className="prose prose-invert max-w-none prose-h2:mt-12 prose-img:rounded-xl" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
