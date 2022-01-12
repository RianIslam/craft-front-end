import React from "react";
import { Container, Navbar } from "react-bootstrap";

interface Props {}

const Header = (props: Props) => {
  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>React Typescript Bootstrap Tuitorial</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
