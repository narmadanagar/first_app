import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

export function CenterLines(props) {
  return (
    <Row style={{ padding: "5vh" }}>
      <Col xs={12} md={12} lg={12} style={{ textAlign: "center" }}>
        {props.name}
      </Col>
      <Col xs={12} md={12} lg={12} style={{ textAlign: "center" }}>
        {props.email}
      </Col>
      <Col xs={12} md={12} lg={12} style={{ textAlign: "center" }}>
        {props.phoneNum}
      </Col>
    </Row>
  );
}
