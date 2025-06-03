import { Box, Flex, Heading, Slider, Spacer, Text } from "@chakra-ui/react";

function Purpose() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      direction="column"
      padding="1rem"
      gap={4}
      bg="#1C3519"
      color="#fff"
      width="40rem"
      margin="auto"
      borderWidth="1rem"
      borderColor="#654321"
      fontFamily="body.b3"
    >
      <Heading fontSize="30px" fontFamily="body.b3">
        What Drives Us
      </Heading>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={5}
      >
        <Box textAlign="center">
          <Heading fontSize="20px" marginBottom={3} fontFamily="body.b2">
            Our Mission
          </Heading>

          <Text width="100%" textAlign="center">
            To build, transform and equip students through academic platform
            into destinies and nation builders
          </Text>
        </Box>
        <Box textAlign="center">
          <Heading fontSize="20px" marginBottom={3} fontFamily="body.b2">
            Our Vision
          </Heading>
          <Text width="100%" textAlign="center">
            To produce Morally, Educationally and Spiritually sound students and
            to equip and prepare them for external examination without
            malpractice
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Purpose;
