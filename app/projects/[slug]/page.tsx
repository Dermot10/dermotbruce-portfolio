import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import retrieveContent from "../../utils/funcs";

interface ProjectPageProps {
  params: { slug: string[] };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const slugPath = Array.isArray(params.slug)
    ? params.slug.join("/")
    : params.slug || "";

  const projects = await retrieveContent({ content: "projects" });

  const projectFile = projects.find((proj) => {
    const pathSlug = proj.path.replace(/^projects\//, "");
    return (
      pathSlug.endsWith("index.md") &&
      pathSlug.replace("/index.md", "") === slugPath
    );
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
    <article className="bg-[#0D1117] text-[#C9D1D9] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-[#E5E7EB] mb-4">
            {data.title}
          </h1>

          {data.shortDescription && (
            <p className="text-lg text-[#8B949E] leading-relaxed">
              {data.shortDescription}
            </p>
          )}

          {/* Tech stack */}
          {Array.isArray(data.tech) && (
            <div className="flex flex-wrap gap-2 mt-6">
              {data.tech.map((tech: string) => (
                <span
                  key={tech}
                  className="text-sm px-3 py-1 rounded-full bg-[#21262D]"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Hero image */}
        {screenshots.length > 0 && (
          <img
            src={screenshots[0]}
            alt={`${data.title} hero`}
            className="rounded-2xl shadow-xl mb-16 w-full"
            loading="lazy"
          />
        )}

        {/* Case study sections */}
        <section className="grid gap-8 mb-20">
          {data.problem && (
            <CaseSection title="Problem" icon="❓">
              {data.problem}
            </CaseSection>
          )}

          {data.solution && (
            <CaseSection title="Solution" icon="🛠️">
              {data.solution}
            </CaseSection>
          )}

          {data.impact && (
            <CaseSection title="Impact" icon="📈">
              {data.impact}
            </CaseSection>
          )}

          {Array.isArray(data.takeaways) && (
            <CaseSection title="Key Takeaways" icon="🎯">
              <ul className="list-disc pl-5 space-y-2">
                {data.takeaways.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CaseSection>
          )}
        </section>

        {/* Supporting screenshots */}
        {screenshots.length > 1 && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {screenshots.slice(1).map((src: string, i: number) => (
              <img
                key={i}
                src={src}
                alt={`${data.title} screenshot ${i + 2}`}
                className="rounded-xl shadow-md hover:shadow-xl transition-shadow"
                loading="lazy"
              />
            ))}
          </section>
        )}

        {/* Deep dive markdown */}
        <section>
          <div
            className="prose prose-invert max-w-none prose-h2:mt-12 prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </section>
      </div>
    </article>
  );
}

/* ---------- Reusable case section ---------- */

function CaseSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[#30363D] bg-[#161B22] p-8">
      <h2 className="text-2xl font-semibold text-[#E5E7EB] mb-4">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </h2>
      <div className="text-[#C9D1D9] leading-relaxed">{children}</div>
    </div>
  );
}
