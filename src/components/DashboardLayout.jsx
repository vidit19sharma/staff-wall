export default function DashboardLayout({ children }) {
  return (
    <div style={{ background: "#f5f6fa", minHeight: "100vh", padding: "24px" }}>
      <h1 style={{ marginBottom: "24px" }}>FactWise Employee Dashboard</h1>
      {children}
    </div>
  );
}