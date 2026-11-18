import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle,
  ExternalLink,
  Layers,
  Zap,
  Server,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Case Study: NexLearn Enterprise LMS Platform | CodeNest",
  description:
    "How CodeNest architected a high-concurrency LMS platform serving 45,000+ daily active students with AI analytics and sub-second page loads.",
};

export default function LMSCaseStudyPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <Link
          href="/projects"
          className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[#d4af37] mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Systems
        </Link>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-900/20 border border-blue-800/40 mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
                EdTech & Predictive Analytics
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white leading-[1.1] mb-6">
              NexLearn Enterprise <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#d4af37] to-[#b8860b]">
                LMS Platform
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              A comprehensive learning management system featuring AI-driven student analytics, automated proctoring, and high-performance Laravel backend integration scaled across 45,000+ daily students.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js 14", "Laravel 11", "PostgreSQL", "Redis Cluster", "AWS S3"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-900 border border-gray-800 text-xs text-gray-300 rounded-md font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-gray-800 shadow-2xl bg-black">
            <Image
              src="/portfolio/lms.png"
              alt="NexLearn LMS"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            { value: "45,000+", label: "Daily Active Students" },
            { value: "0.4s", label: "Global Edge Page Load" },
            { value: "99.99%", label: "Exam Window Uptime" },
            { value: "88%", label: "Manual Grading Automated" },
          ].map((m) => (
            <div key={m.label} className="p-6 bg-[#0b0f17] border border-gray-800 rounded-2xl text-center">
              <div className="text-3xl lg:text-4xl font-black text-[#d4af37] mb-1">{m.value}</div>
              <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Engineering Challenge & Solution */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <div className="p-10 bg-[#0b0f17] border border-gray-800 rounded-3xl">
            <h2 className="text-2xl font-black text-white mb-4">The Challenge</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              The institution's legacy Ruby-on-Rails portal routinely collapsed during exam weeks when 15,000 students submitted simultaneous essay evaluations. Database locks caused cascading HTTP 504 gateway timeouts and lost test progress.
            </p>
          </div>

          <div className="p-10 bg-[#0b0f17] border border-[#d4af37]/40 rounded-3xl">
            <h2 className="text-2xl font-black text-white mb-4">The CodeNest Architecture</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              We decoupled the exam submission pipeline into asynchronous Redis queues handled by Golang worker pools, fronted by a Next.js 14 client with offline local-storage sync. Submissions succeed instantaneously with zero database locks.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-12 bg-[#0c121e] border border-gray-800 rounded-[2.5rem] text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-black text-white mb-3">Need similar high-concurrency architecture?</h3>
          <p className="text-xs text-gray-400 mb-6">
            Let's discuss how we can engineer an ultra-resilient platform for your organization.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-[#d4af37] text-black font-black text-xs uppercase tracking-wider rounded-xl hover:bg-[#e4c04e] transition-all"
          >
            Blueprint Your Platform →
          </Link>
        </div>
      </div>
    </div>
  );
}
