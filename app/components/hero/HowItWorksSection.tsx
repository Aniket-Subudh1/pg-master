import Image from "next/image";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Sign Up",
      description: "Create your account in minutes and get instant access.",
      bgColor: "bg-[#F1F6FF]"
    },
    {
      number: "2",
      title: "Add Your Property",
      description: "Add your PG, rooms, beds, and basic details easily.",
      bgColor: "bg-[#F2F2FF]"
    },
    {
      number: "3",
      title: "Onboard Tenants",
      description: "Add tenants digitally with basic details and documents.",
      bgColor: "bg-[#F1F6FF]"
    },
    {
      number: "4",
      title: "Automate Rent & Dues",
      description: "Set monthly rent and due dates once & automatically tracks payments, dues.",
      bgColor: "bg-[#F2F2FF]"
    },
    {
      number: "5",
      title: "Manage Complaints",
      description: "Tenants raise complaints directly in the Tenants app in minutes.",
      bgColor: "bg-[#F1F6FF]"
    },
    {
      number: "6",
      title: "Track & Control Everything",
      description: "View rent collection, vacancies, and reports in real time.",
      bgColor: "bg-[#F2F2FF]"
    }
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Heading */}
        <h2 
          className="font-fustat text-center text-[#0F0F0F] font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-[38.4px] sm:leading-[48px] lg:leading-[57.6px] mb-3 sm:mb-4 px-2"
          style={{ letterSpacing: '-2px' }}
        >
          How it Works
        </h2>

        {/* Subheading */}
        <p 
          className="font-inter text-center text-[#5D5B63] font-normal text-[14px] sm:text-[16px] leading-[23.8px] sm:leading-[27.2px] mb-10 sm:mb-14 px-4 max-w-[748px] mx-auto"
          style={{ letterSpacing: '-0.5px' }}
        >
         <strong>PGMASTER</strong> helps PG owners manage rent, tenants, rooms, and complaints in a simple, step-by-step way.
        </p>

        {/* Six Column Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`${step.bgColor} rounded-[20px] p-6 sm:p-7 lg:p-8 flex flex-col`}
            >
              {/* Number Badge */}
              <div className="mb-5 sm:mb-6">
                <div className="inline-flex items-center justify-center w-[45px] h-[44px] bg-white rounded-[16px]">
                  <span 
                    className="font-fustat text-[#0F8BFF] font-bold text-[24px] leading-[36px]"
                    style={{ letterSpacing: '-0.5px' }}
                  >
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 
                className="font-fustat text-[#0F0F0F] font-bold text-[20px] sm:text-[22px] lg:text-[24px] leading-[30px] sm:leading-[33px] lg:leading-[36px] mb-3"
                style={{ letterSpacing: '-0.5px' }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p 
                className="font-inter text-[#5D5B63] font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] sm:leading-[24px] lg:leading-[27.2px]"
                style={{ letterSpacing: '-0.5px' }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}