import React, { Component } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import "./DropDownStyle.css";
export default class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      items: this.props.items,
      titles: [],
    };

    this.isDropDownOpen = this.isDropDownOpen.bind(this);
    this.isItemSelected = this.isItemSelected.bind(this);
    this.itemListUpdate = this.itemListUpdate.bind(this);
  }

  // Updates the items array: sets the 'selected' property of the selected item to true
  itemListUpdate(id) {
    const temp = this.state.items;

    temp[id].selected = !temp[id].selected;

    this.setState({
      items: temp,
    });
  }

  // Keeps track of whether the dropdown is open or closed using the isOpen state
  isDropDownOpen(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  // Appends the selected item to the titles array, so that selected items can be displayed on the dropdown
  async isItemSelected(item) {
    this.setState({ titles: [] });
    const { items } = this.state;
    await this.itemListUpdate(item.id);

    items.map((item) => {
      if (item.selected) {
        this.setState({ titles: [...this.state.titles, item.value] });
      }
    });
  }

  render() {
    const { isOpen, items } = this.state;

    return (
      <div className="drop-down-container">
        {/* This is the dropdown component which contains the selected items and the drop down arrow */}
        <button
          type="button"
          className="drop-down-width"
          onClick={this.isDropDownOpen}
        >
          {this.state.titles.map((title) => (
            <div className="display-selection">{title}</div>
          ))}

          {/* Checks the state of the drop-down and displays the arrows accordingly */}
          {isOpen ? (
            <ArrowDropUpIcon className="arrow-position" />
          ) : (
            <ArrowDropDownIcon className="arrow-position" />
          )}
        </button>

        {/* Displays the list of items when the drop-down is opened */}
        {isOpen && (
          <div className="list-overflow">
            {this.state.items.map((item) => (
              <div
                className="cursor-pointer drop-down-item"
                key={item.id}
                onClick={() => this.isItemSelected(item)}
              >
                <div>{item.value}</div>

                {/* Display the checkmark beside selected items */}
                <div className="select-icon">
                  {item.selected ? (
                    <CheckCircleOutlineOutlinedIcon fontSize="small" />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
