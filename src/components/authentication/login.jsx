import React, { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../../configs/firebase";
import styles from "./authenticate.module.scss";
// import history from "../history";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function loginUser() {
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        alert("Login Successfull");
        setEmail(" ");
        setPassword("");
        history.push("/home");
      })
      .catch((error) => {
        if (error.message) {
          alert("wrong credientails");
        }
      });
  }

  return (
    <div className={styles.main_div}>
      <div>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={loginUser}>login</button>
      </div>
    </div>
  );
};

export default Login;
