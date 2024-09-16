import {
  Box,
  Flex,
  Image,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

import OSA_LOGO from "../../../assets/OSA-LOGO.png";

function Footer() {
  return (
    <Flex justifyContent='space-evenly'>
      <Flex direction="column" gap={5}>
        <Box width="200px" height="200px">
          <Image src={OSA_LOGO} alt="OSA logo" width="w-max" height="h-max" />
        </Box>
        <Box color="#fff">
          <Text fontWeight="400" fontSize="lg">
            pakdsmdkljaojdcmklzm mm{" "}
          </Text>
          <Text fontWeight="400" fontSize="lg">
            pakdsmdkljaojdcmklzm mm{" "}
          </Text>
          <Text fontWeight="400" fontSize="lg">
            pakdsmdkljaojdcmklzm mm{" "}
          </Text>
        </Box>
      </Flex>
      <Box>
        <Box overflowX="auto">
          <Table variant="simple" size={{ base: "sm", md: "md", lg: "lg" }} color="#fff" border="none">
            <Thead>
              <Tr>
                <Th color="#fff" border='none' fontSize={{ base: "xs", md: "sm", lg: "md" }}>Accounts</Th>
                <Th color="#fff" border='none' fontSize={{ base: "xs", md: "sm", lg: "md" }}>Information</Th>
                <Th color="#fff" border='none' fontSize={{ base: "xs", md: "sm", lg: "md" }} display={{ base: "none", md: "table-cell" }}>Quick Links</Th>
                <Th color="#fff" border='none' fontSize={{ base: "xs", md: "sm", lg: "md" }} display={{ base: "none", md: "table-cell" }}>Schedules</Th>
              </Tr>
            </Thead>
            <Tbody border="none">
              <Tr border="none">
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }}>Parent Log In</Td>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }}>About Us</Td>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }} display={{ base: "none", md: "table-cell" }}>Parent Help</Td>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }} display={{ base: "none", md: "table-cell" }}>School Schedule</Td>
              </Tr>
              <Tr>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }}>Teacher Log In</Td>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }}>Contact Us</Td>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }} display={{ base: "none", md: "table-cell" }}>Teacher Help</Td>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }} display={{ base: "none", md: "table-cell" }}>Class Timetable</Td>
              </Tr>
              <Tr>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }}>Admin Log In</Td>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }}>Blog</Td>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }} display={{ base: "none", md: "table-cell" }}>Feedback</Td>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }} display={{ base: "none", md: "table-cell" }}>Exam Timetable</Td>
              </Tr>
              <Tr>
                <Td border="none"></Td>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }}>Terms and Conditions</Td>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }} display={{ base: "none", md: "table-cell" }}>FAQs</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Flex>
  );
}

export default Footer;

{
  /* {[...Array(5)].map((_, rowIndex) => (
                <Tr key={rowIndex}>
                  {[...Array(4)].map((_, colIndex) => {
                    let content;
                    switch (colIndex) {
                      case 0:
                        content = `About Us ${rowIndex + 1}`;
                        break;
                      case 1:
                        content = `Services ${rowIndex + 1}`;
                        break;
                      case 2:
                        content = `Contact ${rowIndex + 1}`;
                        break;
                      case 3:
                        content = `FAQ ${rowIndex + 1}`;
                        break;
                      default:
                        content = `Item ${rowIndex + 1}-${colIndex + 1}`;
                    }
                    return <Td key={colIndex}>{content}</Td>;
                  })}
                </Tr>
                
                
                
                ))} */
}
