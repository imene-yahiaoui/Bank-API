import { Link } from "react-router-dom";
import logo from "../../assets/images/argentBankLogo.png";
import SignIn from "../../components/signIn";
import "./style.css";

const Header = () => {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        ></img>
        <h1  className="sr-only" data-testid="my-component">
          Argent Bank
        </h1>
      </Link>
      <SignIn />
    </nav>
  );
};

export default Header;
