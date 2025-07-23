import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
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

      alert("success");
    } catch (error) {
      console.error("Registration Error: ", error.code, error.message);
    }
  };
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <h1 className="text-center">Login</h1>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Password
              </label>
              <input
                class="form-control"
                id="exampleFormControlTextarea1"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="text-center">
              <Button onClick={login}>Login</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Button onClick={navigateToRegister}>Register</Button>
    </div>
  );
}

export default Login;
