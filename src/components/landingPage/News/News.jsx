import { Box, Heading } from "@chakra-ui/react";
import news from "../../../assets/news.png";
import InfoSecond from "../../generalComponent/InfoSecond";

function News() {
  return (
    <Box paddingY="3rem">
      <Heading
        as="h4"
        fontSize="32px"
        fontWeight="bold"
        lineHeight="40px"
        mb={8}
        fontFamily='heading.h1'
      >
        Latest News and Updates
      </Heading>
      <InfoSecond
        title="Admissions are currently ongoing"
        text="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis."
        image={news}
      />
    </Box>
  );
}

export default News;
