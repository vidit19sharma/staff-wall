const SalaryCell = ({ value }) => {
  const formatted = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

  return <span className="font-medium">{formatted}</span>;
};

export default SalaryCell;
