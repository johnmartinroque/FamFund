import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const navigateToRegister = () => {
    navigate("/register");
  };

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setEmail("");
      setPassword("");
      localStorage.setItem("userName", user.displayName);
      localStorage.setItem("userEmail", user.email);
    } catch (error) {
      console.error("Registration Error: ", error.code, error.message);
    }
  };
  return (
    <div>
      <Button onClick={navigateToRegister}>Register</Button>
    </div>
  );
}

export default Login;
