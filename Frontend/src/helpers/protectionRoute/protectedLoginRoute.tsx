/**
 * Protected Login Route
 *
 * A component for protecting the login route.
 * If a user is already logged in, it redirects to the profile page.
 *
 * @module ProtectedLoginRoute
 */
import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedLoginRouteProps {
  user: { email: string; password: string } | null;
  children: React.ReactNode;
}

const ProtectedLoginRoute: React.FC<ProtectedLoginRouteProps> = ({
  user,
  children,
}) => {
  if (user) {
    return <Navigate to="/profile" />;
  }

  return <>{children}</>;
};

export default ProtectedLoginRoute;
