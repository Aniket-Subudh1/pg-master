import Image from "next/image";

export default function SolutionsSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 
          className="font-fustat text-center text-[#0F0F0F] font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-[38.4px] sm:leading-[48px] lg:leading-[57.6px] mb-2 sm:mb-3 px-2"
          style={{ letterSpacing: '-2px' }}
        >
          Fix These Problems Now
        </h2>

        <p 
          className="font-inter text-center text-[#5D5B63] font-normal text-[14px] sm:text-[16px] leading-[23.8px] sm:leading-[27.2px] mb-10 sm:mb-14 lg:mb-16 px-4"
          style={{ letterSpacing: '-0.5px' }}
        >
          <span className="font-bold text-[#0F0F0F]">PGMASTER</span> helps you manage everything in one place, without daily stress.
        </p>

        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
          
          <div className="w-full bg-gradient-to-br from-[#E8F5FF] to-[#F0F8FF] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
            <div className="flex-1 w-full lg:max-w-[500px]">
              <div className="w-14 h-14 sm:w-14 sm:h-14  flex mb-1 ">
                <Image
                  src="/logo.png"
                  alt="Home Icon"
                  width={52}
                  height={52}
                  className="w-12 h-12 sm:w-12 sm:h-12"
                />
              </div>

              {/* Title */}
              <h3 
                className="font-fustat text-[#0F0F0F] font-bold text-[24px] sm:text-[28px] lg:text-[32px] leading-[32px] sm:leading-[36px] lg:leading-[42px] mb-3 sm:mb-4"
                style={{ letterSpacing: '-0.5px' }}
              >
                Effortless<br />
                <span className="text-[#0F8BFF]">Smart Rent Automation</span>
              </h3>

              {/* Description */}
              <p 
                className="font-inter text-[#5D5B63] font-normal text-[13px] sm:text-[14px] lg:text-[15px] leading-[22px] sm:leading-[24px] lg:leading-[25.5px] mb-5 sm:mb-6"
                style={{ letterSpacing: '-0.56px' }}
              >
                Manage monthly rent, dues, and penalties automatically<br className="hidden sm:block" />
                so you don't have to mean tenants anymore.
              </p>

              {/* Feature List */}
              <ul className="space-y-3 sm:space-y-3.5 mb-6 sm:mb-7">
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                  </div>
                  <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[14px] leading-[22px] sm:leading-[23.8px]" style={{ letterSpacing: '-0.56px' }}>
                    Automatic monthly rent & bill generation
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                  </div>
                  <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[14px] leading-[22px] sm:leading-[23.8px]" style={{ letterSpacing: '-0.56px' }}>
                    Smart reminders via app & WhatsApp
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                  </div>
                  <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[14px] leading-[22px] sm:leading-[23.8px]" style={{ letterSpacing: '-0.56px' }}>
                    Clear, past, pending, and overdue status
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                  </div>
                  <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[14px] leading-[22px] sm:leading-[23.8px]" style={{ letterSpacing: '-0.56px' }}>
                    Auto-add/edit automatically after due-date
                  </span>
                </li>
              </ul>

              {/* CTA Button */}
              <button
                className="font-inter flex items-center gap-2 bg-[#0F8BFF] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-normal text-[13px] sm:text-[14px] hover:bg-[#0d7ae6] hover:shadow-[0_4px_4px_0_rgba(255,255,255,0.35)_inset] transition-all duration-200 shadow-[0_4px_4px_0_rgba(255,255,255,0.35)_inset]"
                style={{ letterSpacing: "-0.5px", lineHeight: "27.2px" }}
              >
                Get Started Now
                <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:w-3.5 sm:h-3.5"
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

            {/* Right Image */}
            <div className="flex-1 w-full lg:max-w-[500px] flex justify-center">
              <Image
                src="/feature1.png"
                alt="Smart Rent Automation Dashboard"
                width={500}
                height={400}
                className="w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px] h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Feature 2 - Complete Tenant & Accounting Control */}
          <div className="w-full bg-gradient-to-br from-[#F5F0FF] to-[#FAF7FF] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row-reverse items-center lg:items-start gap-6 lg:gap-8">
            {/* Left Content */}
            <div className="flex-1 w-full lg:max-w-[500px]">
              {/* Icon */}
             <div className="w-14 h-14 sm:w-14 sm:h-14  flex mb-1 ">
                <Image
                  src="/logo.png"
                  alt="Home Icon"
                  width={52}
                  height={52}
                  className="w-12 h-12 sm:w-12 sm:h-12"
                />
              </div>
              {/* Title */}
              <h3 
                className="font-fustat text-[#0F0F0F] font-bold text-[24px] sm:text-[28px] lg:text-[32px] leading-[32px] sm:leading-[36px] lg:leading-[42px] mb-3 sm:mb-4"
                style={{ letterSpacing: '-0.5px' }}
              >
                Complete Tenant<br />
                <span className="text-[#0F8BFF]">& Accounting Control</span>
              </h3>

              {/* Description */}
              <p 
                className="font-inter text-[#5D5B63] font-normal text-[13px] sm:text-[14px] lg:text-[15px] leading-[22px] sm:leading-[24px] lg:leading-[25.5px] mb-5 sm:mb-6"
                style={{ letterSpacing: '-0.56px' }}
              >
                All tenant and money records in one place, always up-to-date.<br className="hidden sm:block" />
                From smart details to income and expense tracking.
              </p>

              {/* Feature List */}
              <ul className="space-y-3 sm:space-y-3.5 mb-6 sm:mb-7">
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                  </div>
                  <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[14px] leading-[22px] sm:leading-[23.8px]" style={{ letterSpacing: '-0.56px' }}>
                    Quick tenant onboarding with eKYC
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                  </div>
                  <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[14px] leading-[22px] sm:leading-[23.8px]" style={{ letterSpacing: '-0.56px' }}>
                    Tenant profiles with payment history
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                  </div>
                  <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[14px] leading-[22px] sm:leading-[23.8px]" style={{ letterSpacing: '-0.56px' }}>
                    Real-time income & expense tracking
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                  </div>
                  <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[14px] leading-[22px] sm:leading-[23.8px]" style={{ letterSpacing: '-0.56px' }}>
                    One view to manage multiple PGs and properties
                  </span>
                </li>
              </ul>

              {/* CTA Button */}
              <button
                className="font-inter flex items-center gap-2 bg-[#0F8BFF] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-normal text-[13px] sm:text-[14px] hover:bg-[#0d7ae6] hover:shadow-[0_4px_4px_0_rgba(255,255,255,0.35)_inset] transition-all duration-200 shadow-[0_4px_4px_0_rgba(255,255,255,0.35)_inset]"
                style={{ letterSpacing: "-0.5px", lineHeight: "27.2px" }}
              >
                Get Started Now
                <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:w-3.5 sm:h-3.5"
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

            {/* Right Image */}
            <div className="flex-1 w-full lg:max-w-[500px] flex justify-center">
              <Image
                src="/feature2.png"
                alt="Tenant & Accounting Dashboard"
                width={500}
                height={400}
                className="w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px] h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Feature 3 - Properties, Rooms & Complaints */}
          <div className="w-full bg-gradient-to-br from-[#E8F5FF] to-[#F0F8FF] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
            {/* Left Content */}
            <div className="flex-1 w-full lg:max-w-[500px]">
              {/* Icon */}
              <div className="w-14 h-14 sm:w-14 sm:h-14  flex mb-1 ">
                <Image
                  src="/logo.png"
                  alt="Home Icon"
                  width={52}
                  height={52}
                  className="w-12 h-12 sm:w-12 sm:h-12"
                />
              </div>

              {/* Title */}
              <h3 
                className="font-fustat text-[#0F0F0F] font-bold text-[24px] sm:text-[28px] lg:text-[32px] leading-[32px] sm:leading-[36px] lg:leading-[42px] mb-3 sm:mb-4"
                style={{ letterSpacing: '-0.5px' }}
              >
                Properties, Rooms &<br />
                <span className="text-[#0F8BFF]">Complaints -All in One Place</span>
              </h3>

              {/* Description */}
              <p 
                className="font-inter text-[#5D5B63] font-normal text-[13px] sm:text-[14px] lg:text-[15px] leading-[22px] sm:leading-[24px] lg:leading-[25.5px] mb-5 sm:mb-6"
                style={{ letterSpacing: '-0.56px' }}
              >
                Manage all your PG properties without confusion/ manual<br className="hidden sm:block" />
                Get a clear view of rooms, beds, tenants, and complaints across<br className="hidden sm:block" />
                all properties - always, from one phone.
              </p>

              {/* Feature List */}
              <ul className="space-y-3 sm:space-y-3.5 mb-6 sm:mb-7">
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                  </div>
                  <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[14px] leading-[22px] sm:leading-[23.8px]" style={{ letterSpacing: '-0.56px' }}>
                    Real-time room & bed occupancy status
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                  </div>
                  <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[14px] leading-[22px] sm:leading-[23.8px]" style={{ letterSpacing: '-0.56px' }}>
                    Easy tenant shifting between rooms or properties
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                  </div>
                  <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[14px] leading-[22px] sm:leading-[23.8px]" style={{ letterSpacing: '-0.56px' }}>
                    Digital complaint tracking with their status updates
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0F0F0F] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                  </div>
                  <span className="font-inter text-[#0F0F0F] font-normal text-[13px] sm:text-[14px] leading-[22px] sm:leading-[23.8px]" style={{ letterSpacing: '-0.56px' }}>
                    Manage multiple PG properties from one dashboard
                  </span>
                </li>
              </ul>

              {/* CTA Button */}
              <button
                className="font-inter flex items-center gap-2 bg-[#0F8BFF] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-normal text-[13px] sm:text-[14px] hover:bg-[#0d7ae6] hover:shadow-[0_4px_4px_0_rgba(255,255,255,0.35)_inset] transition-all duration-200 shadow-[0_4px_4px_0_rgba(255,255,255,0.35)_inset]"
                style={{ letterSpacing: "-0.5px", lineHeight: "27.2px" }}
              >
                Get Started Now
                <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sm:w-3.5 sm:h-3.5"
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

            {/* Right Image */}
            <div className="flex-1 w-full lg:max-w-[500px] flex justify-center">
              <Image
                src="/feature3.png"
                alt="Properties & Complaints Dashboard"
                width={500}
                height={400}
                className="w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px] h-auto rounded-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}