import Image from "next/image";

export default function ProblemsSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Heading */}
        <h2 
          className="font-fustat text-center text-[#0F0F0F] font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-[38.4px] sm:leading-[48px] lg:leading-[57.6px] mb-4 px-2"
          style={{ letterSpacing: '-2px' }}
        >
          Problems Every PG Owner Faces
        </h2>

        {/* Subheading */}
        <p 
          className="font-inter text-center text-[#5D5B63] font-normal text-[14px] sm:text-[16px] leading-[23.8px] sm:leading-[27.2px] mb-8 sm:mb-12 px-4"
          style={{ letterSpacing: '-0.5px' }}
        >
          Daily manual work and constant follow-ups make PG management stressful
        </p>

        {/* Three Column Cards */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 sm:gap-[17px] mb-8 sm:mb-12">
          {/* Card 1 - Vacancy Confusion */}
          <div className="w-full lg:w-[330px] bg-[#F3FAFF] rounded-[10px] flex flex-col overflow-hidden">
            <div className="px-5 sm:px-[24px] pt-6 sm:pt-[30px] pb-4 sm:pb-[16px]">
              <h3 
                className="font-fustat text-[#0F0F0F] font-bold text-[20px] sm:text-[24px] leading-[30px] sm:leading-[36px] mb-2 sm:mb-3"
                style={{ letterSpacing: '-0.5px' }}
              >
                Vacancy Confusion
              </h3>
              <p 
                className="font-inter text-[#5D5B63] font-normal text-[13px] sm:text-[14px] leading-[22px] sm:leading-[23.8px]"
                style={{ letterSpacing: '-0.56px' }}
              >
                Owner never fully sure which bed is vacant, occupied, or leaving soon.
              </p>
            </div>
            <div className="relative w-full flex justify-center">
              <Image
                src="/p1.png"
                alt="Vacancy Confusion Dashboard"
                width={282}
                height={196}
                className="w-[240px] sm:w-[280px] h-auto"
              />
            </div>
          </div>

          {/* Card 2 - Rent Collection Stress */}
          <div className="w-full lg:w-[330px] bg-[#F7F1FF] rounded-[10px] flex flex-col overflow-hidden">
            <div className="px-5 sm:px-[24px] pt-6 sm:pt-[30px] pb-4 sm:pb-[16px]">
              <h3 
                className="font-fustat text-[#0F0F0F] font-bold text-[20px] sm:text-[24px] leading-[30px] sm:leading-[36px] mb-2 sm:mb-3"
                style={{ letterSpacing: '-0.5px' }}
              >
                Rent Collection Stress
              </h3>
              <p 
                className="font-inter text-[#5D5B63] font-normal text-[13px] sm:text-[14px] leading-[22px] sm:leading-[23.8px]"
                style={{ letterSpacing: '-0.56px' }}
              >
                Rent collection involves chasing tenants with constant stress.
              </p>
            </div>
            <div className="relative w-full flex justify-center">
              <Image
                src="/p2.png"
                alt="Rent Collection Dashboard"
                width={282}
                height={196}
                className="w-[240px] sm:w-[280px] h-[180px]"
              />
            </div>
          </div>

          {/* Card 3 - Complaint Management */}
          <div className="w-full lg:w-[330px] bg-[#F3FAFF] rounded-[10px] flex flex-col overflow-hidden">
            <div className="px-5 sm:px-[24px] pt-6 sm:pt-[30px] pb-4 sm:pb-[16px]">
              <h3 
                className="font-fustat text-[#0F0F0F] font-bold text-[20px] sm:text-[24px] leading-[30px] sm:leading-[36px] mb-2 sm:mb-3"
                style={{ letterSpacing: '-0.5px' }}
              >
                Complaint Management
              </h3>
              <p 
                className="font-inter text-[#5D5B63] font-normal text-[13px] sm:text-[14px] leading-[22px] sm:leading-[23.8px]"
                style={{ letterSpacing: '-0.56px' }}
              >
                No proper tracking of complaints and issues, causing confusion.
              </p>
            </div>
            <div className="relative w-full flex justify-center">
              <Image
                src="/p3.png"
                alt="Complaint Management Dashboard"
                width={282}
                height={200}
                className="w-[240px] sm:w-[280px] h-[180px]"
              />
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="flex flex-col items-center px-4">
          {/* Quote Text - First Part */}
          <p 
            className="font-fustat text-center text-[#0F0F0F] font-bold text-[18px] sm:text-[20px] lg:text-[24px] leading-[27px] sm:leading-[30px] lg:leading-[36px] max-w-[792px] mb-1"
            style={{ letterSpacing: '-0.5px' }}
          >
            " Pehle rent aur complaints ke liye roz tension hoti thi. Ab sab ek jagah
          </p>

          <p 
            className="font-fustat text-center text-[#0F0F0F] font-bold text-[18px] sm:text-[20px] lg:text-[24px] leading-[27px] sm:leading-[30px] lg:leading-[36px] max-w-[674px] mb-4 sm:mb-6"
            style={{ letterSpacing: '-0.5px' }}
          >
            manage ho jata hai, aur daily follow-ups ka stress kam ho gaya "
          </p>

          <div className="flex items-center gap-3">
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/ramesh.png"
                alt="Ramesh Patel"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div>
              <p 
                className="font-inter text-[#0F0F0F] font-medium text-[14px] sm:text-[15.8px] leading-[24px] sm:leading-[27.2px]"
                style={{ letterSpacing: '-0.5px' }}
              >
                Ramesh Patel
              </p>
              <p 
                className="font-inter text-[#5D5B63] font-normal text-[12px] sm:text-[14px] leading-[20px] sm:leading-[23.8px]"
                style={{ letterSpacing: '-0.56px' }}
              >
                Owner, Shree Krishna PG ( 6000+ Beds )
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}