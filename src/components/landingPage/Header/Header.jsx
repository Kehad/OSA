import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import headerImg from '../../../assets/header.png';

function Header() {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Box color="white">
        <Heading
          as="h3"
          fontSize="4xl"
          fontWeight="bold"
          lineHeight="56px"
          textAlign="left"
          w="70%"
          fontFamily='heading.h1'
        >
          Welcome to Oluwatosin Success Academy
        </Heading>
        <Text
          fontSize="lg"
          fontWeight="medium"
          lineHeight="30px"
          letterSpacing="0.03em"
          w="70%"
          mt={4}
          textAlign="left"
          fontFamily='heading.h1'
        >
          Where we shape the lives of children to build effective future
          leaders.
        </Text>
      </Box>

      <Box w="600px">
        <Image
          src={headerImg}
          alt="Image of 3 young students"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
}

export default Header