import { useState } from "react";
import axios from "axios";

import "./index.scss";

const Login = ({ setLoginPage, setUser, setMsg }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          setUser(response.data.user);
          window.location.reload();
        } else {
          setMsg(response.data.msg);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <form onSubmit={(e) => submit(e)}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mb-3">
        Login
      </button>
      <div
        className="text-center text-primary link"
        onClick={() => setLoginPage(false)}
      >
        Create an Account?
      </div>
    </form>
  );
};
export default Login;
