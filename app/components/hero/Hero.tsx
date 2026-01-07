import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#B4DEFF] via-[#D3ECFF] to-[#FFFFFF]">
      <Navbar />

      <main className="flex flex-col items-center pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <h1
          className="font-fustat text-center text-[#0F0F0F] font-bold text-[32px] leading-[36px] sm:text-[48px] mt-5 sm:leading-[52px] lg:text-[75px] lg:leading-[78.75px] max-w-[340px] sm:max-w-[600px] lg:max-w-[893px] mb-4 sm:mb-6"
          style={{ letterSpacing: "-2px" }}
        >
          India's #1 Renting Super App for PG & Hostels
        </h1>

        <p
          className="font-inter text-center text-[#5D5B63] font-normal text-[16px] leading-[24px] sm:text-[18px] sm:leading-[27px] lg:text-[20px] lg:leading-[30.6px] max-w-[320px] sm:max-w-[400px] lg:max-w-[467px] mb-2"
          style={{ letterSpacing: "-1px" }}
        >
          Effortlessly manage your PG or hostel with PGMASTER
        </p>

        <p
          className="font-inter text-center text-[#5D5B63] font-normal text-[14px] leading-[21px] sm:text-[16px] sm:leading-[24px] lg:text-[20px] lg:leading-[30.6px] max-w-[340px] sm:max-w-[600px] lg:max-w-[936px] mb-6 sm:mb-8"
          style={{ letterSpacing: "-1px" }}
        >
          From rent collection and tenant management to maintenance and analytics, everything you need is in one app.
        </p>

        <Link
          href="/waitlist"
          className="font-inter flex items-center gap-2 bg-[#0F8BFF] text-white px-5 py-3 sm:px-6 sm:py-3.5 rounded-2xl font-normal text-[14px] sm:text-[16px] hover:bg-[#0d7ae6] hover:shadow-[0_4px_4px_0_rgba(255,255,255,0.35)_inset] transition-all duration-200 shadow-[0_4px_4px_0_rgba(255,255,255,0.35)_inset] mb-6 sm:mb-8"
          style={{ letterSpacing: "-0.5px", lineHeight: "27.2px" }}
        >
          Request a Demo
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
                d="M6 12L10 8L6 4"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>

        {/* Rating */}
        <div className="font-inter flex flex-col sm:flex-row items-center gap-2 mb-8 sm:mb-12">
          <span
            className="text-[#0F0F0F] font-medium text-[14px] sm:text-[16px] text-center"
            style={{ letterSpacing: "-0.5px", lineHeight: "27.2px" }}
          >
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
        <div className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-6 mb-12 sm:mb-16 overflow-hidden w-full max-w-[340px] sm:max-w-full">
          {/* Left Phone */}
          <div className="w-[100px] h-[205px] sm:w-[180px] sm:h-[370px] lg:w-[273px] lg:h-[561px] relative flex-shrink-0">
            <Image
              src="/2.png"
              alt="PG Master App - Property Management"
              width={273}
              height={561}
              className="object-contain"
              priority
            />
          </div>

          {/* Center Phone */}
          <div className="w-[118px] h-[243px] sm:w-[212px] sm:h-[436px] lg:w-[322px] lg:h-[662px] relative flex-shrink-0">
            <Image
              src="/1.png"
              alt="PG Master App - Main Screen"
              width={322}
              height={662}
              className="object-contain"
              priority
            />
          </div>

          {/* Right Phone */}
          <div className="w-[99px] h-[204px] sm:w-[179px] sm:h-[368px] lg:w-[271px] lg:h-[558px] relative flex-shrink-0">
            <Image
              src="/3.png"
              alt="PG Master App - Room Details"
              width={271}
              height={558}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 mb-3 sm:mb-4 flex-wrap max-w-[40px] sm:max-w-full">
            {/* ZenZap Logo */}
            <Image
              src="/4.png"
              alt="ZenZap"
              width={60}
              height={18}
              className="object-contain h-8 w-auto sm:h-10 lg:h-14"
            />

            {/* sparkle Logo */}
            <Image
              src="/5.png"
              alt="sparkle"
              width={60}
              height={18}
              className="object-contain h-8 w-auto sm:h-10 lg:h-14"
            />

            {/* Craftgram Logo */}
            <Image
              src="/6.png"
              alt="Craftgram"
              width={68}
              height={18}
              className="object-contain h-8 w-auto sm:h-10 lg:h-14"
            />

            {/* Pulse Logo */}
            <Image
              src="/7.png"
              alt="Pulse"
              width={53}
              height={18}
              className="object-contain h-8 w-auto sm:h-10 lg:h-14"
            />

            {/* swift Logo */}
            <Image
              src="/8.png"
              alt="swift"
              width={45}
              height={18}
              className="object-contain h-8 w-auto sm:h-10 lg:h-14"
            />
          </div>

          {/* Trust Text */}
          <p className="font-inter text-[#0F0F0F] text-[12px] sm:text-[13px] lg:text-[14px] font-normal text-center px-4">
            Trusted by Leading PG & Rental Businesses
          </p>
        </div>
      </main>
    </div>
  );
}
