import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#84DEFF] via-[#D3ECFF] to-white">
      <Navbar />
      
      <main className="flex flex-col items-center pt-32 pb-20 px-6">
        <h1 
          className="font-fustat text-center text-[#0F0F0F] font-bold text-[75px] leading-[78.75px] max-w-[893px] mb-6"
          style={{ letterSpacing: '-2px' }}
        >
          India's #1 Renting Super App for PG & Hostels
        </h1>

        <p 
          className="font-inter text-center text-[#5D5B63] font-normal text-[20px] leading-[30.6px] max-w-[467px] mb-2"
          style={{ letterSpacing: '-1px' }}
        >
          Effortlessly manage your PG or hostel with PGMASTER
        </p>

        <p 
          className="font-inter text-center text-[#5D5B63] font-normal text-[20px] leading-[30.6px] max-w-[936px] mb-8"
          style={{ letterSpacing: '-1px' }}
        >
          From rent collection and tenant management to maintenance and analytics, everything you need is in one app.
        </p>

        <button 
          className="font-inter flex items-center gap-2 bg-[#0F8BFF] text-white px-6 py-3.5 rounded-2xl font-normal text-[16px] hover:bg-[#0d7ae6] hover:shadow-[0_4px_4px_0_rgba(255,255,255,0.35)_inset] transition-all duration-200 shadow-[0_4px_4px_0_rgba(255,255,255,0.35)_inset] mb-8"
          style={{ letterSpacing: '-0.5px', lineHeight: '27.2px' }}
        >
          Request a Demo
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

        {/* Rating - Inter Medium 500, 16px */}
        <div className="font-inter flex items-center gap-2 mb-12">
          <span 
            className="text-[#0F0F0F] font-medium text-[16px]"
            style={{ letterSpacing: '-0.5px', lineHeight: '27.2px' }}
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
        <div className="flex items-center justify-center gap-6 mb-16">
          {/* Left Phone - 273×561px */}
          <div className="w-[273px] h-[561px] relative">
            <Image
              src="/2.png"
              alt="PG Master App - Property Management"
              width={273}
              height={561}
              className="object-contain"
              priority
            />
          </div>

          {/* Center Phone - 322×662px */}
          <div className="w-[322px] h-[662px] relative">
            <Image
              src="/1.png"
              alt="PG Master App - Main Screen"
              width={322}
              height={662}
              className="object-contain"
              priority
            />
          </div>

          {/* Right Phone - 271×558px */}
          <div className="w-[271px] h-[558px] relative">
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

        {/* Trust Badges - Using PNG Logos */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-8 mb-4 flex-wrap">
            {/* ZenZap Logo */}
            <Image
              src="/4.png"
              alt="ZenZap"
              width={80}
              height={24}
              className="object-contain h-6 w-auto"
            />

            {/* sparkle Logo */}
            <Image
              src="/5.png"
              alt="sparkle"
              width={80}
              height={24}
              className="object-contain h-6 w-auto"
            />

            {/* Craftgram Logo */}
            <Image
              src="/6.png"
              alt="Craftgram"
              width={90}
              height={24}
              className="object-contain h-6 w-auto"
            />

            {/* Pulse Logo */}
            <Image
              src="/7.png"
              alt="Pulse"
              width={70}
              height={24}
              className="object-contain h-6 w-auto"
            />

            {/* swift Logo */}
            <Image
              src="/8.png"
              alt="swift"
              width={60}
              height={24}
              className="object-contain h-6 w-auto"
            />
          </div>

          {/* Trust Text - Inter Regular 400, 14px */}
          <p className="font-inter text-[#0F0F0F] text-[14px] font-normal">
            Trusted by Leading PG & Rental Businesses
          </p>
        </div>
      </main>
    </div>
  );
}