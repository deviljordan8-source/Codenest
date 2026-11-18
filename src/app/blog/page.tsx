"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  ArrowRight,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Calendar,
} from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Architecture" | "AI" | "DevOps" | "Performance";
  readTime: string;
  date: string;
  author: string;
}

const posts: BlogPost[] = [
  {
    slug: "scaling-nextjs-to-10-million-monthly-requests",
    title: "Scaling Next.js 14 to 10M+ Requests: Edge Caching & ISR Strategies",
    excerpt:
      "A deep dive into incremental static regeneration, Cloudflare cache tags, and how we brought our client's TTFB down to 80ms globally.",
    category: "Architecture",
    readTime: "7 min read",
    date: "November 14, 2026",
    author: "Dr. Elena Rostova",
  },
  {
    slug: "zero-trust-database-replication-patterns-in-go",
    title: "Zero-Trust Database Replication Patterns Using Go and PostgreSQL",
    excerpt:
      "How to set up active-passive and active-active PostgreSQL clusters with zero data drift using logical decoding and Go microservices.",
    category: "DevOps",
    readTime: "9 min read",
    date: "November 08, 2026",
    author: "Marcus Vance",
  },
  {
    slug: "autonomous-ai-agents-in-production-without-hallucinations",
    title: "Architecting Autonomous AI Agents in Production Without Hallucinations",
    excerpt:
      "A pragmatic framework for grounding LLM tool calls using strict JSON schemas, vector validation, and human-in-the-loop review queues.",
    category: "AI",
    readTime: "8 min read",
    date: "October 29, 2026",
    author: "Dr. Elena Rostova",
  },
  {
    slug: "from-monolith-to-distributed-kubernetes-without-downtime",
    title: "Migrating an Enterprise Monolith to Kubernetes Without a Second of Downtime",
    excerpt:
      "The strangler fig pattern in practice: how we migrated 450,000 active users from a legacy server to auto-scaling container pods.",
    category: "Architecture",
    readTime: "11 min read",
    date: "October 17, 2026",
    author: "Aks Sangwan",
  },
];

export default function BlogHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-8">
            <BookOpen className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
              Engineering Insights
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
            Technical Insights from <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
              The Front Lines
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed font-normal max-w-2xl mx-auto">
            Practical architectural essays, database benchmarks, and deployment blueprints written directly by our senior engineering leads.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
          {["All", "Architecture", "AI", "DevOps"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? "bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/30 scale-105"
                  : "bg-[#0b0f17] text-gray-400 hover:text-white border border-gray-800"
              }`}
            >
              {cat === "All" ? "All Articles" : cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-28">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-[#0b0f17] border border-gray-800 rounded-[2rem] p-8 lg:p-10 flex flex-col justify-between hover:border-[#d4af37]/60 shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 bg-gray-900 text-[#d4af37] rounded-full border border-gray-800">
                    {post.category}
                  </span>
                  <div className="flex items-center text-xs text-gray-500 space-x-4">
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {post.readTime}
                    </span>
                    <span>{post.date}</span>
                  </div>
                </div>

                <h2 className="text-2xl font-black text-white mb-4 group-hover:text-[#d4af37] transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 font-normal">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-800/80 flex justify-between items-center text-xs font-bold">
                <span className="text-gray-400">By {post.author}</span>
                <span className="text-[#d4af37] flex items-center group-hover:translate-x-1 transition-transform">
                  Read Article →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter / RSS */}
        <div className="p-10 lg:p-14 bg-[#080c14] border border-gray-800 rounded-[2.5rem] text-center max-w-3xl mx-auto">
          <Terminal className="w-10 h-10 text-[#d4af37] mx-auto mb-4" />
          <h3 className="text-2xl font-black text-white mb-2">Subscribe to Architectural Blueprints</h3>
          <p className="text-xs text-gray-400 mb-6">
            Get our monthly engineering breakdown sent straight to your inbox. No fluff, no marketing spam.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="engineer@company.com"
              className="flex-1 px-4 py-3 bg-black border border-gray-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#d4af37]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#d4af37] text-black font-black text-xs uppercase tracking-wider rounded-xl hover:bg-[#e4c04e] transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
