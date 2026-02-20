import DashboardHeader from "../components/dashboard/DashboardHeader";
import PendingActions from "../components/dashboard/PendingActions";
import PropertyCards from "../components/dashboard/PropertyCards";
import Statistics from "../components/dashboard/Statistics";

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader />
      <PropertyCards />
      <div className="flex gap-6">
        <PendingActions />
        <Statistics />
      </div>
    </>
  );
}
