import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import retrieveContent from "../../utils/funcs";

interface ProjectPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const slugPath = Array.isArray(slug) ? slug.join("/") : slug;

  const files = await retrieveContent({ content: "projects" });

  const projectFile = files.find((file) => {
    if (file.name !== "index.md") return false;
    const pathSlug = file.path.replace(/^projects\//, "").replace("/index.md", "");
    return pathSlug === slugPath;
  });

  if (!projectFile) {
    return <p className="p-8">Project not found</p>;
  }

  const { data, content } = matter(projectFile.content);
  const contentHtml = (await remark().use(html).process(content)).toString();

  const projectFolder = projectFile.path
    .replace(/^projects\//, "")
    .replace("/index.md", "");

  const screenshots = (data.screenshots || []).map(
    (filename: string) =>
      `https://raw.githubusercontent.com/Dermot10/dermotbruce-content/main/projects/${projectFolder}/${filename}`
  );

  // Extract high-level breakdown bullets
  const breakdownItems = content
    .split("\n")
    .filter((line) => line.startsWith("- "))
    .map((line) => line.replace(/^- /, ""));

  return (
    <article className="bg-[#0D1117] text-[#C9D1D9] min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="mb-14">
          <h1 className="text-4xl font-bold text-[#E5E7EB] mb-4">{data.title}</h1>
          {data.shortDescription && (
            <p className="text-lg text-[#8B949E] leading-relaxed">{data.shortDescription}</p>
          )}
          {Array.isArray(data.tech) && (
            <div className="flex flex-wrap gap-2 mt-6">
              {data.tech.map((tech: string) => (
                <span key={tech} className="text-sm px-3 py-1 rounded-full bg-[#21262D]">{tech}</span>
              ))}
            </div>
          )}
        </header>

        {/* Hero image */}
        {/* {screenshots.length > 0 && (
          <img
            src={screenshots[0]}
            alt={`${data.title} hero`}
            className="rounded-2xl shadow-xl mb-16 w-full"
            loading="lazy"
          />
        )} */}

        {/* Case study boxes */}
        <section className="grid gap-8 mb-20">
          {data.problem && <CaseBox title="Problem" icon="❓">{data.problem}</CaseBox>}
          {data.solution && <CaseBox title="Solution" icon="🛠️">{data.solution}</CaseBox>}
          {data.impact && <CaseBox title="Impact" icon="📈">{data.impact}</CaseBox>}
          {data.takeaways && (
            <CaseBox title="Key Takeaways" icon="🎯">
              {Array.isArray(data.takeaways) ? (
                <ul className="list-disc pl-5 space-y-2">
                  {data.takeaways.map((item: string) => <li key={item}>{item}</li>)}
                </ul>
              ) : (
                <p>{data.takeaways}</p>
              )}
            </CaseBox>
          )}
        </section>

        {/* High-Level Breakdown */}
        {breakdownItems.length > 0 && (
          <section className="mb-20">
            <h2 className="text-2xl font-semibold text-[#3B82F6] mb-6">High-Level Breakdown</h2>
            <ul className="space-y-4">
              {breakdownItems.map((item, idx) => (
                <li
                  key={idx}
                  className="relative pl-8 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:bg-[#3B82F6]"
                >
                  <span className="text-[#C9D1D9]">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Additional screenshots */}
        {/* {screenshots.length > 1 && (
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
        )} */}

      </div>
    </article>
  );
}

/* ---------- Reusable Case Box ---------- */
function CaseBox({
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
