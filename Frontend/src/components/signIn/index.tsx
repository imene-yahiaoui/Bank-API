// eslint-disable-next-line
import { useDispatch, useSelector } from "react-redux";
import {
  logout,
  selectUser,
  selectBody,
} from "../../helpers/features/userSlice.ts";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";

const SignIn = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  // console.log("ici",user)
  // const infos = useSelector(body);
  const infos = useSelector(selectBody);
  console.log("ici info", infos);
  const firstName = infos?.body?.firstName;
  const dispatch = useDispatch();

  //finction for SignIn
  function Singin() {
    navigate("/login");
  }
  //finction for Singout
  function Singout() {
    navigate("/");
    dispatch(logout());
  }
  if (!user) {
    localStorage.removeItem("token");
  }

  return !user ? (
    <div>
      <button data-testid="login" onClick={Singin} className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        Sign In
      </button>
    </div>
  ) : (
    <div className="logout">
      <Link className="nameUser" to="/profile">
        <i className="fa fa-user-circle"></i>
        <p className="user name">{firstName}</p>
      </Link>
      <button data-testid="logout" onClick={Singout} className="main-nav-item">
        <i className="fa fa-sign-out"></i>
        Sign out
      </button>
    </div>
  );
};

export default SignIn;
