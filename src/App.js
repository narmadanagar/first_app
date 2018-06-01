import React, { Component } from "react";
import "./App.css";
import picture1 from "./nidhi.jpg";
import picture2 from "./Nidhi_Gretch.jpg";
import picture3 from "./Nidhi_Farha.jpg";

import thumbnail1 from "./nidhi.jpg";
import thumbnail2 from "./Nidhi_Gretch.jpg";
import thumbnail3 from "./Nidhi_Farha.jpg";

import ImageGallery from "react-image-gallery";

import {
  Row,
  Col,
  Image,
  Button,
  ButtonToolbar,
  FormControl
} from "react-bootstrap";

import { ProfileImage, WrapperDiv, SlideShow } from "./component";

import "./style.css";

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
    // images for the slideshow
    const images = [
      {
        original: picture1,
        thumbnail: thumbnail1
      },
      {
        original: picture2,
        thumbnail: thumbnail2
      },
      {
        original: picture3,
        thumbnail: thumbnail3
      }
    ];

    return (
      <div style={{ padding: "5vh" }}>
        <Row>
          <Col xs={12} md={6} lg={6} style={{ textAlign: "center" }}>
            <Row>
              <SlideShow items={images} />
            </Row>
            <Row style={{ padding: "5vh" }}>
              <Col xs={12} md={12} lg={12} style={{ textAlign: "center" }}>
                Nidhi Singh
              </Col>
              <Col xs={12} md={12} lg={12} style={{ textAlign: "center" }}>
                nms@equitasls.com
              </Col>
              <Col xs={12} md={12} lg={12} style={{ textAlign: "center" }}>
                603-443-3435
              </Col>
              <Row />
            </Row>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Row style={{ textAlign: "center" }}>
              <h3>Contact Me</h3>
            </Row>
            <form
              style={{
                padding: "10px",
                backgroundColor: "rgba(192, 251, 251, 0.5)"
              }}
            >
              <div style={{ padding: "1vh" }}>Name:</div>
              <FormControl
                style={{ padding: "1vh" }}
                id="name"
                type="text"
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <div style={{ padding: "1vh" }}>Email:</div>
              <FormControl
                style={{ padding: "1vh" }}
                id="email"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <div style={{ padding: "1vh" }}>Message:</div>
              <FormControl
                style={{ padding: "1vh" }}
                id="message"
                componentClass="textarea"
                placeholder="Type your message over here"
                value={this.state.message}
                onChange={this.handleChange}
              />

              <div style={{ paddingTop: "1vh" }}>
                <Button onClick={this.handleSubmit} bsStyle="primary">
                  Submit
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
