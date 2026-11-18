import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MessageSquare,
  ShieldCheck,
  Clock,
  ArrowRight,
  CheckCircle,
  Bell,
  Activity,
  HardDrive,
} from "lucide-react";

export const metadata = {
  title: "Support & SLA Maintenance | CodeNest",
  description:
    "24/7 proactive telemetry monitoring, zero-downtime security patching, database optimization, and guaranteed enterprise SLAs.",
};

export default function SupportMaintenancePage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
          <Link href="/services" className="hover:text-[#d4af37]">Services</Link>
          <span>/</span>
          <span className="text-[#d4af37]">Support & Maintenance</span>
        </div>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-6">
              <MessageSquare className="w-4 h-4 text-[#d4af37]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
                Reliability Engineering
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white leading-[1.1] mb-6">
              24/7 Enterprise Support & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
                SLA Maintenance
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Shipping the product is only Day 1. Our dedicated site reliability engineers (SREs) provide round-the-clock monitoring, automated vulnerability patch cycles, and guaranteed response SLAs to keep your operations online.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/book-consultation"
                className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black font-black text-sm rounded-xl hover:bg-[#e4c04e] transition-all shadow-lg hover:scale-105"
              >
                Review Managed SLA Plans
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-gray-800 shadow-2xl bg-black">
            <Image
              src="/services/digital_infrastructure_v3.png"
              alt="Support & Maintenance"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {[
            {
              title: "24/7 Telemetry & Health Monitoring",
              desc: "Automated synthetic pings every 30 seconds from 12 global regions. Proactive incident alerting before your customers ever notice.",
              icon: Activity,
            },
            {
              title: "Zero-Downtime Patch Cycles",
              desc: "Regular Linux OS security updates, Node/Go runtime upgrades, and database point-in-time backups without service interruption.",
              icon: HardDrive,
            },
            {
              title: "Guaranteed 15-Minute Response SLA",
              desc: "Direct PagerDuty escalation to named senior engineers on our staff, not outsourced Tier-1 ticket handlers.",
              icon: Clock,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="p-8 bg-[#0b0f17] border border-gray-800 rounded-3xl">
                <div className="w-12 h-12 bg-gray-900 border border-white/5 rounded-2xl flex items-center justify-center text-[#d4af37] mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-4">
            Protect your revenue and platform reputation
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Get an enterprise maintenance proposal customized for your technical stack.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black font-black text-sm rounded-xl hover:bg-[#e4c04e] transition-all"
          >
            Inquire About Maintenance Plans
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
