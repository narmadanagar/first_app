import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import picture from "./mood-smiley-face.jpg";
import {
  Row,
  Col,
  Image,
  Button,
  ButtonToolbar,
  FormControl
} from "react-bootstrap";
import { ProfileImage } from "./component";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      text: "WOW"
    };
  }
  render() {
    return (
      <div>
        <Col xs={12} md={6} lg={6} style={{ textAlign: "center" }}>
          <Row>
            <h3>Profile</h3>
          </Row>
          <Row>
            <ProfileImage rectangle src={picture} />
          </Row>
          <Row>
            <Row style={{ textAlign: "left", margin: "auto" }}>
              <Col xs={6} md={6} lg={6} style={{ textAlign: "center" }}>
                Name
              </Col>
              <Col xs={6} md={6} lg={6} style={{ textAlign: "center" }}>
                Nidhi Singh
              </Col>
            </Row>
            <Row style={{ textAlign: "left", margin: "auto" }}>
              <Col xs={6} md={6} lg={6} style={{ textAlign: "center" }}>
                Email
              </Col>
              <Col xs={6} md={6} lg={6} style={{ textAlign: "center" }}>
                nms@equitasls.com
              </Col>
            </Row>
            <Row style={{ textAlign: "left", margin: "auto" }}>
              <Col xs={6} md={6} lg={6} style={{ textAlign: "center" }}>
                Phone number
              </Col>
              <Col xs={6} md={6} lg={6} style={{ textAlign: "center" }}>
                603-443-3435
              </Col>
            </Row>
            <Row>
              <br />
            </Row>
            <Button bsStyle="primary" bsSize="small">
              Edit
            </Button>
          </Row>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Row style={{ textAlign: "center" }}>
            <h3>Contact Us</h3>
          </Row>
          Title: <FormControl placeholder="Title" />
          Contact Number: <FormControl placeholder="Contact number" />
          Message: <FormControl placeholder="Message" />
          <br />
          <Button onClick={() => this.setState({})} bsStyle="primary">
            Submit
          </Button>
        </Col>
      </div>
    );
  }
}

export default App;
