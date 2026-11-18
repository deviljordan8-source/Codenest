"use client";

import React, { useState } from "react";
import { Network, Globe, Shield, RefreshCw, Server, Cpu, Database, Layers } from "lucide-react";

interface ScaleTier {
  key: "10k" | "100k" | "1m";
  title: string;
  scaleLabel: string;
  description: string;
  specs: string[];
}

const tiers: ScaleTier[] = [
  {
    key: "10k",
    title: "10K Transactions / Month",
    scaleLabel: "Startup Scale",
    description:
      "A highly cost-effective monolithic deployment using a single active Virtual Private Server (VPS) and database instance. Ideal for early-stage validation with zero maintenance overhead.",
    specs: [
      "Single VPS Node",
      "Isolated SQL DB",
      "Low Maintenance Overhead",
      "Direct Static Assets Routing",
    ],
  },
  {
    key: "100k",
    title: "100K Transactions / Month",
    scaleLabel: "Growth Scale",
    description:
      "Highly available redundant cluster architecture. Implements dual API nodes fronted by an Nginx load balancer to distribute load, backed by a memory-caching layer to minimize database load.",
    specs: [
      "Nginx Load Balancer",
      "2x Redundant Node Clusters",
      "Redis Caching Layer",
      "Active-Passive DB Replication",
    ],
  },
  {
    key: "1m",
    title: "1M+ Transactions / Month",
    scaleLabel: "Enterprise Scale",
    description:
      "A premium, microservices-driven multi-region architecture orchestrated on Kubernetes. Employs asynchronous event streaming for real-time analytics data ingestion and self-healing systems.",
    specs: [
      "Global API Gateway",
      "Kubernetes Auto-scaling Nodes",
      "Active-Active Multi-Region Cluster",
      "Kafka Event Bus & Data Lake",
    ],
  },
];

export default function SystemTopologyPlayground() {
  const [activeTier, setActiveTier] = useState<"10k" | "100k" | "1m">("100k");

  const currentTier = tiers.find((t) => t.key === activeTier) || tiers[1];

  return (
    <section id="system-topology" className="py-24 lg:py-32 bg-[#080c14] border-t border-gray-900 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/5 blur-[140px] pointer-events-none rounded-full" />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header & Tier Toggles */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-900/20 border border-blue-700/30 mb-6">
              <Network size={14} className="text-blue-400 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
                System Topology
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              Interactive System <br />
              <span className="text-[#d4af37]">Topology Playground</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed font-normal">
              Toggle scale tiers to dynamically inspect how our engineered infrastructure automatically mutates, scales, and ensures maximum database resilience under load.
            </p>
          </div>

          {/* Tier Switcher Buttons */}
          <div className="flex bg-gray-950 p-1.5 rounded-2xl border border-gray-800 self-start lg:self-end">
            {tiers.map((tier) => {
              const isActive = activeTier === tier.key;
              return (
                <button
                  key={tier.key}
                  onClick={() => setActiveTier(tier.key)}
                  className={`px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#b8860b] to-[#d4af37] text-black shadow-lg shadow-[#d4af37]/20 scale-105"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tier.scaleLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Topology Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Details */}
          <div className="space-y-6 bg-[#0c121d] p-8 rounded-3xl border border-gray-800/80 shadow-2xl">
            <div className="text-xs font-black uppercase tracking-widest text-[#d4af37]">
              Current Selected Tier
            </div>
            <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight">
              {currentTier.title}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-normal">
              {currentTier.description}
            </p>

            <div className="space-y-3 pt-6 border-t border-gray-800">
              <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">
                Architectural Highlights
              </div>
              {currentTier.specs.map((spec, i) => (
                <div key={i} className="flex items-center text-sm font-bold text-gray-200">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] mr-3 shrink-0 shadow-sm shadow-[#d4af37]" />
                  {spec}
                </div>
              ))}
            </div>
          </div>

          {/* Right Interactive SVG Diagram */}
          <div className="lg:col-span-2 relative bg-[#06090e] rounded-[2.5rem] border border-gray-800 p-6 lg:p-10 shadow-2xl overflow-x-auto min-w-full">
            <div className="w-[680px] h-[340px] mx-auto relative select-none">
              <svg viewBox="0 0 680 340" className="w-full h-full z-10 relative overflow-visible">
                <defs>
                  <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d4af37" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#fff2a8" stopOpacity="1" />
                    <stop offset="100%" stopColor="#d4af37" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Path 1: Client -> CDN */}
                <path d="M 60 170 H 180" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="6 6" fill="none" opacity="0.4" />
                <path d="M 60 170 H 180" stroke="url(#flow-grad)" strokeWidth="3" fill="none" strokeDasharray="30 150" className="animate-dash-medium" />

                {/* Path 2: CDN -> Load Balancer / Gateway */}
                <path d="M 220 170 H 320" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="6 6" fill="none" opacity="0.4" />
                <path d="M 220 170 H 320" stroke="url(#flow-grad)" strokeWidth="3" fill="none" strokeDasharray="30 120" className="animate-dash-medium" />

                {/* Branching paths to API Nodes */}
                {activeTier === "10k" ? (
                  /* Single instance */
                  <>
                    <path d="M 360 170 H 470" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6 6" fill="none" opacity="0.5" />
                    <path d="M 360 170 H 470" stroke="url(#flow-grad)" strokeWidth="3" fill="none" strokeDasharray="30 120" className="animate-dash-fast" />
                  </>
                ) : (
                  /* Dual / Cluster instances */
                  <>
                    <path d="M 360 170 Q 410 100 460 100" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 6" fill="none" opacity="0.4" />
                    <path d="M 360 170 Q 410 100 460 100" stroke="url(#flow-grad)" strokeWidth="2.5" fill="none" strokeDasharray="30 120" className="animate-dash-fast" />

                    <path d="M 360 170 Q 410 240 460 240" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 6" fill="none" opacity="0.4" />
                    <path d="M 360 170 Q 410 240 460 240" stroke="url(#flow-grad)" strokeWidth="2.5" fill="none" strokeDasharray="30 120" className="animate-dash-fast" />

                    {/* Cache links */}
                    <path d="M 460 100 Q 420 170 460 170" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.4" />
                    <path d="M 460 240 Q 420 170 460 170" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.4" />
                  </>
                )}

                {/* Paths to Databases */}
                <path d="M 510 100 Q 550 120 590 120" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 6" fill="none" opacity="0.4" />
                <path d="M 510 100 Q 550 120 590 120" stroke="url(#flow-grad)" strokeWidth="2" fill="none" strokeDasharray="25 100" className="animate-dash-fast" />

                <path d="M 510 240 Q 550 220 590 220" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 6" fill="none" opacity="0.4" />
                <path d="M 510 240 Q 550 220 590 220" stroke="url(#flow-grad)" strokeWidth="2" fill="none" strokeDasharray="25 100" className="animate-dash-fast" />

                {/* DB Replication Sync Link */}
                <path d="M 620 150 V 190" stroke="#d4af37" strokeWidth="2" strokeDasharray="5 5" fill="none" opacity="0.6" />
                <path d="M 620 150 V 190" stroke="#d4af37" strokeWidth="2.5" fill="none" strokeDasharray="20 60" className="animate-dash-slow" />
              </svg>

              {/* Node 1: User Client */}
              <div className="absolute top-[170px] left-[60px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-14 h-14 bg-gray-950 border-2 border-blue-500 shadow-xl rounded-2xl flex items-center justify-center text-blue-400">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 mt-2">
                  User Client
                </span>
              </div>

              {/* Node 2: Cloudflare CDN */}
              <div className="absolute top-[170px] left-[200px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-14 h-14 bg-gray-950 border-2 border-[#d4af37] shadow-lg rounded-2xl flex items-center justify-center text-[#d4af37]">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 mt-2">
                  Cloudflare CDN
                </span>
              </div>

              {/* Node 3: Load Balancer / Gateway */}
              <div className="absolute top-[170px] left-[340px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-14 h-14 bg-gray-950 border-2 border-emerald-500 shadow-xl rounded-2xl flex items-center justify-center text-emerald-400">
                  <RefreshCw className="w-6 h-6 animate-spin-slow" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-white mt-2">
                  {activeTier === "1m" ? "K8s Ingress" : "Nginx Gateway"}
                </span>
                <span className="text-[8px] font-bold text-emerald-400">HTTPS Proxy</span>
              </div>

              {/* Node 4: API Instances */}
              {activeTier === "10k" ? (
                <div className="absolute top-[170px] left-[480px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-14 h-14 bg-gray-950 border-2 border-blue-500 shadow-lg rounded-2xl flex items-center justify-center text-blue-400">
                    <Server className="w-6 h-6" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-wider text-gray-300 mt-2">
                    Single VPS Node
                  </span>
                </div>
              ) : (
                <>
                  <div className="absolute top-[100px] left-[480px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-14 h-14 bg-gray-950 border-2 border-blue-500 shadow-lg rounded-2xl flex items-center justify-center text-blue-400">
                      <Server className="w-6 h-6" />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-gray-300 mt-2">
                      API Pod 01
                    </span>
                  </div>

                  <div className="absolute top-[240px] left-[480px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-14 h-14 bg-gray-950 border-2 border-blue-500 shadow-lg rounded-2xl flex items-center justify-center text-blue-400">
                      <Server className="w-6 h-6" />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-gray-300 mt-2">
                      API Pod 02
                    </span>
                  </div>

                  {/* Redis Cache Node */}
                  <div className="absolute top-[170px] left-[480px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-12 h-12 bg-gray-950 border border-emerald-500 rounded-xl flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/20">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-wider text-emerald-400 mt-1">
                      Redis Cache
                    </span>
                  </div>
                </>
              )}

              {/* Node 5: Databases */}
              <div className="absolute top-[120px] left-[620px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-14 h-14 bg-gray-950 border-2 border-indigo-500 shadow-lg rounded-2xl flex items-center justify-center text-indigo-400">
                  <Database className="w-6 h-6" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-wider text-white mt-2">
                  Primary DB
                </span>
              </div>

              <div className="absolute top-[220px] left-[620px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-14 h-14 bg-gray-950 border border-[#d4af37] shadow-md rounded-2xl flex items-center justify-center text-[#d4af37]">
                  <Database className="w-6 h-6" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-wider text-[#d4af37] mt-2">
                  {activeTier === "1m" ? "Kafka Event Lake" : "Read-Replica"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
