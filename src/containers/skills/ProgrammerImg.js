import React, { Component } from "react";
import programmer from "../../assets/images/programmer.svg";

export default class ProgrammerImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
        src={programmer}
        alt="programmer"
        style={{ width: "100%", maxWidth: 1040, height: "auto" }}
      />
    );
  }
}
