import nursery from "../../../assets/contact-nursery.png";
import junior from "../../../assets/contact-junior.png";
import primary from "../../../assets/contact-primary.png";
import secondary from "../../../assets/contact-secondary.png";
import InfoFirst from "../../generalComponent/InfoFirst";
import InfoSecond from "../../generalComponent/InfoSecond";
import { Box, Flex, Heading, position, Text } from "@chakra-ui/react";

const staffs = [
  {
    image: "",
    name: "OLUWATOSIN John",
    position: "OLUWATOSIN John",
  },
  {
    image: "",
    name: "OLUWATOSIN John",
    position: "OLUWATOSIN John",
  },
  {
    image: "",
    name: "OLUWATOSIN John",
    position: "OLUWATOSIN John",
  },
  {
    image: "",
    name: "OLUWATOSIN John",
    position: "OLUWATOSIN John",
  },
  {
    image: "",
    name: "OLUWATOSIN John",
    position: "OLUWATOSIN John",
  },
  {
    image: "",
    name: "OLUWATOSIN John",
    position: "OLUWATOSIN John",
  },
  {
    image: "",
    name: "OLUWATOSIN John",
    position: "OLUWATOSIN John",
  },
  {
    image: "",
    name: "OLUWATOSIN John",
    position: "OLUWATOSIN John",
  },
];

function Team() {
  return (
    <Flex
      paddingTop="3rem"
      className="py-12"
      bg="#FCF2CE"
      direction="column"
      alignItems="center"
    >
      <Heading
        as="h4"
        fontSize="32px"
        fontWeight="bold"
        textAlign="center"
        lineHeight="40px"
        mb={8}
        fontFamily="heading.h1"
      >
        Our Team
      </Heading>
      <Text width="70%" textAlign="center" fontFamily="body.b1">
        Meet our team of dedicated and passionate stakeholders and educators who
        are the heart of our community. With a wealth of knowledge and diverse
        experiences, our team is committed to providing a supportive and
        engaging learning environment for every student. Get to know the
        talented individuals who inspire and guide our students toward success
        each day.
      </Text>
      <Flex
        gap="1rem"
        marginTop="4rem"
        marginBottom="2rem"
        fontFamily="heading.h1"
      >
        <Box>
          <Box
            width="300px"
            height="300px"
            borderRadius="10px"
            bg="#F8DF84"
          ></Box>
          <Box textAlign="center" fontFamily="headig.h1">
            <Heading fontSize="24px" fontFamily="">
              OLUWATOSIN John
            </Heading>
            <Text fontSize="16px">OLUWATOSIN John</Text>
          </Box>
        </Box>
        <Box>
          <Box
            width="300px"
            height="300px"
            borderRadius="10px"
            bg="#1C3519"
          ></Box>
          <Box textAlign="center" fontFamily="heading.h1">
            <Heading fontSize="24px" fontFamily="heading.h1">
              OLUWATOSIN John
            </Heading>
            <Text fontSize="16px">OLUWATOSIN John</Text>
          </Box>
        </Box>
      </Flex>
      <Flex
        width="70%"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        gap="3rem"
        fontFamily="heading.h1"
      >
        {staffs.map((staff, index) => (
          <Box key={index}>
            <Box
              width="150px"
              height="150px"
              borderRadius="10px"
              bg="#1C3519"
            ></Box>
            <Box textAlign="center" marginTop="0.8rem" fontFamily="heading.h1">
              <Heading fontSize="16px" fontWeight="normal" fontFamily="inherit">
                OLUWATOSIN John
              </Heading>
              <Text fontSize="12px" fontFamily="inherit">
                OLUWATOSIN John
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}

export default Team;
