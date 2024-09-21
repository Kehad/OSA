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
        <Box color="#fff" fontFamily='body.b1'>
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
              <Tr fontFamily='heading.h1'>
                <Th color="#fff" border='none' fontSize={{ base: "xs", md: "sm", lg: "md" }} fontFamily='inherit'>Accounts</Th>
                <Th color="#fff" border='none' fontSize={{ base: "xs", md: "sm", lg: "md" }} fontFamily='inherit'>Information</Th>
                <Th color="#fff" border='none' fontSize={{ base: "xs", md: "sm", lg: "md" }} display={{ base: "none", md: "table-cell" }} fontFamily='inherit'>Quick Links</Th>
                <Th color="#fff" border='none' fontSize={{ base: "xs", md: "sm", lg: "md" }} display={{ base: "none", md: "table-cell" }} fontFamily='inherit'>Schedules</Th>
              </Tr>
            </Thead>
            <Tbody border="none">
              <Tr border="none" fontFamily='body.b1'>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }} fontFamily='inherit'>Parent Log In</Td>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }} fontFamily='inherit'>About Us</Td>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }} display={{ base: "none", md: "table-cell" }} fontFamily='inherit'>Parent Help</Td>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }} display={{ base: "none", md: "table-cell" }} fontFamily='inherit'>School Schedule</Td>
              </Tr>
              <Tr fontFamily='body.b1'>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }} fontFamily='inherit'>Teacher Log In</Td>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }} fontFamily='inherit'>Contact Us</Td>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }} display={{ base: "none", md: "table-cell" }} fontFamily='inherit'>Teacher Help</Td>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }} display={{ base: "none", md: "table-cell" }} fontFamily='inherit'>Class Timetable</Td>
              </Tr>
              <Tr fontFamily='body.b1'>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }} fontFamily='inherit'>Admin Log In</Td>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }} fontFamily='inherit'>Blog</Td>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }} display={{ base: "none", md: "table-cell" }} fontFamily='inherit'>Feedback</Td>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }} display={{ base: "none", md: "table-cell" }} fontFamily='inherit'>Exam Timetable</Td>
              </Tr>
              <Tr fontFamily='body.b1'>
                <Td border="none"></Td>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }} fontFamily='inherit'>Terms and Conditions</Td>
                <Td border="none" fontSize={{ base: "xs", md: "sm", lg: "md" }} display={{ base: "none", md: "table-cell" }} fontFamily='inherit'>FAQs</Td>
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
