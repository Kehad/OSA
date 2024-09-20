import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import nursery from "../../../assets/contact-nursery.png";
import junior from "../../../assets/contact-junior.png";
import primary from "../../../assets/contact-primary.png";
import secondary from "../../../assets/contact-secondary.png";
import about1 from "../../../assets/about-1.png";
import about2 from "../../../assets/about-2.png";
import about3 from "../../../assets/about-3.png";
import InfoFirst from "../../generalComponent/InfoFirst";
import InfoSecond from "../../generalComponent/InfoSecond";

function SchoolSection() {
  return (
    <div className="py-12">
      <h4 className="text-[32px] font-bold text-center leading-[40px] mb-8">
        Our Step-By-Step Approach
      </h4>
      <div className="flex flex-col gap-16">
        <InfoFirst
          title="Nursery Section"
          text="Our Nursery program is designed to create a warm, nurturing environment that fosters the social, emotional, and cognitive development of our youngest learners. Through play-based activities and hands-on experiences, we encourage children to explore, discover, and grow. Our dedicated teachers provide individual attention to each child, ensuring they feel valued and supported. At OSA, we lay the foundation for a lifelong love of learning, setting the stage for future academic success.
"
          image={nursery}
        />
        <InfoSecond
          title="Primary Section"
          text="Our primary program is designed to engage young minds through a balanced curriculum that emphasizes academic excellence, creativity, and character development. With a focus on critical thinking and problem-solving skills, our dedicated teachers provide a supportive and stimulating environment where every child can thrive. Through a blend of traditional and innovative teaching methods, we ensure that each student develops a strong academic base, a love for learning, and the confidence to explore new ideas. Here at OSA, we prepare our students to become curious, compassionate, and capable individuals."
          image={primary}
        />
        <InfoFirst
          title="Juniour Secondary Section"
          text="At this stage students transition from foundational learning to advanced exploration and growth. Our junior secondary program is designed to challenge and inspire students through a rigorous and dynamic curriculum that includes a broad range of subjects and extracurricular activities. Our experienced teachers foster critical thinking, creativity, and independence, preparing students for the academic challenges ahead. We emphasize the development of strong study habits, leadership skills, and social responsibility. At OSA, we equip our students with the knowledge, skills, and confidence to excel in their future endeavors and become well-rounded, engaged citizens."
          image={junior}
        />
        <InfoSecond
          title="Senior Secondary Section"
          text="At this stage we prepare students for higher education and future career success. Our senior secondary program offers a comprehensive and challenging curriculum designed to deepen subject knowledge and develop critical thinking and analytical skills. With a wide range of subjects our students can tailor their education to their interests and aspirations.
Our dedicated faculty members are committed to providing individualized guidance and support, helping each student navigate the path to tertiary institutions and beyond. We emphasize academic excellence, leadership, and personal growth, ensuring that our graduates are well-prepared to meet the demands of the future. We strive to cultivate responsible, innovative, and confident individuals ready to make a positive impact in the world."
          image={secondary}
        />
      </div>
    </div>
  );
}

export default SchoolSection;
