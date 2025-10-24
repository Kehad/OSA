/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react";

function Layout({ children, ...rest }) {
  return (
    <Box {...rest}>
      {children}
    </Box>
  );
}

export default Layout;
