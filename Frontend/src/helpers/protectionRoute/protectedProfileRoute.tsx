/**
 * Protected Profile Route
 *
 * A component for protecting the profile route.
 * If a user is not logged in, it redirects to the login page.
 *
 * @module ProtectedProfileRoute
 */
import { Navigate } from "react-router-dom";
import React from "react";
interface ProtectedProfileRouteProps {
  user: { email: string; password: string } | null;
  children: React.ReactNode;
}

const ProtectedProfileRoute: React.FC<ProtectedProfileRouteProps> = ({
  user,
  children,
}) => {
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};
export default ProtectedProfileRoute;
