import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  CodeXml,
  Cpu,
  Zap,
  Rocket,
  Shield,
  MessageSquare,
  ArrowRight,
  Layers,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Services | CodeNest - Enterprise Digital Systems",
  description:
    "Explore CodeNest's core engineering capabilities: digital infrastructure, custom web applications, AI automation, and cloud orchestration.",
};

const services = [
  {
    title: "Digital Infrastructure & Systems Architecture",
    slug: "digital-infrastructure",
    image: "/services/digital_infrastructure_v3.png",
    description:
      "Architecting resilient corporate web ecosystems with modern frontend excellence, global edge CDN caching, and automated cloud infrastructure.",
    features: [
      "High-Performance Edge Portals",
      "Global CDN & WAF Architecture",
      "Dynamic Multi-Zone Scaling",
      "Zero-Downtime CI/CD Pipelines",
    ],
    icon: Globe,
  },
  {
    title: "Web Application Development",
    slug: "web-applications",
    image: "/services/web_app_v3.png",
    description:
      "Engineering scalable, high-concurrency internal tools, executive dashboards, custom ERP/CRM ecosystems, and mission-critical portals.",
    features: [
      "Custom ERP & CRM Platforms",
      "Real-Time Analytics Dashboards",
      "Strict Type-Safe Backends",
      "Sub-Second API Response Times",
    ],
    icon: CodeXml,
  },
  {
    title: "AI Solutions & Neural Workflows",
    slug: "/solutions/ai-solutions",
    image: "/services/ai_solutions_v3.png",
    description:
      "Integrating cutting-edge LLMs, autonomous support agents, sentiment triage pipelines, and self-optimizing business intelligence.",
    features: [
      "Autonomous AI Support Agents",
      "Enterprise Retrieval-Augmented Generation (RAG)",
      "Predictive Data Pipelines",
      "Custom Fine-Tuned Models",
    ],
    icon: Cpu,
  },
  {
    title: "Business Process Automation",
    slug: "/solutions/business-automation",
    image: "/services/business_automation_v3.png",
    description:
      "Eliminating manual operational overhead through robust cross-system API integrations, robotic process automation, and auto-sync pipelines.",
    features: [
      "Cross-Platform API Pipelines",
      "Automated Financial & Invoicing Sync",
      "Intelligent Document Ingestion",
      "98% Reduction in Manual Labor",
    ],
    icon: Zap,
  },
  {
    title: "UI/UX Design & Interface Systems",
    slug: "ui-ux-design",
    image: "/portfolio/erp.png",
    description:
      "User-centric modern digital interfaces built with design systems that bridge visual elegance with developer velocity and accessibility.",
    features: [
      "Figma-to-Code Design Systems",
      "Design Token Standardisation",
      "Micro-Interactions & Motion",
      "WCAG 2.1 AA Compliance",
    ],
    icon: Rocket,
  },
  {
    title: "Free Website Initiative",
    slug: "/free-website",
    image: "/portfolio/lms.png",
    description:
      "Our dedicated community initiative providing high-caliber digital engineering for eligible emerging businesses and visionary startups.",
    features: [
      "Custom Tailored Next.js Build",
      "Full Mobile Responsiveness",
      "SEO Infrastructure Included",
      "100% Complimentary Development",
    ],
    icon: Shield,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-8">
            <Layers className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
              Engineering Spectrum
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
            Engineered Systems for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
              Enterprise Scale
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed font-normal max-w-2xl mx-auto">
            From single-tenant corporate websites to multi-region distributed cloud infrastructure and intelligent AI integrations.
          </p>
        </div>

        {/* Services List */}
        <div className="grid md:grid-cols-2 gap-10 mb-28">
          {services.map((svc) => {
            const Icon = svc.icon;
            const targetUrl = svc.slug.startsWith("/") ? svc.slug : `/services/${svc.slug}`;
            return (
              <div
                key={svc.title}
                className="bg-[#0b0f17] border border-gray-800 rounded-[2.5rem] overflow-hidden flex flex-col justify-between hover:border-[#d4af37]/50 shadow-2xl transition-all duration-300 group"
              >
                <div>
                  <div className="relative w-full h-56 sm:h-64 bg-black overflow-hidden">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover opacity-75 group-hover:scale-105 group-hover:opacity-95 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-black/40" />
                    <div className="absolute top-4 left-4 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
                      <Icon className="w-6 h-6 text-[#d4af37]" />
                    </div>
                  </div>

                  <div className="p-8">
                    <h2 className="text-2xl font-black text-white mb-4 group-hover:text-[#d4af37] transition-colors leading-tight">
                      {svc.title}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-normal">
                      {svc.description}
                    </p>

                    <div className="space-y-2 mb-8">
                      {svc.features.map((feat) => (
                        <div key={feat} className="flex items-center text-xs text-gray-300 font-medium">
                          <CheckCircle className="w-3.5 h-3.5 text-[#d4af37] mr-2.5 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <Link
                    href={targetUrl}
                    className="inline-flex items-center justify-center w-full py-4 bg-white/5 border border-white/10 text-sm font-black rounded-xl hover:bg-[#d4af37] hover:text-black transition-all group-hover:border-[#d4af37]"
                  >
                    Explore Service Architecture
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="p-12 lg:p-16 bg-[#0c121e] border border-[#d4af37]/30 rounded-[3rem] text-center">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
            Have a custom requirement?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            We architect tailored solutions to fit your exact business workflows, security compliance requirements, and scale targets.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-9 py-4 bg-[#d4af37] text-black font-black text-base rounded-2xl hover:bg-[#e4c04e] transition-all shadow-xl hover:scale-105"
          >
            Discuss Your Custom Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
