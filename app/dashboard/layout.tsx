import CalendarPanel from "../components/dashboard/CalendarPanel";
import Sidebar from "../components/dashboard/Sidebar";
import { AuthProvider } from '../context/AuthContext';

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
