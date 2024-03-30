import LoginForm from "../../containers/loginForm";
import "./style.css";

const Login = () => {
  return (
    <div className="logInContainer">
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1 data-testid="loginTitle">Sign In</h1>
          <LoginForm />
        </section>
      </main>
    </div>
  );
};

export default Login;
