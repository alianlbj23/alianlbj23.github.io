import React, { Component } from "react";
import dataScience from "../../assets/images/data_science.svg";

export default class DataScienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
        src={dataScience}
        alt="data_science"
        style={{ width: "100%", maxWidth: 1040, height: "auto" }}
      />
    );
  }
}
