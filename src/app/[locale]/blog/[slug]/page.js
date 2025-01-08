import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Image from "next/image";

// Function to fetch the data for a specific blog post
async function getPostData(slug) {
  const postsDirectory = path.join(process.cwd(), "src/posts");
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    data,
    contentHtml,
  };
}

// This component fetches and renders the blog post based on the slug
export default async function BlogPostPage({ params }) {
  // Await params to ensure it is fully resolved before accessing
  const { slug } = await params; // Await params

  const post = await getPostData(slug); // Fetch the post data

  const { data, contentHtml } = post;

  return (
    <div className="container mx-auto px-6 pt-2 lg:px-12">
      {/* Hero Section */}
      <div className="relative mb-12">
        {/* Featured Image */}
        {data.image && (
          <div className="relative w-full h-96 overflow-hidden">
            <Image
              src={data.image}
              alt={data.title}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-500 transform hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          </div>
        )}

        {/* Title and Metadata at Bottom Right */}
        <div className="absolute bottom-8 right-8 text-white z-10 px-6 py-4 bg-black/60 rounded-lg">
          <h1 className="text-4xl font-bold mb-4 text-shadow-xl">{data.title}</h1>
          <div className="flex space-x-4 text-sm">
            <span className="bg-blue-800 text-white px-4 py-1 rounded-full">{data.date}</span>
            <span className="bg-green-800 text-white px-4 py-1 rounded-full">{data.author}</span>
            <span className="bg-yellow-800 text-white px-4 py-1 rounded-full">{data.category}</span>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <article className="prose prose-lg lg:prose-xl mx-auto prose-headings:underline prose-a:text-blue-600
      hover:prose-a:text-blue-500 prose-table:bg-green-50">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>

    </div>
  );
}
