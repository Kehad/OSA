import { ChevronDown } from "lucide-react";

export const FilterDropdown = ({ label, placeholder, value, options, onChange }: any) => (
  <div className="flex items-center gap-4 w-full md:w-[480px] mb-4">
    <label className="w-20 text-[#333] font-medium text-sm shrink-0">{label}</label>
    <div className="relative flex-1">
      <select 
        className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2.5 pr-10 text-gray-600 focus:outline-none focus:ring-1 focus:ring-green-900/20 transition-all cursor-pointer text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((opt: string) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  </div>
);

// use this later


// import { ChevronDown } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// export const FilterDropdown = ({ label, placeholder, value, options, onChange }: any) => (
//   <div className="flex items-center gap-4 w-full md:w-[480px] mb-4">
//     <label className="w-20 text-[#333] font-medium text-sm shrink-0">{label}</label>
//     <div className="relative flex-1">
//       <DropdownMenu>
//         <DropdownMenuTrigger className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-gray-600 focus:outline-none focus:ring-1 focus:ring-green-900/20 transition-all cursor-pointer text-sm outline-none">
//           <span className={!value ? "text-gray-400" : "text-gray-600"}>
//             {value || placeholder}
//           </span>
//           <ChevronDown className="w-4 h-4 text-gray-400" />
//         </DropdownMenuTrigger>
//         <DropdownMenuContent 
//           align="start"
//           className="w-[var(--radix-dropdown-menu-trigger-width)] max-h-60 overflow-y-auto"
//         >
//           {options.map((opt: string) => (
//             <DropdownMenuItem 
//               key={opt} 
//               className="cursor-pointer"
//               onClick={() => onChange(opt)}
//             >
//               {opt}
//             </DropdownMenuItem>
//           ))}
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   </div>
// );
