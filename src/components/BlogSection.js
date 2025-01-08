import React from 'react';
import Image from 'next/image';

const BlogSection = () => {
    const blogPosts = [
        {
            title: "Contributing to Kali",
            description: "With the launch of our brand-new forums, we thought we would update our documentation and explore how everyone can contribute to the growth of Kali Linux...",
            date: "2024-11-27",
            link: "/",
            image: "/images/post-image2.png",
        },
        {
            title: "Forums Refresh",
            description: "Over the past year we have been hard at work on refreshing the Kali Forums, and today we are proud to announce the official launch...",
            date: "2024-11-20",
            link: "/",
            image: "/images/post-image3.png",
        },
        {
            title: "The end of the i386 kernel and images",
            description: "The i386 architecture has long been obsolete, and from this week, support for i386 in Kali Linux is going to shrink significantly...",
            date: "2024-10-22",
            link: "/",
            image: "/images/post-image4.png",
        },
        {
            title: "Kali Linux 2024.3 Release (Multiple transitions)",
            description: "With summer coming to an end, so are package migrations, and Kali 2024.3 can now be released...",
            date: "2024-09-11",
            link: "/",
            image: "/images/post-image5.png",
        },
    ];

    return (
        <section id="blog-posts" className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-16">
                {/* Section Title */}
                <h2 className="text-3xl pl-4 sm:pl-8 mb-8 inline-block">
                    <span className="py-1 px-4 border-4 border-x-2 border-dashed border-x-green-700 border-y-green-400 rounded-xl text-emerald-700">
                        Bizin sonky{" "}
                        <a href="blog" className="text-teal-800 hover:underline">
                            bloglarymyz
                        </a>
                    </span>
                </h2>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {blogPosts.map((post, index) => (
                        <a
                            key={index}
                            href={post.link}
                            className="block bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
                        >
                            {/* Blog Image */}
                            <div className="w-full h-48 relative">
                                <Image
                                    src={post.image}
                                    alt={`Blog image for ${post.title}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-lg"
                                />
                            </div>

                            {/* Blog Content */}
                            <div className="p-6 flex flex-col">
                                <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                                    {post.title}
                                </h4>
                                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                    {post.description}
                                </p>
                                <time
                                    className="text-sm text-gray-500 mt-auto block"
                                    dateTime={post.date}
                                >
                                    <i className="ti-alarm-clock mr-2"></i>
                                    {post.date}
                                </time>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
