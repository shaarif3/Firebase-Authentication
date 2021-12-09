import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../../configs/firebase";
import styles from "./authenticate.module.scss";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  function registerUser() {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        console.log(data);
        setEmail(" ");
        setPassword("");
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  return (
    <div className={styles.main_div}>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={registerUser}>Register</button>
      </div>
    </div>
  );
};

export default Register;
