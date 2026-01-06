import Image from "next/image";

export default function SolutionsSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto relative">
        {/* Main Heading */}
        <h2 
          className="font-fustat text-center text-[#0F0F0F] font-bold text-[28px] sm:text-[40px] lg:text-[48px] leading-[34px] sm:leading-[48px] lg:leading-[57.6px] mb-2 sm:mb-3 px-2 relative z-10"
          style={{ letterSpacing: '-2px' }}
        >
          Fix These Problems Now
        </h2>

        <p 
          className="font-inter text-center text-[#5D5B63] font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[27.2px] mb-10 sm:mb-14 lg:mb-16 px-4 relative z-10"
          style={{ letterSpacing: '-0.5px' }}
        >
          <span className="font-bold text-[#0F0F0F]">PGMASTER</span> helps you manage everything in one place, without daily stress.
        </p>

        {/* Background Blur */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 w-[90%] sm:w-[1425px] h-[1800px] sm:h-[1800px] rounded-[20px] pointer-events-none"
          style={{
            top: '186px',
            backgroundColor: 'rgba(104, 182, 255, 0.16)',
            filter: 'blur(100px)',
            zIndex: 0
          }}
        />

        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 relative z-10 max-w-[1050px] mx-auto">
          
          {/* Feature 1 - Smart Rent Automation */}
          <div className="w-full bg-white rounded-[24px] lg:rounded-[40px] overflow-hidden shadow-sm">
            <div className="flex flex-col lg:flex-row items-stretch">
              {/* Left Content */}
              <div className="flex-1 p-6 sm:p-10 lg:p-12 lg:pr-6 bg-white">
                <div className="w-10 h-10 sm:w-14 sm:h-14 flex mb-3 sm:mb-5">
                  <Image
                    src="/logo.png"
                    alt="Home Icon"
                    width={56}
                    height={56}
                    className="w-10 h-10 sm:w-14 sm:h-14"
                  />
                </div>

                <h3 
                  className="font-fustat text-[#0F0F0F] font-bold text-[24px] sm:text-[32px] lg:text-[36px] leading-[30px] sm:leading-[38px] lg:leading-[43px] mb-3 sm:mb-5"
                  style={{ letterSpacing: '-0.5px' }}
                >
                  Effortless<br />
                  <span className="text-[#0F8BFF]">Smart Rent Automation</span>
                </h3>

                <p 
                  className="font-inter text-[#5D5B63] font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[25.5px] lg:leading-[27.2px] mb-5 sm:mb-7"
                  style={{ letterSpacing: '-0.56px' }}
                >
                  Manage monthly rent, dues, and penalties automatically so you don't have to chase tenants anymore.
                </p>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      </svg>
                    </div>
                    <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[15px] leading-[21px] sm:leading-[25.5px]" style={{ letterSpacing: '-0.56px' }}>
                      Automatic monthly rent & bill generation
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      </svg>
                    </div>
                    <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[15px] leading-[21px] sm:leading-[25.5px]" style={{ letterSpacing: '-0.56px' }}>
                      Smart reminders via app & WhatsApp
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      </svg>
                    </div>
                    <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[15px] leading-[21px] sm:leading-[25.5px]" style={{ letterSpacing: '-0.56px' }}>
                      Clear paid, pending, and overdue status
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      </svg>
                    </div>
                    <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[15px] leading-[21px] sm:leading-[25.5px]" style={{ letterSpacing: '-0.56px' }}>
                      Late fee added automatically after due date
                    </span>
                  </li>
                </ul>

                <button
                  className="font-inter flex items-center gap-2 bg-[#0F8BFF] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-normal text-[14px] sm:text-[15px] hover:bg-[#0d7ae6] transition-all duration-200"
                  style={{ 
                    letterSpacing: "-0.5px", 
                    lineHeight: "27.2px",
                    boxShadow: "0px 4px 4px 0px rgba(255, 255, 255, 0.35) inset"
                  }}
                >
                  Get Started Now
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white">
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
                </button>
              </div>

              {/* Right Image Section with Gradient Container */}
              <div className="flex-1 relative flex lg:top-20 lg:left-4 items-center justify-center p-6 sm:p-10 lg:p-12 lg:pl-6">
                {/* Gradient background */}
                <div 
                  className="absolute inset-0 bg-[#F7F1FF] rounded-b-[24px] lg:rounded-b-none lg:rounded-tl-[40px]"
                />
                <div className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[415px] relative z-10">
                  <Image
                    src="/f1.png"
                    alt="Smart Rent Automation Dashboard"
                    width={415}
                    height={497}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 - Complete Tenant & Accounting Control */}
          <div className="w-full bg-white rounded-[24px] lg:rounded-[40px] overflow-hidden shadow-sm">
            <div className="flex flex-col lg:flex-row-reverse items-stretch">
              {/* Right Content */}
              <div className="flex-1 p-6 sm:p-10 lg:p-12 lg:pl-6 bg-white">
                <div className="w-10 h-10 sm:w-14 sm:h-14 flex mb-3 sm:mb-5">
                  <Image
                    src="/logo.png"
                    alt="Home Icon"
                    width={56}
                    height={56}
                    className="w-10 h-10 sm:w-14 sm:h-14"
                  />
                </div>

                <h3 
                  className="font-fustat text-[#0F0F0F] font-bold text-[24px] sm:text-[32px] lg:text-[36px] leading-[30px] sm:leading-[38px] lg:leading-[43px] mb-3 sm:mb-5"
                  style={{ letterSpacing: '-0.5px' }}
                >
                  Complete Tenant<br />
                  <span className="text-[#0F8BFF]">& Accounting Control</span>
                </h3>

                <p 
                  className="font-inter text-[#5D5B63] font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[25.5px] lg:leading-[27.2px] mb-5 sm:mb-7"
                  style={{ letterSpacing: '-0.56px' }}
                >
                  All tenant and money records in one place, always up to date. From tenant details to income and expense tracking.
                </p>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      </svg>
                    </div>
                    <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[15px] leading-[21px] sm:leading-[25.5px]" style={{ letterSpacing: '-0.56px' }}>
                      Quick tenant onboarding with eKYC
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      </svg>
                    </div>
                    <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[15px] leading-[21px] sm:leading-[25.5px]" style={{ letterSpacing: '-0.56px' }}>
                      Tenant profiles with payment history
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      </svg>
                    </div>
                    <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[15px] leading-[21px] sm:leading-[25.5px]" style={{ letterSpacing: '-0.56px' }}>
                      Real-time income & expense tracking
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      </svg>
                    </div>
                    <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[15px] leading-[21px] sm:leading-[25.5px]" style={{ letterSpacing: '-0.56px' }}>
                      One view to manage multiple PGs and properties
                    </span>
                  </li>
                </ul>

                <button
                  className="font-inter flex items-center gap-2 bg-[#0F8BFF] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-normal text-[14px] sm:text-[15px] hover:bg-[#0d7ae6] transition-all duration-200"
                  style={{ 
                    letterSpacing: "-0.5px", 
                    lineHeight: "27.2px",
                    boxShadow: "0px 4px 4px 0px rgba(255, 255, 255, 0.35) inset"
                  }}
                >
                  Get Started Now
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white">
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
                </button>
              </div>

              {/* Left Image Section with Gradient Container */}
              <div className="flex-1 relative flex lg:top-20 items-center justify-center p-6 sm:p-10 lg:p-12 lg:pr-6">
                {/* Gradient background */}
                <div 
                  className="absolute inset-0 bg-[#F3FAFF] rounded-b-[24px] lg:rounded-b-none lg:rounded-tr-[40px]"
                />
                <div className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[410px] relative z-10">
                  <Image
                    src="/f2.png"
                    alt="Tenant & Accounting Dashboard"
                    width={410}
                    height={491}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 - Properties, Rooms & Complaints */}
          <div className="w-full bg-white rounded-[24px] lg:rounded-[40px] overflow-hidden shadow-sm">
            <div className="flex flex-col lg:flex-row items-stretch">
              {/* Left Content */}
              <div className="flex-1 p-6 sm:p-10 lg:p-12 lg:pr-6 bg-white">
                <div className="w-10 h-10 sm:w-14 sm:h-14 flex mb-3 sm:mb-5">
                  <Image
                    src="/logo.png"
                    alt="Home Icon"
                    width={56}
                    height={56}
                    className="w-10 h-10 sm:w-14 sm:h-14"
                  />
                </div>

                <h3 
                  className="font-fustat text-[#0F0F0F] font-bold text-[24px] sm:text-[32px] lg:text-[36px] leading-[30px] sm:leading-[38px] lg:leading-[43px] mb-3 sm:mb-5"
                  style={{ letterSpacing: '-0.5px' }}
                >
                  Properties, Rooms &<br />
                  <span className="text-[#0F8BFF]">Complaints -All in One Place</span>
                </h3>

                <p 
                  className="font-inter text-[#5D5B63] font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[25.5px] lg:leading-[27.2px] mb-5 sm:mb-7"
                  style={{ letterSpacing: '-0.56px' }}
                >
                  Manage all your PG properties without confusion or manual work. Get a clear view of rooms, beds, tenants, and complaints across all properties - directly from your phone.
                </p>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      </svg>
                    </div>
                    <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[15px] leading-[21px] sm:leading-[25.5px]" style={{ letterSpacing: '-0.56px' }}>
                      Real-time room & bed occupancy and vacancy status
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      </svg>
                    </div>
                    <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[15px] leading-[21px] sm:leading-[25.5px]" style={{ letterSpacing: '-0.56px' }}>
                      Easy tenant shifting between rooms or properties
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      </svg>
                    </div>
                    <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[15px] leading-[21px] sm:leading-[25.5px]" style={{ letterSpacing: '-0.56px' }}>
                      Digital complaint tracking with clear status updates
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      </svg>
                    </div>
                    <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[15px] leading-[21px] sm:leading-[25.5px]" style={{ letterSpacing: '-0.56px' }}>
                      Manage multiple PG properties from one dashboard
                    </span>
                  </li>
                </ul>

                <button
                  className="font-inter flex items-center gap-2 bg-[#0F8BFF] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-normal text-[14px] sm:text-[15px] hover:bg-[#0d7ae6] transition-all duration-200"
                  style={{ 
                    letterSpacing: "-0.5px", 
                    lineHeight: "27.2px",
                    boxShadow: "0px 4px 4px 0px rgba(255, 255, 255, 0.35) inset"
                  }}
                >
                  Get Started Now
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white">
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
                </button>
              </div>

              <div className="flex-1 relative flex items-center justify-center lg:top-20 lg:left-4 p-6 sm:p-10 lg:p-12 lg:pl-6">
                <div 
                  className="absolute inset-0 bg-[#F7F1FF] rounded-b-[24px] lg:rounded-b-none lg:rounded-tl-[40px]"
                />
                <div className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[415px] relative z-10">
                  <Image
                    src="/f3.png"
                    alt="Properties & Complaints Dashboard"
                    width={415}
                    height={544}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}