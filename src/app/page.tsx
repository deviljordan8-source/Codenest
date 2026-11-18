import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CircleCheck,
  ArrowRight,
  ArrowUpRight,
  Globe,
  CodeXml,
  Cpu,
  Zap,
  Terminal,
  Server,
  Shield,
  Brain,
  Layers,
  Gauge,
  ExternalLink,
  Users,
  ShieldCheck,
  Calendar,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import BootingScreen from "@/components/BootingScreen";
import SystemTopologyPlayground from "@/components/SystemTopologyPlayground";
import DevelopmentWorkflow from "@/components/DevelopmentWorkflow";
import InteractiveCodeTerminal from "@/components/InteractiveCodeTerminal";
import InteractiveArchitectureEstimator from "@/components/InteractiveArchitectureEstimator";

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Booting Loader Animation */}
      <BootingScreen />

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-screen w-full bg-black flex flex-col justify-center overflow-hidden pt-28 pb-16">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-900/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Digital Grid Canvas Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full py-12 flex-grow flex items-center">
          <div className="max-w-4xl">
            {/* Trusted Badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-lg">
              <CircleCheck className="w-4 h-4 text-[#d4af37]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-gray-300">
                Trusted by Startups, High-Growth Teams & Enterprises
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.08] tracking-tight mb-6">
              Engineering Digital Systems Built For{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
                Massive Scale
              </span>
              <span className="inline-block w-2.5 h-10 lg:w-3 lg:h-14 bg-[#d4af37] ml-3 align-baseline translate-y-1 animate-pulse" />
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-300 font-medium leading-relaxed mb-10 max-w-2xl">
              Enterprise-grade software architecture, high-performance web applications, and intelligent AI automation custom-engineered for modern enterprises.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-9 py-4 font-black text-black bg-[#d4af37] hover:bg-[#e4c04e] rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] hover:scale-105 active:scale-95"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center justify-center w-full sm:w-auto px-9 py-4 font-bold text-white border border-white/30 hover:border-[#d4af37] rounded-full hover:bg-white/10 transition-all backdrop-blur-md"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Marquee Ticker */}
        <div className="w-full overflow-hidden bg-black/80 backdrop-blur-md border-t border-b border-white/10 py-4 flex z-20">
          <div className="flex space-x-12 animate-[marquee_25s_linear_infinite] whitespace-nowrap text-xs font-black uppercase tracking-widest text-gray-400">
            <span className="flex items-center text-[#d4af37]">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] mr-3" />
              SOC 2 TYPE II COMPLIANCE
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
              NEXT.JS 14 & TYPESCRIPT
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-3" />
              99.99% AVERAGE UPTIME
            </span>
            <span className="flex items-center text-[#d4af37]">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] mr-3" />
              SUB-SECOND EDGE LATENCY
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-indigo-500 mr-3" />
              GO & RUST SYSTEMS
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-cyan-500 mr-3" />
              DOCKER & KUBERNETES CLUSTERING
            </span>
            <span className="flex items-center text-[#d4af37]">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] mr-3" />
              REDIS CACHE & DATA WAREHOUSING
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-blue-400 mr-3" />
              ENTERPRISE AI & AUTOMATION
            </span>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES SHOWCASE ===================== */}
      <section id="services" className="py-24 lg:py-32 bg-black border-t border-gray-900">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-6">
              <Cpu className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
                Engineering Solutions
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              Solutions Designed for <br />
              <span className="text-gray-500">Modern Businesses</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed font-normal">
              We engineer scalable systems and intelligent automation to drive digital transformation for forward-thinking enterprises. Our methodology is rooted in structured engineering excellence.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1: Digital Infrastructure */}
            <Link
              href="/services/digital-infrastructure"
              className="group relative flex flex-col bg-[#0b0f17] border border-gray-800 rounded-[2rem] overflow-hidden hover:border-[#d4af37]/60 shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
            >
              <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-black flex items-center justify-center">
                <Image
                  src="/services/digital_infrastructure_v3.png"
                  alt="Digital Infrastructure"
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-black/60" />
                <h4 className="relative z-20 text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[#d4af37] tracking-[0.2em] uppercase text-center px-4">
                  DIGITAL INFRASTRUCTURE
                </h4>
                <div className="absolute top-4 left-4 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-4 right-4 p-3 bg-black/60 backdrop-blur-md rounded-full border border-white/10 group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                  Digital Infrastructure & Systems Architecture
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Architecting high-performance corporate and business systems with a focus on modern frontend excellence, resilient clusters, and responsive engineering.
                </p>
                <div className="mt-auto pt-6 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {["Corporate Infrastructure", "Systems Architecture", "High-performance Frontend"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-black uppercase tracking-wider px-3 py-1 bg-gray-900 text-gray-300 rounded-full border border-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#d4af37] flex items-center group-hover:translate-x-1.5 transition-transform">
                    Learn how this works →
                  </span>
                </div>
              </div>
            </Link>

            {/* Card 2: Web Applications */}
            <Link
              href="/services/web-applications"
              className="group relative flex flex-col bg-[#0b0f17] border border-gray-800 rounded-[2rem] overflow-hidden hover:border-[#d4af37]/60 shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
            >
              <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-black flex items-center justify-center">
                <Image
                  src="/services/web_app_v3.png"
                  alt="Web Applications"
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-black/60" />
                <h4 className="relative z-20 text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[#d4af37] tracking-[0.2em] uppercase text-center px-4">
                  WEB DEVELOPMENT
                </h4>
                <div className="absolute top-4 left-4 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
                  <CodeXml className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-4 right-4 p-3 bg-black/60 backdrop-blur-md rounded-full border border-white/10 group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                  Web Application Development
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Building scalable, mission-critical internal tools, enterprise portals, and comprehensive ERP/CRM systems tailored to your high-concurrency workflows.
                </p>
                <div className="mt-auto pt-6 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {["Dashboards & Portals", "Enterprise ERP/CRM", "Scalable Architectures"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-black uppercase tracking-wider px-3 py-1 bg-gray-900 text-gray-300 rounded-full border border-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#d4af37] flex items-center group-hover:translate-x-1.5 transition-transform">
                    See Examples →
                  </span>
                </div>
              </div>
            </Link>

            {/* Card 3: AI Solutions */}
            <Link
              href="/solutions/ai-solutions"
              className="group relative flex flex-col bg-[#0b0f17] border border-gray-800 rounded-[2rem] overflow-hidden hover:border-[#d4af37]/60 shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
            >
              <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-black flex items-center justify-center">
                <Image
                  src="/services/ai_solutions_v3.png"
                  alt="AI Solutions"
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-black/60" />
                <h4 className="relative z-20 text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[#d4af37] tracking-[0.2em] uppercase text-center px-4">
                  AI SOLUTIONS
                </h4>
                <div className="absolute top-4 left-4 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-4 right-4 p-3 bg-black/60 backdrop-blur-md rounded-full border border-white/10 group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                  AI Solutions & LLM Integrations
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Integrating advanced artificial intelligence to automate complex customer support, intelligent chat systems, predictive pipelines, and automated intelligence.
                </p>
                <div className="mt-auto pt-6 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {["AI Automation", "Intelligent Chat Systems", "Predictive Workflows"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-black uppercase tracking-wider px-3 py-1 bg-gray-900 text-gray-300 rounded-full border border-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#d4af37] flex items-center group-hover:translate-x-1.5 transition-transform">
                    Learn how this works →
                  </span>
                </div>
              </div>
            </Link>

            {/* Card 4: Business Automation */}
            <Link
              href="/solutions/business-automation"
              className="group relative flex flex-col bg-[#0b0f17] border border-gray-800 rounded-[2rem] overflow-hidden hover:border-[#d4af37]/60 shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
            >
              <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-black flex items-center justify-center">
                <Image
                  src="/services/business_automation_v3.png"
                  alt="Business Automation"
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-transparent to-black/60" />
                <h4 className="relative z-20 text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[#d4af37] tracking-[0.2em] uppercase text-center px-4">
                  BUSINESS AUTOMATION
                </h4>
                <div className="absolute top-4 left-4 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-4 right-4 p-3 bg-black/60 backdrop-blur-md rounded-full border border-white/10 group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                  Intelligent Business Automation
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Optimizing organizational productivity through robust workflow automation, API interconnectivity, and custom-engineered internal productivity tools.
                </p>
                <div className="mt-auto pt-6 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {["Workflow Optimization", "Internal Tools", "System Integration"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-black uppercase tracking-wider px-3 py-1 bg-gray-900 text-gray-300 rounded-full border border-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#d4af37] flex items-center group-hover:translate-x-1.5 transition-transform">
                    See Examples →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== SYSTEM TOPOLOGY PLAYGROUND ===================== */}
      <SystemTopologyPlayground />

      {/* ===================== INTERACTIVE ARCHITECTURE ESTIMATOR ===================== */}
      <section className="py-24 bg-black border-t border-gray-900">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <InteractiveArchitectureEstimator />
        </div>
      </section>

      {/* ===================== ENGINEERING AUTHORITY ===================== */}
      <section className="py-24 lg:py-32 bg-[#05070c] text-white relative overflow-hidden border-t border-gray-900">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Metrics & Summary */}
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-900/20 border border-blue-800/40 mb-6">
                <Terminal className="w-4 h-4 text-[#d4af37]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
                  Engineering Authority
                </span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
                Engineering-Driven <br />
                <span className="text-blue-500">Solutions</span> Built <br />
                for Scale
              </h2>
              <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-xl">
                Unlike traditional digital agencies, we operate as an elite engineering partner. Our focus is on building resilient,{" "}
                <span className="text-white font-bold">scalable architecture</span> that serves as the bedrock of your enterprise growth. We don't just build websites; we engineer mission-critical digital systems.
              </p>

              {/* 4 Hard Stats */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-800">
                <div>
                  <div className="text-4xl font-black text-white mb-1">150+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                    Systems Engineered
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-1">99.99%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                    Avg. Uptime
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-1">500+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                    Automation Workflows
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-1">Clean</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37]">
                    Security Audits
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 Pillars Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  tag: "modular",
                  title: "Scalable Architecture",
                  desc: "We architect future-ready systems using modular patterns that ensure your infrastructure scales horizontally without technical debt.",
                  icon: Server,
                },
                {
                  tag: "secure",
                  title: "Enterprise Standards",
                  desc: "Adhering to strict security protocols and clean code principles. Every line is audited for long-term maintainability.",
                  icon: Shield,
                },
                {
                  tag: "optimized",
                  title: "AI-First Approach",
                  desc: "Integrating intelligent automation at the core. Our AI-first mindset ensures systems aren't just functional, but self-optimizing.",
                  icon: Brain,
                },
                {
                  tag: "enterprise-grade",
                  title: "Fast Development Cycle",
                  desc: "Leveraging reusable system modules and optimized CI/CD workflows to deliver high-integrity software at enterprise velocity.",
                  icon: Zap,
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl hover:border-[#d4af37]/50 transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                      <Icon className="w-6 h-6 text-blue-400 group-hover:text-black transition-colors" />
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-[0.2em] text-[#d4af37] mb-2">
                      {card.tag}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== HARD PERFORMANCE METRICS ===================== */}
      <section className="py-24 bg-black text-white relative overflow-hidden border-t border-b border-gray-900">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950 border border-blue-900/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping mr-2" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
                Hard Performance Metrics
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black mb-4 tracking-tight uppercase">
              Systems Transformation Impact
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto font-medium">
              Proven quantitative benchmarks achieved by replacing legacy applications with our custom-engineered infrastructure.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Metric 1 */}
            <div className="bg-zinc-950/80 backdrop-blur-md p-8 rounded-3xl border border-gray-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gray-900 text-blue-400 rounded-xl">
                    <Gauge className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Time to First Byte (TTFB)
                  </span>
                </div>
                <h3 className="text-sm font-black text-gray-200 mb-6 uppercase tracking-wider">
                  Web Latency & Load Performance
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-red-950/20 border border-red-900/40 rounded-2xl flex items-center justify-between">
                    <div>
                      <span className="block text-[8px] font-black uppercase tracking-widest text-red-400 mb-0.5">
                        Legacy Baseline
                      </span>
                      <span className="text-sm font-bold text-red-400">12s Page Load Latency</span>
                    </div>
                    <span className="text-xs font-black text-red-400 px-2 py-0.5 bg-red-950/60 border border-red-900/60 rounded uppercase">
                      Fail
                    </span>
                  </div>

                  <div className="flex justify-center text-blue-500">
                    <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0" />
                  </div>

                  <div className="p-4 bg-emerald-950/20 border border-emerald-900/40 rounded-2xl flex items-center justify-between">
                    <div>
                      <span className="block text-[8px] font-black uppercase tracking-widest text-emerald-400 mb-0.5">
                        CodeNest State
                      </span>
                      <span className="text-sm font-black text-emerald-300">
                        0.8s Global Edge Render
                      </span>
                    </div>
                    <span className="text-xs font-black text-emerald-400 px-2 py-0.5 bg-emerald-950/60 border border-emerald-900/60 rounded uppercase">
                      Pass
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-900 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                  Net Optimization
                </span>
                <span className="text-xs font-black text-[#d4af37] uppercase tracking-wider">
                  93% Reduction in TTFB
                </span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-zinc-950/80 backdrop-blur-md p-8 rounded-3xl border border-gray-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gray-900 text-blue-400 rounded-xl">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Active Ingestion & Processing
                  </span>
                </div>
                <h3 className="text-sm font-black text-gray-200 mb-6 uppercase tracking-wider">
                  Operational Efficiency
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-red-950/20 border border-red-900/40 rounded-2xl flex items-center justify-between">
                    <div>
                      <span className="block text-[8px] font-black uppercase tracking-widest text-red-400 mb-0.5">
                        Legacy Baseline
                      </span>
                      <span className="text-sm font-bold text-red-400">40+ Manual Hours/Week</span>
                    </div>
                    <span className="text-xs font-black text-red-400 px-2 py-0.5 bg-red-950/60 border border-red-900/60 rounded uppercase">
                      Fail
                    </span>
                  </div>

                  <div className="flex justify-center text-blue-500">
                    <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0" />
                  </div>

                  <div className="p-4 bg-emerald-950/20 border border-emerald-900/40 rounded-2xl flex items-center justify-between">
                    <div>
                      <span className="block text-[8px] font-black uppercase tracking-widest text-emerald-400 mb-0.5">
                        CodeNest State
                      </span>
                      <span className="text-sm font-black text-emerald-300">
                        100% Automated Workflows
                      </span>
                    </div>
                    <span className="text-xs font-black text-emerald-400 px-2 py-0.5 bg-emerald-950/60 border border-emerald-900/60 rounded uppercase">
                      Pass
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-900 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                  Net Optimization
                </span>
                <span className="text-xs font-black text-[#d4af37] uppercase tracking-wider">
                  98% Manual Overhead Cut
                </span>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-zinc-950/80 backdrop-blur-md p-8 rounded-3xl border border-gray-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gray-900 text-blue-400 rounded-xl">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Transactions Per Second (TPS)
                  </span>
                </div>
                <h3 className="text-sm font-black text-gray-200 mb-6 uppercase tracking-wider">
                  System Concurrency & Scale
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-red-950/20 border border-red-900/40 rounded-2xl flex items-center justify-between">
                    <div>
                      <span className="block text-[8px] font-black uppercase tracking-widest text-red-400 mb-0.5">
                        Legacy Baseline
                      </span>
                      <span className="text-sm font-bold text-red-400">DB Bottleneck at 100 req/s</span>
                    </div>
                    <span className="text-xs font-black text-red-400 px-2 py-0.5 bg-red-950/60 border border-red-900/60 rounded uppercase">
                      Fail
                    </span>
                  </div>

                  <div className="flex justify-center text-blue-500">
                    <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0" />
                  </div>

                  <div className="p-4 bg-emerald-950/20 border border-emerald-900/40 rounded-2xl flex items-center justify-between">
                    <div>
                      <span className="block text-[8px] font-black uppercase tracking-widest text-emerald-400 mb-0.5">
                        CodeNest State
                      </span>
                      <span className="text-sm font-black text-emerald-300">
                        10K+ High-Concurrency TPS
                      </span>
                    </div>
                    <span className="text-xs font-black text-emerald-400 px-2 py-0.5 bg-emerald-950/60 border border-emerald-900/60 rounded uppercase">
                      Pass
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-900 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                  Net Optimization
                </span>
                <span className="text-xs font-black text-[#d4af37] uppercase tracking-wider">
                  100x Transaction Throughput
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FEATURED CASE STUDIES ===================== */}
      <section id="portfolio" className="py-24 lg:py-32 bg-[#05070c]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                Featured <span className="text-[#d4af37]">Engineering</span> <br />
                Case Studies
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed font-normal">
                Explore how we architect complex digital systems and internal enterprise products that solve high-stakes challenges.
              </p>
            </div>
            <div>
              <Link
                href="/projects"
                className="inline-flex items-center space-x-2 text-[#d4af37] font-black uppercase tracking-widest text-xs border-b-2 border-[#d4af37] pb-1 hover:text-white hover:border-white transition-all"
              >
                <span>View All Systems</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="group flex flex-col bg-[#0b0f17] rounded-[2rem] border border-gray-800 overflow-hidden hover:border-[#d4af37]/60 hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <Image
                  src="/portfolio/lms.png"
                  alt="Enterprise LMS Platform"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 bg-black/80 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-[#d4af37] rounded-full border border-white/10">
                    EdTech & Analytics
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                  NexLearn LMS Platform
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  A comprehensive learning management system featuring AI-driven student analytics, automated grading, and high-performance Laravel backend integration.
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Next.js", "Laravel", "AI Analytics", "PostgreSQL"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-2.5 py-1 bg-gray-900 border border-gray-800 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/case-studies/lms"
                    className="inline-flex items-center justify-center w-full py-3.5 bg-white/5 border border-white/10 text-sm font-black rounded-xl hover:bg-[#d4af37] hover:text-black transition-all"
                  >
                    View System Case Study
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="group flex flex-col bg-[#0b0f17] rounded-[2rem] border border-gray-800 overflow-hidden hover:border-[#d4af37]/60 hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <Image
                  src="/portfolio/erp.png"
                  alt="Business ERP Dashboard"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 bg-black/80 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-[#d4af37] rounded-full border border-white/10">
                    Enterprise Systems
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                  CoreFlow ERP Dashboard
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  Full-scale enterprise resource planning dashboard with real-time CRM pipelines, financial data models, and complex resource allocation modules.
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["React", "Node.js", "CRM", "Automation"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-2.5 py-1 bg-gray-900 border border-gray-800 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/case-studies/erp"
                    className="inline-flex items-center justify-center w-full py-3.5 bg-white/5 border border-white/10 text-sm font-black rounded-xl hover:bg-[#d4af37] hover:text-black transition-all"
                  >
                    View System Case Study
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="group flex flex-col bg-[#0b0f17] rounded-[2rem] border border-gray-800 overflow-hidden hover:border-[#d4af37]/60 hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <Image
                  src="/portfolio/ai_support.png"
                  alt="AI Customer Support System"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 bg-black/80 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-[#d4af37] rounded-full border border-white/10">
                    AI & Automation
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                  Nexus AI Support Cluster
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  Sophisticated multi-agent support ecosystem utilizing LLM retrieval, sentiment triage, and autonomous ticket escalation pipelines.
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["AI Agents", "Python", "Chatbot", "Workflows"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-2.5 py-1 bg-gray-900 border border-gray-800 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/case-studies/ai-support"
                    className="inline-flex items-center justify-center w-full py-3.5 bg-white/5 border border-white/10 text-sm font-black rounded-xl hover:bg-[#d4af37] hover:text-black transition-all"
                  >
                    View System Case Study
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Need custom solution banner */}
          <div className="mt-20 p-10 lg:p-14 bg-gradient-to-r from-[#1a365d] to-[#0c1a2d] rounded-[2.5rem] text-center border border-[#d4af37]/30 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-5xl font-black text-white mb-4">
                Need a custom digital system for your business?
              </h3>
              <p className="text-blue-100/80 text-lg mb-8 max-w-2xl mx-auto">
                Our engineering team is ready to architect your next mission-critical infrastructure. Let's discuss your requirements today.
              </p>
              <Link
                href="/book-consultation"
                className="inline-flex items-center px-9 py-4 bg-[#d4af37] hover:bg-[#e4c04e] text-black text-base font-black rounded-2xl transition-all shadow-xl hover:scale-105 active:scale-95"
              >
                Schedule Technical Consultation
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TECH STACK MATRIX & TERMINAL ===================== */}
      <section id="tech-stack" className="py-24 lg:py-32 bg-black border-t border-gray-900">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-900/20 border border-blue-800/40 mb-6">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
                Enterprise Stack
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
              Enterprise Tech-Stack <br />
              <span className="text-[#d4af37]">Matrix</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed font-normal">
              We leverage an elite systems architecture and highly audited language layers to build secure, high-density digital systems designed to scale beyond enterprise limits.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Column 1: Languages & Core Runtimes */}
            <div className="bg-[#0b0f17] p-8 lg:p-10 rounded-[2.5rem] border border-gray-800 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-gray-900 rounded-2xl text-[#d4af37] border border-white/5">
                    <CodeXml className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-white">Languages & Runtimes</h3>
                </div>
                <p className="text-sm text-gray-400 mb-6">
                  High-performance programming platforms and compiled application runtimes engineered for absolute execution speed and scale.
                </p>
                <div className="space-y-4">
                  {[
                    { name: "Go (Golang)", badge: "Microservices", desc: "Concurrently-safe, compiled language for robust microservices & high-volume processing." },
                    { name: "TypeScript / Node.js", badge: "App Engine", desc: "Strict type-safety mapped across high-performance event-driven application layers." },
                    { name: "Rust", badge: "System Core", desc: "Memory-safe, highly optimized low-level systems engineering & security utilities." },
                    { name: "Python", badge: "AI & Data Core", desc: "Advanced numeric compilation, scalable neural networks, and deep data analysis." },
                    { name: "Laravel / PHP", badge: "Rapid API", desc: "Structured backend frameworks delivering fast API routing & solid MVC setups." },
                  ].map((tech) => (
                    <div key={tech.name} className="p-4 bg-gray-900/50 rounded-2xl border border-gray-800">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-bold text-white">{tech.name}</span>
                        <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 bg-blue-900/30 text-blue-400 rounded">
                          {tech.badge}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">{tech.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Data Systems & Cache Memory */}
            <div className="bg-[#0b0f17] p-8 lg:p-10 rounded-[2.5rem] border border-gray-800 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-gray-900 rounded-2xl text-[#d4af37] border border-white/5">
                    <Server className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-white">Data Systems & Cache</h3>
                </div>
                <p className="text-sm text-gray-400 mb-6">
                  Robust data warehousing, highly available transactional storage systems, and lightning-fast low-latency in-memory cache layers.
                </p>
                <div className="space-y-4">
                  {[
                    { name: "PostgreSQL", badge: "ACID RDBMS", desc: "Enterprise-grade relational storage featuring active-active database replication and failovers." },
                    { name: "Redis Cache", badge: "Cache Cluster", desc: "Ultra-low latency in-memory storage cluster serving session states, pub-sub, and API caching." },
                    { name: "MongoDB", badge: "Document Store", desc: "Highly scalable NoSQL document storage cluster built for high-throughput enterprise data." },
                    { name: "Apache Kafka", badge: "Event Streaming", desc: "Distributed event streaming platform for high-throughput, low-latency data pipelines." },
                    { name: "Elasticsearch", badge: "Search Engine", desc: "Distributed, JSON-based search and analytics engine for real-time document search." },
                  ].map((tech) => (
                    <div key={tech.name} className="p-4 bg-gray-900/50 rounded-2xl border border-gray-800">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-bold text-white">{tech.name}</span>
                        <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 bg-[#d4af37]/20 text-[#d4af37] rounded">
                          {tech.badge}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">{tech.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3: Cloud & DevOps Orchestration */}
            <div className="bg-[#0b0f17] p-8 lg:p-10 rounded-[2.5rem] border border-gray-800 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-gray-900 rounded-2xl text-[#d4af37] border border-white/5">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-white">Cloud & DevOps</h3>
                </div>
                <p className="text-sm text-gray-400 mb-6">
                  Zero-downtime automated deployment pipelines, modular container clusters, and secure cloud system architectures.
                </p>
                <div className="space-y-4">
                  {[
                    { name: "AWS Cloud Ecosystem", badge: "Cloud Infrastructure", desc: "Global serverless clusters, auto-scaling VPS groups, and highly secured IAM VPCs." },
                    { name: "Docker Containerization", badge: "Isolated Containers", desc: "Lightweight, reproducible application containers isolated cleanly for seamless deployment." },
                    { name: "Kubernetes (K8s)", badge: "Orchestration Cluster", desc: "Automated container orchestration, dynamic self-healing microservice clusters, and auto-scaling." },
                    { name: "Cloudflare Edge", badge: "CDN & Security", desc: "DDoS mitigation, web application firewall (WAF), and global edge compute workers." },
                    { name: "Terraform", badge: "Infrastructure as Code", desc: "Declarative infrastructure management for predictable, versioned cloud configurations." },
                  ].map((tech) => (
                    <div key={tech.name} className="p-4 bg-gray-900/50 rounded-2xl border border-gray-800">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-bold text-white">{tech.name}</span>
                        <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 bg-emerald-900/30 text-emerald-400 rounded">
                          {tech.badge}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">{tech.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Code Terminal */}
          <InteractiveCodeTerminal />
        </div>
      </section>

      {/* ===================== DEVELOPMENT WORKFLOW ===================== */}
      <DevelopmentWorkflow />

      {/* ===================== TRUST & PRINCIPLES ===================== */}
      <section className="py-24 lg:py-32 bg-[#05070c] border-t border-gray-900">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
              Trusted for Building <br />
              <span className="text-[#d4af37]">Reliable Digital Systems</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed font-normal">
              Our reputation is built on technical integrity and a relentless commitment to engineering excellence. We don't just deliver projects; we build long-term enterprise partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                badge: "Client Impact",
                status: "High Impact",
                title: "Business-Focused Delivery",
                desc: "We focus on solving core business challenges through technology. By aligning system architecture with business objectives, we deliver outcomes that drive measurable growth and operational efficiency.",
                icon: Zap,
              },
              {
                badge: "Engineering Standard",
                status: "Future Ready",
                title: "Scalable Architecture Philosophy",
                desc: "Our commitment to modular, future-ready design ensures that every system we build can evolve alongside your business. We prioritize scalability to eliminate technical debt from day one.",
                icon: Layers,
              },
              {
                badge: "Reliability Promise",
                status: "Always Online",
                title: "Long-term Technical Support",
                desc: "Trust is built on reliability. We provide dedicated, long-term support and proactive system monitoring, ensuring your enterprise infrastructure remains secure and high-performing 24/7.",
                icon: ShieldCheck,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-10 bg-[#0b0f17] rounded-[2.5rem] border border-gray-800 hover:border-[#d4af37] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center space-x-3 mb-8">
                      <div className="p-3 bg-gray-900 rounded-xl border border-white/5">
                        <Icon className="w-5 h-5 text-[#d4af37]" />
                      </div>
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                          {item.badge}
                        </div>
                        <div className="text-xs font-bold text-white">{item.status}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-black text-white mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-gray-800 flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Certified CodeNest Standard
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sector Expertise Ticker */}
          <div className="mt-20 py-8 border-y border-gray-900 flex flex-wrap justify-center items-center gap-8 sm:gap-12 text-gray-400">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#d4af37]">
              Proven Expertise In:
            </span>
            {["Healthcare", "Education", "Real Estate", "FinTech", "Logistics", "Enterprise SaaS"].map((sector) => (
              <span key={sector} className="text-sm font-bold text-gray-300 hover:text-white transition-colors">
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== LEADERSHIP TEAM ===================== */}
      <section id="leadership" className="py-24 lg:py-32 bg-black border-t border-gray-900">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-900/20 border border-blue-800/40 mb-6">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
                Team Trust
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              Operational & Technical <br />
              <span className="text-[#d4af37]">Leadership</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed font-normal">
              Meet the core engineering heads and directors providing human accountability, verifiable operational integrity, and strict procurement guarantees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                initials: "AS",
                name: "Aks Sangwan",
                role: "Administrative & Operations Director",
                responsibility: "Procurement, Strategic Partnerships & Delivery SLA",
                desc: "Directs legal framework compliance, project execution timelines, client communication SLAs, and enterprise deployment contracts globally.",
                tags: ["Enterprise Contracts", "SLA Management", "Corporate Ops"],
              },
              {
                initials: "ER",
                name: "Dr. Elena Rostova",
                role: "VP of Systems Engineering",
                responsibility: "Core Platform Architecture & Security Protocols",
                desc: "Architects zero-trust database patterns, SOC 2 Type II readiness compliance, and robust Go/Rust-based API gateway systems.",
                tags: ["SOC 2 Compliance", "Distributed Core", "Rust Systems"],
              },
              {
                initials: "MV",
                name: "Marcus Vance",
                role: "Technical Director",
                responsibility: "AI Solutions & Distributed Data Lakes",
                desc: "Leads dynamic neural network integrations, Redis memory-cache clustering pipelines, and real-time Kafka data stream architectures.",
                tags: ["Machine Learning", "Event Streaming", "DB Clustering"],
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-[#0b0f17] rounded-[2.5rem] border border-gray-800 p-8 flex flex-col justify-between hover:border-[#d4af37]/50 transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#121820] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] text-xl font-black mb-6 shadow-inner">
                    {member.initials}
                  </div>
                  <h3 className="text-xl font-black text-white mb-1">{member.name}</h3>
                  <span className="block text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-4">
                    {member.role}
                  </span>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">
                    Responsibility: {member.responsibility}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed font-normal mb-6">
                    {member.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-800 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 bg-gray-900 text-gray-400 rounded border border-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-[10px] font-bold text-emerald-400 space-x-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span className="uppercase tracking-widest">Verified Accountable Lead</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FINAL CALL TO ACTION ===================== */}
      <section id="contact" className="py-24 lg:py-32 bg-[#05070c] relative overflow-hidden border-t border-gray-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
              <Zap className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">
                Strategic Technology Partner
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
              Ready to Transform Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#d4af37] to-[#e4c04e]">
                Business Digitally?
              </span>
            </h2>

            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              From high-performance <span className="text-white font-bold">web applications</span> to enterprise-grade{" "}
              <span className="text-white font-bold">AI systems</span> and intelligent{" "}
              <span className="text-white font-bold">automation</span>—we engineer the technology that powers your next chapter.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <Link
                href="/book-consultation"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-9 py-5 font-black text-black bg-[#d4af37] hover:bg-[#e4c04e] rounded-2xl transition-all shadow-xl hover:scale-105 active:scale-95"
              >
                <Calendar className="mr-3 w-5 h-5" />
                Request Technical Consultation
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center w-full sm:w-auto px-9 py-5 font-black text-white bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all active:scale-95"
              >
                Schedule Strategy Call
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

            <div className="pt-10 border-t border-white/10 flex flex-wrap justify-center items-center gap-8 text-sm font-bold text-gray-400">
              <a
                href="mailto:contact@codenest.dev"
                className="flex items-center space-x-2 hover:text-[#d4af37] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#d4af37]" />
                <span>contact@codenest.dev</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
