import { Box, Flex, IconButton, Image } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import React from 'react';
import about1 from "../../../assets/about-1.png";
import about2 from "../../../assets/about-2.png";
import about3 from "../../../assets/about-3.png";

function MainSlider() {
  return (
    <Box>
      <h4 className="text-[32px] font-bold text-center leading-[40px] mb-8">
        What We Offer You and Your Children
      </h4>
      <Box>
        <Flex direction="column" gap={8}>
          <Flex
            justifyContent="center"
            gap={{ base: 2, sm: 4, md: 4, lg: 4 }}
            position="relative"
          >
            <IconButton
              icon={<ChevronLeftIcon />}
              onClick={() => {}}
              position="absolute"
              left="10px"
              top="50%"
              transform="translateY(-50%)"
              aria-label="Previous image"
            />

            <IconButton
              icon={<ChevronRightIcon />}
              onClick={() => {}}
              position="absolute"
              right="10px"
              top="50%"
              transform="translateY(-50%)"
              aria-label="Next image"
            />
            <Box
              w={{ base: "250px", md: "350px", lg: "300px" }}
              h={{ base: "200px", md: "300px", lg: "250px" }}
            >
              <Image src={about1} alt="" w="full" h="full" objectFit="cover" />
            </Box>
            <Box
              w={{ base: "250px", md: "350px", lg: "300px" }}
              h={{ base: "200px", md: "300px", lg: "250px" }}
            >
              <Image src={about2} alt="" w="full" h="full" objectFit="cover" />
            </Box>
            <Box
              w={{ base: "250px", md: "350px", lg: "300px" }}
              h={{ base: "200px", md: "300px", lg: "250px" }}
            >
              <Image src={about3} alt="" w="full" h="full" objectFit="cover" />
            </Box>
          </Flex>
          <Flex gap={2} justify="center">
            <Box w="10px" h="10px" bg="#2A4AF4" borderRadius="100%"></Box>
            <Box w="10px" h="10px" bg="#2A4AF4" borderRadius="100%"></Box>
            <Box w="10px" h="10px" bg="#3377FF5E" borderRadius="100%"></Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default MainSlider