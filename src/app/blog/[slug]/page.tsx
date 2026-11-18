import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2, Terminal, CheckCircle } from "lucide-react";

const blogDatabase: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    readTime: string;
    author: string;
    authorRole: string;
    content: string[];
    takeaways: string[];
  }
> = {
  "scaling-nextjs-to-10-million-monthly-requests": {
    title: "Scaling Next.js 14 to 10M+ Requests: Edge Caching & ISR Strategies",
    category: "Architecture",
    date: "November 14, 2026",
    readTime: "7 min read",
    author: "Dr. Elena Rostova",
    authorRole: "VP of Systems Engineering",
    content: [
      "When scaling an enterprise Next.js application beyond a million users, conventional SSR (Server-Side Rendering) quickly becomes a severe database bottleneck. Every incoming HTTP request initiates an upstream query against your relational database, causing latency spikes and connection pool exhaustion.",
      "In this architecture blueprint, we analyze the implementation of On-Demand Incremental Static Regeneration (ISR) combined with Cloudflare Worker cache tags. By decoupling database reads from client page requests, 99.2% of all static and semi-dynamic pages are delivered directly from worldwide edge caches in under 50ms.",
      "Furthermore, we examine how Next.js 14 server actions and revalidateTag() can be integrated into PostgreSQL change-data-capture (CDC) pipelines. Whenever a record mutates in the primary DB, a lightweight webhook selectively purges only that specific tag across the global CDN, guaranteeing sub-second data freshness without compromising TTFB.",
    ],
    takeaways: [
      "Decouple page hydration from primary database read pools using tag-based ISR.",
      "Place a memory-tier Redis cache between server actions and the transactional database.",
      "Use Cloudflare Cache-Control headers with stale-while-revalidate for instantaneous edge rendering.",
    ],
  },
  "zero-trust-database-replication-patterns-in-go": {
    title: "Zero-Trust Database Replication Patterns Using Go and PostgreSQL",
    category: "DevOps",
    date: "November 08, 2026",
    readTime: "9 min read",
    author: "Marcus Vance",
    authorRole: "Technical Director",
    content: [
      "High availability in modern cloud environments requires active-active or active-passive database clustering that can survive complete availability zone failures. Relying solely on managed cloud vendor failovers often leads to 60-90 seconds of unexpected downtime during split-brain scenarios.",
      "By engineering custom replication brokers in Go using PostgreSQL's native logical replication protocol (pgoutput), we achieve continuous microsecond streaming of transaction WAL logs with zero data loss.",
      "This architecture pattern validates cryptographic signatures on every change event, ensuring zero-trust verification across heterogeneous multi-cloud regions.",
    ],
    takeaways: [
      "Logical replication provides superior resilience over physical block-level streaming.",
      "Go microservices handle WAL stream parsing with negligible CPU overhead.",
      "Automated health probes trigger deterministic failover promotion in under 800ms.",
    ],
  },
  "autonomous-ai-agents-in-production-without-hallucinations": {
    title: "Architecting Autonomous AI Agents in Production Without Hallucinations",
    category: "AI",
    date: "October 29, 2026",
    readTime: "8 min read",
    author: "Dr. Elena Rostova",
    authorRole: "VP of Systems Engineering",
    content: [
      "The primary failure mode of generative AI in enterprise production is uncontrolled hallucination. When an LLM generates invalid parameters for internal API calls, it can corrupt database records or trigger unauthorized transactions.",
      "We implement a deterministic JSON-schema contract layer that strictly sandboxes agent tool execution. Prompts are treated as unverified user input; outputs are validated against strict Zod/Pydantic schemas before any database mutation is allowed.",
      "Additionally, retrieval augmented generation is paired with reciprocal rank fusion (RRF) across Pinecone vector embeddings and BM25 full-text search, eliminating context drift.",
    ],
    takeaways: [
      "Never execute raw LLM function arguments without strict schema deserialization.",
      "Implement deterministic state machines to limit the agent's action space.",
      "Use hybrid keyword and semantic vector search to eliminate document recall drift.",
    ],
  },
  "from-monolith-to-distributed-kubernetes-without-downtime": {
    title: "Migrating an Enterprise Monolith to Kubernetes Without a Second of Downtime",
    category: "Architecture",
    date: "October 17, 2026",
    readTime: "11 min read",
    author: "Aks Sangwan",
    authorRole: "Administrative & Operations Director",
    content: [
      "Migrating 450,000 active users from an aging monolithic server to a containerized Kubernetes cluster is one of the highest-risk engineering maneuvers an enterprise can undertake.",
      "Using the Strangler Fig pattern, our engineering team introduced an Nginx reverse proxy layer at the edge. We systematically carved out individual domain services (Authentication, Billing, Invoicing) into isolated Docker pods while keeping the legacy monolith running in parallel.",
      "Over an 8-week phased migration window, zero downtime was experienced by end-users, and infrastructure operating costs were reduced by 42% due to dynamic horizontal pod autoscaling.",
    ],
    takeaways: [
      "Route traffic conditionally at the load balancer level during phased migration.",
      "Maintain dual-write database synchronization until service decoupling is verified.",
      "Horizontal Pod Autoscalers (HPA) reduce idle server overhead by over 40%.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(blogDatabase).map((slug) => ({ slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogDatabase[params.slug] || blogDatabase["scaling-nextjs-to-10-million-monthly-requests"];

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[#d4af37] mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Engineering Insights
        </Link>

        {/* Article Meta */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 bg-gray-900 text-[#d4af37] rounded-full border border-gray-800">
              {post.category}
            </span>
            <span className="text-xs text-gray-500 flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              {post.date}
            </span>
            <span className="text-xs text-gray-500 flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-[1.15] mb-6">
            {post.title}
          </h1>

          <div className="flex items-center space-x-4 p-4 bg-[#0b0f17] border border-gray-800 rounded-2xl">
            <div className="w-12 h-12 bg-gray-900 border border-[#d4af37]/30 rounded-full flex items-center justify-center text-[#d4af37] font-black text-base">
              {post.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <div className="text-sm font-bold text-white">{post.author}</div>
              <div className="text-xs text-gray-400">{post.authorRole}</div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-6 text-gray-300 text-base leading-relaxed border-t border-gray-800 pt-8 mb-16 font-normal">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          {/* Key Takeaways Card */}
          <div className="my-10 p-8 bg-[#0b0f17] border border-[#d4af37]/40 rounded-3xl">
            <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest text-[#d4af37] mb-4">
              <CheckCircle className="w-4 h-4" />
              <span>Key Architectural Takeaways</span>
            </div>
            <ul className="space-y-3">
              {post.takeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start text-sm text-gray-200">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] mr-3 mt-1.5 shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 lg:p-12 bg-[#0c121e] border border-gray-800 rounded-[2.5rem] text-center">
          <h3 className="text-2xl font-black text-white mb-2">
            Interested in scaling your infrastructure?
          </h3>
          <p className="text-xs text-gray-400 mb-6">
            Connect with our engineering leads to review your systems architecture.
          </p>
          <Link
            href="/book-consultation"
            className="inline-flex items-center px-8 py-3.5 bg-[#d4af37] text-black font-black text-xs uppercase tracking-wider rounded-xl hover:bg-[#e4c04e] transition-all"
          >
            Book Architectural Consultation →
          </Link>
        </div>
      </div>
    </div>
  );
}
