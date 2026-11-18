import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle,
  ExternalLink,
  Cpu,
  Zap,
  Brain,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Case Study: Nexus AI Customer Support System | CodeNest",
  description:
    "How CodeNest deployed autonomous LLM support agents resolving 84% of first-touch enterprise tickets with zero hallucinations.",
};

export default function AISupportCaseStudyPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <Link
          href="/projects"
          className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[#d4af37] mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Systems
        </Link>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-900/20 border border-blue-800/40 mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
                AI & Workflow Automation
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white leading-[1.1] mb-6">
              Nexus AI Customer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#d4af37] to-[#b8860b]">
                Support Cluster
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              A private, SOC-2 compliant autonomous support ecosystem utilizing retrieval augmented generation (RAG) and deterministic tool calling to resolve 84% of tier-1 support tickets in under 12 seconds.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python FastAPI", "Pinecone Vector DB", "LangChain", "Celery", "PostgreSQL"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-900 border border-gray-800 text-xs text-gray-300 rounded-md font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-gray-800 shadow-2xl bg-black">
            <Image
              src="/portfolio/ai_support.png"
              alt="Nexus AI Support"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            { value: "84%", label: "Autonomous Resolution" },
            { value: "11s", label: "Average Response Time" },
            { value: "4.9/5", label: "CSAT Score" },
            { value: "$180k", label: "Annual Support Savings" },
          ].map((m) => (
            <div key={m.label} className="p-6 bg-[#0b0f17] border border-gray-800 rounded-2xl text-center">
              <div className="text-3xl lg:text-4xl font-black text-[#d4af37] mb-1">{m.value}</div>
              <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">{m.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-12 bg-[#0c121e] border border-gray-800 rounded-[2.5rem] text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-black text-white mb-3">Ready to deploy enterprise AI agents?</h3>
          <p className="text-xs text-gray-400 mb-6">
            Schedule an AI architecture discussion with our machine learning engineers.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-[#d4af37] text-black font-black text-xs uppercase tracking-wider rounded-xl hover:bg-[#e4c04e] transition-all"
          >
            Schedule AI Architecture Call →
          </Link>
        </div>
      </div>
    </div>
  );
}
