import React, { useState } from "react";
import { Box, Flex, Image, IconButton, Circle } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import children4 from "../../../assets/children-4.png";
import children1 from "../../../assets/children-1.png";
import children2 from "../../../assets/children-2.png";
import children3 from "../../../assets/children-3.png";
import about1 from "../../../assets/about-1.png";
import about2 from "../../../assets/about-2.png";
import about3 from "../../../assets/about-3.png";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [about1, about2, about3, children1, children2, children3, children4];

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
    <Box position="relative" width="100%" height="100vh">
      <Flex width="100%" height="100%">
        <Image
          src={images[currentIndex]}
          objectFit="cover"
          width="33.33%"
          height="100%"
        />
        <Image
          src={images[(currentIndex + 1) % images.length]}
          objectFit="cover"
          width="33.33%"
          height="100%"
        />
        <Image
          src={images[(currentIndex + 2) % images.length]}
          objectFit="cover"
          width="33.33%"
          height="100%"
        />
      </Flex>

      <IconButton
        icon={<ChevronLeftIcon />}
        onClick={handlePrevious}
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        aria-label="Previous image"
      />

      <IconButton
        icon={<ChevronRightIcon />}
        onClick={handleNext}
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        aria-label="Next image"
      />

      <Flex justify="center" position="absolute" bottom="20px" width="100%">
        {images.map((_, index) => (
          <Circle
            key={index}
            size="10px"
            bg={
              index < 3
                ? index === currentIndex % 3
                  ? "white"
                  : "gray.300"
                : "transparent"
            }
            mx="2px"
            opacity={index < 3 ? 1 : 0}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default ImageSlider;
