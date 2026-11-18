import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Cpu,
  Brain,
  MessageSquare,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Database,
  Lock,
} from "lucide-react";

export const metadata = {
  title: "AI Solutions & Neural Workflows | CodeNest",
  description:
    "Custom neural networks, LLM integrations, autonomous AI agents, and intelligent enterprise data analysis.",
};

export default function AISolutionsPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
          <Link href="/services" className="hover:text-[#d4af37]">Solutions</Link>
          <span>/</span>
          <span className="text-[#d4af37]">AI Solutions</span>
        </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-6">
              <Cpu className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
                Artificial Intelligence Core
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white leading-[1.1] mb-6">
              AI-Powered Systems for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
                Modern Businesses
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              We design and implement custom LLM integrations, autonomous triage agents, and private neural workflows tailored to your proprietary knowledge base with complete data privacy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/book-consultation"
                className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black font-black text-sm rounded-xl hover:bg-[#e4c04e] transition-all shadow-lg hover:scale-105"
              >
                Book AI Architecture Session
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-gray-800 shadow-2xl bg-black">
            <Image
              src="/services/ai_solutions_v3.png"
              alt="AI Solutions"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {[
            {
              title: "Autonomous Support Agents",
              desc: "Multi-agent customer support systems capable of understanding context, checking database records, and resolving complex inquiries autonomously.",
              icon: MessageSquare,
            },
            {
              title: "Enterprise RAG Pipelines",
              desc: "Secure Retrieval-Augmented Generation connecting your internal Notion, PDFs, and SQL records without leaking data to public foundation models.",
              icon: Database,
            },
            {
              title: "Predictive Analytics & ML",
              desc: "Custom statistical models for churn prediction, sales forecasting, dynamic pricing, and automated anomaly detection.",
              icon: Brain,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="p-8 bg-[#0b0f17] border border-gray-800 rounded-3xl">
                <div className="w-12 h-12 bg-gray-900 border border-white/5 rounded-2xl flex items-center justify-center text-[#d4af37] mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Security & Compliance Callout */}
        <div className="p-10 lg:p-12 bg-gradient-to-r from-blue-950/40 to-indigo-950/20 border border-blue-900/40 rounded-[2.5rem] mb-28 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#d4af37] mb-3">
              <Lock className="w-4 h-4" />
              <span>Zero-Leakage Guarantee</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-black text-white mb-3">
              Your Proprietary Data Stays Completely Yours
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              We deploy models in isolated VPCs with zero-data-retention API contracts, preventing your corporate intellect from ever being utilized for public model training.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-[#d4af37] hover:text-black text-white font-bold text-sm rounded-xl transition-all shrink-0"
          >
            Review Security SLA
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-4">
            Ready to integrate AI into your operations?
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Let's evaluate your existing workflows and identify the highest-ROI automation targets.
          </p>
          <Link
            href="/book-consultation"
            className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black font-black text-sm rounded-xl hover:bg-[#e4c04e] transition-all"
          >
            Schedule AI Discovery Call
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
