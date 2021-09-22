import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card,Button } from "react-bootstrap";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cengage.force.com/resource/1607465003000/loginIcon" />
  <Card.Body>
    <Card.Title>Log In</Card.Title>
    <Card.Text>
     You should Login before you can use the website
    </Card.Text>
    <Button variant="primary" onClick={() => loginWithRedirect()}>Login</Button>
  </Card.Body>
</Card></>
};

export default LoginButton;



