import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";



function FAQ() {
  return (
    <Flex
      paddingTop="3rem"
      className="py-12"
      bg="#Fffff"
      direction="column"
      alignItems="center"
    >
      <h4 className="text-[32px] font-bold text-center leading-[40px] mb-8">
        Frequently Asked Questions (FAQs)
      </h4>

      <Accordion allowToggle width='500px'>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "#1C3519", color: "white" }}>
              <Box as="span" flex="1" textAlign="left">
                Frequently asked questions
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} fontSize="11px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "#1C3519", color: "white" }}>
              <Box as="span" flex="1" textAlign="left">
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} fontSize="11px">
            Frequently asked questions
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
}

export default FAQ;
