import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/utils/getPosts";

export default function BlogPage() {
  const posts = getAllPosts();

  const categories = ['Technology', 'Health', 'Business', 'Lifestyle']; // Example categories

  return (
    <div className="px-4 pt-3 md:px-8 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="col-span-1 bg-white p-4 rounded-lg shadow-md sticky top-8 h-[calc(100vh-8rem)]">
          <h2 className="pt-10 text-2xl font-semibold mb-6">Categories</h2>
          <ul className="space-y-4">
            {categories.map((category) => (
              <li key={category}>
                <Link href={`/blog/category/${category.toLowerCase()}`} className="text-lg text-blue-500 hover:underline">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Blog Posts */}
        <div className="col-span-3">
          <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link href="/blog/[slug]" as={`/blog/${post.slug}`} key={post.slug}>
                <div
                key={post.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-tr hover:from-slate-200 hover:to-s"
              >
                <div className="relative h-60 group">
                  <Image
                    src={post.metadata.image || "/images/default-image.jpg"}
                    alt={post.metadata.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                  <div className="group absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                  <h2 className="group absolute bottom-4 left-4 text-white text-2xl font-semibold group-hover:underline">
                    {post.metadata.title}
                  </h2>
                </div>
                <div className="p-6 group">
                  <p className="group text-gray-500 text-sm mb-2">
                    {post.metadata.date} | by {post.metadata.author}
                  </p>
                  <p className="group text-lg text-gray-800 mb-4">
                    {post.metadata.description}
                  </p>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
