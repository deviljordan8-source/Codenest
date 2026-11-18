import React from "react";
import Link from "next/link";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Refund Policy & Milestone Guarantee | CodeNest",
  description: "CodeNest milestone-based engagement guarantees and refund policies.",
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-black uppercase tracking-widest text-[#d4af37] mb-6">
            <Shield className="w-4 h-4 mr-1" />
            Client Assurance
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">Refund Policy</h1>
          <p className="text-sm text-gray-400">Effective Date: January 1, 2026</p>
        </div>

        <div className="space-y-8 text-gray-300 text-sm leading-relaxed border-t border-gray-800 pt-8">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Milestone-Based Protection</h2>
            <p>
              CodeNest operates exclusively on milestone-based deliverables. Prior to commencement, every project is divided into distinct phases with verifiable functional deliverables demonstrated on staging environments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Acceptance Testing & Revisions</h2>
            <p>
              Clients are provided a 14-day user acceptance testing (UAT) review window following milestone completion. If any delivered feature does not adhere to the agreed functional specification, CodeNest performs iterative revisions at zero additional charge until full compliance is achieved.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Cancellation & Milestone Refunds</h2>
            <p>
              In the event that an engagement is terminated before project completion, clients are entitled to a full refund for any uncommenced future milestones. Work commenced for the active milestone is billed solely for verifiable hours and delivered commits, with any excess deposit returned within 10 business days.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
