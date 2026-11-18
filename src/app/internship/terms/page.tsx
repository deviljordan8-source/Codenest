import React from "react";
import Link from "next/link";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Internship Terms & Conditions | CodeNest",
  description: "Terms and conditions governing the CodeNest Engineering Fellowship program.",
};

export default function InternshipTermsPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-black uppercase tracking-widest text-[#d4af37] mb-6">
            <Shield className="w-4 h-4 mr-1" />
            Fellowship Terms
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Internship Terms & Conditions
          </h1>
          <p className="text-sm text-gray-400">Effective Date: January 1, 2026</p>
        </div>

        <div className="space-y-8 text-gray-300 text-sm leading-relaxed border-t border-gray-800 pt-8">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Nature of the Fellowship</h2>
            <p>
              The CodeNest Engineering Fellowship is an educational, mentor-led program designed to provide hands-on experience in distributed systems, modern full-stack development, and production AI engineering.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Confidentiality & Non-Disclosure (NDA)</h2>
            <p>
              Fellows will have access to proprietary CodeNest code repositories, architectural diagrams, and staging environments. All non-public client data and trade secrets must remain confidential both during and after the fellowship term.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Intellectual Property Assignment</h2>
            <p>
              All code, documentation, and engineering outputs created during client or internal projects remain the exclusive property of CodeNest and its respective clients.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Certification & Employment Consideration</h2>
            <p>
              Upon successful completion of the 12-week fellowship and milestone project defense, fellows receive formal graduation credentials and priority consideration for full-time engineering associate positions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
