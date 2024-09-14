/* eslint-disable react/prop-types */
import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";

function InfoSecond({ title, text, image }) {
  return (
    <Flex justify="space-between" align="flex-start">
      <Box w="45%">
        <Image src={image} w="full" h="auto" alt="Image of 3 young students" />
      </Box>
      <Box w="45%" color="black">
        <Heading as="h3" fontSize="2xl" fontWeight="bold" mb={4}>
          {title}
        </Heading>
        <Text
          fontSize="lg"
          fontWeight="medium"
          lineHeight="30px"
          letterSpacing="0.03em"
        >
          {text}
        </Text>
      </Box>
    </Flex>
  );
}

export default InfoSecond;
