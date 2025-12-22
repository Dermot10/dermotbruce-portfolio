import matter from "gray-matter";
import Link from "next/link";
import retrieveContent from "../utils/funcs";

export default async function BlogPage() {
  const posts = await retrieveContent({ content: "posts" });

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
    <section className="py-16 bg-[#161B22] text-[#C9D1D9] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10 text-[#E5E7EB] text-center md:text-left">
          Tech Thoughts
        </h1>
        <div className="grid md:grid-cols-2 gap-6">
          {parsedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 border rounded-xl border-[#30363D] bg-[#161B22] transition-transform transition-shadow duration-300 hover:shadow-lg hover:border-[#3B82F6] hover:-translate-y-1"
            >
              <h2 className="text-2xl font-semibold text-[#E5E7EB]">{post.title}</h2>
              <p className="text-[#8B949E] mt-1">{post.date}</p>
              <p className="mt-3 text-[#C9D1D9]">{post.excerpt}...</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
