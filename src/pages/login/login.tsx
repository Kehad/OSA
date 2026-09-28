import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Heading,
  Text,
  useToast,
  IconButton,
  Image,
  Center,
  VStack,
} from "@chakra-ui/react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { motion } from "framer-motion";
import OSA_LOGO from "../../assets/OSA-LOGO.png"; // Adjust path as needed

const MotionBox = motion(Box);

const MOCK_ACCOUNTS: Record<string, { role: any; password: string; firstName: string; lastName: string }> = {
  "superadmin@osa.com": { role: "super-admin", password: "password123", firstName: "Oluwatosin", lastName: "Owner" },
  "admin@osa.com": { role: "admin", password: "password123", firstName: "Emeka", lastName: "Obi" },
  "student@osa.com": { role: "student", password: "password123", firstName: "Nachi", lastName: "John" },
};

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Retrieve origin route if redirected, or default based on role
  const from = location.state?.from?.pathname || null;

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: "Input Error",
        description: "Please fill in all fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await login({ email, password });
      
      toast({
        title: "Login Successful",
        description: "Welcome back!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });

      // Quick retrieve of the user from storage to get the role for routing
      const userStr = localStorage.getItem("osa_user");
      let role = "admin";
      if (userStr) {
        try {
          role = JSON.parse(userStr).role;
        } catch {}
      }

      // Determine redirect path
      let redirectPath = "/admin/dashboard/overview";
      if (role === "super-admin") {
        redirectPath = "/super-admin/dashboard/overview";
      } else if (role === "student") {
        redirectPath = "/student/dashboard/overview";
      }

      navigate(from || redirectPath, { replace: true });
    } catch (err: any) {
      const errMsg = err.response?.data?.message || err.message || "Invalid credentials. Please try again.";
      toast({
        title: "Login Failed",
        description: errMsg,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Center minH="100vh" bg="#1C3519" px={4} py={12}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        bg="white"
        w="full"
        maxW="md"
        p={8}
        borderRadius="2xl"
        boxShadow="2xl"
      >
        <VStack spacing={6} align="stretch">
          <Center flexDirection="column">
            <Image
              src={OSA_LOGO}
              alt="OSA Logo"
              h="70px"
              objectFit="contain"
              mb={4}
            />
            <Heading size="lg" color="#1C3519" fontFamily="montserrat" fontWeight="700">
              OSA Portal
            </Heading>
            <Text color="gray.500" fontSize="sm" fontFamily="lato" mt={1}>
              Log in to manage your learning workspace
            </Text>
          </Center>

          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel color="gray.700" fontWeight="600" fontSize="xs">
                  EMAIL ADDRESS
                </FormLabel>
                <InputGroup>
                  <Input
                    type="email"
                    placeholder="name@successacademy.com"
                    focusBorderColor="green.500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    bg="gray.50"
                    h="50px"
                    fontSize="sm"
                    fontFamily="lato"
                    color={"black"}
                  />
                </InputGroup>
              </FormControl>

              <FormControl id="password">
                <FormLabel color="gray.700" fontWeight="600" fontSize="xs">
                  PASSWORD
                </FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    focusBorderColor="green.500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    bg="gray.50"
                    h="50px"
                    fontSize="sm"
                    fontFamily="lato"
                    color={"black"}
                  />
                  <InputRightElement h="50px" pr={2}>
                    <IconButton
                      variant="ghost"
                      aria-label="Toggle Password Visibility"
                      icon={showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      onClick={handleTogglePassword}
                      size="sm"
                      _hover={{ bg: "transparent" }}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Button
                type="submit"
                bg="#1C3519"
                color="white"
                h="50px"
                fontSize="md"
                fontWeight="bold"
                isLoading={isSubmitting}
                loadingText="Logging in..."
                _hover={{ bg: "#2d5428" }}
                _active={{ bg: "#152a13" }}
                mt={2}
                borderRadius="xl"
                w="full"
              >
                Log In
              </Button>

              <div>
                {Object.keys(MOCK_ACCOUNTS).map((email) => (
                  <Box key={email} p={4} borderWidth={1} borderRadius="lg" mb={2}>
                    <Text fontWeight="bold" color="black">{email}</Text>
                    <Text fontSize="sm" fontFamily="lato" color="black">Password: {MOCK_ACCOUNTS[email].password}</Text>
                    <Text fontSize="sm" fontFamily="lato" color="black">Role: {MOCK_ACCOUNTS[email].role}</Text>
                  </Box>
                ))}
              </div>
            </Stack>
          </form>
        </VStack>
      </MotionBox>
    </Center>
  );
};

export default Login;
