import React from "react";
import Link from "next/link";
import {
  Mail,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import CodeNestLogo from "./CodeNestLogo";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-gray-900 pt-24 pb-12 overflow-hidden text-gray-400">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <CodeNestLogo size="md" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Building scalable digital systems, resilient enterprise infrastructure, and modern software solutions for forward-thinking businesses globally.
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                title="X"
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-800 hover:text-white hover:border-gray-700 transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-8">
              Services
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Digital Infrastructure", href: "/services/digital-infrastructure" },
                { name: "Web Applications", href: "/services/web-applications" },
                { name: "AI Solutions", href: "/solutions/ai-solutions" },
                { name: "Business Automation", href: "/solutions/business-automation" },
                { name: "UI/UX Design", href: "/services/ui-ux-design" },
                { name: "Free Website Initiative", href: "/free-website" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[#d4af37] text-sm transition-colors flex items-center group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-8">
              Company
            </h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Case Studies", href: "/projects" },
                { name: "Careers", href: "/careers" },
                { name: "Pricing & Budgets", href: "/pricing" },
                { name: "Contact", href: "/contact" },
                { name: "Engineering Blueprints", href: "/docs" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[#d4af37] text-sm transition-colors flex items-center group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Inquiries */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-8">
              Get In Touch
            </h4>
            <ul className="space-y-6">
              <li>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">
                  General Inquiries
                </div>
                <a
                  href="mailto:info@codenest.dev"
                  className="text-gray-300 hover:text-[#d4af37] text-sm flex items-center transition-colors font-bold"
                >
                  <Mail className="w-3.5 h-3.5 mr-2 text-[#d4af37]" />
                  info@codenest.dev
                </a>
              </li>
              <li>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">
                  Careers & Hiring
                </div>
                <a
                  href="mailto:hr@codenest.dev"
                  className="text-gray-300 hover:text-[#d4af37] text-sm flex items-center transition-colors font-bold"
                >
                  <Mail className="w-3.5 h-3.5 mr-2 text-[#d4af37]" />
                  hr@codenest.dev
                </a>
              </li>
              <li>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">
                  Client SLA Support
                </div>
                <a
                  href="mailto:support@codenest.dev"
                  className="text-gray-300 hover:text-[#d4af37] text-sm flex items-center transition-colors font-bold"
                >
                  <Mail className="w-3.5 h-3.5 mr-2 text-[#d4af37]" />
                  support@codenest.dev
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Enterprise Compliance & Uptime Status */}
        <div className="pt-10 pb-8 border-t border-gray-900 flex flex-wrap justify-between items-center gap-6">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mr-2">
              Enterprise Compliance
            </span>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1.5 rounded-lg bg-gray-950 border border-gray-900 text-[10px] font-black uppercase tracking-wider text-gray-300">
                SOC 2 Type II Protocol
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-gray-950 border border-gray-900 text-[10px] font-black uppercase tracking-wider text-gray-300">
                OWASP Top 10 Aligned
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-gray-950 border border-gray-900 text-[10px] font-black uppercase tracking-wider text-gray-300">
                AES-256 Encrypted
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3 bg-gray-950 border border-gray-900 px-4 py-2 rounded-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-black uppercase tracking-wider text-emerald-400">
              All Systems Operational (99.99% Uptime)
            </span>
          </div>
        </div>

        {/* Copyright & Sub Links */}
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-gray-500">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-center sm:text-left">
            <div>© 2026 CodeNest. All rights reserved. Engineered with precision.</div>
            <div>
              Engineering Blueprints:{" "}
              <Link
                href="/docs"
                className="text-[#d4af37] hover:underline underline-offset-4"
              >
                docs.codenest.dev →
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/refund" className="hover:text-white transition-colors">
              Refund Policy
            </Link>
            <Link href="/security" className="hover:text-white transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
