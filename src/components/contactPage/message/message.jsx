import { Flex, Heading, Text } from "@chakra-ui/react";
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
      >
        <Heading fontSize="1.5rem">Leave Us Your Message</Heading>
        <Text>And We’ll Get Back To You</Text>
        <form className="flex flex-col flex-wrap justify-center gap-[1.4rem] text-start items-start bg-red mt-8 w-[22rem]">
          <div className="flex flex-col gap-[0.5rem] w-[100%]">
            <input
              type="text"
              className="w-full h-[2.3rem] text-black rounded px-[1rem] border-2 border-[#C8C8C8] outline-none"
              placeholder="Full Name*"
            />
          </div>
          <div className="flex flex-col gap-[0.5rem] w-full">
            <input
              type="email"
              placeholder="Email*"
              className="w-full h-[2.3rem] text-black bg-[#F9F9F9] rounded px-[1rem]  border-2 border-[#C8C8C8] outline-none"
            />
          </div>
          <div className="flex flex-col gap-[0.5rem] w-full">
            <input
              type="text"
              placeholder="Subject*"
              className="w-full h-[2.3rem] text-black rounded px-[1rem]  border-2 border-[#C8C8C8] outline-none"
            />
          </div>
          <div className="flex flex-col gap-[0.5rem] w-full">
            <textarea
              className="w-full h-[7.3rem] text-black bg-[#F9F9F9] rounded px-[1rem]  border-2 border-[#C8C8C8] outline-none pt-2"
              placeholder="Message*"
            ></textarea>
          </div>
          <button className="h-[2.3rem] bg-[#1C3519] rounded-md text-white px-[1rem]  outline-none w-full">
            SUBMIT NOW
          </button>
        </form>
      </Flex>
    </Flex>
  );
}

export default Message;
