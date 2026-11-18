import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Rocket,
  ShieldCheck,
  Zap,
  ArrowRight,
  Bell,
  Sparkles,
  Cloud,
} from "lucide-react";

export const metadata = {
  title: "Upcoming SaaS Platforms | CodeNest",
  description:
    "Preview the next generation of cloud developer tools and enterprise orchestration software being engineered by CodeNest.",
};

export default function UpcomingSaaSPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
          <Link href="/products" className="hover:text-[#d4af37]">Products</Link>
          <span>/</span>
          <span className="text-[#d4af37]">Upcoming SaaS</span>
        </div>

        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-8">
            <Rocket className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
              Next-Gen Cloud Tools
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white leading-[1.1] mb-8">
            Upcoming SaaS Platforms <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
              In Private Beta
            </span>
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            We are dogfooding our own internal cloud developer platforms. Reserve your early beta access to get complimentary access before public launch.
          </p>
        </div>

        {/* 2 Upcoming Products */}
        <div className="grid md:grid-cols-2 gap-10 mb-28">
          <div className="bg-[#0b0f17] border border-gray-800 rounded-[2.5rem] p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-block text-[10px] font-black uppercase tracking-wider px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full mb-6">
                Developer Infrastructure
              </div>
              <h3 className="text-3xl font-black text-white mb-4">NestDeploy Cloud</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-8">
                Zero-config ephemeral preview environments and single-command Kubernetes cluster deployments for Next.js, Go, and PostgreSQL. Deploy multi-region microservices without writing thousands of lines of raw Helm charts.
              </p>
              <div className="space-y-3 mb-8">
                {["Ephemeral PR Preview URLs", "Automatic TLS & Edge Routing", "Integrated Redis & DB Provisioning"].map((item) => (
                  <div key={item} className="flex items-center text-xs text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mr-3" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <Link
              href="/contact?interest=NestDeploy"
              className="inline-flex items-center justify-center py-4 bg-[#d4af37] text-black font-black text-xs uppercase tracking-wider rounded-xl hover:bg-[#e4c04e] transition-all"
            >
              Request Early Beta Access
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>
          </div>

          <div className="bg-[#0b0f17] border border-gray-800 rounded-[2.5rem] p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-block text-[10px] font-black uppercase tracking-wider px-3 py-1 bg-emerald-900/30 text-emerald-400 rounded-full mb-6">
                Enterprise AI Observability
              </div>
              <h3 className="text-3xl font-black text-white mb-4">NexusTelemetry</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-8">
                Real-time cost tracking, latency attribution, and token hallucination detection for production LLM pipelines. Trace every agent step from API prompt to Pinecone vector recall.
              </p>
              <div className="space-y-3 mb-8">
                {["Token Cost Attribution per User", "Hallucination & Drift Alarms", "Automated Fallback Model Switching"].map((item) => (
                  <div key={item} className="flex items-center text-xs text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mr-3" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <Link
              href="/contact?interest=NexusTelemetry"
              className="inline-flex items-center justify-center py-4 bg-white/10 hover:bg-[#d4af37] hover:text-black text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all"
            >
              Request Early Beta Access
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
