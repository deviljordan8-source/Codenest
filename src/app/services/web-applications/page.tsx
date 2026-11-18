import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CodeXml,
  Layers,
  Server,
  Zap,
  ArrowRight,
  CheckCircle,
  Database,
  Cpu,
} from "lucide-react";

export const metadata = {
  title: "Web Application Development | CodeNest - Complex Systems",
  description:
    "Engineering scalable mission-critical internal tools, executive dashboards, and enterprise ERP/CRM systems.",
};

export default function WebApplicationsPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
          <Link href="/services" className="hover:text-[#d4af37]">Services</Link>
          <span>/</span>
          <span className="text-[#d4af37]">Web Applications</span>
        </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-6">
              <CodeXml className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
                Application Engineering
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white leading-[1.1] mb-6">
              Complex Web <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
                Application Development
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              We build scalable, mission-critical internal tools, executive dashboards, and tailored ERP/CRM systems engineered to handle millions of records and high-concurrency workflows.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/book-consultation"
                className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black font-black text-sm rounded-xl hover:bg-[#e4c04e] transition-all shadow-lg hover:scale-105"
              >
                Schedule Technical Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-gray-800 shadow-2xl bg-black">
            <Image
              src="/services/web_app_v3.png"
              alt="Web Applications"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {[
            {
              title: "Dashboards & Portals",
              desc: "Real-time interactive administrative panels featuring WebSocket telemetry, custom filtering, and instant data export pipelines.",
              icon: Layers,
            },
            {
              title: "Enterprise ERP & CRM",
              desc: "Custom resource planning software tailored directly to your specific business logic, employee roles, and accounting ledgers.",
              icon: Database,
            },
            {
              title: "High-Throughput APIs",
              desc: "Compiled, type-safe API gateways in Go and TypeScript with rate-limiting, OAuth2 authentication, and sub-10ms response times.",
              icon: Zap,
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

        {/* Engineering Lifecycle */}
        <div className="p-10 lg:p-14 bg-[#080c14] border border-gray-800 rounded-[2.5rem] mb-28">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Our Web App Development Lifecycle
            </h2>
            <p className="text-gray-400 text-sm">
              From schema modeling to load testing under thousands of concurrent workers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Systems Analysis", desc: "Data schema definition, user permission matrices, and wireframing." },
              { step: "02", title: "Core Engineering", desc: "Type-safe backend services, transaction locks, and relational clustering." },
              { step: "03", title: "Frontend Integration", desc: "Responsive React/Next.js interface with optimistic state updates." },
              { step: "04", title: "Load & Security Testing", desc: "Synthetic stress testing to ensure sub-second response times under load." },
            ].map((s) => (
              <div key={s.step} className="p-6 bg-gray-950/60 border border-gray-800 rounded-2xl">
                <div className="text-2xl font-black text-[#d4af37] mb-3">{s.step}</div>
                <h4 className="text-base font-bold text-white mb-2">{s.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-4">
            Need a custom web application?
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Tell us about your requirements and get an architectural estimate within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black font-black text-sm rounded-xl hover:bg-[#e4c04e] transition-all"
          >
            Start Your Web App Project
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
