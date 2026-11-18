import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Settings,
  Database,
  Layers,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Lock,
} from "lucide-react";

export const metadata = {
  title: "Enterprise ERP Systems | CodeNest",
  description:
    "Custom ERP solutions engineered for multi-entity financial management, supply chain tracking, and real-time operational analytics.",
};

export default function ERPSystemsPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
          <Link href="/services" className="hover:text-[#d4af37]">Solutions</Link>
          <span>/</span>
          <span className="text-[#d4af37]">ERP Systems</span>
        </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-6">
              <Settings className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
                Enterprise Resource Planning
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white leading-[1.1] mb-6">
              Custom ERP Systems <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
                Tailored for Complex Ops
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Off-the-shelf software forces your business to adapt to rigid constraints. CodeNest engineers proprietary ERP platforms that mirror your exact multi-currency, warehousing, and accounting workflows with sub-second responsiveness.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/book-consultation"
                className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black font-black text-sm rounded-xl hover:bg-[#e4c04e] transition-all shadow-lg hover:scale-105"
              >
                Schedule ERP Architecture Session
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-gray-800 shadow-2xl bg-black">
            <Image
              src="/portfolio/erp.png"
              alt="ERP Systems"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </div>

        {/* Core Modules */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {[
            {
              title: "Financial & Ledger Engine",
              desc: "Double-entry bookkeeping, automated multi-currency FX revaluation, automated tax reporting, and audit trail validation.",
              icon: BarChart3,
            },
            {
              title: "Inventory & Supply Matrix",
              desc: "Barcode-ready tracking, multi-warehouse stock balancing, automated supplier PO triggers, and low-latency stock alerts.",
              icon: Layers,
            },
            {
              title: "Role-Based Security Matrix",
              desc: "Granular attribute-based access control (ABAC), encrypted executive salaries, and immutable audit logging.",
              icon: Lock,
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

        {/* Technical Advantages */}
        <div className="p-10 lg:p-14 bg-[#080c14] border border-gray-800 rounded-[2.5rem] mb-28">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Why Custom ERP Outperforms Off-The-Shelf
            </h2>
            <p className="text-gray-400 text-sm">
              Say goodbye to expensive per-seat licensing, slow database queries, and rigid third-party limitations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Zero Per-Seat License Fees", desc: "You own 100% of the code and IP. Add 10 or 10,000 internal users at zero incremental software cost." },
              { title: "Sub-Second Query Speeds", desc: "PostgreSQL partitioning and Redis memory-caches ensure financial statements generate in under 500ms." },
              { title: "Seamless Custom Integrations", desc: "Direct Webhook and REST/gRPC bridges to your proprietary IoT sensors, Shopify stores, and banks." },
            ].map((adv) => (
              <div key={adv.title} className="p-6 bg-gray-950/60 border border-gray-800 rounded-2xl">
                <CheckCircle className="w-5 h-5 text-[#d4af37] mb-3" />
                <h4 className="text-base font-bold text-white mb-2">{adv.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-4">
            Ready to unify your business operations?
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Speak directly with our senior enterprise ERP architects to blueprint your database schema.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black font-black text-sm rounded-xl hover:bg-[#e4c04e] transition-all"
          >
            Start Your Custom ERP Build
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
