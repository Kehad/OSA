import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

function Contact() {
  return (
    <Flex alignItems="center" justifyContent="center" gap={8}>
      <Flex direction="column" alignItems="center" justifyContent="center">
        <Box
          as="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          fill="currentColor"
        >
          <path
            d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
          />
        </Box>
        <Heading
          color="#fff"
          lineHeight="88px"
          fontWeight="700"
          fontSize="40px"
          //   width="70%"
          textAlign="center"
        >
          Phone
        </Heading>
        <Box>
          <Text
            color="#fff"
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight="400"
            lineHeight="24px"
            textAlign="center"
          >
            Talk to a member of our support team
          </Text>
        </Box>
        <Box>
          <Text
            color="#fff"
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight="400"
            lineHeight="20px"
            textAlign="center"
          >
            +234-904-861-7272,
          </Text>
          <Text
            color="#fff"
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight="400"
            lineHeight="20px"
            textAlign="center"
          >
            +234-708-310-9355
          </Text>
        </Box>
      </Flex>
      <Flex direction="column" alignItems="center">
        <Box
          as="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          fill="currentColor"
        >
          <path
            d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Box>
        <Heading
          color="#fff"
          lineHeight="88px"
          fontWeight="700"
          fontSize="40px"
          //   width="70%"
          textAlign="center"
        >
          Email
        </Heading>

        <Box>
          <Text
            color="#fff"
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight="400"
            lineHeight="20px"
            textAlign="center"
          >
            Send us a mail, and we will respond.
          </Text>
          <Text
            color="#fff"
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight="400"
            lineHeight="20px"
            textAlign="center"
          >
            enquiry@osaschoolsportal.org
          </Text>
        </Box>
      </Flex>
      <Flex direction="column" alignItems="center">
        <Box
          as="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          fill="currentColor"
        >
          <path
            d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.99961 3H8.99961C7.04961 8.84 7.04961 15.16 8.99961 21H7.99961"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 3C15.97 5.92 16.46 8.96 16.46 12"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 16V15C5.92 15.97 8.96 16.46 12 16.46"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 8.99998C8.84 7.04998 15.16 7.04998 21 8.99998"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 22L21 21"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Box>
        <Heading
          color="#fff"
          lineHeight="88px"
          fontWeight="700"
          fontSize="40px"
          //   width="70%"
          textAlign="center"
        >
          Location
        </Heading>

        <Box>
          <Text
            color="#fff"
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight="400"
            lineHeight="20px"
            textAlign="center"
          >
            Visit us within the school’s premises
          </Text>
          <Text
            color="#fff"
            fontFamily="Montserrat"
            fontSize="16px"
            fontWeight="400"
            lineHeight="20px"
            textAlign="center"
          >
            Plot 15, Road 4, Obele Estate, Akure
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Contact;
