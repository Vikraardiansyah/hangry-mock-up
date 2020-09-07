import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavbarText,
  Container,
  Row,
  Col,
  Jumbotron,
} from "reactstrap";
import Logo from "./assets/logo.svg";
import Bars from "./assets/bars.png";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar light expand="md" className=".navbar">
        <Container fluid="lg" className="container">
          <NavbarBrand>
            <img src={Logo} alt="logo" className="logo" />
          </NavbarBrand>
          <img src={Bars} className="ml-auto bar" alt="logo" onClick={toggle} />
          <Collapse isOpen={isOpen} className="nav-item" navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavbarText className="nav-text">Tentang Kami</NavbarText>
              </NavItem>
              <NavItem>
                <NavbarText className="nav-text">Semua Outlet</NavbarText>
              </NavItem>
              <NavItem>
                <NavbarText className="nav-text">Promo</NavbarText>
              </NavItem>
              <NavItem>
                <NavbarText className="nav-text">Karier</NavbarText>
              </NavItem>
              <NavItem>
                <NavbarText className="nav-text-download">
                  Download App
                </NavbarText>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Jumbotron className="jumbotron">
        <Container fluid="lg" className="container">
          <Row>
            <Col lg="6">
              <p className="text-question">Kamu lapar dan haus?</p>
              <p className="text-h1">
                Tenang... ada Hangry! yang siap mengatasi
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
};

export default App;
