import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Server,
  FileCheck,
  Eye,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Enterprise Security & Compliance | CodeNest",
  description:
    "Review CodeNest's SOC 2 Type II protocols, OWASP Top 10 alignment, AES-256 encryption, and vulnerability management posture.",
};

export default function SecurityPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-8">
            <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
              Security by Design
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
            Enterprise Security & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
              Compliance Architecture
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed font-normal max-w-2xl mx-auto">
            Security is not an afterthought or a final audit checklist at CodeNest. It is engineered into every schema, network port, and API token from the very first commit.
          </p>
        </div>

        {/* 4 Compliance Standards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
          {[
            {
              title: "SOC 2 Type II Readiness",
              desc: "Automated controls for data confidentiality, system availability, and customer data integrity.",
              icon: FileCheck,
            },
            {
              title: "OWASP Top 10 Aligned",
              desc: "Strict automated vulnerability scanners auditing against SQL injections, XSS, SSRF, and CSRF vectors.",
              icon: ShieldCheck,
            },
            {
              title: "AES-256 Encryption",
              desc: "End-to-end data encryption for storage volumes, database tables, and TLS 1.3 in transit.",
              icon: Lock,
            },
            {
              title: "Immutable Audit Trails",
              desc: "Append-only cryptographic event logs recording all administrator actions and schema mutations.",
              icon: Server,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="p-8 bg-[#0b0f17] border border-gray-800 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-gray-900 border border-white/5 rounded-2xl flex items-center justify-center text-[#d4af37] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vulnerability Reporting */}
        <div className="max-w-3xl mx-auto p-10 lg:p-14 bg-[#080c14] border border-gray-800 rounded-[2.5rem] text-center mb-20">
          <Eye className="w-10 h-10 text-[#d4af37] mx-auto mb-4" />
          <h2 className="text-2xl font-black text-white mb-2">Responsible Vulnerability Disclosure</h2>
          <p className="text-xs text-gray-400 leading-relaxed mb-6">
            If you are a security researcher and believe you have identified a vulnerability in any CodeNest system, please disclose it responsibly to our dedicated security team.
          </p>
          <a
            href="mailto:security@codenest.dev?subject=Vulnerability Disclosure"
            className="inline-flex items-center px-6 py-3 bg-[#d4af37] text-black font-black text-xs uppercase tracking-wider rounded-xl hover:bg-[#e4c04e] transition-all"
          >
            Contact security@codenest.dev →
          </a>
        </div>
      </div>
    </div>
  );
}
