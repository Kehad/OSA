import { Box, Flex, Image, UnorderedList, ListItem, Button } from "@chakra-ui/react";
import OSA_LOGO from "../src/assets/OSA-LOGO.png";
import { NavLink } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";

function Nav() {
  return (
    <Box
      px={{ base: "2rem", sm: "3rem", lg: "5rem" }}
      py="4"
      bg="transparent"
      color="white"
    >
      <Flex wrap="wrap" justify="space-between" align="center">
        {/* Logo */}
        <Image src={OSA_LOGO} alt="OSA logo" h="8" />

        {/* Navigation */}
        <UnorderedList
          display="flex"
          gap="4"
          color="#1C3519"
          listStyleType="none"
        >
          <ListItem pb="1" px="1" borderBottom="2px solid #1C3519">
            <NavLink to='/'>Home</NavLink>
          </ListItem>
          <ListItem pb="1" px="1" borderBottom="2px solid #1C3519">
            <NavLink to='/aboutus'>About Us</NavLink>
          </ListItem>
          <ListItem pb="1" px="1" borderBottom="2px solid #1C3519">
            <NavLink to='/contact'>Contact Us</NavLink>
          </ListItem>
        </UnorderedList>

        {/* Button */}
        <Button bg="#1C3519" color="white" size="lg" w="10rem">
          Log In
        </Button>
      </Flex>
    </Box>
    // <div className=" px-[2rem] sm:px-[3rem] md:px-[3rem] lg:px-[5rem] py-8 text-white">
    //   <div className="flex flex-wrap justify-between items-center">
    //     <div className="">
    //       <img src={OSA_LOGO} alt="OSA logo" className="h-8" />
    //     </div>

    //     <div>
    //       <ul className="flex gap-4 text-[#1C3519]">
    //         <li className="pb-1 px-1 border-b-2 border-[#1C3519]">Home</li>
    //         <li className="pb-1 px-1 border-b-2 border-[#1C3519]">About Us</li>
    //         <li className="pb-1 px-1 border-b-2 border-[#1C3519]">
    //           Contact us
    //         </li>
    //       </ul>
    //     </div>

    //     <div>
    //       <Button bg="#1C3519" color="#fff" size="lg" width="10rem">
    //         Button
    //       </Button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Nav;

