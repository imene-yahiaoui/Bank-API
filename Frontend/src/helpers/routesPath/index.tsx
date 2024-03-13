import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import Login from "../../pages/login";
import NotFound from "../../pages/notFound";
import User from "../../pages/user";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice.js";
import ProtectrdRoute from "../protectrdRoute";
import Protect from "../protect";
const RoutesPath = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route
          path="/login"
          element={
            <Protect user={user}>
              {" "}
              <Login />
            </Protect>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectrdRoute user={user}>
              {" "}
              <User />{" "}
            </ProtectrdRoute>
          }
        />
      </Routes>
    </div>
  );
};
export default RoutesPath;
