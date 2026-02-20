"use client";

import { BedDouble, CheckCircle2, DoorOpen, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface PropertySummary {
  id: number;
  name: string;
  pinCode: string;
  ownerName: string;
  totalRooms: number;
  totalBeds: number;
  occupiedBeds: number;
  tenantCount: number;
  occupancyPct: number;
}

interface TenantDetail {
  id: number;
  rentAmount: string;
  securityDeposit: string;
  joinedAt: string;
  tenent: {
    fullName: string;
    email: string | null;
    phoneNumber: string;
    tenentProfile: {
      profileImage: string | null;
      JoiningDate: string | null;
      moveOutDate: string | null;
    } | null;
  };
}

interface RoomDetail {
  id: number;
  roomNumber: string;
  floorNumber: number;
  totalBeds: number;
  occupiedBeds: number;
  rentPerBed: string;
  sharingType: string;
  amenity: string[];
  images: { id: number; url: string }[];
  tenants: TenantDetail[];
}

interface PropertyDetail {
  id: number;
  name: string;
  pinCode: string;
  owner: { fullName: string; email: string | null; phoneNumber: string };
  rooms: RoomDetail[];
}


const GRADIENTS = [
  { bg: "linear-gradient(135deg,#7C3AED 0%,#9B59E8 100%)", bar: "#C4B5FD", avatar: "#a78bfa", tag: "bg-purple-200/25 text-purple-100" },
  { bg: "linear-gradient(135deg,#0891B2 0%,#06B6D4 100%)", bar: "#A5F3FC", avatar: "#67e8f9", tag: "bg-cyan-200/25 text-cyan-100" },
  { bg: "linear-gradient(135deg,#EA580C 0%,#F97316 100%)", bar: "#FED7AA", avatar: "#fb923c", tag: "bg-orange-200/25 text-orange-100" },
  { bg: "linear-gradient(135deg,#059669 0%,#10B981 100%)", bar: "#A7F3D0", avatar: "#34d399", tag: "bg-emerald-200/25 text-emerald-100" },
  { bg: "linear-gradient(135deg,#DB2777 0%,#EC4899 100%)", bar: "#FBCFE8", avatar: "#f472b6", tag: "bg-pink-200/25 text-pink-100" },
  { bg: "linear-gradient(135deg,#D97706 0%,#F59E0B 100%)", bar: "#FDE68A", avatar: "#fbbf24", tag: "bg-yellow-200/25 text-yellow-100" },
];


function Bar({ v, color }: { v: number; color: string }) {
  return (
    <div className="w-full bg-white/20 rounded-full h-[3px] mt-2">
      <div className="h-[3px] rounded-full" style={{ width: `${Math.min(v, 100)}%`, background: color }} />
    </div>
  );
}

function Avatars({ count, color }: { count: number; color: string }) {
  const letters = Array.from({ length: Math.min(count, 4) }, (_, i) =>
    String.fromCharCode(65 + (i % 26))
  );
  return (
    <div className="flex items-center gap-1">
      <div className="flex -space-x-1.5">
        {letters.map((l, i) => (
          <div
            key={i}
            className="w-5 h-5 rounded-full border-[1.5px] border-white flex items-center justify-center text-[8px] font-bold text-white"
            style={{ background: color, opacity: 1 - i * 0.15 }}
          >
            {l}
          </div>
        ))}
      </div>
      {count > 4 && <span className="text-[9px] text-white/75 ml-0.5">+{count - 4}</span>}
    </div>
  );
}

function OccBadge({ pct, tag }: { pct: number; tag: string }) {
  const label = pct >= 80 ? "High" : pct >= 50 ? "Medium" : "Low";
  return (
    <span className={`text-[8.5px] font-inter font-semibold px-1.5 py-0.5 rounded-full ${tag}`}>
      {label}
    </span>
  );
}


function PropertyCard({
  prop,
  palette,
  onClick,
}: {
  prop: PropertySummary;
  palette: (typeof GRADIENTS)[0];
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="relative flex-shrink-0 rounded-2xl p-4 cursor-pointer overflow-hidden select-none"
      style={{
        width: 210,
        minWidth: 210,
        background: palette.bg,
        boxShadow: "0 6px 20px rgba(0,0,0,0.14)",
        transition: "transform 0.18s, box-shadow 0.18s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 28px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.14)";
      }}
    >
      {/* Top row */}
      <div className="flex items-center justify-between mb-3">
        {prop.tenantCount > 0 ? (
          <Avatars count={prop.tenantCount} color={palette.avatar} />
        ) : (
          <span className={`text-[8px] font-medium px-1.5 py-0.5 rounded-full ${palette.tag}`}>
            No tenants
          </span>
        )}
        <OccBadge pct={prop.occupancyPct} tag={palette.tag} />
      </div>

      {/* Name */}
      <p
        className="font-fustat font-bold text-white text-[14px] leading-snug mb-0.5 truncate"
        style={{ letterSpacing: "-0.3px" }}
      >
        {prop.name}
      </p>

      {/* Owner · pin */}
      <p className="font-inter text-[9.5px] text-white/60 truncate mb-3">
        {prop.ownerName} · {prop.pinCode}
      </p>

      {/* Stats */}
      <div className="flex items-center justify-between">
        <p className="font-inter text-[9.5px] text-white/80">
          {prop.occupiedBeds}/{prop.totalBeds} beds
        </p>
        <span className={`text-[8px] font-medium px-1.5 py-0.5 rounded-full ${palette.tag}`}>
          {prop.totalRooms} room{prop.totalRooms !== 1 ? "s" : ""}
        </span>
      </div>
      <Bar v={prop.occupancyPct} color={palette.bar} />

      {/* Deco blobs */}
      <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full pointer-events-none" style={{ background: "rgba(255,255,255,0.07)" }} />
      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full pointer-events-none" style={{ background: "rgba(255,255,255,0.06)" }} />
    </div>
  );
}

type TabKey = "overview" | "rooms" | "tenants";

function DetailPanel({
  propertyId,
  palette,
  onClose,
}: {
  propertyId: number;
  palette: (typeof GRADIENTS)[0];
  onClose: () => void;
}) {
  const [detail, setDetail] = useState<PropertyDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<TabKey>("overview");

  useEffect(() => {
    setLoading(true);
    setDetail(null);
    setTab("overview");
    fetch(`/api/admin/properties/${propertyId}`, { credentials: "include" })
      .then((r) => r.json())
      .then(setDetail)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [propertyId]);

  const allTenants: { room: RoomDetail; tenant: TenantDetail }[] =
    (detail?.rooms ?? []).flatMap((r) => r.tenants.map((t) => ({ room: r, tenant: t })));

  const totalBeds = detail?.rooms.reduce((s, r) => s + r.totalBeds, 0) ?? 0;
  const occupiedBeds = detail?.rooms.reduce((s, r) => s + r.occupiedBeds, 0) ?? 0;

  const TABS: { key: TabKey; label: string; count?: number }[] = [
    { key: "overview", label: "Overview" },
    { key: "rooms", label: "Rooms", count: detail?.rooms.length },
    { key: "tenants", label: "Tenants", count: allTenants.length },
  ];

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/25 backdrop-blur-[1px]" onClick={onClose} />
      <div
        className="fixed right-0 top-0 h-full z-50 flex flex-col"
        style={{ width: 440, background: "#fff", boxShadow: "-6px 0 40px rgba(0,0,0,0.1)" }}
      >
        <div className="relative flex-shrink-0 px-6 pt-5 pb-4" style={{ background: palette.bg }}>
          <button
            onClick={onClose}
            className="absolute top-4 right-5 w-7 h-7 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 1L11 11M11 1L1 11" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>

          <p className="font-inter text-[10px] text-white/60 mb-0.5">Property</p>
          <h2 className="font-fustat font-bold text-[20px] text-white leading-tight" style={{ letterSpacing: "-0.6px" }}>
            {loading ? "Loading…" : (detail?.name ?? "—")}
          </h2>
          {detail && (
            <p className="font-inter text-[10.5px] text-white/65 mt-0.5">
              Pin {detail.pinCode}
            </p>
          )}
          {detail && (
            <div className="flex gap-4 mt-3">
              {[
                { label: "Rooms", val: detail.rooms.length },
                { label: "Beds", val: `${occupiedBeds}/${totalBeds}` },
                { label: "Tenants", val: allTenants.length },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-fustat font-bold text-[16px] text-white">{s.val}</p>
                  <p className="font-inter text-[9px] text-white/60">{s.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        {detail && (
          <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3 border-b border-gray-100 bg-gray-50">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-[13px] flex-shrink-0"
              style={{ background: palette.bg }}
            >
              {detail.owner.fullName[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-inter text-[12px] font-semibold text-[#0F0F0F] truncate">{detail.owner.fullName}</p>
              <p className="font-inter text-[10px] text-[#9CA3AF] truncate">
                {detail.owner.phoneNumber}{detail.owner.email ? ` · ${detail.owner.email}` : ""}
              </p>
            </div>
            <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 flex-shrink-0">Owner</span>
          </div>
        )}
        <div className="flex-shrink-0 flex border-b border-gray-100 px-5">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`relative flex items-center gap-1.5 py-3 mr-5 font-inter text-[12px] font-medium transition-colors ${
                tab === t.key ? "text-[#0F0F0F]" : "text-[#9CA3AF] hover:text-[#5D5B63]"
              }`}
            >
              {t.label}
              {t.count !== undefined && (
                <span
                  className={`text-[9px] px-1.5 py-0.5 rounded-full font-semibold ${
                    tab === t.key ? "bg-[#0F0F0F] text-white" : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {t.count}
                </span>
              )}
              {tab === t.key && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#0F8BFF]" />
              )}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto">
          {loading && (
            <div className="flex flex-col gap-3 p-5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-20 rounded-2xl animate-pulse bg-gray-100" />
              ))}
            </div>
          )}

          {!loading && detail && tab === "overview" && (
            <div className="p-5 flex flex-col gap-4">
              <div className="rounded-2xl p-4" style={{ border: "1px solid #E5E7EB" }}>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-inter text-[12px] font-semibold text-[#0F0F0F]">Occupancy</p>
                  <span className="font-fustat font-bold text-[16px] text-[#0F0F0F]">
                    {totalBeds > 0 ? Math.round((occupiedBeds / totalBeds) * 100) : 0}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-700"
                    style={{
                      width: `${totalBeds > 0 ? Math.round((occupiedBeds / totalBeds) * 100) : 0}%`,
                      background: palette.bg,
                    }}
                  />
                </div>
                <p className="font-inter text-[10px] text-[#9CA3AF] mt-1.5">{occupiedBeds} of {totalBeds} beds occupied</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Total Rooms", val: detail.rooms.length, icon: <DoorOpen size={17} className="text-gray-400" /> },
                  { label: "Active Tenants", val: allTenants.length, icon: <Users size={17} className="text-gray-400" /> },
                  { label: "Vacant Beds", val: totalBeds - occupiedBeds, icon: <BedDouble size={17} className="text-gray-400" /> },
                  { label: "Occupied Beds", val: occupiedBeds, icon: <CheckCircle2 size={17} className="text-gray-400" /> },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl p-3.5 flex flex-col gap-1"
                    style={{ border: "1px solid #F3F4F6", background: "#FAFAFA" }}
                  >
                    <span>{stat.icon}</span>
                    <p className="font-fustat font-bold text-[20px] text-[#0F0F0F]" style={{ letterSpacing: "-0.5px" }}>
                      {stat.val}
                    </p>
                    <p className="font-inter text-[10px] text-[#9CA3AF]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ROOMS TAB */}
          {!loading && detail && tab === "rooms" && (
            <div className="p-5 flex flex-col gap-3">
              {detail.rooms.length === 0 && (
                <p className="font-inter text-[13px] text-[#9CA3AF] text-center mt-10">No rooms added yet.</p>
              )}
              {detail.rooms.map((room) => (
                <div
                  key={room.id}
                  className="rounded-2xl overflow-hidden"
                  style={{ border: "1px solid #E5E7EB" }}
                >
                  {/* Room header */}
                  <div className="px-4 py-2.5 flex items-center justify-between bg-gray-50 border-b border-gray-100">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-fustat font-bold text-[13px] text-[#0F0F0F]">Room {room.roomNumber}</span>
                      <span className="text-[8.5px] font-medium px-1.5 py-0.5 rounded-md bg-gray-200 text-gray-600">Floor {room.floorNumber}</span>
                      <span className="text-[8.5px] font-medium px-1.5 py-0.5 rounded-md bg-blue-50 text-blue-600">{room.sharingType}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`text-[8.5px] font-medium px-1.5 py-0.5 rounded-md ${
                          room.occupiedBeds === room.totalBeds
                            ? "bg-green-50 text-green-600"
                            : room.occupiedBeds === 0
                            ? "bg-red-50 text-red-500"
                            : "bg-yellow-50 text-yellow-600"
                        }`}
                      >
                        {room.occupiedBeds}/{room.totalBeds}
                      </span>
                    </div>
                  </div>

                  {/* Rent + amenities */}
                  <div className="px-4 py-2 flex items-center gap-2 flex-wrap border-b border-gray-50">
                    <p className="font-inter text-[11.5px] font-semibold text-[#0F0F0F]">
                      ₹{Number(room.rentPerBed).toLocaleString("en-IN")}
                      <span className="text-[9px] font-normal text-[#9CA3AF] ml-0.5">/bed</span>
                    </p>
                    {room.amenity.slice(0, 4).map((a) => (
                      <span key={a} className="text-[8.5px] px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-600">{a}</span>
                    ))}
                    {room.amenity.length > 4 && (
                      <span className="text-[8.5px] px-1.5 py-0.5 rounded-md bg-gray-100 text-gray-500">+{room.amenity.length - 4}</span>
                    )}
                  </div>

                  {/* Tenants in this room */}
                  {room.tenants.length === 0 ? (
                    <div className="px-4 py-3 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                      <p className="font-inter text-[11px] text-[#B0B0BE]">Vacant</p>
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-50">
                      {room.tenants.map((t) => (
                        <div key={t.id} className="px-4 py-2.5 flex items-center gap-2.5">
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                            style={{ background: palette.bg }}
                          >
                            {t.tenent.fullName[0]}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-inter text-[11.5px] font-semibold text-[#0F0F0F] truncate">{t.tenent.fullName}</p>
                            <p className="font-inter text-[9.5px] text-[#9CA3AF] truncate">{t.tenent.phoneNumber}</p>
                          </div>
                          <p className="font-inter text-[11px] font-semibold text-[#0F0F0F] flex-shrink-0">
                            ₹{Number(t.rentAmount).toLocaleString("en-IN")}
                            <span className="text-[9px] font-normal text-[#9CA3AF] ml-0.5">/mo</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* TENANTS TAB */}
          {!loading && detail && tab === "tenants" && (
            <div className="p-5">
              {allTenants.length === 0 && (
                <p className="font-inter text-[13px] text-[#9CA3AF] text-center mt-10">No active tenants.</p>
              )}
              <div className="flex flex-col gap-2.5">
                {allTenants.map(({ room, tenant }) => (
                  <div
                    key={tenant.id}
                    className="rounded-2xl p-3.5 flex items-center gap-3"
                    style={{ border: "1px solid #E5E7EB", background: "#FAFAFA" }}
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-[14px] flex-shrink-0"
                      style={{ background: palette.bg }}
                    >
                      {tenant.tenent.fullName[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-inter text-[12.5px] font-semibold text-[#0F0F0F] truncate">{tenant.tenent.fullName}</p>
                      <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        <span className="font-inter text-[10px] text-[#9CA3AF]">{tenant.tenent.phoneNumber}</span>
                        <span className="text-[8.5px] px-1.5 py-0.5 rounded-md bg-blue-50 text-blue-600 font-medium">
                          Room {room.roomNumber}
                        </span>
                        {tenant.tenent.tenentProfile?.JoiningDate && (
                          <span className="font-inter text-[9px] text-[#9CA3AF]">
                            Since {new Date(tenant.tenent.tenentProfile.JoiningDate).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-fustat font-bold text-[15px] text-[#0F0F0F]">
                        ₹{Number(tenant.rentAmount).toLocaleString("en-IN")}
                      </p>
                      <p className="font-inter text-[9px] text-[#9CA3AF]">per month</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default function PropertyCards() {
  const [properties, setProperties] = useState<PropertySummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/admin/properties", { credentials: "include" })
      .then((r) => r.json())
      .then((data) => setProperties(Array.isArray(data) ? data : []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -460 : 460, behavior: "smooth" });
  };

  const selectedPalette = selectedId !== null
    ? GRADIENTS[properties.findIndex((p) => p.id === selectedId) % GRADIENTS.length]
    : GRADIENTS[0];

  if (loading) {
    return (
      <div className="flex gap-4 mb-6 overflow-hidden">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex-shrink-0 rounded-2xl animate-pulse bg-gray-200" style={{ width: 210, height: 130 }} />
        ))}
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="rounded-2xl px-6 py-6 mb-6 flex items-center justify-center" style={{ border: "1px solid #E5E7EB" }}>
        <p className="font-inter text-[13px] text-[#9CA3AF]">No properties registered yet.</p>
      </div>
    );
  }

  return (
    <>
      {/* â”€â”€ Section header â”€â”€ */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <h2 className="font-fustat font-bold text-[15px] text-[#0F0F0F]" style={{ letterSpacing: "-0.4px" }}>
            Properties
          </h2>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
            {properties.length}
          </span>
        </div>
        {/* Scroll arrows */}
        <div className="flex gap-1.5">
          {(["left", "right"] as const).map((dir) => (
            <button
              key={dir}
              onClick={() => scroll(dir)}
              className="w-7 h-7 rounded-full flex items-center justify-center transition-colors hover:bg-gray-200"
              style={{ background: "#F4F7FB", border: "1px solid #E5E7EB" }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                {dir === "left"
                  ? <path d="M6.5 1.5L3 5L6.5 8.5" stroke="#5D5B63" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  : <path d="M3.5 1.5L7 5L3.5 8.5" stroke="#5D5B63" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                }
              </svg>
            </button>
          ))}
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-3.5 overflow-x-auto pb-3 mb-5"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        } as React.CSSProperties}
      >
        {properties.map((prop, idx) => (
          <PropertyCard
            key={prop.id}
            prop={prop}
            palette={GRADIENTS[idx % GRADIENTS.length]}
            onClick={() => setSelectedId(prop.id)}
          />
        ))}
      </div>

      {selectedId !== null && (
        <DetailPanel
          propertyId={selectedId}
          palette={selectedPalette}
          onClose={() => setSelectedId(null)}
        />
      )}
    </>
  );
}
