import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { AttendanceChartData } from "../types";

// / Custom Donut Chart Component using Recharts
const DonutChart = ({ data, colors }: { data: AttendanceChartData[], colors: string[] }) => {
  const RADIAN = Math.PI / 180;
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize="12"
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="relative w-32 h-32">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={60}
            innerRadius={25}
            fill="#8884d8"
            dataKey="value"
            startAngle={90}
            endAngle={450}
          >
            {data.map((entry: any, index: number) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChart;