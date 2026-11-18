import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  CreditCard,
  Lock,
  ArrowRight,
  TrendingUp,
  Database,
  BarChart2,
  FileCheck,
} from "lucide-react";

export const metadata = {
  title: "FinTech & Financial Infrastructure | CodeNest",
  description:
    "Engineering high-frequency transactional platforms, payment gateways, ledger synchronization, and SOC 2 / PCI-DSS compliance architectures.",
};

export default function FinTechIndustryPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
          <Link href="/services" className="hover:text-[#d4af37]">Industries</Link>
          <span>/</span>
          <span className="text-[#d4af37]">FinTech</span>
        </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-900/20 border border-emerald-800/40 mb-6">
              <CreditCard className="w-4 h-4 text-emerald-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                Financial Technologies
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white leading-[1.1] mb-6">
              Audit-Ready <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#d4af37] to-[#b8860b]">
                Financial Infrastructure
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              We engineer zero-loss transactional ledgers, high-frequency payment gateways, automated AML/KYC ingestion flows, and immutable ledger architectures tailored for modern FinTech institutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/book-consultation"
                className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black font-black text-sm rounded-xl hover:bg-[#e4c04e] transition-all shadow-lg hover:scale-105"
              >
                Schedule FinTech Architecture Review
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-gray-800 shadow-2xl bg-black">
            <Image
              src="/services/digital_infrastructure_v3.png"
              alt="FinTech Systems"
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
              title: "Immutable Double-Entry Ledgers",
              desc: "Cryptographically verifiable ledger systems with strict ACID compliance, ensuring mathematical balance at every step.",
              icon: FileCheck,
            },
            {
              title: "PCI-DSS Level 1 & SOC 2 Readiness",
              desc: "Zero-plaintext card storage, tokenized payment vaults, and automated vulnerability scanning against OWASP financial attack vectors.",
              icon: Lock,
            },
            {
              title: "Sub-10ms Transaction Settlement",
              desc: "High-speed Go and Rust backend clusters fronted by Redis in-memory matching engines capable of 10,000+ orders per second.",
              icon: TrendingUp,
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
            Build your mission-critical financial system
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Speak with our financial systems architects under full NDA.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black font-black text-sm rounded-xl hover:bg-[#e4c04e] transition-all"
          >
            Start FinTech Project
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
