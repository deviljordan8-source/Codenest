import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle,
  ExternalLink,
  MapPin,
  Server,
  Database,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Case Study: UrbanState Real Estate Ecosystem | CodeNest",
  description:
    "How CodeNest engineered a high-volume property management and real-time polygon geospatial mapping platform for 12,000+ active listings.",
};

export default function RealEstateCaseStudyPage() {
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
                PropTech & Geospatial Systems
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white leading-[1.1] mb-6">
              UrbanState Real <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#d4af37] to-[#b8860b]">
                Estate Ecosystem
              </span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              A high-availability property management platform with real-time geospatial polygon queries, tenant background screening, and instant lease signing workflows.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "Go Backend", "PostGIS Spatial DB", "AWS S3", "Docker"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-900 border border-gray-800 text-xs text-gray-300 rounded-md font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-gray-800 shadow-2xl bg-black">
            <Image
              src="/services/web_app_v3.png"
              alt="UrbanState Real Estate"
              fill
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            { value: "12,000+", label: "Concurrent Inquiries" },
            { value: "25ms", label: "Spatial Polygon Search" },
            { value: "3.2x", label: "Lease Conversion Rate" },
            { value: "99.99%", label: "Platform Availability" },
          ].map((m) => (
            <div key={m.label} className="p-6 bg-[#0b0f17] border border-gray-800 rounded-2xl text-center">
              <div className="text-3xl lg:text-4xl font-black text-[#d4af37] mb-1">{m.value}</div>
              <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">{m.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-12 bg-[#0c121e] border border-gray-800 rounded-[2.5rem] text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-black text-white mb-3">Building a complex marketplace or portal?</h3>
          <p className="text-xs text-gray-400 mb-6">
            Speak with our systems architects to design your database and geospatial indexing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-[#d4af37] text-black font-black text-xs uppercase tracking-wider rounded-xl hover:bg-[#e4c04e] transition-all"
          >
            Blueprint Your Marketplace →
          </Link>
        </div>
      </div>
    </div>
  );
}
