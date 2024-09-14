import React from "react";
import image from '../../../assets/achievement-1.png';
import acheievement2 from "../../../assets/achievement-2.png";
import ItemsLayout from "../../generalComponent/ItemsLayout";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

function Acheievement() {
  return (
    <ItemsLayout>
      <Box position={"relative"}>
        <Image src={image} w="600px" h="100%" alt="Image of 3 young students" />
        <Image src={acheievement2} w="300px" h="50%" alt="Image of 3 young students" objectFit={"cover"} position={"absolute"} bottom={"-13%"} left={"50%"}/>
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
