import { useDispatch, useSelector } from "react-redux";
import { body, logout, selectUser } from "../../helpers/features/userSlice.ts";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";

const SignIn = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const infos = useSelector(body);
  console.log(infos);
  const firstName = infos.payload?.user?.body?.body?.firstName;
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
      <button onClick={Singin} className="main-nav-item">
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
      <button onClick={Singout} className="main-nav-item">
        <i className="fa fa-sign-out"></i>
        Sign out
      </button>
    </div>
  );
};

export default SignIn;
