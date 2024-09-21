import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import BG_CONTACT_IMG from "../../../assets/bg-contact.png";

function Header() {
  return (
    <Flex
      bgImage={`linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${BG_CONTACT_IMG})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      height="80vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex direction="column">
        <Heading
          color="#fff"
          lineHeight="88px"
          fontWeight="700"
          fontSize="72px"
          //   width="70%"
          textAlign="center"
          fontFamily='heading.h1'
        >
          We want to{" "}
          <Box as="span" color="#F8DF84">
            hear
          </Box>{" "}
          <br /> from you
        </Heading>
        <Text
          color="#fff"
          fontFamily="Montserrat"
          fontSize="24px"
          fontWeight="600"
          lineHeight="32px"
          textAlign="center"
        >
          Send us a message, give us a call, or visit us
        </Text>
      </Flex>
    </Flex>
  );
}

export default Header;
