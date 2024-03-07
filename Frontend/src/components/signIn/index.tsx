import { useNavigate, Link } from "react-router-dom";
import "./style.css";

const SignIn = () => {
  const navigate = useNavigate();
  const user = false;
  const userName = "imene";
  //finction for SignIn
  function Singin() {
    navigate("/login");
  }
  //finction for Singout
  function Singout() {
    navigate("/");
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
        <p className="user name">{userName}</p>
      </Link>
      <button onClick={Singout} className="main-nav-item">
        <i className="fa fa-sign-out"></i>
        Sign out
      </button>
    </div>
  );
};

export default SignIn;
