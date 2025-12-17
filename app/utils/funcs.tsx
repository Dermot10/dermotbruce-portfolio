export default async function retrieveContent({ content }: { content: string }) {
  if (!process.env.NEXT_PUBLIC_GITHUB_API)
    throw new Error("NEXT_PUBLIC_GITHUB_API is not defined");

  // ensure a single slash between base URL and content
  const url = `${process.env.NEXT_PUBLIC_GITHUB_API}/${content}`.replace(/\/+/g, "/");

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);

  const items: any[] = await res.json();
  const files: any[] = [];

  for (const item of items) {
    if (item.type === "file" && item.download_url) {
      const markdownRes = await fetch(item.download_url, { cache: "no-store" });
      const markdown = await markdownRes.text();
      files.push({ ...item, content: markdown });
    } else if (item.type === "dir") {
      // recursively fetch subfolders
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