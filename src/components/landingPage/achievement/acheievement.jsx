import React from "react";
import image from '../../../assets/achievement-1.png';
import acheievement2 from "../../../assets/achievement-2.png";
import ItemsLayout from "../../generalComponent/ItemsLayout";
import { Box, Flex, Heading, Image, Text, Spacer } from "@chakra-ui/react";

function Acheievement() {
    return (
      <Box marginY={16}>      
    <ItemsLayout>
      <Box position={"relative"} width="45%">
        <Image src={image} w="600px" h="100%" alt="Image of 3 young students" />
        <Image
          src={acheievement2}
          w="300px"
          h="50%"
          alt="Image of 3 young students"
          objectFit={"cover"}
          position={"absolute"}
          bottom={"-13%"}
          left={"50%"}
        />
      </Box>
      <Box width="45%">
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
          <Flex direction={"row"} align="center" justifyContent={"space-between"}>
            <Heading
              as="h3"
              fontSize="2xl"
              fontWeight="bold"
              //   lineHeight="56px"
              textAlign="left"
            >
              2,000+
            </Heading>
            <Flex direction={"column"} marginLeft={4}>
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
              100%
                      </Heading>
                      <Spacer />
            <Flex direction={"column"} marginLeft={4}>
              <Heading
                as="h3"
                fontSize="2xl"
                fontWeight="bold"
                // lineHeight="56px"
                textAlign="left"
              >
                External Success Rates
              </Heading>
              <Text
                fontSize="lg"
                fontWeight="medium"
                // lineHeight="30px"
                letterSpacing="0.03em"
                textAlign="left"
              >
                We have recorded ground-breaking success in external
                examinations ranging from JAMB, to WASSCE, to NECO, to BECE.
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
              100%
            </Heading>
            <Flex direction={"column"} marginLeft={4}>
              <Heading
                as="h3"
                fontSize="2xl"
                fontWeight="bold"
                // lineHeight="56px"
                textAlign="left"
              >
                Involvement in Competitons
              </Heading>
              <Text
                fontSize="lg"
                fontWeight="medium"
                // lineHeight="30px"
                letterSpacing="0.03em"
                textAlign="left"
              >
                We pride ourselves in being well represented in inter-school
                competions both locally and internationally.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </ItemsLayout>
      </Box>
  );
}

export default Acheievement;
