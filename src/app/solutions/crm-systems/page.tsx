import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Target,
  Zap,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  BarChart2,
  Bell,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Enterprise CRM Systems | CodeNest",
  description:
    "Custom CRM solutions engineered for high-velocity sales pipelines, automated lead scoring, and omnichannel client engagement.",
};

export default function CRMSystemsPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
          <Link href="/services" className="hover:text-[#d4af37]">Solutions</Link>
          <span>/</span>
          <span className="text-[#d4af37]">CRM Systems</span>
        </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-6">
              <Users className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
                Relationship Architecture
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white leading-[1.1] mb-6">
              Advanced Customer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
                Relationship Management
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Generic CRMs are bloated with unnecessary widgets and slow database interfaces. CodeNest builds lightning-fast, custom CRM ecosystems designed specifically for your sales velocity, deal stages, and customer lifecycle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/book-consultation"
                className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black font-black text-sm rounded-xl hover:bg-[#e4c04e] transition-all shadow-lg hover:scale-105"
              >
                Blueprint Your Custom CRM
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-gray-800 shadow-2xl bg-black">
            <Image
              src="/services/web_app_v3.png"
              alt="CRM Systems"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </div>

        {/* CRM Capabilities */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {[
            {
              title: "Kanban Pipeline Orchestration",
              desc: "Drag-and-drop opportunity boards with instant optimistic UI state updates and automatic trigger workflows for deal progression.",
              icon: Target,
            },
            {
              title: "AI-Powered Lead Scoring",
              desc: "Machine learning algorithms that analyze email engagement, company size, and visit behaviors to prioritize hot inbound leads.",
              icon: Sparkles,
            },
            {
              title: "Omnichannel Communications",
              desc: "Unified email sync, SMS notifications, WhatsApp API hooks, and inbound calling logs organized seamlessly into client timelines.",
              icon: MessageSquare,
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

        {/* Feature Highlights */}
        <div className="p-10 lg:p-14 bg-[#080c14] border border-gray-800 rounded-[2.5rem] mb-28">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Built For Enterprise Sales Velocity
            </h2>
            <p className="text-gray-400 text-sm">
              Empower your sales, account management, and customer success teams with tools built for speed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Instant Search & Filtering", desc: "Filter through 500,000+ contacts and companies in under 50ms using indexed Elasticsearch." },
              { title: "Automated Email Sequences", desc: "Trigger personalized multi-step email campaigns directly from your verified domain." },
              { title: "Contract & Quote Generation", desc: "One-click generation of PDF quotes and invoices with digital signature collection." },
            ].map((f) => (
              <div key={f.title} className="p-6 bg-gray-950/60 border border-gray-800 rounded-2xl">
                <CheckCircle className="w-5 h-5 text-[#d4af37] mb-3" />
                <h4 className="text-base font-bold text-white mb-2">{f.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-4">
            Accelerate your client acquisition and retention
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Let's design a high-velocity CRM system that fits your team's workflow perfectly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black font-black text-sm rounded-xl hover:bg-[#e4c04e] transition-all"
          >
            Start Your Custom CRM Project
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
