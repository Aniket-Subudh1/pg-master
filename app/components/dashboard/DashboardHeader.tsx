"use client";

import { useAuth } from "../../context/AuthContext";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

export default function DashboardHeader() {
  const { admin } = useAuth();
  const now = new Date();
  const dateStr = `Today is ${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

  const firstName = admin?.name?.split(" ")[0] ?? "Admin";

  return (
    <div className="flex items-center justify-between mb-7">
      {/* Greeting */}
      <div>
        <h1
          className="font-fustat font-bold text-[26px] text-[#0F0F0F]"
          style={{ letterSpacing: "-0.8px", lineHeight: "1.2" }}
        >
          Hello, {firstName} 👋
        </h1>
        <p className="font-inter text-[12.5px] text-[#7A7A8A] mt-0.5" style={{ letterSpacing: "-0.2px" }}>
          {dateStr}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2.5">
        {/* Persistent Search Bar */}
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-xl"
          style={{
            background: "#ffffff",
            border: "1px solid #E5E7EB",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            minWidth: "220px",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
            <path
              d="M21 21L17.5 17.5M19 11C19 15.418 15.418 19 11 19C6.582 19 3 15.418 3 11C3 6.582 6.582 3 11 3C15.418 3 19 6.582 19 11Z"
              stroke="#9CA3AF"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <input
            placeholder="Search properties, tenants…"
            className="flex-1 bg-transparent text-[12.5px] font-inter text-[#0F0F0F] placeholder-[#B0B0BE] outline-none"
          />
        </div>

        {/* Notification Bell */}
        <button
          className="w-9 h-9 rounded-xl flex items-center justify-center relative transition-all duration-200 hover:bg-gray-100 flex-shrink-0"
          style={{
            background: "#ffffff",
            border: "1px solid #E5E7EB",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 8C18 5.791 15.314 4 12 4C8.686 4 6 5.791 6 8C6 12 4 13 4 13H20C20 13 18 12 18 8ZM13.73 19C13.554 19.304 13.302 19.556 12.999 19.731C12.696 19.906 12.351 19.999 12 19.999C11.649 19.999 11.304 19.906 11.001 19.731C10.698 19.556 10.446 19.304 10.27 19"
              stroke="#5D5B63"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#0F8BFF] rounded-full border-2 border-white" />
        </button>

        {/* Add New Property button */}
        <button
          className="flex items-center gap-1.5 font-inter text-[13px] text-white font-medium px-4 py-2 rounded-xl transition-all duration-200 hover:opacity-90 flex-shrink-0"
          style={{
            background: "#0F8BFF",
            boxShadow: "0 2px 10px rgba(15,139,255,0.35)",
            letterSpacing: "-0.2px",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
          Add New Property
        </button>
      </div>
    </div>
  );
}
