import React from "react";
import { Col, Card, CardImg, CardTitle, CardText } from "reactstrap";
import ArrowRight from "../assets/arrow-right.png";
import "../styles/Card.css";

const CardComp = ({ image, group, title, text }) => {
  return (
    <Col sm="4" xs="6" className="card-content">
      <Card className="card">
        <CardImg src={image} alt="image1" className="image-card" />
        <CardImg src={group} alt="group1" className="image-rounded-card" />
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
