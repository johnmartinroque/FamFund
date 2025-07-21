import { Button, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth, db } from "../../firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, "+", errorMessage);
        });
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <Row>
        <Col>Register</Col>
        <Col>
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
              Example textarea
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></textarea>
          </div>
          <Button onClick={register}>Submit</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Register;
