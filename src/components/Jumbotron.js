import React from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import { isAndroid, isIOS } from "react-device-detect";
import Playstore from "../assets/playstore.png";
import Appstore from "../assets/appstore.png";
import Iphone from "../assets/iphone.png";
import IphoneHalf from "../assets/iphonehalf.png";
import "../styles/Jumbotron.css";

const JumbotronComp = () => {
  return (
    <Jumbotron className="jumbotron">
      <Container fluid="lg" className="container">
        <Row>
          <Col sm="5" xs="7">
            <p className="text-question">Kamu lapar dan haus?</p>
            <p className="text-bold">
              Tenang... ada Hangry! yang siap mengatasi
            </p>
            <Container fluid className="button-play">
              <Row>
                {isIOS ? null : (
                  <Col xl="7">
                    <img
                      src={Playstore}
                      alt="playstore"
                      className="playstore"
                    />
                  </Col>
                )}
                {isAndroid ? null : (
                  <Col xl="5">
                    <img src={Appstore} alt="appstore" className="appstore" />
                  </Col>
                )}
              </Row>
            </Container>
          </Col>
          <Col lg="6" md={{ size: 5, offset: 1 }} xs="5" className="iphonefull">
            <img src={Iphone} alt="iphone" className="iphone" />
          </Col>
          <Col xs="5" className="iphonehalf">
            <img src={IphoneHalf} alt="iphonehalf" />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default JumbotronComp;
