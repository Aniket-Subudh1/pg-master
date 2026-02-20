"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

function AdminLoginContent() {
  const { login, isAuthenticated, authState } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const from = searchParams.get("from") || "/dashboard";
      router.replace(from);
    }
  }, [isAuthenticated, router, searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) return setError("Email is required");
    if (!password) return setError("Password is required");

    setLoading(true);
    const result = await login(email.trim().toLowerCase(), password);
    setLoading(false);

    if (result.success) {
      const from = searchParams.get("from") || "/dashboard";
      router.replace(from);
    } else {
      setError(result.error || "Login failed. Please check your credentials.");
    }
  };

  if (authState === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "linear-gradient(160deg, #B4DEFF 0%, #D3ECFF 55%, #EEF6FF 100%)" }}>
        <div className="w-8 h-8 border-2 border-[#0F8BFF] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8"
      style={{ background: "linear-gradient(160deg, #B4DEFF 0%, #D3ECFF 55%, #EEF6FF 100%)" }}
    >
      {/* Card */}
      <div
        className="w-full max-w-[960px] rounded-3xl overflow-hidden flex flex-col lg:flex-row"
        style={{ boxShadow: "0 24px 80px rgba(15,139,255,0.18), 0 4px 16px rgba(0,0,0,0.06)" }}
      >
        {/* ── Left panel ── */}
        <div
          className="lg:w-[47%] flex flex-col items-center justify-center p-10 lg:p-14 relative overflow-hidden text-center"
          style={{ background: "linear-gradient(150deg, #0F8BFF 0%, #0DCFF5 100%)" }}
        >
          {/* Decorative circles */}
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full" style={{ background: "rgba(255,255,255,0.09)" }} />
          <div className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }} />
          <div className="absolute bottom-24 -left-8 w-28 h-28 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }} />
          <div className="absolute top-1/2 right-[-30px] w-20 h-20 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }} />

          <div className="relative z-10 max-w-xs">
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <Image
                  src="/logo.png"
                  alt="PG Master"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <span className="font-fustat font-bold text-[22px] text-white tracking-tight">
                PG MASTER
              </span>
            </div>

            {/* Heading */}
            <h1
              className="font-fustat font-bold text-white leading-tight mb-4"
              style={{ fontSize: "clamp(32px, 4vw, 44px)", letterSpacing: "-1.5px" }}
            >
              Admin
              <br />
              Dashboard
            </h1>

            <p className="font-inter text-[15px] text-white/75 leading-relaxed mb-10">
              Manage properties, tenants, complaints and collections — all from one place.
            </p>

            {/* Feature list */}
            <div className="flex flex-col gap-3.5 text-left">
              {[
                "Full property & tenant management",
                "Real-time complaint tracking",
                "Rent collection & dues overview",
                "Business approval & admin controls",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: "rgba(255,255,255,0.22)" }}>
                    <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="font-inter text-[13.5px] text-white/85 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right panel (form) ── */}
        <div className="flex-1 bg-white flex flex-col justify-center px-8 py-10 lg:px-12 lg:py-14">
          {/* Mobile logo */}
          <div className="flex lg:hidden items-center gap-2.5 mb-8">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0F8BFF, #0DCFF5)" }}>
              <Image src="/logo.png" alt="PG Master" width={20} height={20} className="object-contain" />
            </div>
            <span className="font-fustat font-bold text-[17px] text-[#0F0F0F] tracking-tight">PG MASTER</span>
          </div>

          <div className="mb-8">
            <h2
              className="font-fustat font-bold text-[#0F0F0F] mb-2"
              style={{ fontSize: "clamp(24px, 3vw, 30px)", letterSpacing: "-0.8px" }}
            >
              Welcome back
            </h2>
            <p className="font-inter text-[14px] text-[#5D5B63]">
              Sign in to your admin account to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="font-inter text-[12.5px] font-semibold text-[#374151]">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@pgmaster.in"
                autoComplete="email"
                className="w-full px-4 py-3.5 rounded-2xl font-inter text-[14px] text-[#0F0F0F] placeholder-[#B0B3BF] outline-none transition-all duration-200"
                style={{ background: "#F8FAFC", border: "1.5px solid #E5E7EB" }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#0F8BFF";
                  e.currentTarget.style.background = "#ffffff";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(15,139,255,0.10)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#E5E7EB";
                  e.currentTarget.style.background = "#F8FAFC";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="font-inter text-[12.5px] font-semibold text-[#374151]">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="w-full px-4 py-3.5 pr-12 rounded-2xl font-inter text-[14px] text-[#0F0F0F] placeholder-[#B0B3BF] outline-none transition-all duration-200"
                  style={{ background: "#F8FAFC", border: "1.5px solid #E5E7EB" }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#0F8BFF";
                    e.currentTarget.style.background = "#ffffff";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(15,139,255,0.10)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#E5E7EB";
                    e.currentTarget.style.background = "#F8FAFC";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#5D5B63] transition-colors p-0.5"
                >
                  {showPassword ? (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20C6.48 20 2 14 2 12C2 10.58 2.78 8.99 4.06 7.56M9.9 4.24A9.12 9.12 0 0112 4C17.52 4 22 10 22 12C22 13.05 21.5 14.22 20.56 15.36M1 1L23 23" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                      <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-start gap-2.5 px-4 py-3 rounded-2xl" style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
                  <circle cx="12" cy="12" r="10" stroke="#DC2626" strokeWidth="1.8" />
                  <path d="M12 8v4M12 16h.01" stroke="#DC2626" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                <p className="font-inter text-[12.5px] text-red-600">{error}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-2xl font-inter text-[14.5px] font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1"
              style={{
                background: "linear-gradient(135deg, #0F8BFF 0%, #0DCFF5 100%)",
                boxShadow: "0 4px 14px rgba(15,139,255,0.40), 0 4px 4px rgba(255,255,255,0.30) inset",
              }}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing in…
                </>
              ) : (
                <>
                  Sign in to Dashboard
                  <div className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-[#F0F0F5]">
            <p className="font-inter text-[12px] text-center text-[#9CA3AF]">
              Admin access only.{" "}
              <Link href="/" className="text-[#0F8BFF] hover:underline font-medium">
                Return to home ↗
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center" style={{ background: "linear-gradient(160deg, #B4DEFF 0%, #D3ECFF 55%, #EEF6FF 100%)" }}>
        <div className="w-8 h-8 border-2 border-[#0F8BFF] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <AdminLoginContent />
    </Suspense>
  );
}
