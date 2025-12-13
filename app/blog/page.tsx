// app/blog/page.tsx → shows the list of all blog posts

export default function BlogPage() {
  // Mock posts data
  const posts = [
    {
      title: 'First Post',
      slug: 'first-post',
      date: '2025-12-07',
      body: 'This is a short preview of the first post. Lorem ipsum dolor sit amet...',
    },
    {
      title: 'Second Post',
      slug: 'second-post',
      date: '2025-12-06',
      body: 'This is a short preview of the second post. Consectetur adipiscing elit...',
    },
    {
      title: 'Third Post',
      slug: 'third-post',
      date: '2025-12-05',
      body: 'This is a short preview of the third post. Sed do eiusmod tempor incididunt...',
    },
  ];

  return (
    <section className="py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Tech Thoughts</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="p-6 border rounded-xl hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-text-muted">{post.date}</p>
            <p className="mt-2">{post.body.substring(0, 120)}...</p>
          </a>
        ))}
      </div>
    </section>
  );
}
