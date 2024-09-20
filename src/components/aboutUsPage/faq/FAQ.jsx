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
      <h4 className="text-[32px] font-bold text-center leading-[40px] mb-8">
        Frequently Asked Questions (FAQs)
      </h4>

      <Accordion allowToggle width="700px">
        {AccordionBox.map((accordion, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton
                _expanded={{ bg: "#1C3519", color: "white" }}
                border="1px"
                borderColor="#A0A0A0"
              >
                <Box as="span" flex="1" textAlign="left">
                  {accordion.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="11px" border="10px !important">
             {accordion.text}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
}

export default FAQ;
