import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import Login from "../../pages/login";
import NotFound from "../../pages/notFound";
import User from "../../pages/user";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice.js";
import ProtectedProfileRoute from "../protectionRoute/protectedProfileRoute";
import ProtectedLoginRoute from "../protectionRoute/protectedLoginRoute";
const RoutesPath = () => {
  type UserProps = { email: string; password: string };

  const user: UserProps | null = useSelector(selectUser);
  console.log(user, "user");

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route
          path="/login"
          element={
            <ProtectedLoginRoute user={user}>
              {" "}
              <Login />
            </ProtectedLoginRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedProfileRoute user={user}>
              {" "}
              <User />{" "}
            </ProtectedProfileRoute>
          }
        />
      </Routes>
    </div>
  );
};
export default RoutesPath;
