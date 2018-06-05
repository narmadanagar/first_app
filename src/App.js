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
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock
} from "react-bootstrap";

import { CenterLines } from "./CenterLines";
import { CreateTable } from "./ContactForm";

import { FieldGroup } from "./ContactForm";

import { FormButton } from "./ContactForm";

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
          {/* The First Half of the layout, includes image and intro*/}
          <Col xs={12} md={6} lg={6} style={{ textAlign: "center" }}>
            {/* The SlideShow Images */}
            <Row>
              <SlideShow items={images} />
            </Row>

            {/* The Introduction paragraphs */}
            <CenterLines
              name="Nidhi Singh"
              email="nms@equitasls.com"
              phoneNum="603-443-3435"
            />
          </Col>

          {/* The Second Half of the layout, includes contact form*/}
          <Col xs={12} md={6} lg={6}>
            <CreateTable title="Contact Form">
              <FieldGroup
                id="name"
                placeHolder="Type your name"
                type="text"
                label="Name"
                valueIn={this.state.name}
                onChangeIn={this.handleChange}
              />
              <FieldGroup
                id="email"
                placeHolder="Type your email"
                type="email"
                label="Email"
                valueIn={this.state.email}
                onChangeIn={this.handleChange}
              />
              <FieldGroup
                id="message"
                placeHolder="Type a message"
                type="text"
                label="Message"
                valueIn={this.state.message}
                onChangeIn={this.handleChange}
              />
              <FormButton
                handleSubmit={this.handleSubmit}
                buttonText="Submit"
                buttonStyle="primary"
              />
            </CreateTable>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
