"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Rocket,
  Shield,
  CheckCircle,
  ArrowRight,
  Gift,
  HelpCircle,
  Send,
} from "lucide-react";

export default function FreeWebsitePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    websiteOrSocial: "",
    contactName: "",
    email: "",
    industry: "Startup",
    goals: "",
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
            <Gift className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
              Community Impact Initiative
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
            Get Your Website Engineered For{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
              Absolutely Free
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed font-normal max-w-2xl mx-auto">
            As part of CodeNest's commitment to fostering grassroots innovation, we select qualified startups, emerging local businesses, and mission-driven initiatives every month for full complimentary digital engineering.
          </p>
        </div>

        {/* What's Included */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "Modern Next.js Architecture",
              desc: "Engineered on modern React & Next.js for blazing fast sub-second load times and unmatched lighthouse scores.",
            },
            {
              title: "Mobile-First Responsiveness",
              desc: "Pixel-perfect rendering across iPhones, Android devices, tablets, and ultra-wide desktop monitors.",
            },
            {
              title: "Technical SEO & Meta Tags",
              desc: "Semantic HTML5, OpenGraph tags, schema markup, and sitemaps so your business ranks immediately on Google.",
            },
          ].map((item) => (
            <div key={item.title} className="p-8 bg-[#0b0f17] border border-gray-800 rounded-3xl">
              <CheckCircle className="w-6 h-6 text-[#d4af37] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div className="max-w-3xl mx-auto bg-[#0b0f17] border border-gray-800 rounded-[2.5rem] p-8 lg:p-14 shadow-2xl mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-3">Apply For The Free Initiative</h2>
            <p className="text-sm text-gray-400">
              Submit your project details below. Our review board evaluates submissions weekly.
            </p>
          </div>

          {submitted ? (
            <div className="p-10 bg-emerald-950/40 border border-emerald-800 rounded-2xl text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl font-black">
                ✓
              </div>
              <h3 className="text-2xl font-black text-white">Application Received!</h3>
              <p className="text-sm text-gray-300 max-w-md mx-auto">
                Thank you for applying. If your business qualifies for this month's cohort, our engineering coordinator will reach out to schedule an onboarding call.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Business / Project Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Health"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-4 py-3.5 bg-black border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Current Link or Social Profile
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. instagram.com/acme or linktr.ee"
                    value={formData.websiteOrSocial}
                    onChange={(e) => setFormData({ ...formData, websiteOrSocial: e.target.value })}
                    className="w-full px-4 py-3.5 bg-black border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-4 py-3.5 bg-black border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 bg-black border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  Industry / Category
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-4 py-3.5 bg-black border border-gray-800 rounded-xl text-white focus:outline-none focus:border-[#d4af37]"
                >
                  <option value="Startup">Early-Stage Startup</option>
                  <option value="Healthcare">Healthcare & Wellness</option>
                  <option value="E-Commerce">E-Commerce & Retail</option>
                  <option value="Education">Education & Coaching</option>
                  <option value="Local Business">Local Service Business</option>
                  <option value="Non-Profit">Non-Profit & Social Mission</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  Tell us about your mission and what you want to achieve
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your target audience, what you sell or offer, and why having a professional website will help you grow..."
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  className="w-full px-4 py-3.5 bg-black border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#d4af37] text-black font-black text-base rounded-xl hover:bg-[#e4c04e] transition-all flex items-center justify-center space-x-2 shadow-xl hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                <span>Submit Free Website Application</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
