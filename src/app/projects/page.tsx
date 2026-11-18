"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ExternalLink,
  CodeXml,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Terminal,
} from "lucide-react";

interface Project {
  title: string;
  category: "EdTech" | "Enterprise" | "AI" | "PropTech";
  categoryLabel: string;
  image: string;
  description: string;
  architecture: string;
  impact: string;
  tags: string[];
}

const allProjects: Project[] = [
  {
    title: "NexLearn LMS Platform",
    category: "EdTech",
    categoryLabel: "EdTech & Analytics",
    image: "/portfolio/lms.png",
    description:
      "A comprehensive learning management system featuring AI-driven student analytics, automated grading, live video proctoring, and high-performance Laravel backend integration.",
    architecture: "Next.js 14 Frontend • Laravel 11 API Gateway • PostgreSQL • Redis Cluster",
    impact: "Serving 45,000+ daily active students with zero page stalls during final exams.",
    tags: ["Next.js", "Laravel", "AI Analytics", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "CoreFlow ERP Dashboard",
    category: "Enterprise",
    categoryLabel: "Enterprise Systems",
    image: "/portfolio/erp.png",
    description:
      "Full-scale enterprise resource planning dashboard with real-time CRM pipelines, financial data models, inventory forecasting, and complex resource allocation modules.",
    architecture: "React • Node.js Microservices • MongoDB Timeseries • Redis Pub/Sub",
    impact: "Replaced 6 disconnected legacy software tools into one unified single pane of glass.",
    tags: ["React", "Node.js", "CRM", "Automation", "AWS VPC"],
  },
  {
    title: "Nexus AI Customer Support System",
    category: "AI",
    categoryLabel: "AI & Automation",
    image: "/portfolio/ai_support.png",
    description:
      "Sophisticated AI support ecosystem utilizing LLM-based autonomous chatbots, sentiment analysis triage, and automated multi-tiered ticket escalation workflows.",
    architecture: "Python FastAPI • OpenAI LLM / Claude 3.5 • Pinecone Vector DB • Celery Queue",
    impact: "Automated 84% of first-touch Tier-1 support tickets with a 4.9/5 satisfaction rate.",
    tags: ["AI", "Python", "Vector DB", "Chatbot", "Workflows"],
  },
  {
    title: "UrbanState Real Estate Ecosystem",
    category: "PropTech",
    categoryLabel: "PropTech",
    image: "/services/web_app_v3.png",
    description:
      "A scalable property management ecosystem with real-time map polygon availability tracking, tenant verification, and advanced administrative control systems.",
    architecture: "Next.js • Go Microservices • PostGIS Spatial DB • AWS S3 & CloudFront",
    impact: "Handled 12,000 concurrent apartment inquiries during major release weekend.",
    tags: ["React", "Go", "AWS", "PostGIS", "Docker"],
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-8">
            <Layers className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
              Production Systems
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
            Digital Systems <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
              Built for Scale
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed font-normal max-w-2xl mx-auto">
            Review detailed architectural breakdowns of platforms we have engineered for enterprise clients, education providers, and venture-backed startups.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
          {["All", "EdTech", "Enterprise", "AI", "PropTech"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/30 scale-105"
                  : "bg-[#0b0f17] text-gray-400 hover:text-white border border-gray-800"
              }`}
            >
              {cat === "All" ? "All Systems" : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-28">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="bg-[#0b0f17] border border-gray-800 rounded-[2.5rem] overflow-hidden flex flex-col justify-between hover:border-[#d4af37]/60 shadow-2xl transition-all duration-300 group"
            >
              <div>
                <div className="relative aspect-[16/10] bg-black overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-black/30" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 bg-black/80 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-[#d4af37] rounded-full border border-white/10">
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  <div className="p-4 bg-black/60 rounded-xl border border-gray-800 mb-6 space-y-2">
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
                      Architecture Stack
                    </div>
                    <div className="text-xs text-gray-300 font-mono font-medium">
                      {project.architecture}
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-950/20 rounded-xl border border-emerald-900/40 mb-6 space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                      Measured Impact
                    </div>
                    <div className="text-xs text-emerald-200 font-medium">
                      {project.impact}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-2.5 py-1 bg-gray-900 border border-gray-800 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full py-3.5 bg-white/5 border border-white/10 text-sm font-black rounded-xl hover:bg-[#d4af37] hover:text-black transition-all"
                >
                  Request Similar Architecture Blueprint
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-12 lg:p-16 bg-[#0c121e] border border-[#d4af37]/30 rounded-[3rem] text-center">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
            Need a custom digital system?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Our engineering team is ready to architect your next high-performance platform.
          </p>
          <Link
            href="/book-consultation"
            className="inline-flex items-center px-9 py-4 bg-[#d4af37] text-black font-black text-base rounded-2xl hover:bg-[#e4c04e] transition-all shadow-xl hover:scale-105"
          >
            Schedule Technical Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
