import React from "react";
import Link from "next/link";
import {
  Briefcase,
  Terminal,
  CodeXml,
  Globe,
  Award,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Careers | CodeNest - Join Our Engineering Core",
  description:
    "Join CodeNest's elite engineering team. We architect high-performance digital systems and AI infrastructure for global enterprises.",
};

const culturePoints = [
  {
    title: "Clean Code Principles",
    desc: "We write strictly-typed, self-documenting code with comprehensive test suites. No spaghetti code, no fragile band-aids.",
    icon: CodeXml,
  },
  {
    title: "Zero-Bureaucracy Sprints",
    desc: "Engineers speak directly with clients and technical leads. No middle-management fluff or pointless four-hour meetings.",
    icon: Zap,
  },
  {
    title: "Cutting-Edge Tooling",
    desc: "Work with modern Next.js 14, Go, Rust, Python AI frameworks, Kubernetes, and enterprise vector databases.",
    icon: Terminal,
  },
  {
    title: "Global Remote Culture",
    desc: "Work from anywhere with competitive equity, hardware stipends, and continuous learning budgets.",
    icon: Globe,
  },
];

export default function CareersPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-8">
            <Briefcase className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
              Engineering Culture
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
            Build Systems <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
              That Actually Matter
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed font-normal max-w-2xl mx-auto">
            We are a squad of obsessive software craftsmen, distributed systems architects, and machine learning researchers building the digital backbone for forward-thinking enterprises.
          </p>
        </div>

        {/* Culture Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
          {culturePoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-8 bg-[#0b0f17] border border-gray-800 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-gray-900 border border-white/5 rounded-2xl flex items-center justify-center text-[#d4af37] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Open Positions */}
        <div className="max-w-4xl mx-auto mb-28">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-2">Open Engineering Roles</h2>
            <p className="text-sm text-gray-400">
              Direct applications are reviewed by our engineering directors, not automated resume parsers.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                role: "Senior Full-Stack Engineer (Next.js & TypeScript)",
                location: "Remote (Global)",
                type: "Full-Time",
                stack: "Next.js 14, React, Tailwind, PostgreSQL, Redis",
              },
              {
                role: "Distributed Systems Architect (Go / Rust)",
                location: "Remote (Global)",
                type: "Full-Time",
                stack: "Go, Rust, Docker, Kubernetes, AWS, Kafka",
              },
              {
                role: "AI & ML Systems Engineer (Python & RAG)",
                location: "Remote (Global)",
                type: "Full-Time",
                stack: "Python, FastAPI, LangChain, Pinecone, PyTorch",
              },
            ].map((job) => (
              <div
                key={job.role}
                className="p-6 lg:p-8 bg-[#0b0f17] border border-gray-800 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-[#d4af37]/50 transition-all"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-white">{job.role}</h3>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 bg-blue-900/30 text-blue-400 rounded-full border border-blue-800/40">
                      {job.type}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 mb-2">{job.location}</div>
                  <div className="text-xs text-gray-500 font-mono">Stack: {job.stack}</div>
                </div>

                <a
                  href={`mailto:hr@codenest.dev?subject=Application for ${encodeURIComponent(job.role)}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#d4af37] text-black font-black text-xs uppercase tracking-wider rounded-xl hover:bg-[#e4c04e] transition-all shrink-0"
                >
                  Apply Directly
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* General Application */}
        <div className="p-12 lg:p-16 bg-[#0c121e] border border-[#d4af37]/30 rounded-[3rem] text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-4">Don't see your exact role?</h2>
          <p className="text-gray-400 text-sm mb-8 max-w-xl mx-auto">
            We are always open to hearing from exceptional builders. Send your GitHub, portfolio, and best code samples to our direct hiring mailbox.
          </p>
          <a
            href="mailto:hr@codenest.dev?subject=General Engineering Application"
            className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-[#d4af37] hover:text-black text-white font-bold text-sm rounded-xl transition-all"
          >
            Email hr@codenest.dev
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}
