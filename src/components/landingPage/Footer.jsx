// import {
//   Box,
//   Flex,
//   Image,
//   Table,
//   Tbody,
//   Td,
//   Text,
//   Th,
//   Thead,
//   Tr,
// } from "@chakra-ui/react";

import OSA_LOGO from "../../assets/OSA-LOGO.png";

function Footer() {
  return (
    <div className="flex z-index-10 w-full flex-col md:flex-row justify-evenly bg-[#] py-10 px-4 text-white">
      {/* Logo and Texts */}
      <div className="flex flex-col gap-5 items-center md:items-start mb-8 md:mb-0">
        <div className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] flex items-center justify-center">
          <img
            src={OSA_LOGO}
            alt="OSA logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="space-y-2 text-base font-normal">
          <p>pakdsmdkljaojdcmklzm mm</p>
          <p>pakdsmdkljaojdcmklzm mm</p>
          <p>pakdsmdkljaojdcmklzm mm</p>
        </div>
      </div>
      {/* Table */}
      <div className="w-full md:w-auto overflow-x-auto">
        <table className="min-w-[600px] w-full border-collapse text-white">
          <thead>
            <tr className="font-bold text-base border-b border-gray-700">
              <th className="py-2 px-4 text-left">Accounts</th>
              <th className="py-2 px-4 text-left">Information</th>
              <th className="py-2 px-4 text-left hidden md:table-cell">
                Quick Links
              </th>
              <th className="py-2 px-4 text-left hidden md:table-cell">
                Schedules
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="py-2 px-4">Parent Log In</td>
              <td className="py-2 px-4">About Us</td>
              <td className="py-2 px-4 hidden md:table-cell">Parent Help</td>
              <td className="py-2 px-4 hidden md:table-cell">
                School Schedule
              </td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2 px-4">Teacher Log In</td>
              <td className="py-2 px-4">Contact Us</td>
              <td className="py-2 px-4 hidden md:table-cell">Teacher Help</td>
              <td className="py-2 px-4 hidden md:table-cell">
                Class Timetable
              </td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2 px-4">Admin Log In</td>
              <td className="py-2 px-4">Blog</td>
              <td className="py-2 px-4 hidden md:table-cell">Feedback</td>
              <td className="py-2 px-4 hidden md:table-cell">Exam Timetable</td>
            </tr>
            <tr>
              <td className="py-2 px-4"></td>
              <td className="py-2 px-4">Terms and Conditions</td>
              <td className="py-2 px-4 hidden md:table-cell">FAQs</td>
              <td className="py-2 px-4 hidden md:table-cell"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Footer;
