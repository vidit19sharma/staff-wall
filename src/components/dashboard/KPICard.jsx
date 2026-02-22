const KPICard = ({ title, value, icon, subtitle, colorClass }) => {
  return (
    <div className={`rounded-xl p-5 shadow-sm ${colorClass}`}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-white/80">{title}</p>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
          {icon}
        </div>
      </div>
      <p className="mt-2 text-2xl font-bold text-white">{value}</p>
      {subtitle && (
        <p className="mt-1 text-xs text-white/70">{subtitle}</p>
      )}
    </div>
  );
};

export default KPICard;
