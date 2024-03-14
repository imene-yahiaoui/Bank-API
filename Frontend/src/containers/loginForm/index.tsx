/* eslint-disable no-inner-declarations */
import { useNavigate } from "react-router-dom";
import React,{ useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { login } from "../../helpers/features/userSlice";
import { body } from "../../helpers/features/userSlice";
import { loginAPI, getProfileAPI } from "../../helpers/services/api";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorUser, setErrorUser] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function log(e: React.SyntheticEvent) {
    e.preventDefault();

    if (email.length === 0 || password.length === 0) {
      setError(true);
      function msgdelet() {
        setError(false);
      }
      setTimeout(msgdelet, 30000);
    }

    const { status, body: resultBody } = await loginAPI(email, password);

    if (status === 200) {
      navigate("/profile");

      localStorage.setItem("token", resultBody.token);

      dispatch(
        login({
          user: { email, password },
        })
      );

      const token = localStorage.getItem("token");
      const profile = await getProfileAPI(token);

      if (profile.status === 200) {
        dispatch(
          body({
            body: profile.body,
          })
        );
      }
    } else {
      setErrorUser(true);
      setEmail("");
      setPassword("");
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
