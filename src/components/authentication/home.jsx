import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  auth,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  deleteUser,
} from "../../configs/firebase";

const Home = () => {
  const [password, setpassword] = useState("");
  useEffect(() => {
    const user = auth.currentUser;

    if (user) {
      console.log(user, "check");
    } else {
      console.log("no user is signed in");
    }
  }, []);
  const history = useHistory();
  function logoutUser() {
    history.push("./login");
    signOut(auth)
      .then(() => {
        alert("successfully Logout");
      })
      .catch((error) => {
        alert("error occured");
      });
    console.log("logout");
  }
  function emailVerification() {
    sendEmailVerification(auth.currentUser).then((message) => {
      alert(message);
    });
  }
  function passwordReset() {
    let email = auth.currentUser.email;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("password reset email sent");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  }

  function dltUser() {
    const user = auth.currentUser;

    deleteUser(user)
      .then(() => {
        alert("User deleted");
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  return (
    <div>
      <button onClick={logoutUser}>log Out</button>
      <button onClick={emailVerification}>Verify Email</button>

      <button onClick={passwordReset}>password reset</button>
      <button onClick={dltUser}>delete user</button>
    </div>
  );
};

export default Home;
