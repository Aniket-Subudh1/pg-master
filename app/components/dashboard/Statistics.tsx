"use client";

import { useEffect, useState } from "react";

interface PlatformStats {
  totalOwners: number;
  totalTenants: number;
  totalProperties: number;
  totalComplaints: number;
  pendingBusinessCount: number;
  newTenantsThisWeek: number;
}

const plans = [
  {
    title: "Pro Plan",
    desc: "Unlock advanced analytics, staff management & more.",
    badge: "₹999 /mo",
  },
];

export default function Statistics() {
  const [stats, setStats] = useState<PlatformStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/stats", { credentials: "include" })
      .then((r) => r.json())
      .then((data) => setStats(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const pending = loading ? "—" : String(stats?.pendingBusinessCount ?? 0);
  const complaints = loading ? "—" : String(stats?.totalComplaints ?? 0);
  const newTenants = loading ? "—" : String(stats?.newTenantsThisWeek ?? 0);

  return (
    <div className="w-[260px] flex-shrink-0">
      <h2
        className="font-fustat font-bold text-[17px] text-[#0F0F0F] mb-4"
        style={{ letterSpacing: "-0.5px" }}
      >
        Statistics
      </h2>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div
          className="rounded-2xl p-3 flex flex-col justify-between min-h-[80px]"
          style={{
            background: "#ffffff",
            border: "1px solid #E5E7EB",
            boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
          }}
        >
          <p
            className="font-fustat font-bold text-[20px] text-[#0F0F0F]"
            style={{ letterSpacing: "-0.5px" }}
          >
            {pending}
          </p>
          <div>
            <p className="font-inter text-[11px] font-semibold text-[#0F0F0F]">
              Pending KYC
            </p>
            <p className="font-inter text-[10px] text-[#9CA3AF]">verifications</p>
          </div>
        </div>

        <div
          className="rounded-2xl p-3 flex flex-col justify-between min-h-[80px]"
          style={{
            background: "#ffffff",
            border: "1px solid #E5E7EB",
            boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
          }}
        >
          <p
            className="font-fustat font-bold text-[20px] text-[#0F0F0F]"
            style={{ letterSpacing: "-0.5px" }}
          >
            {complaints}
          </p>
          <div>
            <p className="font-inter text-[11px] font-semibold text-[#0F0F0F]">
              Complaints
            </p>
            <p className="font-inter text-[10px] text-[#9CA3AF]">total on platform</p>
          </div>
        </div>
      </div>

      <div
        className="rounded-2xl p-3 flex items-center justify-between mb-3"
        style={{
          background: "#0F0F0F",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <div>
          <p
            className="font-fustat font-bold text-[24px] text-white"
            style={{ letterSpacing: "-0.5px" }}
          >
            {newTenants}
          </p>
          <p className="font-inter text-[11px] font-semibold text-white/80">
            New tenants
          </p>
          <p className="font-inter text-[10px] text-white/40">joined this week</p>
        </div>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #0F8BFF 0%, #0DCFF5 100%)",
            boxShadow: "0 4px 10px rgba(15,139,255,0.4)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M17 21V19C17 16.791 15.209 15 13 15H5C2.791 15 1 16.791 1 19V21M9 11C11.209 11 13 9.209 13 7C13 4.791 11.209 3 9 3C6.791 3 5 4.791 5 7C5 9.209 6.791 11 9 11Z"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div
        className="rounded-2xl p-4 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #EFF6FF 0%, #F0FDFF 100%)",
          border: "1px solid #BFDBFE",
        }}
      >
  
        <span
          className="inline-block font-inter text-[10.5px] font-bold text-white px-2.5 py-0.5 rounded-full mb-2"
          style={{
            background: "linear-gradient(135deg, #0F8BFF 0%, #0DCFF5 100%)",
            boxShadow: "0 2px 6px rgba(15,139,255,0.35)",
          }}
        >
          {plans[0].badge}
        </span>
        <p
          className="font-fustat font-bold text-[14px] text-[#0F0F0F] mb-1"
          style={{ letterSpacing: "-0.3px" }}
        >
          {plans[0].title}
        </p>
        <p className="font-inter text-[11px] text-[#5D5B63] leading-[1.5]">
          {plans[0].desc}
        </p>
      </div>
    </div>
);
}
