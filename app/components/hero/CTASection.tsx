import Image from "next/image";

export default function CTASection() {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Main Container with Gradient Background (fixed stops) */}
      <div
        className="relative w-full min-h-[635px]"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #bee2fbff 50%, #8fc7f2ff 100%)",
        }}
      >
        {/* Cloud Backgrounds (two positions per Figma) */}
        <div className="absolute left-[-60px] bottom-0 w-[905px] h-[635px]">
          <Image
            src="/c1.png"
            alt="Cloud Left"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute right-0 bottom-0 w-[800px] h-[635px]">
          <Image
            src="/c1.png"
            alt="Cloud Right"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1425px] mx-auto px-4 sm:px-6 lg:px-0 h-[635px] flex items-center">
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-0">
            
            {/* Left Content - Text Box Container */}
            <div className="lg:ml-[184px] w-full lg:w-[595px] flex flex-col">
              {/* Main Heading */}
              <h2 
                className="font-fustat text-[#0F0F0F] font-bold text-[32px] sm:text-[48px] lg:text-[64px] leading-[38px] sm:leading-[56px] lg:leading-[83px] mb-3 sm:mb-4"
                style={{ letterSpacing: '-2px' }}
              >
                Take full control of your PG today
              </h2>

              {/* Subheading */}
              <p 
                className="font-fustat text-[#0F0F0F] font-bold text-[16px] sm:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[30px] lg:leading-[36px] mb-6 sm:mb-7 lg:mb-8"
                style={{ letterSpacing: '-0.5px' }}
              >
                Join thousands of PG owners managing their properties easily every day.
              </p>

              {/* CTA Button */}
              <button
                className="font-inter inline-flex items-center gap-2 bg-[#0F8BFF] text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl font-normal text-[15px] sm:text-[16px] hover:bg-[#0d7ae6] transition-all duration-200 self-start"
                style={{ 
                  letterSpacing: "-0.5px", 
                  lineHeight: "27.2px",
                  boxShadow: "0px 4px 4px 0px rgba(255, 255, 255, 0.35) inset"
                }}
              >
                Get Started Now
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
              </button>
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
              className="font-fustat text-[#0F0F0F] font-normal text-[14px] sm:text-[16px] leading-[24px] text-center sm:text-left"
              style={{ letterSpacing: '-0.5px' }}
            >
              Made by Owners. Trusted by Owners.
            </p>

            {/* Right Text */}
            <p 
              className="font-fustat text-[#0F0F0F] font-normal text-[14px] sm:text-[16px] leading-[24px] text-center sm:text-right"
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