import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavbarText,
  Container,
} from "reactstrap";
import Logo from "../assets/logo.svg";
import Bars from "../assets/bars.png";
import "../styles/Navbar.css";

const NavbarComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar light expand="lg" className=".navbar">
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
  );
};

export default NavbarComp;
