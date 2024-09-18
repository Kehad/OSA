import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

function Card() {
  return (
      <Flex gap='6rem' bg="#F8DF84" justifyContent='cente' paddingX='4rem' padding='2rem' borderRadius='20px'>
      <Box>
        <Heading as="h2" fontSize="30px">
          2000+
        </Heading>
        <Heading as="h6" fontSize="15px" fontWeight="normal" textAlign="center">
          Alumni
        </Heading>
      </Box>
      <Box>
        <Heading as="h2" fontSize="30px">
          100%
        </Heading>
        <Heading as="h6" fontSize="15px" fontWeight="normal" textAlign="center">
          Success
        </Heading>
      </Box>
      <Box>
        <Heading as="h2" fontSize="30px">
          100%
        </Heading>
        <Heading as="h6" fontSize="15px" fontWeight="normal" textAlign="center">
          Participation
        </Heading>
      </Box>
      <Box>
        <Heading as="h2" fontSize="30px">
          100
        </Heading>
        <Heading as="h6" fontSize="15px" fontWeight="normal" textAlign="center">
          Staff
        </Heading>
      </Box>
      <Box>
        <Heading as="h2" fontSize="30px">
          100
        </Heading>
        <Heading as="h6" fontSize="15px" fontWeight="normal" textAlign="center">
          Staff
        </Heading>
      </Box>
    </Flex>
  );
}

export default Card