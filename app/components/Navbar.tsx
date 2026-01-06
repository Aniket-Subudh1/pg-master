import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-8">
      <div className="flex items-center justify-between bg-white/50 backdrop-blur-lg rounded-xl px-6 py-2 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)]">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="PG Master Logo"
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="text-base font-bold text-black">
            PG MASTER
          </span>
        </div>
        <button className="flex items-center gap-2 bg-white/60 text-black px-4 py-2 rounded-xl font-normal text-base hover:bg-white/80 hover:scale-105 hover:shadow-lg transition-all duration-200 shadow-[inset_0_4px_4px_0_rgba(255,255,255,0.35)]" style={{ letterSpacing: '-0.5px', lineHeight: '27.2px' }}>
          Get Started
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white group-hover:scale-110 transition-transform">
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
      </div>
    </nav>
  );
}
