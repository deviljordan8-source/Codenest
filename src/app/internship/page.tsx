"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  CodeXml,
  Terminal,
  Award,
  ArrowRight,
  CheckCircle,
  Send,
  Users,
} from "lucide-react";

export default function InternshipPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    university: "",
    github: "",
    track: "Full-Stack (Next.js & TypeScript)",
    motivation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-8">
            <GraduationCap className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
              Talent Accelerator
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
            CodeNest Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
              Internship Fellowship
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed font-normal max-w-2xl mx-auto">
            A high-intensity mentorship program where student and early-career software developers contribute to real-world, high-concurrency production systems under the direct guidance of staff architects.
          </p>
        </div>

        {/* 3 Tracks */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "Full-Stack Track",
              stack: "Next.js 14, React, TypeScript, Tailwind, PostgreSQL",
              desc: "Build responsive, high-performance web applications and enterprise portals with sub-second page rendering.",
            },
            {
              title: "Backend & Systems Track",
              stack: "Go (Golang), Rust, Docker, Kubernetes, Redis",
              desc: "Architect low-latency microservices, database replication pipelines, and high-throughput API gateways.",
            },
            {
              title: "AI & ML Systems Track",
              stack: "Python, FastAPI, Vector DBs, RAG, PyTorch",
              desc: "Implement enterprise retrieval-augmented generation, autonomous agents, and synthetic dataset pipelines.",
            },
          ].map((track) => (
            <div key={track.title} className="p-8 bg-[#0b0f17] border border-gray-800 rounded-3xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{track.title}</h3>
                <div className="text-xs text-[#d4af37] font-mono mb-4">{track.stack}</div>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">{track.desc}</p>
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                12-Week Mentorship • Remote Friendly
              </div>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div className="max-w-3xl mx-auto bg-[#0b0f17] border border-gray-800 rounded-[2.5rem] p-8 lg:p-14 shadow-2xl mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-2">Apply for Fellowship Cohort</h2>
            <p className="text-xs text-gray-400">
              Applications are reviewed on a rolling basis. Please review our{" "}
              <Link href="/internship/terms" className="text-[#d4af37] underline">
                Internship Terms
              </Link>
              .
            </p>
          </div>

          {submitted ? (
            <div className="p-10 bg-emerald-950/40 border border-emerald-800 rounded-2xl text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl font-black">
                ✓
              </div>
              <h3 className="text-2xl font-black text-white">Application Submitted!</h3>
              <p className="text-sm text-gray-300 max-w-md mx-auto">
                Thank you for applying to the CodeNest Fellowship. Our technical review committee evaluates GitHub portfolios weekly and will follow up via email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Chen"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@university.edu"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    University / College / BootCamp
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Stanford University"
                    value={form.university}
                    onChange={(e) => setForm({ ...form, university: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    GitHub Profile Link *
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://github.com/yourhandle"
                    value={form.github}
                    onChange={(e) => setForm({ ...form, github: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-gray-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  Preferred Track
                </label>
                <select
                  value={form.track}
                  onChange={(e) => setForm({ ...form, track: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#d4af37]"
                >
                  <option value="Full-Stack (Next.js & TypeScript)">Full-Stack (Next.js & TypeScript)</option>
                  <option value="Backend & Systems (Go / Rust / K8s)">Backend & Systems (Go / Rust / K8s)</option>
                  <option value="AI & ML Systems (Python / RAG)">AI & ML Systems (Python / RAG)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  Why do you want to build systems at CodeNest?
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share what project you're most proud of, your favorite tech stack, and what you hope to learn..."
                  value={form.motivation}
                  onChange={(e) => setForm({ ...form, motivation: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#d4af37] text-black font-black text-sm uppercase tracking-wider rounded-xl hover:bg-[#e4c04e] transition-all flex items-center justify-center space-x-2 shadow-xl"
              >
                <Send className="w-4 h-4" />
                <span>Submit Internship Application</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
