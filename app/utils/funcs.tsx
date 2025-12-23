export default async function retrieveContent({ content }: { content: string }) {
  const url = `${process.env.GITHUB_API}${content}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
    next: {revalidate:3600}, // IMPORTANT
  });

  if (!res.ok) throw new Error(`Request failed: ${res.status}`);

  const items: any[] = await res.json();
  const files: any[] = [];

  for (const item of items) {
    if (item.type === "file" && item.download_url) {
      const markdownRes = await fetch(item.download_url, {next: {revalidate:3600},});
      const markdown = await markdownRes.text(); 
      files.push({ ...item, content: markdown });
    } else if (item.type === "dir") {
      const nestedFiles = await retrieveContent({ content: `${content}/${item.name}` });
      files.push(...nestedFiles);
    }
  }

  return files;
}



export function pathToSlug(path: string) {
  return path
    .replace(/^projects\//, "")
    .replace(/\/index\.md$/, "");
}