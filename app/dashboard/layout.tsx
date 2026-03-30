import type { Metadata } from "next";
import CalendarPanel from "../components/dashboard/CalendarPanel";
import Sidebar from "../components/dashboard/Sidebar";
import { AuthProvider } from '../context/AuthContext';

export const metadata: Metadata = {
  title: "Dashboard | PG Master",
  description: "Manage your PG and hostel properties, tenants, rent collection, and operations from the PG Master dashboard.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
    <div
      className="flex h-screen overflow-hidden"
      style={{
        background: "#F4F7FB",
      }}
    >
      <Sidebar />
      <main className="flex-1 ml-[220px] overflow-y-auto flex flex-col">
        <div className="flex flex-1 h-full">
          <div className="flex-1 min-w-0 px-7 py-6 overflow-y-auto">
            {children}
          </div>
          <CalendarPanel />
        </div>
      </main>
    </div>
    </AuthProvider>
  );
}
