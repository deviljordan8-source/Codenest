"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Lock, Mail, ShieldCheck, ArrowRight } from "lucide-react";
import CodeNestLogo from "@/components/CodeNestLogo";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessage("Authenticated. Redirecting to your dedicated telemetry dashboard...");
    }, 1000);
  };

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24 flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-[#0b0f17] border border-gray-800 rounded-[2.5rem] p-8 sm:p-10 shadow-2xl relative">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <CodeNestLogo size="md" showTagline={false} />
          </div>
          <h1 className="text-2xl font-black text-white mb-2">Client Telemetry Portal</h1>
          <p className="text-xs text-gray-400">
            Access real-time system monitoring, sprint reports, and code repositories.
          </p>
        </div>

        {message ? (
          <div className="p-6 bg-emerald-950/40 border border-emerald-800 rounded-2xl text-center space-y-3">
            <div className="text-emerald-400 font-bold text-sm">✓ {message}</div>
            <Link
              href="/"
              className="inline-block text-xs text-[#d4af37] underline hover:text-white"
            >
              Return to CodeNest Home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                Work Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="client@enterprise.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37] text-sm"
                />
                <Mail className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                  Password
                </label>
                <a href="#" className="text-[11px] text-[#d4af37] hover:underline">
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black border border-gray-800 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37] text-sm"
                />
                <Lock className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#d4af37] text-black font-black text-sm rounded-xl hover:bg-[#e4c04e] transition-all flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>{loading ? "Authenticating..." : "Sign In to Client Portal"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="mt-8 pt-6 border-t border-gray-800/80 text-center">
          <div className="flex items-center justify-center space-x-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>256-Bit SSL Encrypted Enterprise Auth</span>
          </div>
        </div>
      </div>
    </div>
  );
}
