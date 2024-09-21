import { Box, Circle, Flex, Heading, IconButton, Image, Spacer, Text } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

import saying1 from "../../../assets/saying-1.png";

import children4 from "../../../assets/children-4.png";
import children1 from "../../../assets/children-1.png";
import children2 from "../../../assets/children-2.png";
import children3 from "../../../assets/children-3.png";
import about1 from "../../../assets/about-1.png";
import about2 from "../../../assets/about-2.png";
import about3 from "../../../assets/about-3.png";
import { useState } from 'react';
import { motion } from 'framer-motion';

const sliderContent = [
  {
    id: 1,
    image: saying1,
    title: "Oluwatosin John",
    text: " We have successfully graduated over 2,000 students. 90% of these studenst gained admission into the institution of their choice.",
    date: "2010/2011 Session",
  },
  {
    id: 2,
    image: saying1,
    title: "Oluwatosin John",
    text: " We have successfully graduated over 2,000 students. 90% of these studenst gained admission into the institution of their choice.",
    date: "2010/2011 Session",
  },
  {
    id: 3,
    image: saying1,
    title: "Oluwatosin John",
    text: " We have successfully graduated over 2,000 students. 90% of these studenst gained admission into the institution of their choice.",
    date: "2010/2011 Session",
  },
  {
    id: 3,
    image: children1,
    title: "Oluwatosin John",
    text: " We have successfully graduated over 2,000 students. 90% of these studenst gained admission into the institution of their choice.",
    date: "2010/2011 Session",
  },
  {
    id: 3,
    image: children2,
    title: "Oluwatosin John",
    text: " We have successfully graduated over 2,000 students. 90% of these studenst gained admission into the institution of their choice.",
    date: "2010/2011 Session",
  },
  {
    id: 3,
    image: children3,
    title: "Oluwatosin John",
    text: " We have successfully graduated over 2,000 students. 90% of these studenst gained admission into the institution of their choice.",
    date: "2010/2011 Session",
  },
  {
    id: 3,
    image: saying1,
    title: "Oluwatosin John",
    text: " We have successfully graduated over 2,000 students. 90% of these studenst gained admission into the institution of their choice.",
    date: "2010/2011 Session",
  },
];

function MainSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = sliderContent

    const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    const handleNext = () => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        const newImages = [
          images[nextIndex],
          images[(nextIndex + 1) % images.length],
          images[(nextIndex + 2) % images.length],
        ];
        return nextIndex;
      });
    };
  return (
    <Box paddingY={12}>
      <Heading
        as="h4"
        fontSize="32px"
        fontWeight="bold"
        textAlign="center"
        lineHeight="40px"
        mb={8}
        fontFamily="heading.h1"
      >
        What Our Students Have To Say
      </Heading>
      <Box>
        <Flex direction="column" gap={8}>
          <Flex
            justifyContent="center"
            gap={{ base: 2, sm: 4, md: 4, lg: 4 }}
            position="relative"
          >
            <IconButton
              icon={<ArrowBackIcon />}
              onClick={handlePrevious}
              position="absolute"
              left="60px"
              top="50%"
              transform="translateY(-50%)"
              aria-label="Previous image"
              background="none"
              color="#1C3519"
              fontSize="50px"
              paddingY="1.5rem"
              _hover={{
                background: "#1C3519",
                color: "#FCF2CE",
              }}
            />
            <IconButton
              icon={<ArrowForwardIcon />}
              onClick={handleNext}
              position="absolute"
              right="60px"
              top="50%"
              transform="translateY(-50%)"
              aria-label="Next image"
              background="none"
              color="#1C3519"
              fontSize="50px"
              paddingY="1.5rem"
              _hover={{
                background: "#1C3519",
                color: "#FCF2CE",
              }}
            />

            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % sliderContent.length;
              const content = sliderContent[index];
              return (
                <Box
                  w={{ base: "250px", md: "350px", lg: "300px" }}
                  h={{ base: "200px", md: "300px", lg: "250px" }}
                  key={index}
                  as={motion.div}
                  initial={{ opacity: 0, y: 50 }} // Initial state (hidden and shifted down)
                  animate={{ opacity: 1, y: 0 }} // Final state (visible and in place)
                  exit={{ opacity: 0, y: 50 }} // Exit animation (hide and shift down)
                  transition={{ duration: 0.5 }} // Animation timing
                >
                  <Flex
                    direction="column"
                    w="full"
                    h="full"
                    padding={4}
                    bg={"#FCF2CE"}
                    borderRadius={15}
                    boxShadow="0px 4px 2px rgba(0, 0, 0, 0.5)"
                  >
                    <Text
                      fontSize="lg"
                      fontWeight="normal"
                      lineHeight="30px"
                      letterSpacing="0.03em"
                      textAlign="left"
                      fontFamily="body.b1"
                    >
                      {content.text}
                    </Text>
                    <Spacer />
                    <Flex direction="row" align="center" gap={4}>
                      <Box
                        w={{ base: "40px", md: "40px", lg: "40px" }}
                        h={{ base: "40px", md: "40px", lg: "40px" }}
                      >
                        <Image
                          borderRadius="100%"
                          src={content.image}
                          alt=""
                          w="full"
                          h="full"
                          objectFit="cover"
                        />
                      </Box>
                      <Flex direction={"column"}>
                        <Text
                          fontSize="md"
                          fontWeight="normal"
                          letterSpacing="0.03em"
                          textAlign="left"
                          fontFamily="body.b1"
                        >
                          {content.title}
                        </Text>
                        <Text
                          fontSize="xs"
                          fontWeight="normal"
                          letterSpacing="0.03em"
                          textAlign="left"
                          fontFamily="body.b1"
                        >
                          {content.date}
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
              );
            })}
          </Flex>
          <Flex gap={2} justify="center">
            {/* <Box w="10px" h="10px" bg="#2A4AF4" borderRadius="100%"></Box>
            <Box w="10px" h="10px" bg="#2A4AF4" borderRadius="100%"></Box>
            <Box w="10px" h="10px" bg="#3377FF5E" borderRadius="100%"></Box> */}
            {images.map((_, index) => (
              <Circle
                key={index}
                size="10px"
                bg={
                  index < 3
                    ? index === currentIndex % 3
                      ? "#1C3519"
                      : "#8E9A8C"
                    : "transparent"
                }
                mx="2px"
                opacity={index < 3 ? 1 : 0}
              />
            ))}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default MainSlider;