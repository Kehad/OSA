import { StatCardProps } from "../types";

// / Statistics Card Component
const StatCard = ({ title, value, gradient }: StatCardProps) => {
  return (
    <div 
      className="rounded-3xl p-6 text-white shadow-lg relative overflow-hidden"
      style={{
        background: gradient,
        minHeight: '120px'
      }}
    >
      <div className="relative z-10">
        <h3 className="text-sm font-normal text-white/80 mb-2">{title}</h3>
        <p className="text-4xl font-bold text-yellow-300">{value}</p>
      </div>
      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full transform translate-x-8 -translate-y-8"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/5 rounded-full transform translate-x-4 translate-y-4"></div>
    </div>
  );
};

export default StatCard;