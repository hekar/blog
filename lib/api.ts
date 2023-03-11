import fs from "fs";
import { join, parse } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  const files = fs.readdirSync(postsDirectory);
  const filtered = files.filter((f) => f.endsWith('.md'));
  return Array.from(filtered).sort((a, b) => a.localeCompare(b));
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const parsed = parse(slug);
  const realSlug = parsed.name;
  const fullPath = join(postsDirectory, parsed.name + '.md');
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content, excerpt } = matter(fileContents, { excerpt: true });

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    } else if (field === "content") {
      items[field] = content;
    } else if (field === "excerpt") {
      items[field] = excerpt ?? data[field] ?? "";
    } else if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
