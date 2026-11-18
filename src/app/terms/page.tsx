import React from "react";
import Link from "next/link";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Terms of Service | CodeNest",
  description: "CodeNest terms of service, engagement agreements, and delivery SLAs.",
};

export default function TermsPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-black uppercase tracking-widest text-[#d4af37] mb-6">
            <Shield className="w-4 h-4 mr-1" />
            Legal Framework
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">Terms of Service</h1>
          <p className="text-sm text-gray-400">Effective Date: January 1, 2026</p>
        </div>

        <div className="space-y-8 text-gray-300 text-sm leading-relaxed border-t border-gray-800 pt-8">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Master Services Framework</h2>
            <p>
              These Terms of Service govern all technical development engagements, system architecture design, and managed infrastructure services provided by CodeNest ("CodeNest", "we", "us").
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Deliverables & Acceptance Criteria</h2>
            <p>
              Each engagement proceeds according to a mutually ratified Statement of Work (SOW) outlining functional requirements, milestone gates, and acceptance benchmarks. Milestone payments are tied strictly to client sign-off on staging environments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Intellectual Property Assignment</h2>
            <p>
              Upon receipt of full payment for each respective milestone, all custom code, design files, repository commits, and related system assets are transferred irrevocably to the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Warranty & Telemetry SLA</h2>
            <p>
              CodeNest warrants that all shipped systems will operate free of critical defects during the designated post-launch warranty period, with guaranteed 99.99% uptime availability for clients on managed SLA contracts.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
