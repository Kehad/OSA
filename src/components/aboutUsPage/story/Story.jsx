import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Story() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      direction="column"
      paddingBottom="3rem"
      gap={4}
    >
      <Heading fontFamily="heading.h1">Our Story</Heading>
      <Text
        width="70%"
        wordBreak="break-word"
        whiteSpace="pre-wrap"
        textAlign="center"
        fontFamily="heading.h1"
        fontWeight='400'
      >
        {`Oluwatosin Success Academy, OSA, is a school that is established as modern age educational centre with  
        international standard to provide excellent education at the elementary level, so as to contribute to the achievement 
of the development goal in Nigeria.
​The Primary section of the school started officially on the 15th of September, 2007 while the Secondary school 
section was birthed and began operation on the 7th of September, 2015. 
​The two major motivating factors for establishing the schools are: 
1.​The need to contribute to the educational development of Pupils through sound education especially 
at the elementary level. 
2.​The need to provide solid foundation for pupils and students in every aspect of life (Spiritually, Morally and
Educationally)
We are currently located in two States of the Federal Republic of Nigeria`}
      </Text>
    </Flex>
  );
}

export default Story;
