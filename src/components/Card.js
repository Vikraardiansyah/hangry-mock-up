import React from "react";
import { Col, Card, CardImg, CardTitle, CardText } from "reactstrap";
import ArrowRight from "../assets/arrow-right.png";
import "../styles/Card.css";

const CardComp = ({ image, imageRounded, title, text }) => {
  return (
    <Col sm="4" xs="6" className="card-content">
      <Card className="card">
        <CardImg src={image} alt={image} className="image-card" />
        <CardImg
          src={imageRounded}
          alt={imageRounded}
          className="image-rounded-card"
        />
        <CardTitle className="title-card">
          {title}{" "}
          <img src={ArrowRight} alt="arrow-right" className="arrow-right" />
        </CardTitle>
        <CardText className="text-card">{text}</CardText>
      </Card>
    </Col>
  );
};

export default CardComp;
