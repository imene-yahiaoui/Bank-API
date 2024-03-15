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
