import { Navigate } from "react-router-dom";
import React from "react";

const ProtectedLoginRoute = ({ user, children }) => {
  if (user) {
    return <Navigate to="/profile" />;
  }

  return children;
};
export default ProtectedLoginRoute;
