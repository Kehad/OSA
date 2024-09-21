import { Box, Flex, Heading, Image, Slider, Text } from "@chakra-ui/react";

import contactHeader1 from "../../../assets/contact-header1.png";
import contactHeader2 from "../../../assets/contact-header2.png";
import contactHeader3 from "../../../assets/contact-header3.png";
import contactHeader4 from "../../../assets/contact-header4.png";

function Header() {
  return (
    <Flex align="center" justify="space-between">
      <Box color="black" width="55%">
        <Heading
          as="h3"
          fontSize="5xl"
          fontWeight="bold"
          lineHeight="56px"
          textAlign="left"
          w="85%"
          fontFamily="Montserrat"
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
          fontFamily="Lato"
          w="100%"
        >
          Here at Oluwatosin Success Academy we are dedicated to giving your
          children the best educational experience to help them grow and acheive
          their dreams and aspirations. Join us today and set your children on
          the path yo success and join the league of parents giving their
          children the best education
        </Text>
      </Box>
      <Box w="500px">
        <Flex alignItems="flex-end" gap={6}>
          <Image
            src={contactHeader1}
            w="600px"
            h="100%"
            alt="Image of 3 young students"
          />
          <Image
            src={contactHeader2}
            w="600px"
            h="100%"
            alt="Image of 3 young students"
          />
        </Flex>
        <Slider />
        <Flex gap={6}>
          <Image
            src={contactHeader3}
            w="600px"
            h="100%"
            alt="Image of 3 young students"
          />
          <Image
            src={contactHeader4}
            w="600px"
            h="100%"
            alt="Image of 3 young students"
          />
        </Flex>
        {/* <Image src={image} w="600px" h="100%" alt="Image of 3 young students" /> */}
      </Box>
    </Flex>
  );
}

export default Header;
