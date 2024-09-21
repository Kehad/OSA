import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import children1 from "../../../assets/children-1.png";
import children2 from "../../../assets/children-2.png";
import children3 from "../../../assets/children-3.png";
import children4 from "../../../assets/children-4.png";
import about1 from "../../../assets/about-1.png";
import about2 from "../../../assets/about-2.png";
import about3 from "../../../assets/about-3.png";
import InfoFirst from "../../generalComponent/InfoFirst";
import InfoSecond from "../../generalComponent/InfoSecond";

function Information() {
  return (
    <div className="py-12">
      <Heading
        as="h4"
        fontSize="32px"
        fontWeight="bold"
        lineHeight="40px"
        mb={8}
        fontFamily="heading.h1"
        textAlign="center"
      >
        What We Offer You and Your Children
      </Heading>
      <div className="flex flex-col gap-16">
        <InfoFirst
          title="Admissions are currently ongoing"
          text="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis."
          image={children1}
        />
        <InfoSecond
          title="Condusive Learning Environment"
          text="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis."
          image={children2}
        />
        <InfoFirst
          title="Comprehensive Extracurricular Activities"
          text="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis."
          image={children3}
        />
        <InfoSecond
          title="Supportive Community"
          text="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis."
          image={children4}
        />
        <Flex align="center" justify="space-between">
          <Flex direction="column" gap={4} color="black" width="45%">
            <Heading
              as="h3"
              fontSize="4xl"
              fontWeight="bold"
              lineHeight="56px"
              textAlign="left"
              //   w="45%"
              fontFamily="heading.h1"
            >
              Who Are We?
            </Heading>
            <Text
              fontSize="lg"
              fontWeight="medium"
              lineHeight="30px"
              letterSpacing="0.03em"
              textAlign="left"
              //   w="45%"
              fontFamily="body.h1"
            >
              We are a team of passionate educators and professionals who are
              dedicated to nurturing the minds and hearts of our students. Our
              mission is to inspire and empower every student to reach their
              full potential in a supportive and inclusive environment. We
              believe that education extends beyond the classroom, and through a
              diverse range of extracurricular activities, our students develop
              essential life skills, build strong character, and foster
              meaningful relationships. Join us at Oluwatosin Success Academy,
              where we prepare our students not only for academic success but
              also for a lifetime of learning, leadership, and service.
            </Text>
            <Button
              color="#fff"
              bg="#1C3519"
              width="13rem"
              fontFamily="body.h1"
              _hover={{
                color: "#1c3519",
                bg: "#fff",
                borderWidth: 2,
                borderColor: "#1c3519",
              }}
            >
              Read more
            </Button>
          </Flex>
          <Flex w="45%" direction="column" gap={4}>
            <Flex direction="row" gap={4}>
              <Image
                src={about1}
                w="50%"
                h="100%"
                alt="Image of 3 young students"
              />
              <Image
                src={about2}
                w="50%"
                h="100%"
                alt="Image of 3 young students"
              />
            </Flex>
            <Box width="100%">
              <Image
                src={about3}
                w="100%"
                h="100%"
                alt="Image of 3 young students"
              />
            </Box>
          </Flex>
        </Flex>
      </div>
    </div>
  );
}

export default Information;
