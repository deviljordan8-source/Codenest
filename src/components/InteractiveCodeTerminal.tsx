"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check, Code, Cpu, Server } from "lucide-react";

const codeSnippets: Record<
  string,
  { label: string; language: string; icon: any; code: string }
> = {
  nextjs: {
    label: "Next.js 14 Edge Cache",
    language: "typescript",
    icon: Code,
    code: `// src/app/api/systems/route.ts
import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const revalidate = 60; // 60s tag-based ISR

export async function GET(request: Request) {
  const telemetry = await fetch('https://telemetry.codenest.dev/stats', {
    next: { tags: ['systems-cache', 'enterprise-uptime'] },
    headers: { 'Authorization': \`Bearer \${process.env.INTERNAL_SECRET}\` }
  });
  
  return NextResponse.json(await telemetry.json(), {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=600',
      'X-CodeNest-Edge-Latency': '12ms'
    }
  });
}`,
  },
  golang: {
    label: "Go High-Concurrency API",
    language: "go",
    icon: Server,
    code: `// cmd/api/main.go
package main

import (
  "context"
  "github.com/codenest/systems/cache"
  "github.com/gin-gonic/gin"
  "net/http"
)

func HandleIngest(c *gin.Context) {
  ctx := context.Background()
  payload := c.MustGet("verified_payload").([]byte)
  
  // Asynchronous zero-loss stream ingestion
  go cache.RedisCluster.XAdd(ctx, &redis.XAddArgs{
    Stream: "orders:stream",
    Values: map[string]interface{}{"data": payload},
  })

  c.JSON(http.StatusOK, gin.H{"status": "queued", "latency_us": 420})
}`,
  },
  python: {
    label: "Python AI Agent RAG",
    language: "python",
    icon: Cpu,
    code: `# internal/ai/agent.py
from fastapi import FastAPI
from langchain_community.vectorstores import Pinecone
from pydantic import BaseModel, Field

app = FastAPI(title="CodeNest AI Core")

class DiagnosticQuery(BaseModel):
    query: str = Field(..., max_length=500)
    tenant_id: str

@app.post("/api/v1/agent/triage")
async def triage_incident(request: DiagnosticQuery):
    # Deterministic hybrid search across embeddings & sparse tokens
    context = await vector_store.asimilarity_search(
        request.query, 
        filter={"tenant": request.tenant_id}, 
        k=4
    )
    return {"resolved": True, "sources": [doc.metadata for doc in context]}`,
  },
};

export default function InteractiveCodeTerminal() {
  const [activeTab, setActiveTab] = useState("nextjs");
  const [copied, setCopied] = useState(false);

  const current = codeSnippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#050811] border border-gray-800 rounded-[2.5rem] p-6 lg:p-8 shadow-2xl relative overflow-hidden">
      {/* Terminal Titlebar */}
      <div className="flex flex-wrap items-center justify-between pb-6 mb-6 border-b border-gray-800 gap-4">
        {/* Window dots */}
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-xs font-mono text-gray-500 ml-3">codenest-core-engine</span>
        </div>

        {/* Tab Switchers */}
        <div className="flex items-center bg-black/60 p-1 rounded-xl border border-gray-800">
          {Object.entries(codeSnippets).map(([key, item]) => {
            const Icon = item.icon;
            const isSelected = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-[#d4af37] text-black shadow-md font-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="flex items-center space-x-1.5 text-xs font-bold text-gray-400 hover:text-white px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Spec</span>
            </>
          )}
        </button>
      </div>

      {/* Code Display */}
      <div className="overflow-x-auto font-mono text-xs sm:text-sm text-gray-300 leading-relaxed p-4 bg-black/80 rounded-2xl border border-gray-900">
        <pre className="whitespace-pre">{current.code}</pre>
      </div>

      {/* Footer Specs */}
      <div className="mt-4 pt-4 border-t border-gray-900 flex flex-wrap justify-between items-center text-[11px] font-mono text-gray-500">
        <div>Architecture verified: Strict Typing • Zero Memory Leaks • OWASP Top 10 Aligned</div>
        <div className="text-[#d4af37]">CodeNest Standards v2.6</div>
      </div>
    </div>
  );
}
