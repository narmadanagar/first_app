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
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(this.state);
    const target = e.target;
    const value = target.value;
    const id = target.id;

    this.setState({
      [id]: value
    });
  }

  async handleSubmit() {
    // alert('name: ' + this.state.name + ' ' + 'email: ' + this.state.email + ' ' + 'message: ' + this.state.message);
    try {
      let res = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(this.state)
      });

      res = await res.json();
      console.log(res);

      var y = res.value;
      console.log(y);
    } catch (err) {
      console.error(err);
    }

    if (y === 1) {
      alert("Empty fields");
    } else if (y === 2) {
      alert("Email should have @ and .");
    } else if (y === 0) {
      alert("Form sent successfully");
    }

    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <div>
        <Row>
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
            <form>
              <div>Name:</div>
              <FormControl
                id="name"
                type="text"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <div>Email:</div>
              <FormControl
                id="email"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <div>Message:</div>
              <FormControl
                id="message"
                componentClass="textarea"
                placeholder="Type your message over here"
                value={this.state.message}
                onChange={this.handleChange}
              />

              <Button onClick={this.handleSubmit} bsStyle="primary">
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
