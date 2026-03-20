"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";

type Status = "idle" | "loading" | "success" | "error";

export default function AccountDeletion() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!phone.trim()) {
      setErrorMessage("Registered phone number is required.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/account-deletion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, phone, email, reason }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#B4DEFF] via-[#D3ECFF] to-[#FFFFFF]">
      <Navbar />

      <main className="flex flex-col items-center pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[340px] sm:max-w-[700px] lg:max-w-[900px] w-full">

          {/* Header */}
          <h1
            className="font-fustat text-[#0F0F0F] font-bold text-[32px] leading-[36px] sm:text-[48px] sm:leading-[52px] lg:text-[64px] lg:leading-[70px] mb-4"
            style={{ letterSpacing: "-2px" }}
          >
            Account Deletion Request
          </h1>

          <p
            className="font-inter text-[#5D5B63] font-normal text-[14px] leading-[21px] sm:text-[16px] sm:leading-[24px] mb-8 sm:mb-12"
            style={{ letterSpacing: "-0.5px" }}
          >
            You can request permanent deletion of your PG Master account and all associated data using one of the methods below.
          </p>

          {/* Method 1 — Form */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0F8BFF] flex items-center justify-center">
                <span className="font-fustat text-white font-bold text-[14px] sm:text-[16px]">1</span>
              </div>
              <h2
                className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px]"
                style={{ letterSpacing: "-1px" }}
              >
                Submit a Request Form
              </h2>
            </div>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-6"
              style={{ letterSpacing: "-0.3px" }}
            >
              Fill out the form below to submit your account deletion request. We will verify your identity and process the request within 48 hours.
            </p>

            {/* Form */}
            {status === "success" ? (
              <div className="bg-[#E8F5E9] border border-[#A5D6A7] rounded-2xl p-6 sm:p-8 flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#C8E6C9] flex items-center justify-center mt-0.5">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="9" stroke="#22C55E" strokeWidth="1.5" />
                    <path d="M7 11l3 3 5-5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-inter text-[#1B5E20] font-semibold text-[15px] sm:text-[16px] mb-1" style={{ letterSpacing: "-0.3px" }}>
                    Request Submitted Successfully
                  </p>
                  <p className="font-inter text-[#2E7D32] font-normal text-[13px] sm:text-[14px] leading-[22px]" style={{ letterSpacing: "-0.2px" }}>
                    We have received your account deletion request. Our team will verify your identity and process it within 48 hours.
                  </p>
                </div>
              </div>
            ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="fullName"
                  className="block font-inter text-[#0F0F0F] font-medium text-[13px] leading-[20px] sm:text-[14px] sm:leading-[22px] mb-1.5"
                  style={{ letterSpacing: "-0.2px" }}
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your registered name"
                  className="w-full rounded-xl border border-[#D0E8FF] bg-white/70 px-4 py-3 font-inter text-[#0F0F0F] text-[14px] leading-[22px] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0F8BFF] focus:border-transparent transition-all"
                  style={{ letterSpacing: "-0.2px" }}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-inter text-[#0F0F0F] font-medium text-[13px] leading-[20px] sm:text-[14px] sm:leading-[22px] mb-1.5"
                  style={{ letterSpacing: "-0.2px" }}
                >
                  Registered Phone Number <span className="text-[#E53935]">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-xl border border-[#D0E8FF] bg-white/70 px-4 py-3 font-inter text-[#0F0F0F] text-[14px] leading-[22px] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0F8BFF] focus:border-transparent transition-all"
                  style={{ letterSpacing: "-0.2px" }}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-inter text-[#0F0F0F] font-medium text-[13px] leading-[20px] sm:text-[14px] sm:leading-[22px] mb-1.5"
                  style={{ letterSpacing: "-0.2px" }}
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your registered email"
                  className="w-full rounded-xl border border-[#D0E8FF] bg-white/70 px-4 py-3 font-inter text-[#0F0F0F] text-[14px] leading-[22px] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0F8BFF] focus:border-transparent transition-all"
                  style={{ letterSpacing: "-0.2px" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="reason"
                  className="block font-inter text-[#0F0F0F] font-medium text-[13px] leading-[20px] sm:text-[14px] sm:leading-[22px] mb-1.5"
                  style={{ letterSpacing: "-0.2px" }}
                >
                  Reason for Deletion <span className="text-[#9CA3AF] font-normal">(optional)</span>
                </label>
                <textarea
                  id="reason"
                  rows={3}
                  placeholder="Tell us why you'd like to delete your account..."
                  className="w-full rounded-xl border border-[#D0E8FF] bg-white/70 px-4 py-3 font-inter text-[#0F0F0F] text-[14px] leading-[22px] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#0F8BFF] focus:border-transparent transition-all resize-none"
                  style={{ letterSpacing: "-0.2px" }}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
              </div>

              {status === "error" && (
                <p className="font-inter text-[#E53935] text-[13px] sm:text-[14px] font-medium" style={{ letterSpacing: "-0.2px" }}>
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto font-inter inline-flex items-center justify-center gap-2 bg-[#E53935] text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-2xl font-medium text-[14px] sm:text-[16px] hover:bg-[#c62828] hover:shadow-[0_4px_4px_0_rgba(255,255,255,0.20)_inset] transition-all duration-200 shadow-[0_4px_4px_0_rgba(255,255,255,0.20)_inset] disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ letterSpacing: "-0.5px", lineHeight: "27.2px" }}
              >
                {status === "loading" ? "Submitting…" : "Submit Deletion Request"}
              </button>
            </form>
            )}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-2 mb-6">
            <div className="flex-1 h-px bg-[#C7E0F4]" />
            <span className="font-inter text-[#5D5B63] text-[13px] font-medium" style={{ letterSpacing: "-0.2px" }}>
              OR
            </span>
            <div className="flex-1 h-px bg-[#C7E0F4]" />
          </div>

          {/* Method 2 — Email */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0F8BFF] flex items-center justify-center">
                <span className="font-fustat text-white font-bold text-[14px] sm:text-[16px]">2</span>
              </div>
              <h2
                className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px]"
                style={{ letterSpacing: "-1px" }}
              >
                Send an Email Request
              </h2>
            </div>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] mb-5"
              style={{ letterSpacing: "-0.3px" }}
            >
              Alternatively, you can send us an email directly. Please include your registered phone number so we can verify and process your request.
            </p>

            <div className="rounded-xl bg-[#EFF7FF] border border-[#D0E8FF] p-4 sm:p-5 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span
                  className="font-inter text-[#5D5B63] font-medium text-[13px] leading-[20px] sm:text-[14px] sm:leading-[22px] sm:min-w-[60px]"
                  style={{ letterSpacing: "-0.2px" }}
                >
                  To:
                </span>
                <a
                  href="mailto:info@pgmaster.in"
                  className="font-inter text-[#0F8BFF] font-semibold text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px] hover:underline"
                  style={{ letterSpacing: "-0.3px" }}
                >
                  info@pgmaster.in
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span
                  className="font-inter text-[#5D5B63] font-medium text-[13px] leading-[20px] sm:text-[14px] sm:leading-[22px] sm:min-w-[60px]"
                  style={{ letterSpacing: "-0.2px" }}
                >
                  Subject:
                </span>
                <span
                  className="font-inter text-[#0F0F0F] font-semibold text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
                  style={{ letterSpacing: "-0.3px" }}
                >
                  Delete My Account
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                <span
                  className="font-inter text-[#5D5B63] font-medium text-[13px] leading-[20px] sm:text-[14px] sm:leading-[22px] sm:min-w-[60px]"
                  style={{ letterSpacing: "-0.2px" }}
                >
                  Include:
                </span>
                <span
                  className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
                  style={{ letterSpacing: "-0.3px" }}
                >
                  Your registered phone number
                </span>
              </div>
            </div>

            <a
              href="mailto:info@pgmaster.in?subject=Delete%20My%20Account&body=Hi%2C%0A%0AI%20would%20like%20to%20request%20the%20deletion%20of%20my%20PG%20Master%20account.%0A%0ARegistered%20Phone%20Number%3A%20%5BEnter%20your%20phone%20number%5D%0A%0AThank%20you."
              className="mt-5 w-full sm:w-auto font-inter inline-flex items-center justify-center gap-2 bg-[#0F8BFF] text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-2xl font-medium text-[14px] sm:text-[16px] hover:bg-[#0d7ae6] hover:shadow-[0_4px_4px_0_rgba(255,255,255,0.35)_inset] transition-all duration-200 shadow-[0_4px_4px_0_rgba(255,255,255,0.35)_inset]"
              style={{ letterSpacing: "-0.5px", lineHeight: "27.2px" }}
            >
              Open Email Client
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4l6 4 6-4M2 4h12v8H2V4z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Processing Time */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              Processing Time
            </h2>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#E8F5E9] flex items-center justify-center mt-0.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="8" stroke="#22C55E" strokeWidth="1.5" />
                  <path d="M10 6v4l2.5 2.5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p
                className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
                style={{ letterSpacing: "-0.3px" }}
              >
                Your account will be{" "}
                <span className="font-semibold">permanently deleted within 48 hours</span>{" "}
                after identity verification. You will receive a confirmation once the deletion is complete.
              </p>
            </div>
          </div>

          {/* Data Deletion Details */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-6">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-4"
              style={{ letterSpacing: "-1px" }}
            >
              What Gets Deleted
            </h2>

            <ul className="space-y-3">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="6" r="3" stroke="#0F8BFF" strokeWidth="1.5" />
                      <path d="M3 15c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#0F8BFF" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ),
                  text: "Account information — name and phone number — permanently deleted.",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="3" width="14" height="12" rx="2" stroke="#0F8BFF" strokeWidth="1.5" />
                      <path d="M6 7h6M6 10h4" stroke="#0F8BFF" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ),
                  text: "All PG-related data, tenant records, and transaction history removed.",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 6l3 3 9-6M3 12l3 3 9-6" stroke="#0F8BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  text: "All associated properties, staff access, and permissions revoked.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#EFF7FF] flex items-center justify-center mt-0.5">
                    {item.icon}
                  </div>
                  <p
                    className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
                    style={{ letterSpacing: "-0.3px" }}
                  >
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Data Retention Notice */}
          <div className="bg-[#FFF8E1] border border-[#FFE082] backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2L2 17h16L10 2z" stroke="#F59E0B" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M10 8v4M10 14.5v.5" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p
                  className="font-inter text-[#92400E] font-semibold text-[14px] leading-[22px] sm:text-[15px] sm:leading-[24px] mb-1"
                  style={{ letterSpacing: "-0.3px" }}
                >
                  Data Retention Notice
                </p>
                <p
                  className="font-inter text-[#92400E] font-normal text-[13px] leading-[20px] sm:text-[14px] sm:leading-[22px]"
                  style={{ letterSpacing: "-0.2px" }}
                >
                  Some data may be retained temporarily if required for legal, regulatory, or security purposes in accordance with applicable Indian law.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)] mb-8 sm:mb-12">
            <h2
              className="font-fustat text-[#0F0F0F] font-bold text-[20px] leading-[24px] sm:text-[24px] sm:leading-[30px] lg:text-[28px] lg:leading-[34px] mb-3"
              style={{ letterSpacing: "-1px" }}
            >
              Need Help?
            </h2>
            <p
              className="font-inter text-[#0F0F0F] font-normal text-[14px] leading-[22px] sm:text-[16px] sm:leading-[26px]"
              style={{ letterSpacing: "-0.3px" }}
            >
              For any queries regarding account deletion or data removal, contact us at{" "}
              <a
                href="mailto:info@pgmaster.in"
                className="text-[#0F8BFF] font-semibold hover:underline"
              >
                info@pgmaster.in
              </a>
              .
            </p>
          </div>


          <div className="text-center mb-8">
            <Link
              href="/"
              className="font-inter inline-flex items-center gap-2 bg-[#0F8BFF] text-white px-5 py-3 sm:px-6 sm:py-3.5 rounded-2xl font-normal text-[14px] sm:text-[16px] hover:bg-[#0d7ae6] hover:shadow-[0_4px_4px_0_rgba(255,255,255,0.35)_inset] transition-all duration-200 shadow-[0_4px_4px_0_rgba(255,255,255,0.35)_inset]"
              style={{ letterSpacing: "-0.5px", lineHeight: "27.2px" }}
            >
              Back to Home
              <div className="flex items-center justify-center w-[24px] h-[24px] sm:w-[27px] sm:h-[27px] rounded-full bg-white">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-4 sm:h-4"
                >
                  <path
                    d="M10 4L6 8L10 12"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
