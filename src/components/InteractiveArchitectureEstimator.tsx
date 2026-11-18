"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sliders,
  Zap,
  Server,
  Database,
  ShieldCheck,
  ArrowRight,
  Cpu,
  Clock,
  Sparkles,
} from "lucide-react";

export default function InteractiveArchitectureEstimator() {
  const [users, setUsers] = useState(50000); // 5k to 1M
  const [qps, setQps] = useState(250); // 10 to 2000
  const [aiEnabled, setAiEnabled] = useState(true);

  // Dynamic calculations
  let tierName = "Growth Cluster Architecture";
  let latency = "< 45ms";
  let uptime = "99.99%";
  let recommendedStack = "Next.js 14 + Dual Go Nodes + Redis Cache + PostgreSQL";
  let estimatedWeeks = "6 - 8 Weeks";

  if (users < 20000 && qps < 100) {
    tierName = "Startup Monolith Architecture";
    latency = "< 90ms";
    uptime = "99.9%";
    recommendedStack = "Next.js 14 + Isolated VPS + PostgreSQL";
    estimatedWeeks = "3 - 5 Weeks";
  } else if (users > 200000 || qps > 800) {
    tierName = "Enterprise Kubernetes Multi-Region";
    latency = "< 18ms";
    uptime = "99.999%";
    recommendedStack = "Next.js Edge + K8s Auto-scaled Go/Rust Pods + Redis Cluster + Active-Active DB";
    estimatedWeeks = "10 - 14 Weeks";
  }

  return (
    <div className="bg-[#080d17] border border-[#d4af37]/30 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-800">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-black uppercase tracking-widest text-[#d4af37] mb-2">
              <Sliders className="w-3.5 h-3.5 mr-1" />
              Live Interactive Simulator
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              System Architecture & Scale Estimator
            </h3>
          </div>
          <div className="text-xs text-gray-400 font-medium max-w-xs">
            Drag sliders to simulate user concurrency and inspect recommended infrastructure topologies.
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sliders Input */}
          <div className="space-y-8">
            {/* Slider 1: Active Users */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-black uppercase tracking-wider text-gray-300">
                  Target Monthly Users
                </label>
                <span className="text-base font-black text-[#d4af37] font-mono">
                  {users.toLocaleString()} users
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="1000000"
                step="5000"
                value={users}
                onChange={(e) => setUsers(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1">
                <span>5K (Validation)</span>
                <span>250K</span>
                <span>1M+ (Enterprise)</span>
              </div>
            </div>

            {/* Slider 2: QPS Concurrency */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-black uppercase tracking-wider text-gray-300">
                  Peak Queries Per Second (QPS)
                </label>
                <span className="text-base font-black text-blue-400 font-mono">
                  {qps.toLocaleString()} req/sec
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="2000"
                step="20"
                value={qps}
                onChange={(e) => setQps(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1">
                <span>20 req/s</span>
                <span>500 req/s</span>
                <span>2,000+ req/s</span>
              </div>
            </div>

            {/* Toggle: AI Workflows */}
            <div className="flex items-center justify-between p-4 bg-black/60 border border-gray-800 rounded-2xl">
              <div className="flex items-center space-x-3">
                <Cpu className="w-5 h-5 text-[#d4af37]" />
                <div>
                  <div className="text-sm font-bold text-white">Include Autonomous AI Workflows</div>
                  <div className="text-xs text-gray-400">RAG vector recall & LLM agent pipelines</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setAiEnabled(!aiEnabled)}
                className={`w-12 h-7 rounded-full transition-colors relative p-1 ${
                  aiEnabled ? "bg-[#d4af37]" : "bg-gray-800"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-black transition-transform ${
                    aiEnabled ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Dynamic Result Card */}
          <div className="bg-[#0e1524] border-2 border-[#d4af37]/40 rounded-3xl p-8 shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
                Recommended Architecture
              </span>
              <span className="text-[10px] font-bold text-emerald-400 px-2.5 py-0.5 bg-emerald-950/60 border border-emerald-900 rounded-full">
                {uptime} SLA Target
              </span>
            </div>

            <h4 className="text-2xl font-black text-white leading-tight">{tierName}</h4>

            <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-800">
              <div>
                <div className="text-[10px] uppercase font-bold text-gray-400">Edge Latency</div>
                <div className="text-xl font-black text-[#d4af37]">{latency}</div>
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-gray-400">Estimated Timeline</div>
                <div className="text-xl font-black text-white">{estimatedWeeks}</div>
              </div>
            </div>

            <div>
              <div className="text-[10px] uppercase font-bold text-gray-400 mb-1.5">
                Engineered Topology Stack
              </div>
              <div className="text-xs font-mono text-gray-200 bg-black/60 p-3 rounded-xl border border-gray-800 leading-relaxed">
                {recommendedStack}
                {aiEnabled && " + Pinecone Vector Layer"}
              </div>
            </div>

            <Link
              href={`/book-consultation?users=${users}&qps=${qps}&tier=${encodeURIComponent(tierName)}`}
              className="inline-flex items-center justify-center w-full py-4 bg-[#d4af37] text-black font-black text-xs uppercase tracking-wider rounded-xl hover:bg-[#e4c04e] transition-all shadow-lg hover:scale-[1.01]"
            >
              Blueprint This Architecture With Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
