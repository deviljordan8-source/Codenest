"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Video,
  CheckCircle,
  ArrowRight,
  Shield,
  Sparkles,
  Users,
  Cpu,
} from "lucide-react";

const pathways = [
  {
    id: "discovery",
    title: "Discovery Call",
    duration: "30 Mins",
    desc: "Initial high-level exploration of your business objectives, technical bottlenecks, and preliminary budget fit.",
    icon: Users,
  },
  {
    id: "technical",
    title: "Technical Consultation",
    duration: "45 Mins",
    desc: "Rigorous deep-dive with our senior systems architect into cloud topologies, DB replication, and Go/Rust/Next.js stacks.",
    icon: Cpu,
  },
  {
    id: "product",
    title: "Product Strategy",
    duration: "45 Mins",
    desc: "Feature prioritization, user journey mapping, and milestone roadmapping for early-stage and growth products.",
    icon: Sparkles,
  },
  {
    id: "ai",
    title: "AI Transformation",
    duration: "60 Mins",
    desc: "Enterprise AI readiness assessment, proprietary RAG architecture blueprints, and private model deployment strategies.",
    icon: Sparkles,
  },
];

const availableTimes = [
  "09:00 AM EST",
  "11:00 AM EST",
  "01:30 PM EST",
  "03:00 PM EST",
  "05:00 PM EST",
];

export default function BookConsultationPage() {
  const [selectedPathway, setSelectedPathway] = useState("technical");
  const [selectedDate, setSelectedDate] = useState("Tomorrow");
  const [selectedTime, setSelectedTime] = useState("01:30 PM EST");
  const [confirmed, setConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    notes: "",
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-8">
            <Calendar className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
              Direct Engineering Access
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
            Book a Consultation With Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
              Engineering Team
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed font-normal max-w-2xl mx-auto">
            Select an engineering pathway and reserve dedicated time with our lead architects. No sales pressure—just structured technical alignment.
          </p>
        </div>

        {/* 4 Consultation Pathways */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pathways.map((path) => {
            const isSelected = selectedPathway === path.id;
            const Icon = path.icon;
            return (
              <button
                key={path.id}
                onClick={() => setSelectedPathway(path.id)}
                className={`p-6 rounded-3xl border text-left flex flex-col justify-between transition-all ${
                  isSelected
                    ? "bg-[#101726] border-[#d4af37] ring-2 ring-[#d4af37]/30 shadow-xl shadow-[#d4af37]/10 scale-[1.02]"
                    : "bg-[#0b0f17] border-gray-800 hover:border-gray-700 hover:bg-[#0e1420]"
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="p-3 bg-gray-900 rounded-xl text-[#d4af37] border border-white/5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 bg-gray-900 text-gray-300 rounded-full border border-gray-800">
                      {path.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{path.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{path.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-800/60 flex items-center text-xs font-bold text-[#d4af37]">
                  {isSelected ? "Selected Pathway ✓" : "Select Pathway →"}
                </div>
              </button>
            );
          })}
        </div>

        {/* Booking Interactive Interface */}
        <div className="max-w-4xl mx-auto bg-[#0b0f17] border border-gray-800 rounded-[2.5rem] p-8 lg:p-14 shadow-2xl mb-24">
          {confirmed ? (
            <div className="text-center py-10 space-y-6">
              <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-3xl font-black">
                ✓
              </div>
              <h2 className="text-3xl font-black text-white">Consultation Confirmed!</h2>
              <p className="text-gray-300 text-base max-w-lg mx-auto">
                We have scheduled your session for <span className="text-[#d4af37] font-bold">{selectedDate}</span> at{" "}
                <span className="text-[#d4af37] font-bold">{selectedTime}</span>. A calendar invitation with Google Meet / Zoom credentials has been dispatched to {formData.email}.
              </p>
              <div className="pt-6">
                <Link
                  href="/"
                  className="inline-flex items-center px-8 py-3.5 bg-white/10 hover:bg-[#d4af37] hover:text-black text-white font-bold text-sm rounded-xl transition-all"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-8">
              <div>
                <h3 className="text-2xl font-black text-white mb-1">
                  Step 2: Select Date & Time
                </h3>
                <p className="text-xs text-gray-400 mb-6">
                  All sessions are hosted via high-definition encrypted video call.
                </p>

                {/* Date Pills */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {["Tomorrow", "In 2 Days", "In 3 Days", "Next Monday"].map((d) => (
                    <button
                      type="button"
                      key={d}
                      onClick={() => setSelectedDate(d)}
                      className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        selectedDate === d
                          ? "bg-[#d4af37] text-black font-black"
                          : "bg-gray-900 text-gray-300 border border-gray-800 hover:border-gray-700"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>

                {/* Time Slots */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {availableTimes.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`p-3 rounded-xl text-xs font-bold text-center transition-all ${
                        selectedTime === t
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-black scale-105"
                          : "bg-black border border-gray-800 text-gray-400 hover:text-white"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Contact Details */}
              <div className="pt-8 border-t border-gray-800 space-y-6">
                <h3 className="text-2xl font-black text-white mb-1">
                  Step 3: Your Information
                </h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aks Sangwan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-black border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="aks@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-black border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Company Name & Current Website
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Corp (apexcorp.com)"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3.5 bg-black border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    What specific challenges or goals would you like to focus on?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. We are rewriting our legacy portal to support 50k daily active users and need advice on DB partitioning and frontend micro-frontends..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3.5 bg-black border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#d4af37] text-black font-black text-base rounded-xl hover:bg-[#e4c04e] transition-all flex items-center justify-center space-x-2 shadow-xl hover:scale-[1.01]"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Confirm Technical Consultation</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Consultation Lifecycle */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h3 className="text-2xl font-black text-white mb-8">Consultation Lifecycle</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#0b0f17] border border-gray-800 rounded-2xl">
              <div className="text-xl font-black text-[#d4af37] mb-2">01. Request Submission</div>
              <p className="text-xs text-gray-400">
                You submit your challenges, tech stack, and goals.
              </p>
            </div>
            <div className="p-6 bg-[#0b0f17] border border-gray-800 rounded-2xl">
              <div className="text-xl font-black text-[#d4af37] mb-2">02. Internal Analysis</div>
              <p className="text-xs text-gray-400">
                Our architects review your domain before joining the call.
              </p>
            </div>
            <div className="p-6 bg-[#0b0f17] border border-gray-800 rounded-2xl">
              <div className="text-xl font-black text-[#d4af37] mb-2">03. Strategy Session</div>
              <p className="text-xs text-gray-400">
                Live interactive walkthrough with actionable architectural blueprints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
