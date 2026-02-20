"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 9.5L12 3L21 9.5V20C21 20.552 20.552 21 20 21H15V15H9V21H4C3.448 21 3 20.552 3 20V9.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Properties",
    href: "/dashboard/properties",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 21H21M4 21V8L12 3L20 8V21M9 21V15H15V21M9 10H10M14 10H15M9 14H10M14 14H15"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Tenants",
    href: "/dashboard/tenants",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M17 21V19C17 16.791 15.209 15 13 15H5C2.791 15 1 16.791 1 19V21M23 21V19C22.999 17.176 21.765 15.586 20 15.13M16 3.13C17.769 3.586 19 5.178 19 7C19 8.822 17.769 10.414 16 10.87M13 7C13 9.209 11.209 11 9 11C6.791 11 5 9.209 5 7C5 4.791 6.791 3 9 3C11.209 3 13 4.791 13 7Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Collections",
    href: "/dashboard/collections",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 6V12L16 14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 6V8M12 16V18M8 12H6M18 12H16M9.464 9.464L8.05 8.05M15.95 15.95L14.536 14.536M9.464 14.536L8.05 15.95M15.95 8.05L14.536 9.464"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Complaints",
    href: "/dashboard/complaints",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 15C21 15.552 20.552 16 20 16H8L4 20V4C4 3.448 4.448 3 5 3H20C20.552 3 21 3.448 21 4V15Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M9 8H16M9 12H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Staff",
    href: "/dashboard/staff",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M16 11C18.209 11 20 9.209 20 7C20 4.791 18.209 3 16 3M16 11C13.791 11 12 9.209 12 7C12 4.791 13.791 3 16 3M16 11V13M16 3V1M10 21C10 21 8 21 8 19C8 17 10 11 16 11C22 11 24 17 24 19C24 21 22 21 22 21H10ZM6 15H1C0.448 15 0 14.552 0 14V8C0 7.448 0.448 7 1 7H7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 15C13.657 15 15 13.657 15 12C15 10.343 13.657 9 12 9C10.343 9 9 10.343 9 12C9 13.657 10.343 15 12 15Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M19.622 10.395L18.795 8.693L20 7l-1-1.5-1.98.42-1.32-1.316.42-1.98L14.5 2l-1.395 1.205-1.91-.05L10 2 8.5 3l.42 1.98-1.316 1.317-1.98-.42L4 7l1.205 1.395-.05 1.91L4 11.5l1 1.5 1.98-.42 1.317 1.316-.42 1.98L9.5 17l1.895-1.205 1.91.05L14.5 17l1.5-1-.42-1.98 1.316-1.317 1.98.42L20 12.5l-1.205-1.895.827-1.815-.0001.605Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { admin, logout } = useAuth();

  const displayName = admin?.name || 'Admin';
  const displayEmail = admin?.email || 'admin@pgmaster.in';
  const initials = displayName.charAt(0).toUpperCase();

  return (
    <aside className="fixed left-0 top-0 h-full w-[220px] flex flex-col z-40"
      style={{
        background: "#ffffff",
        borderRight: "1px solid #E5E7EB",
        boxShadow: "2px 0 12px rgba(0,0,0,0.05)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-6 pt-7 pb-6">
        <Image src="/logo.png" alt="PG Master Logo" width={32} height={32} className="rounded-xl" />
        <span className="font-fustat font-bold text-[15px] text-[#0F0F0F]" style={{ letterSpacing: "-0.5px" }}>
          PG MASTER
        </span>
      </div>

      {/* Admin Profile Card */}
      <div className="mx-4 mb-6 rounded-2xl p-4 flex flex-col items-center"
        style={{
          background: "#F0F7FF",
          border: "1px solid #D9EDFF",
        }}
      >
        <div className="relative mb-2">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0F8BFF] to-[#0DCFF5] flex items-center justify-center text-white font-bold text-lg">
            {initials}
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#0F8BFF] border-2 border-white flex items-center justify-center">
            <svg width="8" height="8" viewBox="0 0 10 10" fill="white">
              <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </span>
        </div>
        <p className="font-fustat font-bold text-[13px] text-[#0F0F0F] text-center truncate w-full" style={{ letterSpacing: "-0.3px" }}>
          {displayName}
        </p>
        <p className="font-inter text-[11px] text-[#5D5B63] text-center truncate w-full">{displayEmail}</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-inter text-[13.5px] transition-all duration-200 ${
                isActive
                  ? "text-white font-medium"
                  : "text-[#3A3A4A] hover:bg-[#F4F7FB] hover:text-[#0F8BFF]"
              }`}
              style={
                isActive
                  ? {
                      background: "#0F8BFF",
                      boxShadow: "0 2px 8px rgba(15,139,255,0.3)",
                    }
                  : {}
              }
            >
              <span className={isActive ? "text-white" : "text-[#5D5B63]"}>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="px-3 pb-6">
        <button onClick={logout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-inter text-[13.5px] text-[#5D5B63] hover:bg-red-50 hover:text-red-500 transition-all duration-200">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 21H5C4.448 21 4 20.552 4 20V4C4 3.448 4.448 3 5 3H9M16 17L21 12L16 7M21 12H9"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Logout
        </button>
      </div>


    </aside>
  );
}
