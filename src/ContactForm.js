import React, { Component } from "react";

import { FormControl, FormGroup, ControlLabel, Button } from "react-bootstrap";

export function CreateTable(props) {
  return (
    <form
      style={{
        padding: "10px",
        backgroundColor: "rgba(192, 251, 251, 0.5)"
      }}
    >
      <h3 style={{ textAlign: "center" }}>{props.title}</h3>
      {props.children}
    </form>
  );
}

export function FieldGroup(props) {
  return (
    <FormGroup>
      <ControlLabel style={{ fontWeight: "normal", fontFamily: "Verdana" }}>
        {props.label}
      </ControlLabel>

      <FormControl
        style={{ fontFamily: "Verdana" }}
        id={props.id}
        type={props.type}
        placeholder={"Enter " + props.type}
        value={props.valueIn}
        onChange={props.onChangeIn}
      />
    </FormGroup>
  );
}

export function FormButton(props) {
  return (
    <div style={{ paddingTop: "1vh" }}>
      <Button onClick={props.handleSubmit} bsStyle={props.buttonStyle}>
        {props.buttonText}
      </Button>
    </div>
  );
}
