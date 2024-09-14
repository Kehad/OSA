/* eslint-disable react/prop-types */
import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import { Children } from "react";

function ItemsLayout({ children }) {
  return (
    <Flex align="center" justify="space-between">
     {children}
    </Flex>
  );
}

export default ItemsLayout;