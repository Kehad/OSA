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
      <Heading>Story</Heading>
      <Text width="70%">
        Oluwatosin Success Academy, OSA, is a school that is established as
        modern age educational centre with {" \n "} international standard to
        provide excellent education at the elementary level, so as to contribute
        to the achievement {" \n "} of the development goal in Nigeria.{" \n "}{" "}
        ​The Primary section of the school started officially on the 15th of
        September, 2007 while the Secondary school {" \n "} section was birthed
        and began operation on the 7th of September, 2015. {" \n "} ​The two
        major motivating factors for establishing the schools are: {" \n "}{" "}
        1.​The need to contribute to the educational development of Pupils
        through sound education especially at the elementary level. {" \n "}{" "}
        2.​The need to provide solid foundation for pupils and students in every
        aspect of life (Spiritually, Morally {" \n "} and Educationally){" "}
        {" \n "} We are currently located in two States of the Federal Republic
        of Nigeria
      </Text>
    </Flex>
  );
}

export default Story;
