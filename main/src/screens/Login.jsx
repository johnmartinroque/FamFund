import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const navigateToRegister = () => {
    navigate("/register");
  };
  return (
    <div>
      <Button onClick={navigateToRegister}>Register</Button>
    </div>
  );
}

export default Login;
