const StatusBadge = ({ value }) => {
  const isActive = value === "Active";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
        isActive
          ? "bg-emerald-100 text-emerald-800"
          : "bg-red-100 text-red-800"
      }`}
    >
      <span
        className={`mr-1.5 h-1.5 w-1.5 rounded-full ${
          isActive ? "bg-emerald-500" : "bg-red-500"
        }`}
      />
      {value}
    </span>
  );
};

export default StatusBadge;
