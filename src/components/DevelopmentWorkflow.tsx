"use client";

import React, { useState } from "react";
import {
  Settings,
  Search,
  Cpu,
  Code,
  ShieldCheck,
  Rocket,
  TrendingUp,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

interface WorkflowStep {
  number: number;
  title: string;
  subtitle: string;
  heading: string;
  description: string;
  icon: any;
}

const steps: WorkflowStep[] = [
  {
    number: 1,
    title: "Business Discovery",
    subtitle: "Agile Planning",
    heading: "Strategic Alignment Workshop",
    description:
      "Define business outcomes, ROI expectations, budget parameters, and technical requirements before engineering begins.",
    icon: Search,
  },
  {
    number: 2,
    title: "System Architecture",
    subtitle: "Interface Planning",
    heading: "Distributed Blueprint & Wireframes",
    description:
      "Architecting high-performance cloud clusters, database replication topologies, and modular API service contracts.",
    icon: Cpu,
  },
  {
    number: 3,
    title: "Core Development",
    subtitle: "Modular Architecture",
    heading: "Full-Scale Precision Engineering",
    description:
      "Clean, maintainable code implementation leveraging compiled runtimes, strict type systems, and rapid microservices.",
    icon: Code,
  },
  {
    number: 4,
    title: "Quality Assurance",
    subtitle: "Optimized Performance",
    heading: "Automated Testing & Security Audits",
    description:
      "Rigorous unit, integration, and stress tests under synthetic traffic spikes, validating OWASP Top 10 and sub-second latency.",
    icon: ShieldCheck,
  },
  {
    number: 5,
    title: "System Launch",
    subtitle: "Scalable Infrastructure",
    heading: "Zero-Downtime Deployment",
    description:
      "Multi-region deployment pipelines with edge CDN caching, health checks, and automatic fallback rollbacks.",
    icon: Rocket,
  },
  {
    number: 6,
    title: "Continuous Growth",
    subtitle: "Security Focused",
    heading: "24/7 Telemetry & Capacity Scaling",
    description:
      "Continuous optimization, real-time observability alerts, regular penetration tests, and SLA-backed maintenance.",
    icon: TrendingUp,
  },
];

export default function DevelopmentWorkflow() {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  const currentStep = steps[currentStepIdx];
  const IconComponent = currentStep.icon;

  const progressPercentage = (currentStepIdx / (steps.length - 1)) * 100;

  return (
    <section id="process" className="py-24 lg:py-32 bg-[#050505] overflow-hidden border-t border-gray-900">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-900/20 border border-blue-800/40 mb-6">
            <Settings className="w-4 h-4 text-blue-400 animate-spin-slow" />
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
              Engineering Excellence
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Our Development <br />
            <span className="text-gray-500">Workflow</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed font-normal">
            We follow a structured, process-driven engineering methodology to transform complex requirements into reliable enterprise systems.
          </p>
        </div>

        {/* Steps Stepper Bar */}
        <div className="relative max-w-5xl mx-auto mb-16 px-4">
          {/* Base Track */}
          <div className="absolute top-6 left-0 right-0 h-1 bg-gray-800 -translate-y-1/2 rounded-full hidden md:block" />
          {/* Active Fill Track */}
          <div
            className="absolute top-6 left-0 h-1 bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-blue-500 -translate-y-1/2 rounded-full transition-all duration-500 ease-out hidden md:block"
            style={{ width: `${progressPercentage}%` }}
          />

          <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-6 md:gap-2">
            {steps.map((step, idx) => {
              const isActive = idx === currentStepIdx;
              const isPast = idx < currentStepIdx;
              return (
                <button
                  key={step.number}
                  onClick={() => setCurrentStepIdx(idx)}
                  className="flex md:flex-col items-center gap-4 md:gap-2 group focus:outline-none w-full md:w-auto text-left md:text-center"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-black transition-all duration-300 shrink-0 border-2 ${
                      isActive
                        ? "bg-[#d4af37] text-black border-[#d4af37] ring-4 ring-[#d4af37]/30 scale-110 shadow-lg shadow-[#d4af37]/30"
                        : isPast
                        ? "bg-gray-900 text-[#d4af37] border-[#d4af37]/60"
                        : "bg-gray-950 text-gray-500 border-gray-800 hover:border-gray-600 hover:text-white"
                    }`}
                  >
                    {step.number}
                  </div>
                  <div className="flex flex-col md:items-center">
                    <span
                      className={`text-xs font-black uppercase tracking-wider transition-colors duration-300 ${
                        isActive
                          ? "text-[#d4af37]"
                          : "text-gray-400 group-hover:text-gray-200"
                      }`}
                    >
                      {step.title}
                    </span>
                    <span className="text-[10px] text-gray-500 font-bold mt-0.5 hidden md:block">
                      {step.subtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Step Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#d4af37]/10 to-blue-600/10 rounded-[3rem] blur-3xl opacity-40 pointer-events-none" />
          <div className="relative bg-[#0b0f17] border border-gray-800/90 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            {/* Step Icon */}
            <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-[2rem] bg-gradient-to-br from-[#121820] to-[#070b12] flex items-center justify-center shrink-0 border border-[#d4af37]/30 shadow-xl relative">
              <div className="absolute inset-0 bg-[#d4af37]/10 rounded-[2rem] animate-pulse" />
              <IconComponent className="w-10 h-10 lg:w-14 lg:h-14 text-[#d4af37] relative z-10" />
            </div>

            {/* Step Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-black uppercase tracking-widest text-[#d4af37] mb-4">
                {currentStep.subtitle}
              </div>
              <h3 className="text-3xl font-black text-white mb-4 leading-tight">
                {currentStep.heading}
              </h3>
              <p className="text-base text-gray-300 leading-relaxed font-normal">
                {currentStep.description}
              </p>
            </div>
          </div>

          {/* Stepper Controls */}
          <div className="flex justify-between items-center mt-8 px-4">
            <button
              disabled={currentStepIdx === 0}
              onClick={() => setCurrentStepIdx((prev) => Math.max(0, prev - 1))}
              className={`inline-flex items-center px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                currentStepIdx === 0
                  ? "text-gray-700 cursor-not-allowed"
                  : "text-gray-300 hover:text-white hover:bg-gray-900 active:scale-95"
              }`}
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Previous
            </button>

            <div className="text-xs font-black uppercase tracking-widest text-[#d4af37]">
              Step {currentStepIdx + 1} of {steps.length}
            </div>

            <button
              disabled={currentStepIdx === steps.length - 1}
              onClick={() => setCurrentStepIdx((prev) => Math.min(steps.length - 1, prev + 1))}
              className={`inline-flex items-center px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                currentStepIdx === steps.length - 1
                  ? "text-gray-700 cursor-not-allowed"
                  : "text-white bg-white/10 hover:bg-[#d4af37] hover:text-black active:scale-95"
              }`}
            >
              Next
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
