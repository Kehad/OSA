import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const AccordionBox = [
  {
    title: "Frequently asked questions",
    text: "Frequently asked questions",
  },
  {
    title: "Frequently asked questions",
    text: "Frequently asked questions",
  },
  {
    title: "Frequently asked questions",
    text: "Frequently asked questions",
  },
  {
    title: "Frequently asked questions",
    text: "Frequently asked questions",
  },
  {
    title: "Frequently asked questions",
    text: "Frequently asked questions",
  },
  {
    title: "Frequently asked questions",
    text: "Frequently asked questions",
  },
];

function FAQ() {
  return (
    <Flex
      paddingTop="3rem"
      className="py-12"
      bg="#Fffff"
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
        Frequently Asked Questions (FAQs)
      </Heading>

      <Accordion allowToggle width="700px">
        {AccordionBox.map((accordion, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton
                _expanded={{ bg: "#1C3519", color: "white" }}
                border="1px"
                borderColor="#A0A0A0"
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontFamily="heading.h1"
                >
                  {accordion.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              fontSize="11px"
              border="10px !important"
              fontFamily="heading.h1"
            >
              {accordion.text}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
}

export default FAQ;
