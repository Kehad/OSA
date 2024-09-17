import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

function Header() {
  return (
    <Flex align="center" justify="space-between">
      <Box color="black">
        <Heading
          as="h3"
          fontSize="5xl"
          fontWeight="bold"
          lineHeight="56px"
          textAlign="left"
          w="70%"
        >
          Experience{" "}
          <Box
            as="span"
            fontSize="5xl"
            fontWeight="bold"
            lineHeight="56px"
            color="#F8DF84"
          >
            Education
          </Box>{" "}
          at It’s Best at OSA
        </Heading>
        <Text
          fontSize="lg"
          fontWeight="medium"
          lineHeight="30px"
          letterSpacing="0.03em"
          mt={4}
          textAlign="left"
          w="70%"
        >
          Here at Oluwatosin Success Academy we are dedicated to giving your
          children the best educational experience to help them grow and acheive
          their dreams and aspirations. Join us today and set your children on
          the path yo success and join the league of parents giving their
          children the best education
        </Text>
      </Box>
      <Box w="1700px">
        {/* <Image src={image} w="600px" h="100%" alt="Image of 3 young students" /> */}
      </Box>
    </Flex>
  );
}

export default Header;
