import matter from "gray-matter";
import Link from "next/link";
import retrieveContent from "../utils/funcs";


export default async function BlogPage() {
  const posts = await retrieveContent({content:"posts"});

  const parsedPosts = posts.map((post) => {
    const { data, content } = matter(post.content);
    return {
      title: data.title,
      date: data.date,
      slug: post.name.replace(/\.md$/, ""),
      excerpt: content.substring(0, 120),
    };
  });

  return (
    <section className="py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Tech Thoughts</h1>
      <div className="grid gap-6">
        {parsedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="p-6 border rounded-xl hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-text-muted">{post.date}</p>
            <p className="mt-2">{post.excerpt}...</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
