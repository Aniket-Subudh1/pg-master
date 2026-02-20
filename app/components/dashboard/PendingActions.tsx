"use client";

import { useEffect, useState } from "react";

interface PendingBusiness {
  id: number;
  businessName: string;
  businessType: string;
  aadhaarCard: string;
  panCard: string;
  companyDocument: string | null;
  propertyOwnerProfile: {
    Profession: string | null;
    pinCode: string;
    State: string | null;
    profileImage: string | null;
    user: { fullName: string };
  };
}

type ActionState = "idle" | "approving" | "rejecting" | "done";

export default function PendingActions() {
  const [items, setItems] = useState<PendingBusiness[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionState, setActionState] = useState<Record<number, ActionState>>({});

  const refresh = () => {
    setLoading(true);
    fetch("/api/admin/pending", { credentials: "include" })
      .then((r) => r.json())
      .then((data) => setItems(Array.isArray(data) ? data : []))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useEffect(() => { refresh(); }, []);

  const approve = async (id: number) => {
    setActionState((p) => ({ ...p, [id]: "approving" }));
    await fetch(`/api/admin/businesses/${id}/approve`, {
      method: "PUT",
      credentials: "include",
    });
    setActionState((p) => ({ ...p, [id]: "done" }));
    setItems((prev) => prev.filter((b) => b.id !== id));
  };

  const reject = async (id: number) => {
    setActionState((p) => ({ ...p, [id]: "rejecting" }));
    await fetch(`/api/admin/businesses/${id}/reject`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: "" }),
    });
    setActionState((p) => ({ ...p, [id]: "done" }));
    setItems((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="flex-1 min-w-0">
      <h2
        className="font-fustat font-bold text-[17px] text-[#0F0F0F] mb-4"
        style={{ letterSpacing: "-0.5px" }}
      >
        Pending Verifications
      </h2>

      {loading && (
        <p className="font-inter text-[13px] text-[#9CA3AF]">Loading…</p>
      )}

      {!loading && items.length === 0 && (
        <div
          className="rounded-2xl px-5 py-8 flex flex-col items-center justify-center"
          style={{ background: "#ffffff", border: "1px solid #E5E7EB" }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="mb-2 opacity-30">
            <path
              d="M9 12L11 14L15 10M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
              stroke="#0F0F0F"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-inter text-[13px] text-[#9CA3AF]">All caught up – no pending verifications!</p>
        </div>
      )}

      <div className="flex flex-col gap-3">
        {items.map((biz) => {
          const state = actionState[biz.id] ?? "idle";
          const busy = state === "approving" || state === "rejecting";

          return (
            <div
              key={biz.id}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-200 hover:shadow-md"
              style={{
                background: "#ffffff",
                border: "1px solid #E5E7EB",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              }}
            >
              {/* Left accent */}
              <div className="w-1 h-10 rounded-full flex-shrink-0" style={{ background: "#F59E0B" }} />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-inter text-[13px] font-medium text-[#0F0F0F] truncate">
                  {biz.businessName}
                </p>
                <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                  <span className="text-[10px] font-inter font-medium px-1.5 py-0.5 rounded-md bg-yellow-100 text-yellow-700">
                    {biz.businessType}
                  </span>
                  <span className="text-[10px] font-inter text-[#9CA3AF]">
                    {biz.propertyOwnerProfile.user.fullName}
                  </span>
                  {biz.propertyOwnerProfile.State && (
                    <span className="text-[10px] font-inter text-[#9CA3AF]">
                      · {biz.propertyOwnerProfile.State}
                    </span>
                  )}
                </div>
              </div>

              {/* Approve / Reject buttons */}
              <div className="flex gap-1.5 flex-shrink-0">
                <button
                  disabled={busy}
                  onClick={() => approve(biz.id)}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-inter font-medium text-white transition-all hover:opacity-90 disabled:opacity-50"
                  style={{ background: "#059669" }}
                >
                  {state === "approving" ? "…" : "Approve"}
                </button>
                <button
                  disabled={busy}
                  onClick={() => reject(biz.id)}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-inter font-medium text-white transition-all hover:opacity-90 disabled:opacity-50"
                  style={{ background: "#DC2626" }}
                >
                  {state === "rejecting" ? "…" : "Reject"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
