import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle,
  Award,
  Terminal,
  Cpu,
  Zap,
  ArrowRight,
  Users,
} from "lucide-react";

export const metadata = {
  title: "About Us | CodeNest - Engineering Excellence",
  description:
    "Learn about CodeNest's engineering principles, operational integrity, and our journey to building 150+ scalable digital systems.",
};

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-8">
            <Terminal className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
              Our Philosophy
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
            Driven by Engineering. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
              Defined by Results.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed font-normal max-w-2xl mx-auto">
            CodeNest was founded on a singular premise: modern enterprises deserve software built with architectural rigor, modular longevity, and uncompromised scalability.
          </p>
        </div>

        {/* Milestone Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-28">
          {[
            { value: "150+", label: "Systems Engineered", sub: "Production-grade digital systems" },
            { value: "99.99%", label: "Average Uptime", sub: "Enterprise SLA guaranteed" },
            { value: "500+", label: "Automated Workflows", sub: "Hours saved weekly" },
            { value: "0", label: "Security Breaches", sub: "SOC 2 & OWASP compliant" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-8 bg-[#0b0f17] border border-gray-800 rounded-3xl text-center hover:border-[#d4af37]/40 transition-colors"
            >
              <div className="text-4xl lg:text-5xl font-black text-[#d4af37] mb-2">{stat.value}</div>
              <div className="text-xs font-black uppercase tracking-wider text-white mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-gray-500 font-medium">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-28 items-stretch">
          <div className="p-10 lg:p-12 bg-gradient-to-br from-[#0c121e] to-[#070a10] border border-gray-800 rounded-[2.5rem] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-2xl flex items-center justify-center text-[#d4af37] mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black text-white mb-6">Our Engineering Mission</h2>
              <p className="text-gray-400 leading-relaxed text-base mb-6">
                To eliminate technical debt before it manifests. We construct digital architecture that allows growing companies to scale from hundreds to millions of users without needing system rewrites or costly downtime.
              </p>
              <p className="text-gray-400 leading-relaxed text-base">
                We believe that speed of delivery should never come at the expense of code maintainability or security posture.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-800 flex items-center text-sm font-bold text-[#d4af37]">
              <span>Architecture First, Always</span>
            </div>
          </div>

          <div className="p-10 lg:p-12 bg-gradient-to-br from-[#0c121e] to-[#070a10] border border-gray-800 rounded-[2.5rem] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/30 rounded-2xl flex items-center justify-center text-blue-400 mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black text-white mb-6">Our Architectural Vision</h2>
              <p className="text-gray-400 leading-relaxed text-base mb-6">
                To become the global gold standard for custom enterprise engineering. From compiled backend services in Go and Rust to sub-second edge frontends in Next.js, our blueprints power tomorrow's market leaders.
              </p>
              <p className="text-gray-400 leading-relaxed text-base">
                We continuously advance our modular component libraries, AI integration paradigms, and automated deployment pipelines.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-800 flex items-center text-sm font-bold text-blue-400">
              <span>Continuous Technological Evolution</span>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Core Principles</h2>
            <p className="text-gray-400 text-sm">
              The non-negotiable engineering values that guide every line of code we ship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Zero Technical Debt",
                desc: "We build with strict typing, documented API schemas, and automated test coverage to ensure systems remain maintainable for years to come.",
              },
              {
                title: "Radical Transparency",
                desc: "Clients receive direct access to repositories, architecture diagrams, telemetry dashboards, and weekly asynchronous sprint updates.",
              },
              {
                title: "Systems Over Shortcuts",
                desc: "We don't use brittle off-the-shelf band-aids. We build customized, enterprise-grade digital systems engineered for predictable high throughput.",
              },
            ].map((principle) => (
              <div
                key={principle.title}
                className="p-8 bg-[#0b0f17] border border-gray-800 rounded-3xl"
              >
                <div className="w-2 h-2 rounded-full bg-[#d4af37] mb-6 shadow-sm shadow-[#d4af37]" />
                <h3 className="text-xl font-bold text-white mb-3">{principle.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-800/40 mb-4">
              <Users className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
                Executive Leadership
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
              Engineering Leadership
            </h2>
            <p className="text-gray-400 text-sm">
              Meet the directors and architects directly responsible for delivering your systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                initials: "AS",
                name: "Aks Sangwan",
                role: "Administrative & Operations Director",
                bio: "Oversees enterprise legal SLAs, cross-border procurement frameworks, and high-velocity delivery pipelines for Fortune 500 and VC-backed clients.",
              },
              {
                initials: "ER",
                name: "Dr. Elena Rostova",
                role: "VP of Systems Engineering",
                bio: "PhD in Distributed Computing. Leads zero-trust database patterns, high-concurrency Go microservices, and SOC 2 Type II compliance architectures.",
              },
              {
                initials: "MV",
                name: "Marcus Vance",
                role: "Technical Director",
                bio: "Pioneers multi-agent neural network systems, low-latency Redis caching layers, and high-throughput Apache Kafka streaming infrastructure.",
              },
            ].map((lead) => (
              <div
                key={lead.name}
                className="p-8 bg-[#0b0f17] border border-gray-800 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#121820] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] text-xl font-black mb-6">
                    {lead.initials}
                  </div>
                  <h3 className="text-xl font-black text-white mb-1">{lead.name}</h3>
                  <div className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-4">
                    {lead.role}
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed font-normal">{lead.bio}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-800 flex items-center text-xs text-emerald-400 font-bold space-x-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="uppercase tracking-widest">Verified Accountable Lead</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="p-12 lg:p-16 bg-[#0c121e] border border-[#d4af37]/30 rounded-[3rem] text-center">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
            Ready to engineer your next digital platform?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Book a one-on-one technical discussion with our senior architects to blueprint your system requirements.
          </p>
          <Link
            href="/book-consultation"
            className="inline-flex items-center px-9 py-4 bg-[#d4af37] text-black font-black text-base rounded-2xl hover:bg-[#e4c04e] transition-all shadow-xl hover:scale-105"
          >
            Book Technical Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
