"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTASection from "../components/hero/CTASection";

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pgName: "",
    beds: "",
    location: "",
    phone: "",
    role: "",
    category: "",
    agreeTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you for joining our waitlist! We'll be in touch soon.",
        });
        setFormData({
          name: "",
          email: "",
          pgName: "",
          beds: "",
          location: "",
          phone: "",
          role: "",
          category: "",
          agreeTerms: false,
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
    <div className="min-h-screen bg-gradient-to-b from-[#B4DEFF] via-[#D3ECFF] to-[#FFFFFF]">
      <nav className="fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4 sm:px-8">
        <div className="flex items-center justify-between bg-white/50 backdrop-blur-lg rounded-xl px-4 sm:px-6 py-2 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)]">
          <Link href="/" className="flex items-center gap-1.5 sm:gap-2">
            <Image
              src="/logo.png"
              alt="PG Master Logo"
              width={20}
              height={20}
              className="object-contain sm:w-6 sm:h-6"
            />
            <span className="text-sm sm:text-base font-bold text-black">
              PG MASTER
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 bg-white/60 text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl font-normal text-sm sm:text-base hover:bg-white/80 hover:scale-105 hover:shadow-lg transition-all duration-200 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)]"
            style={{ letterSpacing: "-0.5px", lineHeight: "27.2px" }}
          >
            <span>Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1
            className="font-fustat text-[#0F0F0F] font-bold text-[32px] leading-[36px] sm:text-[48px] sm:leading-[52px] lg:text-[64px] lg:leading-[67.2px] max-w-[340px] sm:max-w-[600px] lg:max-w-[800px] mb-4 sm:mb-6 mx-auto"
            style={{ letterSpacing: "-2px" }}
          >
            Join the Waitlist
          </h1>

          <p
            className="font-inter text-[#5D5B63] font-normal text-[16px] leading-[24px] sm:text-[18px] sm:leading-[27px] lg:text-[20px] lg:leading-[30.6px] max-w-[320px] sm:max-w-[500px] lg:max-w-[600px] mx-auto"
            style={{ letterSpacing: "-1px" }}
          >
            Be among the first to experience the future of PG management.
            Fill out the form below to secure your spot.
          </p>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-[600px] bg-white/40 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-[#0F0F0F] font-inter font-medium text-sm sm:text-base mb-2"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={100}
                className="w-full px-4 py-3 bg-white/60 border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F8BFF] focus:border-transparent transition-all text-[#0F0F0F] placeholder:text-[#5D5B63]/50"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-[#0F0F0F] font-inter font-medium text-sm sm:text-base mb-2"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/60 border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F8BFF] focus:border-transparent transition-all text-[#0F0F0F] placeholder:text-[#5D5B63]/50"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-[#0F0F0F] font-inter font-medium text-sm sm:text-base mb-2"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[6-9][0-9]{9}"
                className="w-full px-4 py-3 bg-white/60 border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F8BFF] focus:border-transparent transition-all text-[#0F0F0F] placeholder:text-[#5D5B63]/50"
                placeholder="10-digit mobile number"
              />
            </div>

            {/* PG Name */}
            <div>
              <label
                htmlFor="pgName"
                className="block text-[#0F0F0F] font-inter font-medium text-sm sm:text-base mb-2"
              >
                PG/Hostel Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="pgName"
                name="pgName"
                value={formData.pgName}
                onChange={handleChange}
                required
                maxLength={100}
                className="w-full px-4 py-3 bg-white/60 border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F8BFF] focus:border-transparent transition-all text-[#0F0F0F] placeholder:text-[#5D5B63]/50"
                placeholder="Enter your PG/Hostel name"
              />
            </div>

            {/* Two Column Layout for Beds and Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Beds */}
              <div>
                <label
                  htmlFor="beds"
                  className="block text-[#0F0F0F] font-inter font-medium text-sm sm:text-base mb-2"
                >
                  Number of Beds <span className="text-red-500">*</span>
                </label>
                <select
                  id="beds"
                  name="beds"
                  value={formData.beds}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/60 border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F8BFF] focus:border-transparent transition-all text-[#0F0F0F]"
                >
                  <option value="">Select beds</option>
                  <option value="1-10">1-10</option>
                  <option value="10+">10+</option>
                  <option value="20+">20+</option>
                  <option value="50+">50+</option>
                  <option value="100+">100+</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-[#0F0F0F] font-inter font-medium text-sm sm:text-base mb-2"
                >
                  Location <span className="text-red-500">*</span>
                </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/60 border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F8BFF] focus:border-transparent transition-all text-[#0F0F0F]"
                >
                  <option value="">Select city</option>
                  <option value="Bhubaneswar">Bhubaneswar</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="City Not Mentioned">City Not Mentioned</option>
                </select>
              </div>
            </div>

            {/* Two Column Layout for Role and Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Role */}
              <div>
                <label
                  htmlFor="role"
                  className="block text-[#0F0F0F] font-inter font-medium text-sm sm:text-base mb-2"
                >
                  Your Role <span className="text-red-500">*</span>
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/60 border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F8BFF] focus:border-transparent transition-all text-[#0F0F0F]"
                >
                  <option value="">Select role</option>
                  <option value="PG Owner">PG Owner</option>
                  <option value="Manager">Manager</option>
                  <option value="Property Manager">Property Manager</option>
                </select>
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-[#0F0F0F] font-inter font-medium text-sm sm:text-base mb-2"
                >
                  Property Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/60 border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F8BFF] focus:border-transparent transition-all text-[#0F0F0F]"
                >
                  <option value="">Select type</option>
                  <option value="Paying Guest">Paying Guest</option>
                  <option value="Student Hostel">Student Hostel</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 text-[#0F8BFF] border-white/40 rounded focus:ring-2 focus:ring-[#0F8BFF]"
              />
              <label
                htmlFor="agreeTerms"
                className="text-[#0F0F0F] font-inter text-sm sm:text-base"
              >
                I agree to the{" "}
                <Link href="/terms" className="text-[#0F8BFF] hover:underline">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link href="/refund" className="text-[#0F8BFF] hover:underline">
                  Refund & Cancellation Policy
                </Link>
              </label>
            </div>

            {/* Status Messages */}
            {submitStatus.type && (
              <div
                className={`p-4 rounded-xl ${
                  submitStatus.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                <p className="font-inter text-sm sm:text-base">
                  {submitStatus.message}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full font-inter flex items-center justify-center gap-2 bg-[#0F8BFF] text-white px-6 py-3.5 rounded-xl font-normal text-base hover:bg-[#0d7ae6] hover:shadow-[0_4px_4px_0_rgba(255,255,255,0.35)_inset] transition-all duration-200 shadow-[0_4px_4px_0_rgba(255,255,255,0.35)_inset] disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ letterSpacing: "-0.5px", lineHeight: "27.2px" }}
            >
              {isSubmitting ? "Submitting..." : "Join the Waitlist"}
              {!isSubmitting && (
                <div className="flex items-center justify-center w-[24px] h-[24px] rounded-full bg-white">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </button>
          </form>
        </div>

        {/* Footer Text */}
        <p
          className="font-inter text-center text-[#5D5B63] font-normal text-sm sm:text-base mt-8 max-w-[500px]"
          style={{ letterSpacing: "-0.5px" }}
        >
          Join over 1,000+ PG owners who have already signed up for early access
        </p>
      </main>
      
    </div>
    <CTASection/>
    </div>
  );
}
