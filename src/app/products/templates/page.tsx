import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Layout,
  CodeXml,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Download,
} from "lucide-react";

export const metadata = {
  title: "Engineering Templates & Starters | CodeNest",
  description:
    "Production-grade Next.js 14, Go, and Laravel architectural starter kits pre-configured with strict typing, Tailwind CSS, and automated testing.",
};

export default function TemplatesPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
          <Link href="/products" className="hover:text-[#d4af37]">Products</Link>
          <span>/</span>
          <span className="text-[#d4af37]">Templates</span>
        </div>

        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-8">
            <Layout className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
              Code Foundations
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
            Battle-Tested Starters & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
              Engineering Templates
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Stop wasting two weeks writing boilerplate configurations, authentication flows, and database connections. Build on our battle-tested architectural starters.
          </p>
        </div>

        {/* 3 Templates */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {[
            {
              title: "Next.js 14 Enterprise SaaS Kit",
              desc: "Next.js App Router, TypeScript, Tailwind CSS, Stripe Billing Webhooks, Prisma/PostgreSQL, and Supabase Auth pre-configured.",
              tag: "React / Next.js",
            },
            {
              title: "Go Microservice Clean Starter",
              desc: "Idiomatic Golang REST & gRPC API template with Gin, SQLX, automated database migrations, Dockerfile, and GitHub Actions CI.",
              tag: "Go (Golang)",
            },
            {
              title: "Multi-Agent AI Python Scaffold",
              desc: "FastAPI server with Celery task queues, Redis memory cache, LangChain agent flows, and secure vector store connectors.",
              tag: "Python / AI",
            },
          ].map((item) => (
            <div key={item.title} className="p-8 bg-[#0b0f17] border border-gray-800 rounded-3xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-gray-900 text-[#d4af37] rounded-md border border-gray-800 mb-4 inline-block">
                  {item.tag}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">{item.desc}</p>
              </div>
              <Link
                href="/contact?type=template"
                className="inline-flex items-center justify-center w-full py-3 bg-white/5 border border-white/10 text-xs font-black uppercase tracking-wider rounded-xl hover:bg-[#d4af37] hover:text-black transition-all"
              >
                Access Architecture Kit
                <Download className="w-3.5 h-3.5 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
