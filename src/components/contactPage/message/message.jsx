import { Box, Button, Flex, Heading, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import React from "react";

function Message() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      bg="white"
      textAlign="center"
      paddingY="3rem"
    >
      <Flex
        direction="column"
        paddingY="2rem"
        paddingX="2rem"
        borderRadius="15px"
        bg="white"
        boxShadow="0px 2px 8px black"
        fontFamily="heading.h1"
      >
        <Heading fontSize="1.5rem" fontFamily="inherit">
          Leave Us Your Message
        </Heading>
        <Text fontFamily="inherit">And We’ll Get Back To You</Text>
        <Box
          as="form"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap="1.4rem"
          textAlign="left"
          alignItems="flex-start"
          mt="8"
          w="22rem"
        >
          <VStack spacing="0.5rem" w="100%" fontFamily="heading.h1">
            <Input
              type="text"
              placeholder="Full Name*"
              w="100%"
              h="2.3rem"
              color="black"
              borderRadius="md"
              px="1rem"
              border="2px solid"
              borderColor="#C8C8C8"
              _focus={{ outline: "none" }}
              fontFamily="inherit"
            />
          </VStack>

          <VStack spacing="0.5rem" w="100%">
            <Input
              type="email"
              placeholder="Email*"
              w="100%"
              h="2.3rem"
              color="black"
              bg="#F9F9F9"
              borderRadius="md"
              px="1rem"
              border="2px solid"
              borderColor="#C8C8C8"
              _focus={{ outline: "none" }}
              fontFamily="inherit"
            />
          </VStack>

          <VStack spacing="0.5rem" w="100%" fontFamily="heading.h1">
            <Input
              type="text"
              placeholder="Subject*"
              w="100%"
              h="2.3rem"
              color="black"
              borderRadius="md"
              px="1rem"
              border="2px solid"
              borderColor="#C8C8C8"
              _focus={{ outline: "none" }}
              fontFamily="inherit"
            />
          </VStack>

          <VStack spacing="0.5rem" w="100%" fontFamily="heading.h1">
            <Textarea
              placeholder="Message*"
              w="100%"
              h="7.3rem"
              color="black"
              bg="#F9F9F9"
              borderRadius="md"
              px="1rem"
              border="2px solid"
              borderColor="#C8C8C8"
              _focus={{ outline: "none" }}
              pt="2"
            />
          </VStack>

          <Button
            h="2.3rem"
            bg="#1C3519"
            color="white"
            borderRadius="md"
            px="1rem"
            w="100%"
            _hover={{
              color: "#1c3519",
              bg: "#fff",
              borderWidth: 2,
              borderColor: "#1c3519",
            }}
            _focus={{ outline: "none" }}
            fontFamily="heading.h1"
          >
            SUBMIT NOW
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Message;
