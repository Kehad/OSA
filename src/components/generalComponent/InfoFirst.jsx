/* eslint-disable react/prop-types */
import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";

function InfoFirst({ title, text, image }) {
  return (
    <Flex align="center" justify="space-between">
      <Box color="black" width='48%'>
        <Heading
          as="h3"
          fontSize="2xl"
          fontWeight="bold"
          lineHeight="56px"
          textAlign="left"
          w="100%"
          fontFamily='heading.h1'
        >
          {title}
        </Heading>
        <Text
          fontSize="lg"
          fontWeight="medium"
          lineHeight="30px"
          letterSpacing="0.03em"
          mt={4}
          textAlign="left"
          fontFamily='body.b1'
          w="100%"
        >
          {text}
        </Text>
      </Box>
      <Box w="1700px" width={'48%'}>
        <Image src={image} w="600px" h="100%" alt="Image of 3 young students" />
      </Box>
    </Flex>
  );
}

export default InfoFirst;                            