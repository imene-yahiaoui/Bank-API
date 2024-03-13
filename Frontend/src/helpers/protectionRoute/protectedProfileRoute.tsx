import { Navigate } from "react-router-dom";
import React from "react";

const ProtectedProfileRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};
export default ProtectedProfileRoute;
