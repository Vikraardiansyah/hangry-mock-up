import React from "react";
import { Container, Row } from "reactstrap";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Brand from "./components/Brand";
import Card from "./components/Card";

import Image1 from "./assets/image1.png";
import Image2 from "./assets/image2.png";
import Image3 from "./assets/image3.png";
import Image4 from "./assets/image4.png";
import ImageRounded1 from "./assets/image-rounded1.png";
import ImageRounded2 from "./assets/image-rounded2.png";
import ImageRounded3 from "./assets/image-rounded3.png";
import ImageRounded4 from "./assets/image-rounded4.png";

const datas = [
  {
    id: 1,
    image: Image1,
    imageRounded: ImageRounded1,
    title: "Ayam Koplo",
    text: "Ayam Geprek · Indonesia",
  },
  {
    id: 2,
    image: Image2,
    imageRounded: ImageRounded2,
    title: "San Gyu",
    text: "Beef Bowl · Jepang",
  },
  {
    id: 3,
    image: Image3,
    imageRounded: ImageRounded3,
    title: "Bude Sari",
    text: "Nasi Ayam · Indonesia",
  },
  {
    id: 4,
    image: Image4,
    imageRounded: ImageRounded4,
    title: "Kopi Dari|Pada",
    text: "Minuman · Indonesia",
  },
];

const App = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Brand />
      <Container fluid="lg" className="container main">
        <Row>
          {datas.map((data) => (
            <Card
              key={data.id}
              image={data.image}
              imageRounded={data.imageRounded}
              title={data.title}
              text={data.text}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default App;
