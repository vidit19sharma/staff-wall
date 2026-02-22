
import DashboardLayout from "./components/DashboardLayout";
import EmployeeGrid from "./components/EmployeeGrid";
import employeesData from "./data/employees.json";

function App() {
  return (
    <DashboardLayout>
      <EmployeeGrid rowData={employeesData.employees} />
    </DashboardLayout>
  );
}

export default App;