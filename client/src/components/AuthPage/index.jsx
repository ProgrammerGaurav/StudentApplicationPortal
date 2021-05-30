import { useState } from "react";
import Login from "./login";
import Signup from "./signup";
import "./index.scss";
const AuthPage = ({ setUser }) => {
  const [loginPage, setLoginPage] = useState(true);
  const [msg, setMsg] = useState("");
  return (
    <div className="container authpage">
      <div className="row">
        <div className="col-6 my-auto form">
          {loginPage ? (
            <Login
              setLoginPage={setLoginPage}
              setUser={setUser}
              setMsg={setMsg}
            />
          ) : (
            <Signup
              setLoginPage={setLoginPage}
              setUser={setUser}
              setMsg={setMsg}
            />
          )}
          {msg !== "" ? (
            <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"
              style={{ margin: "auto 100px" }}
            >
              {msg}
              <div
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                style={{ marginLeft: "auto" }}
              ></div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="col-6 my-auto bgimage">
          <img src="/img/authpage.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
