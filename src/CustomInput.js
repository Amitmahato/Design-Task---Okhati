import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DropDown from "./DropDown";

export default class CustomInput extends Component {
  state = {
    focused: false,
    inputVal: "",
    history: [
      "Default Text One",
      "Longer Default Text One",
      "Very very long Default Text One"
    ],
    selected: []
  };

  getSelection = selectedIndex => {
    const { selected, history } = this.state;

    const selectedVal = history.splice(selectedIndex, 1);
    console.log("Selected : ", selectedVal, "History : ", history);
    this.setState({
      selected: [...selected, selectedVal],
      history,
      focused: false
    });
  };

  getDeselection = deselectedIndex => {
    const { selected, history } = this.state;
    const deselectedVal = selected.splice(deselectedIndex, 1);
    // console.log("Selected : ", selected, "History : ", );
    this.setState({ selected, history: [...history, deselectedVal] });
  };

  handleInputChange = e => {
    const { value } = e.target;
    this.setState({ inputVal: value });
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
        onClick={() => {
          this.setState({ focused: true });
          console.log("Focused");
        }}
        onDeselect={() => {
          this.setState({ focused: false });
          console.log("Defocused");
        }}
      >
        <div
          style={{
            width: 500,
            padding: 20,
            paddingTop: 10,
            paddingBottom: 10,
            borderWidth: 2,
            borderStyle: "solid",
            borderRadius: 5,
            borderColor: "rgba(0,0,0,0.4)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div>
            {this.state.selected.length > 0
              ? this.state.selected.map((item, index) => (
                  <Button
                    style={{
                      borderStyle: "solid",
                      borderWidth: 1,
                      borderColor: "green",
                      borderRadius: 40,
                      margin: 10,
                      padding: 10,
                      color: "black",
                      textTransform: "none"
                    }}
                    key={index}
                    onClick={() => this.getDeselection(index)}
                  >
                    {item}{" "}
                    <CancelIcon
                      style={{
                        color: "",
                        marginLeft: 15
                      }}
                    />
                  </Button>
                ))
              : ""}
          </div>
          <div
            style={{
              height: 50,
              width: 500,
              padding: 20,
              paddingTop: 10,
              paddingBottom: 10,
              borderWidth: 2,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              style={{
                display: "flex",
                borderWidth: 0,
                borderRightWidth: 2,
                borderColor: "rgba(0,0,0,0.4)",
                borderStyle: "solid",
                alignItems: "center",
                justifyContent: "space-around",
                marginRight: 15
              }}
            >
              <Input
                disableUnderline
                style={{
                  height: 50,
                  width: 400,
                  fontSize: 24
                }}
                type="text"
                value={this.state.inputVal}
                onChange={e => this.handleInputChange(e)}
              />
              {this.state.inputVal.length > 0 ? (
                <Button>
                  <CheckCircleIcon
                    fontSize="large"
                    style={{
                      color: "rgba(0,0,0,0.5)",
                      marginRight: 15
                    }}
                    onClick={() => {
                      const { inputVal, history } = this.state;
                      this.setState({
                        history: [...history, inputVal],
                        inputVal: ""
                      });
                    }}
                  />
                </Button>
              ) : (
                ""
              )}
            </div>
            {!this.state.focused ? (
              <KeyboardArrowDownIcon
                fontSize="large"
                style={{
                  color: "rgba(0,0,0,0.3)",
                  margin: "auto"
                }}
              />
            ) : (
              <CancelIcon
                fontSize="large"
                style={{
                  color: "rgba(0,0,0,0.3)",
                  margin: "auto"
                }}
              />
            )}
          </div>
        </div>
        {this.state.focused && this.state.history.length > 0 ? (
          <DropDown
            history={this.state.history}
            getSelection={this.getSelection}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
