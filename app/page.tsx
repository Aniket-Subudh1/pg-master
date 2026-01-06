import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#84DEFF] via-[#D3ECFF] to-white font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex flex-col items-center pt-32 pb-20 px-6">
        {/* Main Heading */}
        <h1 className="text-center text-[#0F0F0F] font-bold text-[75px] leading-[78.75px] tracking-[-2px] max-w-[893px] mb-6">
          India's #1 Renting Super App for PG & Hostels
        </h1>

        {/* Subheading */}
        <p className="text-center text-[#5D5B63] font-normal text-[20px] leading-[30.6px] tracking-[-1px] max-w-[467px] mb-2">
          Effortlessly manage your PG or hostel with PGMASTER
        </p>

        {/* Description */}
        <p className="text-center text-[#5D5B63] font-normal text-[20px] leading-[30.6px] tracking-[-1px] max-w-[936px] mb-8">
          From rent collection and tenant management to maintenance and analytics, everything you need is in one app.
        </p>

        {/* CTA Button */}
        <button className="flex items-center gap-2 bg-[#0F8BFF] text-white px-6 py-3.5 rounded-2xl font-normal text-base hover:bg-[#0d7ae6] hover:shadow-[0_4px_4px_0_rgba(255,255,255,0.35)_inset] transition-all duration-200 shadow-[0_4px_4px_0_rgba(255,255,255,0.35)_inset] mb-8">
          <span style={{ letterSpacing: '-0.5px', lineHeight: '27.2px' }}>Request a Demo</span>
          <div className="flex items-center justify-center w-[27px] h-[27px] rounded-full bg-white">
            <svg
              width="16"
              height="16"
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
        </button>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-12">
          <span className="text-[#0F0F0F] font-medium text-base" style={{ letterSpacing: '-0.5px', lineHeight: '27.2px' }}>
            Rated 4.9/5 by 2,000+ PG owners & operators
          </span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1.5L9.708 5.588L14 6.132L10.854 9.076L11.708 13.5L8 11.338L4.292 13.5L5.146 9.076L2 6.132L6.292 5.588L8 1.5Z"
                  fill="#FFA500"
                  stroke="#FFA500"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
          </div>
        </div>

        {/* Phone Mockups */}
        <div className="flex items-center justify-center gap-6 mb-16">
          {/* Left Phone */}
          <div className="w-[273px] h-[561px] relative">
            <Image
              src="/2.png"
              alt="PG Master App - Property Management"
              width={273}
              height={561}
              className="object-contain"
            />
          </div>

          {/* Center Phone */}
          <div className="w-[322px] h-[662px] relative">
            <Image
              src="/1.png"
              alt="PG Master App - Main Screen"
              width={322}
              height={662}
              className="object-contain"
            />
          </div>

          {/* Right Phone */}
          <div className="w-[271px] h-[558px] relative">
            <Image
              src="/3.png"
              alt="PG Master App - Room Details"
              width={271}
              height={558}
              className="object-contain"
            />
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-8 mb-4">
            {/* ZenZap */}
            <div className="flex items-center gap-1">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0L10 7L15 8L9 13L11 20L8 16L5 20L7 13L1 8L6 7L8 0Z" fill="#000000"/>
              </svg>
              <span className="text-black font-semibold text-sm">ZenZap</span>
            </div>

            {/* sparkle */}
            <div className="flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="6" fill="#FF6B9D"/>
                <circle cx="8" cy="8" r="3" fill="#FFE5EE"/>
              </svg>
              <span className="text-black font-semibold text-sm">sparkle</span>
            </div>

            {/* Craftgram */}
            <div className="flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1L9.5 5L14 6L10 10L11 15L8 12L5 15L6 10L2 6L6.5 5L8 1Z" fill="#000000"/>
              </svg>
              <span className="text-black font-semibold text-sm">Craftgram</span>
            </div>

            {/* Pulse */}
            <div className="flex items-center gap-1">
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="3" height="12" y="2" fill="#000000"/>
                <rect x="5" width="3" height="16" fill="#000000"/>
                <rect x="10" y="4" width="3" height="12" fill="#000000"/>
                <rect x="15" y="6" width="3" height="10" fill="#000000"/>
              </svg>
              <span className="text-black font-semibold text-sm">Pulse</span>
            </div>

            {/* swift */}
            <div className="flex items-center gap-1">
              <span className="text-black font-semibold text-sm italic">swift</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6L9 6M9 6L6 3M9 6L6 9" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <p className="text-[#0F0F0F] text-sm font-normal">
            Trusted by Leading PG & Rental Businesses
          </p>
        </div>
      </main>
    </div>
  );
}