---
title: "Migration of Site Content"
date: "2026-03-30"
tags: ["Next.js", "Static Content", "Portfolio"]
summary: "How I migrated my portfolio blog content from GitHub Pages to a fully local Next.js setup."
---

# Introduction -

In this post, I’ll walk through how I migrated my portfolio's blog content from GitHub Pages to a **fully local Next.js setup**. The goal was to simplify my workflow, remove external dependencies, and leverage build-time static content for better performance and reliability.

## My Setup -

For this migration, I used:

- **Next.js 16** – React framework with server-side rendering and static site generation
- **Tailwind CSS** – For responsive, modern styling
- **Markdown + gray-matter + remark** – To write and parse blog posts
- **Vercel** – Hosting platform with automatic builds from GitHub

## Why Migrate? -

Previously, my blog content lived on GitHub Pages and was fetched via API calls. While this worked, it had drawbacks:

- Extra network requests at runtime.
- Dependency on GitHub Pages availability.
- Github access token expired rightfully causing failure for the content to load and required fixing.
- Complex URLs and image paths.
- Harder to maintain content alongside the main portfolio.

By moving content locally:

- - **Everything builds at deploy time**
- - **No runtime fetches** → faster page loads
- - **Simpler folder structure** → easier to manage Markdown posts
- - Fully **integrated with Next.js + Vercel**

## Migration Process -

1. **Create a local content folder** -
   I added `/content/posts` in the repo. Each blog post gets its own folder with an `index.md` file for content and optional images.

2. **Move Markdown files** -  
   Copied existing blog posts from GitHub Pages into `/content/posts`. Adjusted frontmatter to include `title`, `date`, `tags`, and `summary`.

3. **Update Next.js content loader** -
   Replaced API fetches with a local `retrieveContent()` utility using Node’s `fs` module to read Markdown files at build time.

4. **Update image references** -
   Moved project screenshots and images to `/public` so they can be referenced locally without relying on GitHub URLs.

5. **Test build** -
   Ran `npm run build` locally to ensure Next.js parsed all Markdown correctly and generated static pages.

## Key Takeaways -

- Keeping content local simplifies **build and deployment** workflows
- Using Markdown + gray-matter + remark is powerful for **static blogs**
- Vercel automatically rebuilds on GitHub pushes, making content updates seamless

---
