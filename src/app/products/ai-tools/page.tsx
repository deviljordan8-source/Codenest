import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Cpu,
  Brain,
  Sparkles,
  ArrowRight,
  Database,
  Lock,
  CodeXml,
} from "lucide-react";

export const metadata = {
  title: "AI Tools & Neural Modules | CodeNest",
  description:
    "Plug-and-play artificial intelligence modules, RAG connectors, and autonomous agent frameworks built for enterprise security.",
};

export default function AIToolsPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
          <Link href="/products" className="hover:text-[#d4af37]">Products</Link>
          <span>/</span>
          <span className="text-[#d4af37]">AI Tools</span>
        </div>

        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-8">
            <Cpu className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
              Pre-Engineered AI Modules
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
            Enterprise-Ready <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
              AI Tools & Connectors
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Accelerate your machine learning roadmap with our modular, pre-tested AI components designed to drop straight into your existing databases.
          </p>
        </div>

        {/* 3 AI Tools */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {[
            {
              title: "NestRAG Ingestion Engine",
              desc: "Automated chunking, embedding generation, and vector indexing for PDFs, markdown docs, and SQL databases with hybrid semantic search.",
              icon: Database,
            },
            {
              title: "Agentic Triage Engine",
              desc: "Autonomous reasoning agent that routes inbound inquiries, checks customer order history, and triggers ERP webhooks.",
              icon: Brain,
            },
            {
              title: "PII Masking & Privacy Proxy",
              desc: "High-speed Go middleware that strips social security numbers, credit cards, and patient health data before querying public LLMs.",
              icon: Lock,
            },
          ].map((tool) => {
            const Icon = tool.icon;
            return (
              <div key={tool.title} className="p-8 bg-[#0b0f17] border border-gray-800 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-gray-900 border border-white/5 rounded-2xl flex items-center justify-center text-[#d4af37] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">{tool.desc}</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-xs font-black uppercase tracking-wider text-[#d4af37] hover:underline"
                >
                  Request Technical Spec Sheet →
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-4">
            Need custom AI integration?
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Our machine learning team can configure, fine-tune, and host these modules in your private cloud.
          </p>
          <Link
            href="/book-consultation"
            className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black font-black text-sm rounded-xl hover:bg-[#e4c04e] transition-all"
          >
            Schedule AI Architecture Call
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
