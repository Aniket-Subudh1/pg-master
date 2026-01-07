import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full relative overflow-hidden">

      <div
        className="relative w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[635px]"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #bee2fbff 50%, #8fc7f2ff 100%)",
        }}
      >

        <div className="absolute left-[-60px] bottom-0 w-[905px] h-full max-h-[635px]">
          <Image
            src="/c1.png"
            alt="Cloud Left"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute right-0 bottom-0 w-[800px] h-full max-h-[635px]">
          <Image
            src="/c1.png"
            alt="Cloud Right"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1425px] mx-auto px-4 sm:px-6 lg:px-0 min-h-[500px] sm:min-h-[600px] lg:h-[635px] flex items-center py-8 sm:py-12 lg:py-0">
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-0">
            
            {/* Left Content - Text Box Container */}
            <div className="lg:ml-[184px] w-full lg:w-[595px] flex flex-col">
              {/* Main Heading */}
              <h2 
                className="font-fustat text-[#0F0F0F] font-bold text-[24px] sm:text-[40px] md:text-[52px] lg:text-[64px] leading-[32px] sm:leading-[48px] md:leading-[64px] lg:leading-[83px] mb-3 sm:mb-4"
                style={{ letterSpacing: '-2px' }}
              >
                Take full control of your PG today
              </h2>

              {/* Subheading */}
              <p 
                className="font-fustat text-[#0F0F0F] font-bold text-[14px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[22px] sm:leading-[28px] md:leading-[32px] lg:leading-[36px] mb-5 sm:mb-6 md:mb-7 lg:mb-8"
                style={{ letterSpacing: '-0.5px' }}
              >
                Join thousands of PG owners managing their properties easily every day.
              </p>

              {/* CTA Button */}
              <Link
                href="/waitlist"
                className="font-inter inline-flex items-center gap-2 bg-[#0F8BFF] text-white px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 rounded-xl sm:rounded-2xl font-normal text-[14px] sm:text-[15px] md:text-[16px] hover:bg-[#0d7ae6] transition-all duration-200 self-start"
                style={{ 
                  letterSpacing: "-0.5px", 
                  lineHeight: "27.2px",
                  boxShadow: "0px 4px 4px 0px rgba(255, 255, 255, 0.35) inset"
                }}
              >
                Get Started Now
                <div className="flex items-center justify-center w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[27px] md:h-[27px] rounded-full bg-white">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:w-[14px] sm:h-[14px] md:w-4 md:h-4"
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
            </div>

            {/* Right - Mobile Mockup */}
            <div className="lg:absolute lg:right-[120px] lg:top-[50%] lg:-translate-y-1/2">
              <div className="w-[230px] h-[472px] sm:w-[250px] sm:h-[514px] lg:w-[269px] lg:h-[553px] relative">
                <Image
                  src="/1.png"
                  alt="PG Master Mobile App"
                  width={269}
                  height={553}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

          </div>
        </div>

        {/* Footer Section */}
        <div className="relative z-10 w-full bg-white border-t border-[#E5E5E5]">
          <div className="max-w-[1425px] mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left Text */}
            <p 
              className="font-fustat text-[#0F0F0F] font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px] text-center sm:text-left"
              style={{ letterSpacing: '-0.5px' }}
            >
              Made by Owners. Trusted by Owners.
            </p>

            {/* Right Text */}
            <p 
              className="font-fustat text-[#0F0F0F] font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px] text-center sm:text-right"
              style={{ letterSpacing: '-0.5px' }}
            >
              © 2026 PGMaster. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}