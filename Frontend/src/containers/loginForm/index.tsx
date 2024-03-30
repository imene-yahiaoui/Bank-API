/* eslint-disable no-inner-declarations */
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { login } from "../../helpers/features/userSlice";
import { body } from "../../helpers/features/userSlice";
import { loginAPI, getProfileAPI } from "../../helpers/services/api";
import DisplayMessage from "../../components/displayMessage";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function log(e: React.SyntheticEvent) {
    e.preventDefault();

    if (email.length === 0 || password.length === 0) {
      DisplayMessage(
        "Error:Email and password cannot be empty",
        "linear-gradient(to right, #ff0000, #ff4500)"
      );
    }

    const { status, body: resultBody } = await loginAPI(email, password);

    if (!status) {
      DisplayMessage(
        "Server unavailable. Please try again later",
        "linear-gradient(to right, #00b09b, #96c93d)"
      );
    } else if (status === 200) {
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
      if (email.length !== 0 || password.length !== 0) {
        DisplayMessage(
          "Error in username or password",
          "linear-gradient(to right, #ff0000, #ff4500)"
        );
        setEmail("");
        setPassword("");
      }
    }
  }

  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="username" data-testid="Username">
          Username
        </label>
        <input
          id="username"
          type="text"
          data-testid="UsernameInput"
          value={email.trim()}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password" data-testid="Password">
          Password
        </label>
        <input
        data-testid="PasswordInput"
          value={password.trim()}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <button type="submit" className="sign-in-button" onClick={log}>
        Sign In
      </button>
    </form>
  );
};
export default LoginForm;
