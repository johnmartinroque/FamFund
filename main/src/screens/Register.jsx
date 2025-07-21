import { Button, Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth, db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { Link, useNavigate } from "react-router";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();
  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        email: user.email,
      });

      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Registration Error: ", error.code, error.message);
    }
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  useEffect(() => {});
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <h1 className="text-center">Register</h1>

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
              <Button onClick={register}>Submit</Button>
            </div>
            <div className="text-center">
              <Button onClick={navigateToLogin}>Login</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
