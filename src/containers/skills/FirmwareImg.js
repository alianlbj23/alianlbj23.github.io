import React, { Component } from "react";
import firmware from "../../assets/images/firware.svg";

export default class FirmwareImg extends Component {
  render() {
    return (
      <img
        src={firmware}
        alt="firmware"
        style={{ width: "100%", maxWidth: 2080, height: "auto" }}
      />
    );
  }
}
