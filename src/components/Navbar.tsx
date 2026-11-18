"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Cpu,
  Zap,
  Settings,
  Users,
  Globe,
  Rocket,
  Layout,
  Code,
  Shield,
  MessageSquare,
  Briefcase,
  GraduationCap,
  Cloud,
  BookOpen,
} from "lucide-react";
import CodeNestLogo from "./CodeNestLogo";

interface SubItem {
  name: string;
  href: string;
  description: string;
  icon: any;
}

interface NavCategory {
  title: string;
  submenu: SubItem[];
}

const navCategories: NavCategory[] = [
  {
    title: "Solutions",
    submenu: [
      {
        name: "AI Solutions",
        href: "/solutions/ai-solutions",
        description: "Custom neural networks and LLM integrations.",
        icon: Cpu,
      },
      {
        name: "Business Automation",
        href: "/solutions/business-automation",
        description: "Streamline workflows with intelligent systems.",
        icon: Zap,
      },
      {
        name: "ERP Systems",
        href: "/solutions/erp-systems",
        description: "Comprehensive enterprise resource planning.",
        icon: Settings,
      },
      {
        name: "CRM Systems",
        href: "/solutions/crm-systems",
        description: "Advanced customer relationship management.",
        icon: Users,
      },
      {
        name: "SaaS Platforms",
        href: "/solutions/saas-platforms",
        description: "Scalable cloud-based software solutions.",
        icon: Globe,
      },
    ],
  },
  {
    title: "Services",
    submenu: [
      {
        name: "Free Website",
        href: "/free-website",
        description: "Get your website developed for absolutely free.",
        icon: Rocket,
      },
      {
        name: "Digital Infrastructure",
        href: "/services/digital-infrastructure",
        description: "High-performance scalable systems.",
        icon: Layout,
      },
      {
        name: "Web Applications",
        href: "/services/web-applications",
        description: "Complex, scalable web-based apps.",
        icon: Code,
      },
      {
        name: "UI/UX Design",
        href: "/services/ui-ux-design",
        description: "User-centric modern digital interfaces.",
        icon: Rocket,
      },
      {
        name: "API Development",
        href: "/services/api-development",
        description: "Secure and robust backend architectures.",
        icon: Shield,
      },
      {
        name: "Maintenance & Support",
        href: "/services/support-maintenance",
        description: "24/7 technical support and updates.",
        icon: MessageSquare,
      },
    ],
  },
  {
    title: "Products",
    submenu: [
      {
        name: "Product Engineering",
        href: "/products",
        description: "Our ecosystem of internal platforms and tools.",
        icon: Briefcase,
      },
      {
        name: "Upcoming SaaS",
        href: "/products/upcoming-saas",
        description: "Our next generation of cloud tools.",
        icon: Rocket,
      },
      {
        name: "AI Tools",
        href: "/products/ai-tools",
        description: "Ready-to-use artificial intelligence modules.",
        icon: Cpu,
      },
      {
        name: "Templates",
        href: "/products/templates",
        description: "Professional starting points for projects.",
        icon: Layout,
      },
    ],
  },
  {
    title: "Industries",
    submenu: [
      {
        name: "Healthcare",
        href: "/industries/healthcare",
        description: "Enterprise secured protocols. HIPAA-compliant.",
        icon: Shield,
      },
      {
        name: "Education",
        href: "/industries/education",
        description: "AI-driven student analytics & LMS.",
        icon: GraduationCap,
      },
      {
        name: "FinTech",
        href: "/industries/fintech",
        description: "Compliance-first audit-ready architecture.",
        icon: Briefcase,
      },
      {
        name: "Logistics",
        href: "/industries/logistics",
        description: "Real-time tracking & supply chain visibility.",
        icon: Globe,
      },
      {
        name: "SaaS",
        href: "/industries/saas",
        description: "Multi-tenant platforms scalable to 100k+ users.",
        icon: Cloud,
      },
    ],
  },
  {
    title: "Company",
    submenu: [
      {
        name: "About Us",
        href: "/about",
        description: "Our mission, vision, and core values.",
        icon: Users,
      },
      {
        name: "Case Studies",
        href: "/projects",
        description: "Deep dive into our engineering success.",
        icon: Briefcase,
      },
      {
        name: "Careers",
        href: "/careers",
        description: "Join our team of engineering experts.",
        icon: Briefcase,
      },
      {
        name: "Blogs",
        href: "/blog",
        description: "Insights from the world of technology.",
        icon: BookOpen,
      },
      {
        name: "Contact",
        href: "/contact",
        description: "Get in touch for your next big project.",
        icon: MessageSquare,
      },
      {
        name: "Pricing",
        href: "/pricing",
        description: "Strategic budget architectures and investment plans.",
        icon: Zap,
      },
      {
        name: "Internship",
        href: "/internship",
        description: "Mentorship for the next generation.",
        icon: GraduationCap,
      },
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome
          ? "bg-black/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-[60]">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <CodeNestLogo size="md" />

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1">
            {navCategories.map((cat) => (
              <div
                key={cat.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(cat.title)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center space-x-1.5 px-4 py-2 text-[15px] font-bold rounded-lg transition-all ${
                    activeDropdown === cat.title
                      ? "text-[#d4af37] bg-white/5"
                      : "text-white/90 hover:text-[#d4af37]"
                  }`}
                >
                  <span>{cat.title}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      activeDropdown === cat.title ? "rotate-180 text-[#d4af37]" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === cat.title && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[360px] animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                    onMouseEnter={() => handleMouseEnter(cat.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-[#0b0f17] border border-white/15 rounded-2xl p-3 shadow-2xl backdrop-blur-2xl ring-1 ring-[#d4af37]/20">
                      <div className="grid gap-1">
                        {cat.submenu.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all"
                            >
                              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#d4af37]/50 group-hover:bg-[#d4af37]/10 transition-colors">
                                <Icon className="w-4 h-4 text-gray-400 group-hover:text-[#d4af37] transition-colors" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-bold text-white group-hover:text-[#d4af37] transition-colors flex items-center">
                                  {item.name}
                                </span>
                                <span className="text-xs text-gray-400 leading-snug mt-0.5">
                                  {item.description}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/login"
              className="text-sm font-bold text-gray-300 hover:text-[#d4af37] transition-colors"
            >
              Client Login
            </Link>
            <Link
              href="/book-consultation"
              className="relative group overflow-hidden bg-gradient-to-r from-[#1a365d] to-[#0f2444] text-white px-6 py-3 rounded-2xl text-sm font-black tracking-wide border border-[#d4af37]/30 shadow-xl hover:shadow-[#d4af37]/25 hover:border-[#d4af37] transition-all active:scale-95"
            >
              <span className="relative z-10 flex items-center text-[#d4af37] group-hover:text-white transition-colors">
                Book Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#b8860b] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[76px] bg-black/95 backdrop-blur-2xl border-t border-white/10 z-50 overflow-y-auto p-6 flex flex-col justify-between">
          <div className="space-y-4">
            {navCategories.map((cat) => {
              const isExpanded = mobileExpanded === cat.title;
              return (
                <div key={cat.title} className="border-b border-white/10 pb-3">
                  <button
                    onClick={() => setMobileExpanded(isExpanded ? null : cat.title)}
                    className="flex justify-between items-center w-full py-2 text-lg font-bold text-white hover:text-[#d4af37]"
                  >
                    <span>{cat.title}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isExpanded ? "rotate-180 text-[#d4af37]" : "text-gray-400"
                      }`}
                    />
                  </button>
                  {isExpanded && (
                    <div className="mt-2 pl-3 space-y-2">
                      {cat.submenu.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center space-x-3 py-2 text-sm text-gray-300 hover:text-[#d4af37]"
                        >
                          <item.icon className="w-4 h-4 text-[#d4af37]" />
                          <div>
                            <div className="font-semibold">{item.name}</div>
                            <div className="text-xs text-gray-500">{item.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-3 text-sm font-bold text-gray-300 hover:text-white"
            >
              Client Login
            </Link>
            <Link
              href="/book-consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-4 rounded-xl bg-gradient-to-r from-[#b8860b] to-[#d4af37] text-black font-black tracking-wide shadow-lg"
            >
              Book Consultation →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
