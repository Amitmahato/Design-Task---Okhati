import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export default class DropDown extends Component {
  render() {
    return (
      <div
        style={{
          height: "max-content",
          width: 500,
          padding: 20,
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 5,
          borderColor: "rgba(0,0,0,0.4)",
          // display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {this.props.history.map((item, index) => (
          <Button
            style={{
              backgroundColor: "rgba(100,150,255,0.4)",
              borderRadius: 40,
              margin: 10,
              padding: 10,
              color: "black",
              textTransform: "none"
            }}
            key={index}
            onClick={() => this.props.getSelection(index)}
          >
            {item}
          </Button>
        ))}
      </div>
    );
  }
}
