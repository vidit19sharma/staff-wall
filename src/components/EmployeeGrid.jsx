import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useMemo } from "react";

export default function EmployeeGrid({ rowData }) {
  const columnDefs = useMemo(() => [
    { field: "id", sortable: true, filter: true },
    { field: "firstName", sortable: true, filter: true },
    { field: "lastName", sortable: true, filter: true },
    { field: "email", filter: true },
    { field: "department", filter: true },
    { field: "position" },
    { 
      field: "salary",
      valueFormatter: params =>
        `$${params.value.toLocaleString()}`
    },
    { field: "performanceRating", sortable: true },
    { field: "projectsCompleted" },
    { field: "location" },
    { field: "isActive" }
  ], []);

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: 600, width: "100%", background: "white", padding: "16px", borderRadius: "8px" }}
    >
      <AgGridReact
        theme="quartz"
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={true}
        paginationPageSize={10}
        defaultColDef={{
          resizable: true,
          flex: 1
        }}
      />
    </div>
  );
}