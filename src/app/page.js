import BlogSection from "@/components/BlogSection";
import Features from "@/components/FeatureSection";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Blog Section */}
      <BlogSection />
    </main>
  );
}
