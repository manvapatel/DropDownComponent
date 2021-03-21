import React, { Component } from "react";
import "./App.css";
import DropDown from "./components/DropDown";

export default class App extends Component {
  constructor() {
    super();

    // The list of items for the dropdown
    this.state = {
      location: [
        {
          id: 0,
          value: "Toronto",
          selected: false,
          key: "location",
        },
        {
          id: 1,
          value: "New York",
          selected: false,
        },
        {
          id: 2,
          value: "California",
          selected: false,
        },
        {
          id: 3,
          value: "Istanbul",
          selected: false,
        },
        {
          id: 4,
          value: "Vancouver",
          selected: false,
        },
        {
          id: 5,
          value: "Beijing",
          selected: false,
        },
        {
          id: 6,
          value: "Delhi",
          selected: false,
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <h2>Creating a custom drop down component </h2>
        <DropDown items={this.state.location} />
      </div>
    );
  }
}
