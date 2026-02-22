const RatingBadge = ({ value }) => {
  let colorClass = "bg-red-100 text-red-800";
  if (value >= 4.0) colorClass = "bg-emerald-100 text-emerald-800";
  else if (value >= 3.5) colorClass = "bg-amber-100 text-amber-800";

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold ${colorClass}`}
    >
      ★ {value.toFixed(1)}
    </span>
  );
};

export default RatingBadge;
