import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import retrieveContent from "../../utils/funcs";


export default async function BlogPostPage({ params }: any) {
  // unwrap params if it's a Promise
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const posts = await retrieveContent({content:"posts"});

  // normalize slugs for matching
  const postFile = posts.find(
    (post) => post.name.replace(/\.md$/, "").toLowerCase() === slug.toLowerCase()
  );

  if (!postFile) return <p>Post not found</p>;

  const { data, content } = matter(postFile.content);

  // convert markdown to HTML
  const contentHtml = (await remark().use(html).process(content)).toString();

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4 text-[#E5E7EB]">{data.title}</h1>
      <p className="text-text-muted italic mb-8">{data.date}</p>
      <div
        className="space-y-6 [&>p]:mb-4 [&>ul]:mb-4 [&>ol]:mb-4 [&>li]:mb-2 [&>h2]:mt-8 [&>h2]:mb-2 [&>h3]:mt-6 [&>h3]:mb-2"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
