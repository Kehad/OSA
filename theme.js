import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import "@fontsource/cabin-sketch/400.css";
import "@fontsource/patrick-hand/400.css";
import "@fontsource/montserrat/400.css";


const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode(
        props.theme.semanticTokens.colors["chakra-body-bg"]._light,
        "blackAlpha.900"
      )(props),
    },
  }),
};

const theme = extendTheme({
  config,
  styles,
  fonts: {
    heading: {
      h1: `'Montserrat', sans-serif`, // Body 5 - Montserrat
      h2: `'Lobster', cursive`, // Heading 2 - Lobster
    },
    body: {
      b1: `'Lato', sans-serif`, // Body 5 - Montserrat
      b2: `'Patrick Hand', cursive`, // Body 1 - Patrick Hand
      b3: `'Cabin Sketch', cursive`, // Heading 1 - Cabin Sketch
    },
  },
});

export default theme;
