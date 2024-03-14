import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedLoginRouteProps {
  user: { email: string; password: string };
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
