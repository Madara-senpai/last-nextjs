import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/posts");

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: fileName.replace(/\.md$/, ""), // Generate slug
      metadata: data,
      content,
    };
  });

  // Sort by date (most recent first)
  return posts.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));
}
