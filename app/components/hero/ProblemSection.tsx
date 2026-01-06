import Image from "next/image";

export default function ProblemsSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Heading */}
        <h2 
          className="font-fustat text-center text-[#0F0F0F] font-bold text-[48px] leading-[57.6px] mb-4"
          style={{ letterSpacing: '-2px' }}
        >
          Problems Every PG Owner Faces
        </h2>

        {/* Subheading */}
        <p 
          className="font-inter text-center text-[#5D5B63] font-normal text-[16px] leading-[27.2px] mb-12"
          style={{ letterSpacing: '-0.5px' }}
        >
          Daily manual work and constant follow-ups make PG management stressful
        </p>

        {/* Three Column Cards */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-[17px] mb-12">
          {/* Card 1 - Vacancy Confusion */}
          <div className="w-full lg:w-[330px] bg-[#F3FAFF] rounded-[10px] flex flex-col overflow-hidden">
            <div className="px-[24px] pt-[30px] pb-[16px]">
              <h3 
                className="font-fustat text-[#0F0F0F] font-bold text-[24px] leading-[36px] mb-3"
                style={{ letterSpacing: '-0.5px' }}
              >
                Vacancy Confusion
              </h3>
              <p 
                className="font-inter text-[#5D5B63] font-normal text-[14px] leading-[23.8px]"
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
    className="w-[280px] h-auto"
  />
</div>

          </div>

          {/* Card 2 - Rent Collection Stress */}
          <div className="w-full lg:w-[330px] bg-[#F7F1FF] rounded-[10px] flex flex-col overflow-hidden">
            <div className="px-[24px] pt-[30px] pb-[16px]">
              <h3 
                className="font-fustat text-[#0F0F0F] font-bold text-[24px] leading-[36px] mb-3"
                style={{ letterSpacing: '-0.5px' }}
              >
                Rent Collection Stress
              </h3>
              <p 
                className="font-inter text-[#5D5B63] font-normal text-[14px] leading-[23.8px]"
                style={{ letterSpacing: '-0.56px' }}
              >
                Rent collection involves chasing tenants with constant stress.
              </p>
            </div>
           <div className="relative w-full flex justify-center">
  <Image
    src="/p2.png"
    alt="Vacancy Confusion Dashboard"
    width={282}
    height={196}
    className="w-[280px] h-auto"
  />
</div>
          </div>

          {/* Card 3 - Complaint Management */}
          <div className="w-full lg:w-[330px] bg-[#F3FAFF] rounded-[10px] flex flex-col overflow-hidden">
            <div className="px-[24px] pt-[30px] pb-[16px]">
              <h3 
                className="font-fustat text-[#0F0F0F] font-bold text-[24px] leading-[36px] mb-3"
                style={{ letterSpacing: '-0.5px' }}
              >
                Complaint Management
              </h3>
              <p 
                className="font-inter text-[#5D5B63] font-normal text-[14px] leading-[23.8px]"
                style={{ letterSpacing: '-0.56px' }}
              >
                No proper tracking of complaints and issues, causing confusion.
              </p>
            </div>
            <div className="relative w-full flex justify-center">
  <Image
    src="/p3.png"
    alt="Vacancy Confusion Dashboard"
    width={282}
    height={196}
    className="w-[280px] h-auto"
  />
</div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="flex flex-col items-center">
          {/* Quote Text - First Part */}
          <p 
            className="font-fustat text-center text-[#0F0F0F] font-bold text-[24px] leading-[36px] max-w-[792px] mb-1"
            style={{ letterSpacing: '-0.5px' }}
          >
            " Pehle rent aur complaints ke liye roz tension hoti thi. Ab sab ek jagah
          </p>

          {/* Quote Text - Second Part */}
          <p 
            className="font-fustat text-center text-[#0F0F0F] font-bold text-[24px] leading-[36px] max-w-[674px] mb-6"
            style={{ letterSpacing: '-0.5px' }}
          >
            manage ho jata hai, aur daily follow-ups ka stress kam ho gaya "
          </p>

          {/* Author Profile */}
          <div className="flex items-center gap-3">
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
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
                className="font-inter text-[#0F0F0F] font-medium text-[15.8px] leading-[27.2px]"
                style={{ letterSpacing: '-0.5px' }}
              >
                Ramesh Patel
              </p>
              <p 
                className="font-inter text-[#5D5B63] font-normal text-[14px] leading-[23.8px]"
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