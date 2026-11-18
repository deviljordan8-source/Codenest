"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MessageSquare,
  Send,
  Phone,
  Clock,
  ChevronDown,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

const faqs = [
  {
    q: "How does CodeNest manage project timelines and delivery?",
    a: "We operate on weekly asynchronous sprints with clear milestones defined before any engineering begins. You receive direct access to our development repo, live staging links, and automated test reports.",
  },
  {
    q: "What technologies and languages do you specialize in?",
    a: "Our core stack includes Next.js, React, TypeScript, Go (Golang), Rust, Python, and Laravel. For data and cloud infrastructure, we specialize in PostgreSQL, Redis, Docker, Kubernetes, and AWS.",
  },
  {
    q: "Do you offer post-launch maintenance and enterprise SLAs?",
    a: "Yes. We offer 24/7 proactive monitoring, security patching, database optimization, and guaranteed SLA response times to keep your critical systems running at 99.99% uptime.",
  },
  {
    q: "How does the engagement and contract structure work?",
    a: "We offer both fixed-scope milestone deliverables and dedicated monthly engineering squads, complete with formal SOC 2 / HIPAA compliance assurances and IP ownership agreements.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "Web Applications",
    budget: "$15k - $35k",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
            <MessageSquare className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
              Start the Conversation
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
            Let's Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
              Extraordinary
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed font-normal max-w-2xl mx-auto">
            Tell us about your technical goals, timeline, and architectural requirements. Our engineering heads will review your submission and reply within 24 hours.
          </p>
        </div>

        {/* Main Grid: Info + Form */}
        <div className="grid lg:grid-cols-3 gap-12 mb-28">
          {/* Direct Channels */}
          <div className="space-y-6">
            <div className="p-8 bg-[#0b0f17] border border-gray-800 rounded-3xl">
              <div className="text-xs font-black uppercase tracking-widest text-[#d4af37] mb-2">
                General Inquiries
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Engineering Sales</h3>
              <p className="text-sm text-gray-400 mb-6">
                Direct channel to discuss new custom builds, system revamps, and enterprise RFPs.
              </p>
              <a
                href="mailto:info@codenest.dev"
                className="text-sm font-bold text-[#d4af37] flex items-center hover:underline"
              >
                <Mail className="w-4 h-4 mr-2" />
                info@codenest.dev
              </a>
            </div>

            <div className="p-8 bg-[#0b0f17] border border-gray-800 rounded-3xl">
              <div className="text-xs font-black uppercase tracking-widest text-blue-400 mb-2">
                Technical Careers
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Join Our Engineering Core</h3>
              <p className="text-sm text-gray-400 mb-6">
                We are always seeking elite full-stack, systems, and AI engineers globally.
              </p>
              <a
                href="mailto:hr@codenest.dev"
                className="text-sm font-bold text-blue-400 flex items-center hover:underline"
              >
                <Mail className="w-4 h-4 mr-2" />
                hr@codenest.dev
              </a>
            </div>

            <div className="p-8 bg-[#0b0f17] border border-gray-800 rounded-3xl">
              <div className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-2">
                Client Support SLA
              </div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Telemetry Desk</h3>
              <p className="text-sm text-gray-400 mb-6">
                Active monitoring and rapid incident triage for contracted enterprise clients.
              </p>
              <a
                href="mailto:support@codenest.dev"
                className="text-sm font-bold text-emerald-400 flex items-center hover:underline"
              >
                <Mail className="w-4 h-4 mr-2" />
                support@codenest.dev
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-[#0b0f17] border border-gray-800 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl">
            <h2 className="text-3xl font-black text-white mb-2">Tell Us About Your Vision</h2>
            <p className="text-sm text-gray-400 mb-8">
              Fill in the details below to receive a formal architectural estimation.
            </p>

            {submitted ? (
              <div className="p-12 bg-emerald-950/40 border border-emerald-800 rounded-2xl text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl font-black">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-white">Inquiry Received!</h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  Thank you for reaching out to CodeNest. A member of our senior engineering team will review your specifications and contact you shortly.
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
                      placeholder="e.g. Elena Rostova"
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
                      placeholder="elena@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-black border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Health"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3.5 bg-black border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 bg-black border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Service Requirement
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 bg-black border border-gray-800 rounded-xl text-white focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="Web Applications">Web Application Development</option>
                      <option value="Digital Infrastructure">Digital Infrastructure & Architecture</option>
                      <option value="AI Solutions">AI Solutions & LLM Integrations</option>
                      <option value="Business Automation">Business Workflow Automation</option>
                      <option value="ERP / CRM">Custom ERP / CRM System</option>
                      <option value="UI/UX Design">UI/UX Design & System Design</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Estimated Project Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3.5 bg-black border border-gray-800 rounded-xl text-white focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="$5k - $15k">$5,000 - $15,000 (MVP / Focused)</option>
                      <option value="$15k - $35k">$15,000 - $35,000 (Growth Tier)</option>
                      <option value="$35k - $75k">$35,000 - $75,000 (Full Platform)</option>
                      <option value="$75k+">$75,000+ (Enterprise Mission-Critical)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Project Overview & Technical Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your current system, primary pain points, scale requirements, target launch date, and any specific tech stack preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 bg-black border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#d4af37] text-black font-black text-base rounded-xl hover:bg-[#e4c04e] transition-all flex items-center justify-center space-x-2 shadow-xl hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Architectural Request</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-sm">
              Common questions regarding our engineering engagements, security, and SLAs.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="bg-[#0b0f17] border border-gray-800 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                  >
                    <span className="text-base font-bold text-white">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#d4af37] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-gray-800/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
