// import DonutChart from "./Doughnut";
// import Legend from "./legend";

// // Attendance Card Component
// const AttendanceCard = ({ isDate }) => {
//   const [selectedTerm, setSelectedTerm] = useState.
//    ("This term");
//   const attendanceData = [
//     { name: "Present", value: 75 },
//     { name: "Absent", value: 25 },
//   ];

//   const colors = ["#FCD34D", "#FEF3C7"];

//   const legendItems = [
//     { color: "#FEF3C7", label: "25% Absent" },
//     { color: "#FCD34D", label: "75% Present" },
//   ];

//   return (
//     <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
//       <div className="flex justify-between items-center mb-6">
//         <h3 className="text-lg font-semibold text-gray-900">
//           Student Attendance
//         </h3>
//         {isDate ? (
//           <span className="text-sm text-gray-500">24/10/2020</span>
//         ) : (
//           <div className="relative">
//             <select
//               value={selectedTerm}
//               onChange={(e) => setSelectedTerm(e.target.value)}
//               className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             >
//               <option>This term</option>
//               <option>Last term</option>
//               <option>This year</option>
//             </select>
//             <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
//           </div>
//         )}
//       </div>

//       <div className="flex items-start justify-between">
//         <div className="flex flex-col items-center">
//           <DonutChart data={attendanceData} colors={colors} />
//           <Legend items={legendItems} />
//         </div>

//         <div className="flex flex-col space-y-6 text-right ml-8">
//           <div>
//             <p className="text-sm text-gray-600 mb-1">
//               No. of students present:
//             </p>
//             <p className="text-3xl font-bold text-gray-900">75</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-600 mb-1">
//               No. of students absent:
//             </p>
//             <p className="text-3xl font-bold text-gray-900">25</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-8 text-center">
//         <button className="text-blue-500 hover:text-blue-600 text-sm font-medium hover:underline">
//           View attendance
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AttendanceCard;


// import { useState } from "react";
// import DonutChart from "./Doughnut";
// import Legend from "./legend";
// import { ChevronDown } from "lucide-react";

// /**
//  * Reusable AttendanceCard component.
//  * @param {Object} props
//  * @param {boolean} props.isDate - Show date or term selector.
//  * @param {string} [props.date] - Date string to display if isDate is true.
//  * @param {Array} [props.attendanceData] - Array of attendance data objects [{ name, value }]
//  * @param {Array} [props.legendItems] - Array of legend items [{ color, label }]
//  * @param {string[]} [props.colors] - Array of colors for the chart.
//  * @param {string[]} [props.terms] - Array of term options for the select.
//  * @param {function} [props.onTermChange] - Callback when term changes.
//  * @param {function} [props.onViewAttendance] - Callback for "View attendance" button.
//  * @param {number} [props.present] - Number of students present.
//  * @param {number} [props.absent] - Number of students absent.
//  * @param {string} [props.title] - Card title.
//  */
// const AttendanceCard = ({
//   isDate,
//   date,
//   attendanceData,
//   legendItems,
//   colors,
//   terms,
//   onTermChange,
//   onViewAttendance,
//   present,
//   absent,
//   title,
// }) => {
//   const [selectedTerm, setSelectedTerm] = useState(terms[0]);

//   const handleTermChange = (e) => {
//     setSelectedTerm(e.target.value);
//     if (onTermChange) onTermChange(e.target.value);
//   };

//   return (
//     <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
//       <div className="flex justify-between items-center mb-6">
//         <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
//         {isDate ? (
//           <span className="text-sm text-gray-500">{date}</span>
//         ) : (
//           <div className="relative">
//             <select
//               value={selectedTerm}
//               onChange={handleTermChange}
//               className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             >
//               {terms.map((term) => (
//                 <option key={term}>{term}</option>
//               ))}
//             </select>
//             <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
//           </div>
//         )}
//       </div>

//       <div className="flex items-start justify-between">
//         <div className="flex flex-col items-center">
//           <DonutChart data={attendanceData} colors={colors} />
//           <Legend items={legendItems} />
//         </div>

//         <div className="flex flex-col space-y-6 text-right ml-8">
//           <div>
//             <p className="text-sm text-gray-600 mb-1">No. of students present:</p>
//             <p className="text-3xl font-bold text-gray-900">{present}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-600 mb-1">No. of students absent:</p>
//             <p className="text-3xl font-bold text-gray-900">{absent}</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-8 text-center">
//         <button
//           className="text-blue-500 hover:text-blue-600 text-sm font-medium hover:underline"
//           onClick={onViewAttendance}
//         >
//           View attendance
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AttendanceCard



import { useState } from "react";
import DonutChart from "./Doughnut";
import Legend from "./legend";
import { ChevronDown } from "lucide-react";

/**
 * Reusable AttendanceCard component.
 * @param {Object} props
 * @param {boolean} [props.isDate] - If true, shows date instead of term selector.
 * @param {string} [props.date] - Date string to display if isDate is true.
 * @param {Array<{ name: string, value: number }>} [props.attendanceData] - Attendance data for chart.
 * @param {Array<{ color: string, label: string }>} [props.legendItems] - Items for the legend.
 * @param {Array<{ title: string, value: string }>} [props.itemsData] - Items for the legend.
 * @param {string[]} [props.colors] - Chart segment colors.
 * @param {string[]} [props.terms] - Term options for the dropdown.
 * @param {function} [props.onTermChange] - Callback on term change.
 * @param {function} [props.onViewAttendance] - Callback for "View attendance" button.
 * @param {number|string} [props.present] - Present count.
 * @param {number|string} [props.absent] - Absent count.
 * @param {string} [props.title] - Card title.
 */
const AttendanceCard = ({
  isDate = false,
  date = "24/10/2020",
  attendanceData,
  legendItems,
  colors,
  terms,
  onTermChange,
  // onViewAttendance,
  present,
  absent,
  itemData,
  title = "Student Attendance",
}) => {
  const defaultData = [
    { name: "Present", value: 75 },
    { name: "Absent", value: 25 },
  ];
  const defaultLegend = [
    { color: "#FEF3C7", label: "25% Absent" },
    { color: "#FCD34D", label: "75% Present" },
  ];
  const defaultColors = ["#FCD34D", "#FEF3C7"];
  const defaultTerms = ["This term", "Last term", "This year"];

  const [selectedTerm, setSelectedTerm] = useState(
    terms?.[0] || defaultTerms[0]
  );

  const handleTermChange = (e) => {
    const newTerm = e.target.value;
    setSelectedTerm(newTerm);
    onTermChange?.(newTerm);
  };

  return (
    <div className="bg-white font-lato rounded-3xl p-4 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {isDate ? (
          <span className="text-sm text-gray-500">{date}</span>
        ) : (
          <div className="relative">
            <select
              value={selectedTerm}
              onChange={handleTermChange}
              className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2 pr-8 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {(terms || defaultTerms).map((term) => (
                <option key={term}>{term}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        )}
      </div>

      <div className="flex items-start justify-between">
        <div className="flex flex-col items-center">
          <DonutChart
            data={attendanceData || defaultData}
            colors={colors || defaultColors}
          />
          {/* <Legend items={legendItems || defaultLegend} /> */}
        </div>

        <div className="flex flex-col space-y-6 text-right ml-8">
          {itemData.map((item) => (
            <div key={item.title} >
              <p className="text-sm text-gray-600 mb-1 text-left">
                {item?.title || ""}
              </p>
              <p className="text-3xl font-bold text-gray-900 text-left">
                {item?.value || ""}
              </p>
            </div>
          ))}
          
        </div>
      </div>

      <div className="mt-2 text-right">
        <button
          className="text-blue-500 hover:text-blue-600 text-sm font-medium hover:underline"
          // onClick={onViewAttendance}
        >
          View attendance
        </button>
      </div>
    </div>
  );
};

export default AttendanceCard;
