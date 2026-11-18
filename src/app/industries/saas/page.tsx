import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Cloud,
  Zap,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Users,
  Lock,
  Globe,
} from "lucide-react";

export const metadata = {
  title: "SaaS Industry Architecture & Scale Engineering | CodeNest",
  description:
    "Engineering multi-tenant platforms capable of scaling to 100k+ daily active users without technical debt or architectural rewrites.",
};

export default function SaaSIndustryPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
          <Link href="/services" className="hover:text-[#d4af37]">Industries</Link>
          <span>/</span>
          <span className="text-[#d4af37]">SaaS</span>
        </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-900/20 border border-blue-800/40 mb-6">
              <Cloud className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
                Software as a Service
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white leading-[1.1] mb-6">
              Scale Engineering for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#d4af37] to-[#b8860b]">
                High-Growth SaaS
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              We partner with seed-to-Series B SaaS founders to architect software that won't require a ground-up rewrite at 100k users. Zero-downtime database migrations, automated subscription billing, and sub-second global queries.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/book-consultation"
                className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black font-black text-sm rounded-xl hover:bg-[#e4c04e] transition-all shadow-lg hover:scale-105"
              >
                Schedule SaaS Scale Review
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-gray-800 shadow-2xl bg-black">
            <Image
              src="/services/web_app_v3.png"
              alt="SaaS Industry"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {[
            {
              title: "100k+ User Capacity Testing",
              desc: "Simulate massive traffic spikes and user onboarding avalanches before they happen in production.",
              icon: Users,
            },
            {
              title: "Strict Tenant Isolation (RLS)",
              desc: "PostgreSQL Row-Level Security ensuring enterprise customers that their company data is completely isolated.",
              icon: Lock,
            },
            {
              title: "Global Edge Caching",
              desc: "Next.js edge workers caching API responses globally, bringing TTFB down to under 50ms across every continent.",
              icon: Globe,
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

        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-4">
            Build your SaaS with an elite engineering partner
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Speak directly with our senior cloud architects today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black font-black text-sm rounded-xl hover:bg-[#e4c04e] transition-all"
          >
            Start Your SaaS Build
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
