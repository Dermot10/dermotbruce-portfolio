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
    <article className="max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-text-muted mb-8">{data.date}</p>
      <div className="prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
