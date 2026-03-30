import fs from "fs";
import path from "path";


type ContentFile = {
  name: string;
  path: string;
  content: string;
};

export default function retrieveContent({ content }: {content: string }) {
  const basePath = path.join(process.cwd(), "content", content);

  function walk(dir: string): ContentFile[]{
    const files = fs.readdirSync(dir);

    return files.flatMap((file) : ContentFile[] => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        return walk(fullPath);
      }

      return [
        {
          name: file,
          path: fullPath
            .replace(process.cwd(), "")
            .replace(/\\/g, "/")
            .replace(/^\/content\//, ""),
          content: fs.readFileSync(fullPath, "utf8"),
        },
      ];
    });
  }

  return walk(basePath);
}



export function pathToSlug(path: string) {
  return path
    .replace(/^projects\//, "")
    .replace(/\/index\.md$/, "");
}


