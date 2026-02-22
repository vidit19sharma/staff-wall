import { useMemo } from "react";
import employees from "@/data/employees";

export default function useEmployeeData(filters) {
  const { searchText = "", department = "All", status = "All" } = filters || {};

  const filteredData = useMemo(() => {
    return employees.filter((emp) => {
      const matchesDept = department === "All" || emp.department === department;
      const matchesStatus = status === "All" || emp.status === status;
      const matchesSearch =
        !searchText ||
        Object.values(emp)
          .join(" ")
          .toLowerCase()
          .includes(searchText.toLowerCase());
      return matchesDept && matchesStatus && matchesSearch;
    });
  }, [searchText, department, status]);

  const kpis = useMemo(() => {
    const total = filteredData.length;
    const active = filteredData.filter((e) => e.status === "Active").length;
    const avgSalary = total > 0 ? filteredData.reduce((s, e) => s + e.salary, 0) / total : 0;
    const avgRating = total > 0 ? filteredData.reduce((s, e) => s + e.rating, 0) / total : 0;
    return { total, active, avgSalary, avgRating };
  }, [filteredData]);

  return { filteredData, kpis };
}
