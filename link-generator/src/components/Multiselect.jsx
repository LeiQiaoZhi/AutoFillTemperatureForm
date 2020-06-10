import React, { Component } from "react";

class Multiselect extends Component {
  render() {
    return (
      <div className="input-group mb-3">
        <select
          onChange={this.props.onSelect}
          className="custom-select"
          value={this.props.value}
          name={this.props.name}
        >
          {this.props.options.map((option) => (
            <option key={option} value={option === "Leave Blank" ? "" : option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Multiselect;
