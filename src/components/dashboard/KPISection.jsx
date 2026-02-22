import { Users, UserCheck, DollarSign, Star } from "lucide-react";
import KPICard from "./KPICard";

const KPISection = ({ kpis }) => {
  const formattedSalary = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(kpis.avgSalary);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
      <KPICard
        title="Total Employees"
        value={kpis.total}
        icon={<Users className="h-5 w-5 text-white" />}
        subtitle="Across all departments"
        colorClass="bg-kpi-blue"
      />
      <KPICard
        title="Active Employees"
        value={kpis.active}
        icon={<UserCheck className="h-5 w-5 text-white" />}
        subtitle={`${kpis.total > 0 ? ((kpis.active / kpis.total) * 100).toFixed(0) : 0}% of total`}
        colorClass="bg-kpi-green"
      />
      <KPICard
        title="Average Salary"
        value={formattedSalary}
        icon={<DollarSign className="h-5 w-5 text-white" />}
        subtitle="Per employee"
        colorClass="bg-kpi-amber"
      />
      <KPICard
        title="Avg Performance"
        value={kpis.avgRating.toFixed(1)}
        icon={<Star className="h-5 w-5 text-white" />}
        subtitle="Out of 5.0"
        colorClass="bg-kpi-rose"
      />
    </div>
  );
};

export default KPISection;
