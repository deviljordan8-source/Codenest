import React from "react";
import Link from "next/link";
import {
  Terminal,
  FileCode,
  Shield,
  Server,
  Database,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export const metadata = {
  title: "Engineering Blueprints & Documentation | CodeNest",
  description:
    "Explore the architectural standards, code style guides, and deployment blueprints utilized across CodeNest systems.",
};

const docsSections = [
  {
    title: "1.0 Systems Architecture Standards",
    desc: "Guidelines for multi-tier isolation, containerized networking, and zero-trust internal VPC communications.",
    items: [
      "1.1 Microservice Domain Boundaries",
      "1.2 Edge CDN Caching & Invalidation Protocol",
      "1.3 Database Connection Pooling & Pgbouncer Setup",
    ],
  },
  {
    title: "2.0 Frontend Engineering Guidelines",
    desc: "Strict Next.js 14 App Router patterns, TypeScript compiler configurations, and optimistic state conventions.",
    items: [
      "2.1 Server Components vs. Client Components Boundary",
      "2.2 Tag-Based Incremental Static Regeneration (ISR)",
      "2.3 Accessible Design Tokens & Tailwind Standardization",
    ],
  },
  {
    title: "3.0 Data Security & Encryption",
    desc: "Compliance blueprints aligning client databases with SOC 2 Type II, OWASP Top 10, and HIPAA requirements.",
    items: [
      "3.1 Field-Level AES-256 Encryption at Rest",
      "3.2 TLS 1.3 Strict Transport Security (HSTS)",
      "3.3 Immutable Audit Logging & Telemetry Sinks",
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-8">
            <Terminal className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
              Technical Blueprints
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white leading-[1.1] mb-8">
            Engineering Documentation & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
              Architectural Standards
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed font-normal max-w-2xl mx-auto">
            Our public architectural knowledge base detailing the technical principles, code conventions, and deployment standards enforced by CodeNest.
          </p>
        </div>

        {/* Documentation Sections */}
        <div className="max-w-4xl mx-auto space-y-8 mb-24">
          {docsSections.map((sec) => (
            <div
              key={sec.title}
              className="p-8 bg-[#0b0f17] border border-gray-800 rounded-3xl"
            >
              <h2 className="text-xl font-bold text-white mb-2">{sec.title}</h2>
              <p className="text-xs text-gray-400 mb-6">{sec.desc}</p>
              <div className="space-y-2">
                {sec.items.map((item) => (
                  <div
                    key={item}
                    className="p-3 bg-black/60 rounded-xl border border-gray-800/80 flex items-center justify-between text-xs text-gray-300 font-mono"
                  >
                    <span>{item}</span>
                    <span className="text-[10px] text-[#d4af37] font-bold">Standard Spec</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-3">
            Want to discuss custom architecture specs?
          </h2>
          <p className="text-gray-400 text-xs mb-6">
            Our lead engineers are available to review your existing repository and blueprints.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-[#d4af37] text-black font-black text-xs uppercase tracking-wider rounded-xl hover:bg-[#e4c04e] transition-all"
          >
            Request Architectural Review →
          </Link>
        </div>
      </div>
    </div>
  );
}
