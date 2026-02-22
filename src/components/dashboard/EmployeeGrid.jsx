import { useRef, useMemo, useCallback, forwardRef, useImperativeHandle } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import StatusBadge from "@/components/renderers/StatusBadge";
import SalaryCell from "@/components/renderers/SalaryCell";
import RatingBadge from "@/components/renderers/RatingBadge";

const EmployeeGrid = forwardRef(({ rowData, searchText }, ref) => {
  const gridRef = useRef(null);

  useImperativeHandle(ref, () => ({
    exportCsv: () => {
      gridRef.current?.api?.exportDataAsCsv({ fileName: "employees.csv" });
    },
  }));

  const columnDefs = useMemo(
    () => [
      { field: "id", headerName: "ID", width: 70, filter: "agNumberColumnFilter" },
      { field: "name", headerName: "Name", minWidth: 160, filter: "agTextColumnFilter" },
      { field: "email", headerName: "Email", minWidth: 220, filter: "agTextColumnFilter" },
      { field: "department", headerName: "Department", minWidth: 130, filter: "agTextColumnFilter" },
      { field: "designation", headerName: "Designation", minWidth: 170, filter: "agTextColumnFilter" },
      {
        field: "salary",
        headerName: "Salary",
        minWidth: 130,
        filter: "agNumberColumnFilter",
        cellRenderer: SalaryCell,
      },
      {
        field: "status",
        headerName: "Status",
        width: 120,
        filter: "agTextColumnFilter",
        cellRenderer: StatusBadge,
      },
      {
        field: "rating",
        headerName: "Rating",
        width: 110,
        filter: "agNumberColumnFilter",
        cellRenderer: RatingBadge,
      },
      {
        field: "joinDate",
        headerName: "Join Date",
        width: 130,
        filter: "agDateColumnFilter",
        valueFormatter: (p) => {
          if (!p.value) return "";
          return new Date(p.value).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          });
        },
      },
      { field: "age", headerName: "Age", width: 80, filter: "agNumberColumnFilter" },
    ],
    []
  );

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      resizable: true,
      floatingFilter: true,
      flex: 0,
    }),
    []
  );

  const onGridReady = useCallback((params) => {
    params.api.sizeColumnsToFit();
  }, []);

  return (
    <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="ag-theme-alpine w-full" style={{ height: 540 }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 20]}
          quickFilterText={searchText}
          animateRows={true}
          onGridReady={onGridReady}
          rowHeight={44}
          headerHeight={46}
        />
      </div>
    </div>
  );
});

EmployeeGrid.displayName = "EmployeeGrid";

export default EmployeeGrid;
