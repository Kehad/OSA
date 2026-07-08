// Legend Component
const Legend = ({ items }: { items: any[] }) => {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item: any, index: number) => (
        <div key={index} className="flex items-center space-x-2 text-sm">
          <div
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: item.color }}
          ></div>
          <span className="text-gray-600 text-xs">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;