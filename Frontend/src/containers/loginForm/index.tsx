import React, { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.css";

interface LoginFormProps {
  email: string;
  password: string;
  errorUser: boolean;
  error: boolean;
}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorUser, setErrorUser] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  async function log(e) {
    e.preventDefault();
    //empty
    if (email.length === 0 || password.length === 0) {
      setError(true);
      // eslint-disable-next-line no-inner-declarations
      function msgDelet() {
        setError(false);
      }
      setTimeout(msgDelet, 30000);
    }
   const item = { email, password };

    let result = await fetch("url", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    if (result.status === 200) {
      navigate("/profile");
      localStorage.setItem("token", result.body.token);

      const token = localStorage.getItem("token");
      const response = await fetch("url profil", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
        },
      });
      const profile = await response.json();

      if (profile.status === 200) {
        //som code to redux
      }
    } else {
      setErrorUser(true);
      setEmail("");
      setPassword("");
      // eslint-disable-next-line no-inner-declarations
      function deletError() {
        setErrorUser(false);
      }
      setTimeout(deletError, 3000);
    }
  }

  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      {error ? (
        <p className="error">
          Error:Email and password cannot be null or empty
        </p>
      ) : (
        ""
      )}
      {!error && errorUser ? (
        <p className="error">Error in username or password</p>
      ) : (
        ""
      )}
      <button type="submit" className="sign-in-button" onClick={log}>
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
