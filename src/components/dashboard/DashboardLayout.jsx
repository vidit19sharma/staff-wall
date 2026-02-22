import { useState, useRef, useCallback } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import useEmployeeData from "@/hooks/useEmployeeData";
import Header from "./Header";
import AppSidebar from "./AppSidebar";
import KPISection from "./KPISection";
import FiltersSection from "./FiltersSection";
import EmployeeGrid from "./EmployeeGrid";

const DashboardLayout = () => {
  const [searchText, setSearchText] = useState("");
  const [department, setDepartment] = useState("All");
  const [status, setStatus] = useState("All");
  const gridRef = useRef(null);

  const { filteredData, kpis } = useEmployeeData({ searchText, department, status });

  const handleExportCsv = useCallback(() => {
    gridRef.current?.exportCsv();
  }, []);

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="flex min-h-screen w-full flex-col">
        <Header searchText={searchText} onSearchChange={setSearchText} />
        <div className="flex flex-1">
          <AppSidebar />
          <main className="flex-1 space-y-6 p-4 sm:p-6">
            <KPISection kpis={kpis} />
            <FiltersSection
              department={department}
              status={status}
              onDepartmentChange={setDepartment}
              onStatusChange={setStatus}
              onExportCsv={handleExportCsv}
            />
            <EmployeeGrid ref={gridRef} rowData={filteredData} searchText={searchText} />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
