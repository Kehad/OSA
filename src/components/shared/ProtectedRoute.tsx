import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { UserRole } from "../../types/auth";
import { Center, Spinner, Text, VStack } from "@chakra-ui/react";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRoles,
}) => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <Center h="100vh" w="100vw" bg="#1C3519">
        <VStack spacing={4}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="green.500"
            size="xl"
          />
          <Text color="white" fontFamily="lato" fontWeight="500">
            Verifying session...
          </Text>
        </VStack>
      </Center>
    );
  }

  if (!isAuthenticated || !user) {
    // Redirect to login page and preserve the page they were trying to access
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Redirect if they do not have permissions for this page
    // Super-admin routes might block simple admin, etc.
    const defaultRedirect =
      user.role === "super-admin"
        ? "/super-admin/dashboard/overview"
        : user.role === "student"
        ? "/student/dashboard/overview"
        : "/admin/dashboard/overview";
    return <Navigate to={defaultRedirect} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
