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
    <Flex>
      <Flex direction="column" gap={5}>
        <Box width="100px" height="100px">
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
          <Table variant="simple" size="lg" color="#fff" border="none">
            <Thead>
              <Tr>
                <Th color="#fff" border='none'>Accounts</Th>
                <Th color="#fff" border='none'>Information</Th>
                <Th color="#fff" border='none'>Quick Links</Th>
                <Th color="#fff" border='none'>Schedules</Th>
              </Tr>
            </Thead>
            <Tbody border="none">
              <Tr border="none">
                <Td border="none">Parent Log In</Td>
                <Td border="none">About Us</Td>
                <Td border="none">Parent Help</Td>
                <Td border="none">School Schedule</Td>
              </Tr>
              <Tr>
                <Td border="none">Teacher Log In</Td>
                <Td border="none">Contact Us</Td>
                <Td border="none">Teacher Help</Td>
                <Td border="none">Class Timetable</Td>
              </Tr>
              <Tr>
                <Td border="none">Admin Log In</Td>
                <Td border="none">Blog</Td>
                <Td border="none">Feedback</Td>
                <Td border="none">Exam Timetable</Td>
              </Tr>
              <Tr>
                <Td border="none"></Td>
                <Td border="none">Terms and Conditions</Td>
                <Td border="none">FAQs</Td>
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
