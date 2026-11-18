import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Zap,
  Repeat,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Clock,
  Layers,
  Shield,
} from "lucide-react";

export const metadata = {
  title: "Business Process Automation | CodeNest",
  description:
    "Streamline enterprise workflows, automate recurring tasks, and connect your business systems with zero human error.",
};

export default function BusinessAutomationPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
          <Link href="/services" className="hover:text-[#d4af37]">Solutions</Link>
          <span>/</span>
          <span className="text-[#d4af37]">Business Automation</span>
        </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-6">
              <Zap className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
                Operational Velocity
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white leading-[1.1] mb-6">
              Intelligent Workflow <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
                Automation Systems
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Eliminate redundant manual spreadsheet exports, duplicate entries, and human oversight. We build fault-tolerant backend automation that runs silently in the background 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/book-consultation"
                className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black font-black text-sm rounded-xl hover:bg-[#e4c04e] transition-all shadow-lg hover:scale-105"
              >
                Schedule Automation Audit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-gray-800 shadow-2xl bg-black">
            <Image
              src="/services/business_automation_v3.png"
              alt="Business Automation"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </div>

        {/* 3 Impact Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {[
            {
              metric: "98%",
              title: "Reduction in Manual Overhead",
              desc: "Automate invoicing, payroll approval pipelines, contract generation, and inventory synchronization.",
              icon: Clock,
            },
            {
              metric: "100%",
              title: "System Synchronization",
              desc: "Ensure Stripe, Salesforce, HubSpot, QuickBooks, and internal databases stay in perpetual, real-time lockstep.",
              icon: Repeat,
            },
            {
              metric: "<1s",
              title: "Cross-System Propagation",
              desc: "Events captured anywhere instantly trigger downstream webhook handlers, Slack alerts, and PDF generation.",
              icon: TrendingUp,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="p-8 bg-[#0b0f17] border border-gray-800 rounded-3xl flex flex-col justify-between">
                <div>
                  <div className="text-4xl font-black text-[#d4af37] mb-2">{item.metric}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-800/60 flex items-center text-xs text-gray-400 font-bold">
                  <Icon className="w-4 h-4 mr-2 text-[#d4af37]" />
                  <span>Verified Benchmark</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-4">
            How many hours does your team lose to manual copy-paste?
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Let's build reliable robotic workflows that reclaim hundreds of productive engineering and administrative hours every single month.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black font-black text-sm rounded-xl hover:bg-[#e4c04e] transition-all"
          >
            Request Automation Assessment
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
