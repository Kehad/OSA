import React from "react";
import ItemsLayout from "../../generalComponent/ItemsLayout";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function Acheievement() {
  return (
    <ItemsLayout>
          <Box>
            
      </Box>
      <Box>
        <Heading
          as="h3"
          fontSize="2xl"
          fontWeight="bold"
          lineHeight="56px"
          textAlign="left"
        >
          Some of Our Acheivements
        </Heading>
        <Flex direction="column">
          <Flex direction={"row"} align="center">
            <Heading
              as="h3"
              fontSize="2xl"
              fontWeight="bold"
              //   lineHeight="56px"
              textAlign="left"
            >
              2,000+
            </Heading>
            <Flex direction={"column"}>
              <Heading
                as="h3"
                fontSize="2xl"
                fontWeight="bold"
                // lineHeight="56px"
                textAlign="left"
              >
                Graduated Students
              </Heading>
              <Text
                fontSize="lg"
                fontWeight="medium"
                // lineHeight="30px"
                letterSpacing="0.03em"
                textAlign="left"
                w="70%"
              >
                We have successfully graduated over 2,000 students. 90% of these
                studenst gained admission into the institution of their choice.
              </Text>
            </Flex>
          </Flex>
          <Flex direction={"row"} align="center">
            <Heading
              as="h3"
              fontSize="2xl"
              fontWeight="bold"
              //   lineHeight="56px"
              textAlign="left"
            >
              2,000+
            </Heading>
            <Flex direction={"column"}>
              <Heading
                as="h3"
                fontSize="2xl"
                fontWeight="bold"
                // lineHeight="56px"
                textAlign="left"
              >
                Graduated Students
              </Heading>
              <Text
                fontSize="lg"
                fontWeight="medium"
                // lineHeight="30px"
                letterSpacing="0.03em"
                textAlign="left"
                w="70%"
              >
                We have successfully graduated over 2,000 students. 90% of these
                studenst gained admission into the institution of their choice.
              </Text>
            </Flex>
          </Flex>
          <Flex direction={"row"} align="center">
            <Heading
              as="h3"
              fontSize="2xl"
              fontWeight="bold"
              //   lineHeight="56px"
              textAlign="left"
            >
              2,000+
            </Heading>
            <Flex direction={"column"}>
              <Heading
                as="h3"
                fontSize="2xl"
                fontWeight="bold"
                // lineHeight="56px"
                textAlign="left"
              >
                Graduated Students
              </Heading>
              <Text
                fontSize="lg"
                fontWeight="medium"
                // lineHeight="30px"
                letterSpacing="0.03em"
                textAlign="left"
                w="70%"
              >
                We have successfully graduated over 2,000 students. 90% of these
                studenst gained admission into the institution of their choice.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </ItemsLayout>
  );
}

export default Acheievement;
