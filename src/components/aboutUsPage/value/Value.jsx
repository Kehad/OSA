import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

import ContactDiscplineIcon from "../../../assets/Discipline-Icon.png";
import IntegrityIcon from "../../../assets/IntegrityIcon.png";
import SpiritualIcon from "../../../assets/spiritualityIcon.png";
import MultiSkilledIcon from "../../../assets/MultiSkilled-Icon.png";
import ExcellenceIcon from "../../../assets/Excellence-Icon.png";

const valueData = [
  {
    valueIcon: ContactDiscplineIcon,
    valueTitle: "Discipline",
    valueText:
      " Discipline is more than a guideline—its a cornerstone of our success. We believe that cultivating self-control, responsibility, and respect creates an environment where every student can thrive and develop the habits and attitudes necessary for personal and academic achievement.",
  },
  {
    valueIcon: IntegrityIcon,
    valueTitle: "Integrity",
    valueText:
      " We are committed to fostering a culture of honesty, fairness, and ethical behavior in everything we do. By upholding the highest standards of integrity, we encourage our students to act with sincerity and take responsibility for their actions.",
  },
  {
    valueIcon: ExcellenceIcon,
    valueTitle: "Excellence",
    valueText:
      "We are dedicated to inspiring every student to reach their fullest potential, both academically and personally. We set high standards and embrace a growth mindset,  Our commitment to excellence drives us to push boundaries, challenge ourselves, and celebrate achievements.",
  },
  {
    valueIcon: SpiritualIcon,
    valueTitle: "Spirituality",
    valueText:
      " We are dedicated to guiding students in their relationship with God, fostering a deep understanding of His teachings and love. Through prayer, worship, and the study of Scripture, we encourage our students to live out their faith daily, embodying Christ’s values of love, compassion, and integrity.",
  },
  {
    valueIcon: MultiSkilledIcon,
    valueTitle: "Multi-skilled",
    valueText:
      "We encourage our students to explore diverse interests, master a variety of disciplines, and cultivate both intellectual and practical abilities. By promoting versatility and adaptability, we empower our learners to approach challenges with confidence, creativity, and a well-rounded perspective.",
  },
];

function Value() {
  return (
    <Flex
      bg="#E2FFDE66"
      direction="column"
      alignItems="center"
      justifyContent="center"
      padding="3rem"
    >
      <Heading>Core Values</Heading>
      <Flex flexWrap="wrap" alignItems="center" justifyContent="center" gap={5} paddingTop={12}>
       
        {valueData.map((value, index) => {
          return (
            <Flex
              bg="#fff"
              borderRadius="10px"
              borderWidth="3px"
              borderColor="#8E9A8C"
              alignItems="center"
            //   width="max-content"
                  width='445px'
                  height='280px'
              gap={5}
              padding={5}
              key={index}
            >
              <Flex
                bg="#FBECB5"
                alignItems="center"
                direction="column"
                justifyContent="center"
                width=""
                height="max-content"
                padding="1rem"
              >
                <Image width="3rem" src={value.valueIcon} alt="Discipline" />
                <Heading fontSize="20px">{value.valueTitle}</Heading>
              </Flex>
              <Box>
                <Text fontSize="16px" width="16rem">
                  {value.valueText}
                </Text>
              </Box>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
}

export default Value;