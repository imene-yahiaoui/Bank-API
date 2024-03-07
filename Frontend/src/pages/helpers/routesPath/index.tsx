import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../home";
import Login from "../../login";
import NotFound from "../../notFound";
import User from "../../user";

const RoutesPath = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<User />} />
      </Routes>
    </div>
  );
};
export default RoutesPath;
