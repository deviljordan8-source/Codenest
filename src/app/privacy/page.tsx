import React from "react";
import Link from "next/link";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | CodeNest",
  description: "CodeNest enterprise privacy policy and data governance practices.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-black uppercase tracking-widest text-[#d4af37] mb-6">
            <Shield className="w-4 h-4 mr-1" />
            Data Governance
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-400">Effective Date: January 1, 2026</p>
        </div>

        <div className="space-y-8 text-gray-300 text-sm leading-relaxed border-t border-gray-800 pt-8">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
            <p>
              CodeNest collects information provided directly by clients when requesting technical consultations, submitting project RFP documents, or accessing client telemetry portals. This includes name, corporate email address, organizational details, and technical specifications.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Proprietary Client Data & IP</h2>
            <p>
              All code, architecture schemas, proprietary business logic, and intellectual property developed under engagement agreements belong exclusively to the client. We enforce zero-data-retention standards across all AI and neural network pipelines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Enterprise Security & Encryption</h2>
            <p>
              We implement industry-standard AES-256 encryption at rest and TLS 1.3 in transit. Our internal deployment pipelines adhere strictly to SOC 2 Type II protocols and OWASP Top 10 guidelines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Contact Information</h2>
            <p>
              For privacy compliance or data protection queries, contact our security officer at{" "}
              <a href="mailto:security@codenest.dev" className="text-[#d4af37] underline">
                security@codenest.dev
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
