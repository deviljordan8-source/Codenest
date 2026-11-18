import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle,
  ExternalLink,
  Layers,
  Zap,
  Server,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Case Study: CoreFlow Enterprise ERP Dashboard | CodeNest",
  description:
    "How CodeNest replaced 6 disconnected software tools with a single unified ERP dashboard for a 350-person enterprise.",
};

export default function ERPCaseStudyPage() {
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
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
                Enterprise Resource Systems
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white leading-[1.1] mb-6">
              CoreFlow Enterprise <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
                ERP Dashboard
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Consolidating CRM pipelines, financial ledgering, inventory logistics, and employee permission matrices into a lightning-fast single pane of glass.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "MongoDB", "Redis", "Docker", "AWS"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-900 border border-gray-800 text-xs text-gray-300 rounded-md font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-gray-800 shadow-2xl bg-black">
            <Image
              src="/portfolio/erp.png"
              alt="CoreFlow ERP"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            { value: "6 to 1", label: "Tools Unified" },
            { value: "40 hrs", label: "Saved Weekly" },
            { value: "100%", label: "Inventory Accuracy" },
            { value: "0", label: "Data Discrepancies" },
          ].map((m) => (
            <div key={m.label} className="p-6 bg-[#0b0f17] border border-gray-800 rounded-2xl text-center">
              <div className="text-3xl lg:text-4xl font-black text-[#d4af37] mb-1">{m.value}</div>
              <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">{m.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-12 bg-[#0c121e] border border-gray-800 rounded-[2.5rem] text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-black text-white mb-3">Tired of fragmented business software?</h3>
          <p className="text-xs text-gray-400 mb-6">
            Let our enterprise software architects construct a unified ERP ecosystem for your operations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-[#d4af37] text-black font-black text-xs uppercase tracking-wider rounded-xl hover:bg-[#e4c04e] transition-all"
          >
            Request Custom ERP Estimate →
          </Link>
        </div>
      </div>
    </div>
  );
}
