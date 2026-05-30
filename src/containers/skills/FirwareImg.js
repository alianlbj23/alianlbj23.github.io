import React, { Component } from "react";
import firware from "../../assets/images/firware.svg";

export default class FirwareImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
        src={firware}
        alt="firware"
        style={{ width: "100%", maxWidth: 2080, height: "auto" }}
      />
    );
  }
}
