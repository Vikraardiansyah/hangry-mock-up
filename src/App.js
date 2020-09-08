import React from "react";
import { Container, Row } from "reactstrap";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Brand from "./components/Brand";
import Card from "./components/Card";

import Image1 from "./assets/image1.png";
import Group1 from "./assets/group1.png";

const App = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Brand />
      <Container fluid="lg" className="container main">
        <Row>
          <Card
            image={Image1}
            group={Group1}
            title="Ayam Koplo"
            text="Ayam Geprek &#183; Indonesia"
          />
        </Row>
      </Container>
    </>
  );
};

export default App;
