import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Cloud,
  Layers,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  CreditCard,
  Lock,
  Cpu,
} from "lucide-react";

export const metadata = {
  title: "SaaS Platform Engineering | CodeNest",
  description:
    "Engineering multi-tenant B2B & B2C SaaS platforms with automated billing, isolated schemas, and high-concurrency auto-scaling.",
};

export default function SaaSPlatformsPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
          <Link href="/services" className="hover:text-[#d4af37]">Solutions</Link>
          <span>/</span>
          <span className="text-[#d4af37]">SaaS Platforms</span>
        </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-6">
              <Cloud className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
                Cloud Platform Architecture
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white leading-[1.1] mb-6">
              Multi-Tenant SaaS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
                Platform Engineering
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Launch and scale your software product with an elite multi-tenant foundation. From tenant data isolation and Stripe billing webhooks to global edge caching and auto-scaling Kubernetes pods.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/book-consultation"
                className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black font-black text-sm rounded-xl hover:bg-[#e4c04e] transition-all shadow-lg hover:scale-105"
              >
                Schedule SaaS Technical Review
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-gray-800 shadow-2xl bg-black">
            <Image
              src="/services/digital_infrastructure_v3.png"
              alt="SaaS Platforms"
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
              title: "Tenant Isolation Patterns",
              desc: "Choose between schema-per-tenant or row-level security (RLS) policies to guarantee strict data segregation and compliance.",
              icon: Lock,
            },
            {
              title: "Subscription & Metered Billing",
              desc: "Automated recurring subscriptions, usage-based metering, prorated upgrades, and automated churn recovery with Stripe.",
              icon: CreditCard,
            },
            {
              title: "Linear Auto-Scaling",
              desc: "Microservices containerized with Docker and auto-scaled dynamically based on request spikes and CPU utilization.",
              icon: Layers,
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
            Turn your software vision into a market-ready SaaS
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            From Day 1 architecture to hundreds of thousands of active users, we engineer the foundation that lets you scale effortlessly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black font-black text-sm rounded-xl hover:bg-[#e4c04e] transition-all"
          >
            Launch Your SaaS Platform
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
