import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Briefcase,
  Rocket,
  Cpu,
  Layout,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Products & Platforms | CodeNest",
  description:
    "Explore CodeNest's proprietary internal platforms, AI tools, SaaS products, and enterprise engineering templates.",
};

const products = [
  {
    title: "Upcoming SaaS Ecosystem",
    slug: "/products/upcoming-saas",
    badge: "In Active Beta",
    image: "/portfolio/erp.png",
    description:
      "Our next-generation suite of cloud tools designed to automate multi-region deployments, database backups, and AI telemetry monitoring.",
    icon: Rocket,
  },
  {
    title: "AI Tools & Neural Modules",
    slug: "/products/ai-tools",
    badge: "Available Now",
    image: "/portfolio/ai_support.png",
    description:
      "Ready-to-deploy enterprise neural network modules, intelligent retrieval vector connectors, and customer support bots.",
    icon: Cpu,
  },
  {
    title: "Engineering Templates & Kits",
    slug: "/products/templates",
    badge: "Open Source / Pro",
    image: "/portfolio/lms.png",
    description:
      "Production-tested architectural starters in Next.js 14, Go, and Laravel built with strict typing and pre-configured CI/CD.",
    icon: Layout,
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mb-8">
            <Briefcase className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af37]">
              Product Ecosystem
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
            Proprietary Products & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#d4af37] to-[#b8860b]">
              Cloud Platforms
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed font-normal max-w-2xl mx-auto">
            Beyond custom client engineering, CodeNest actively develops internal tools, modular SaaS software, and open-source starter frameworks.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">
          {products.map((prod) => {
            const Icon = prod.icon;
            return (
              <div
                key={prod.title}
                className="bg-[#0b0f17] border border-gray-800 rounded-[2.5rem] overflow-hidden flex flex-col justify-between hover:border-[#d4af37]/50 shadow-2xl transition-all duration-300 group"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-black overflow-hidden">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 bg-black/80 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-[#d4af37] rounded-full border border-white/10">
                        {prod.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="w-12 h-12 bg-gray-900 border border-white/5 rounded-2xl flex items-center justify-center text-[#d4af37] mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-black text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                      {prod.title}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-normal">
                      {prod.description}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <Link
                    href={prod.slug}
                    className="inline-flex items-center justify-center w-full py-4 bg-white/5 border border-white/10 text-sm font-black rounded-xl hover:bg-[#d4af37] hover:text-black transition-all"
                  >
                    Explore Product Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="p-12 lg:p-16 bg-[#0c121e] border border-[#d4af37]/30 rounded-[3rem] text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
            Looking to partner on a product?
          </h2>
          <p className="text-gray-400 text-base mb-8 max-w-xl mx-auto">
            We actively co-build SaaS products with domain experts under joint-venture and equity-share partnerships.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#d4af37] text-black font-black text-sm rounded-xl hover:bg-[#e4c04e] transition-all"
          >
            Propose a Product Partnership
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
