import React from "react";
import Link from "next/link";
import {
  CheckCircle,
  Zap,
  Shield,
  ArrowRight,
  Server,
  Layers,
  Cpu,
} from "lucide-react";

export const metadata = {
  title: "Pricing & Budget Architecture | CodeNest",
  description:
    "Transparent investment frameworks and strategic budget architectures engineered for measurable ROI.",
};

const tiers = [
  {
    name: "Startup Scale",
    tagline: "For early-stage validation & high-impact corporate systems",
    price: "$4,500 - $12,000",
    period: "typical fixed milestone",
    popular: false,
    features: [
      "Custom Next.js 14 Frontend Architecture",
      "Tailwind CSS & Mobile-First Interface",
      "Standard Headless CMS or DB Setup",
      "Full Technical SEO & OpenGraph Markup",
      "Automated CI/CD Deployment Pipeline",
      "99.9% Uptime Guarantee",
      "30 Days Post-Launch Warranty Support",
    ],
    ctaText: "Start Startup Build",
    ctaLink: "/contact",
  },
  {
    name: "Growth Scale",
    tagline: "For scaling platforms, SaaS MVPs & complex portals",
    price: "$15,000 - $35,000",
    period: "typical sprint scope",
    popular: true,
    features: [
      "Everything in Startup Scale, plus:",
      "Custom Database Schema (PostgreSQL/Redis)",
      "Role-Based Access Control (RBAC)",
      "High-Throughput API Gateway",
      "Interactive Analytics Dashboard",
      "Stripe / Payment Gateway Integration",
      "Automated Unit & End-to-End Testing",
      "99.99% Uptime SLA",
      "60 Days Dedicated Technical Support",
    ],
    ctaText: "Architect Growth System",
    ctaLink: "/book-consultation",
  },
  {
    name: "Enterprise Scale",
    tagline: "For distributed architectures, multi-tenant SaaS & AI systems",
    price: "$45,000+",
    period: "custom scope or retainers",
    popular: false,
    features: [
      "Everything in Growth Scale, plus:",
      "Kubernetes & Docker Microservice Orchestration",
      "Active-Active Multi-Region Database Clusters",
      "Custom Enterprise AI / LLM RAG Workflows",
      "SOC 2 Type II & HIPAA Readiness Alignment",
      "Asynchronous Apache Kafka Event Streaming",
      "Automated Penetration & Stress Audits",
      "Dedicated Senior Architect Point of Contact",
      "24/7/365 Incident Triage & Telemetry SLA",
    ],
    ctaText: "Schedule Enterprise Review",
    ctaLink: "/book-consultation",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-8">
            <Zap className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
              Strategic Investment Frameworks
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
            Transparent Budget <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
              Architectures
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed font-normal max-w-2xl mx-auto">
            Clear milestone deliverables, zero surprise hourly billings, and ironclad technical accountability from inception to global deployment.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-28">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-[2.5rem] p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                tier.popular
                  ? "bg-[#0f1726] border-2 border-[#d4af37] shadow-2xl shadow-[#d4af37]/15 lg:-translate-y-4"
                  : "bg-[#0b0f17] border border-gray-800 hover:border-gray-700"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#d4af37] text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                  Most Popular For Scale
                </div>
              )}

              <div>
                <h3 className="text-2xl font-black text-white mb-2">{tier.name}</h3>
                <p className="text-xs text-gray-400 mb-6">{tier.tagline}</p>

                <div className="mb-8 pb-8 border-b border-gray-800">
                  <div className="text-3xl lg:text-4xl font-black text-[#d4af37] mb-1">
                    {tier.price}
                  </div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                    {tier.period}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start text-xs text-gray-300 font-medium">
                      <CheckCircle className="w-4 h-4 text-[#d4af37] mr-2.5 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href={tier.ctaLink}
                  className={`w-full py-4 rounded-xl text-center text-sm font-black flex items-center justify-center space-x-2 transition-all ${
                    tier.popular
                      ? "bg-[#d4af37] text-black hover:bg-[#e4c04e] shadow-xl hover:scale-[1.02]"
                      : "bg-white/5 border border-white/10 text-white hover:bg-[#d4af37] hover:text-black"
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise SLA Guarantee */}
        <div className="p-10 lg:p-14 bg-[#080c14] border border-gray-800 rounded-[2.5rem] mb-20 text-center max-w-3xl mx-auto">
          <Shield className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
          <h3 className="text-2xl font-black text-white mb-3">Our Fixed-Milestone Guarantee</h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            We operate with milestone-based delivery criteria. You inspect and verify each functional module in our staging environment before milestone sign-off. Full IP and repository ownership is transferred directly to your organization.
          </p>
          <div className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            SOC 2 Type II Aligned • End-to-End Escrow & IP Protection
          </div>
        </div>
      </div>
    </div>
  );
}
