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
import Playstore from "./assets/playstore.png";
import Appstore from "./assets/appstore.png";
import Iphone from "./assets/iphone.png";
import IphoneHalf from "./assets/iphonehalf.png";
import ArrowRight from "./assets/arrow-right.png";
import Image1 from "./assets/image1.png";
import Group1 from "./assets/group1.png";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
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
      <Jumbotron className="jumbotron">
        <Container fluid="lg" className="container">
          <Row>
            <Col md="5" xs="7">
              <p className="text-question">Kamu lapar dan haus?</p>
              <p className="text-bold">
                Tenang... ada Hangry! yang siap mengatasi
              </p>
              <Container fluid className="button-play">
                <Row>
                  <Col xl="7">
                    <img
                      src={Playstore}
                      alt="playstore"
                      className="playstore"
                    />
                  </Col>
                  <Col xl="5">
                    <img src={Appstore} alt="appstore" className="appstore" />
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md={{ size: 6, offset: 1 }} xs="5" className="iphonefull">
              <img src={Iphone} alt="iphone" className="iphone" />
            </Col>
            <Col xs="5" className="iphonehalf">
              <img src={IphoneHalf} alt="iphonehalf" />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container fluid="lg" className="container main">
        <p className="text-bold">
          Hangry! adalah restoran dengan beragam brand
        </p>
        <p className="text-brand">
          Kami menyajikan beragam brand untuk menemani setiap waktu santapmu
        </p>
      </Container>
      <Container fluid="lg" className="container main">
        <Row>
          <Col sm="4" xs="6" className="card-content">
            <div>
              <img src={Image1} alt="image1" className="image-card" />
              <p className="title-card">
                Ayam Koplo{" "}
                <img
                  src={ArrowRight}
                  alt="arrow-right"
                  className="arrow-right"
                />
              </p>
              <p className="text-card">Ayam Geprek &#183; Indonesia</p>
            </div>
          </Col>
          <Col sm="4" xs="6" className="card-content">
            <div>
              <img src={Image1} alt="image1" className="image-card" />
              <p className="title-card">
                Ayam Koplo{" "}
                <img
                  src={ArrowRight}
                  alt="arrow-right"
                  className="arrow-right"
                />
              </p>
              <p className="text-card">Ayam Geprek &#183; Indonesia</p>
            </div>
          </Col>
          <Col sm="4" xs="6" className="card-content">
            <div>
              <img src={Image1} alt="image1" className="image-card" />
              <p className="title-card">
                Ayam Koplo{" "}
                <img
                  src={ArrowRight}
                  alt="arrow-right"
                  className="arrow-right"
                />
              </p>
              <p className="text-card">Ayam Geprek &#183; Indonesia</p>
            </div>
          </Col>
          <Col sm="4" xs="6" className="card-content">
            <div>
              <img src={Image1} alt="image1" className="image-card" />
              <p className="title-card">
                Ayam Koplo{" "}
                <img
                  src={ArrowRight}
                  alt="arrow-right"
                  className="arrow-right"
                />
              </p>
              <p className="text-card">Ayam Geprek &#183; Indonesia</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
