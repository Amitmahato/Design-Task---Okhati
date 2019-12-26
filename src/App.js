import React, { Component } from "react";
import CustomInput from "./CustomInput";

class App extends Component {
  state = {
    focused: false,
    history: [
      "Default Text One",
      "Longer Default Text One",
      "Very very long Default Text One"
    ]
  };

  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <CustomInput />
      </div>
    );
  }
}

export default App;
