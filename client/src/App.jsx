import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AuthPage from "./components/AuthPage";
import "./App.scss";
const App = () => {
  const [user, setUser] = useState({ user: "", email: "" });
  const [loggedIn, setLoggedIn] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .post("/api/auth", {
          token: token,
        })
        .then(function (response) {
          if (response.data.success) {
            setLoggedIn(true);
            setUser(response.data.user);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <div>
      <Navbar user={user} />
      {loggedIn ? <Home user={user} /> : <AuthPage setUser={setUser} />}
    </div>
  );
};
export default App;
