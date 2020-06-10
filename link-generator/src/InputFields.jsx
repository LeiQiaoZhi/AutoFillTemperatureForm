import React, { Component } from "react";
import Multiselect from "./components/Multiselect";

class InputFields extends Component {
  state = {
    time: "Morning",
    userName: "",
    block: "Hullett",
    level: "level",
    room: "",
    bed: "A",
    temperature: "Normal",
    link: "",
    showLink: false,
  };

  timeOptions = ["Morning", "Night", "Leave Blank"];
  blockOptions = ["Hullett", "Moor", "Buckley", "Morrison", "Bayley"];
  levelOptions = ["Level", ...Array.from(Array(12), (v, x) => x + 2)];
  roomOptions = ["Room", ...Array.from(Array(12), (v, x) => x + 2)];
  bedOptions = ["A", "B", "C"];
  tempOptions = ["Normal", "Leave Blank"];

  handleChange = (event) => {
    const { name } = event.target;
    this.setState({ [name]: event.target.value });
    console.log();
  };

  render() {
    return (
      <React.Fragment>
        <Multiselect
          onSelect={this.handleChange}
          name="time"
          value={this.state.time}
          options={this.timeOptions}
        />
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="Name"
            name="userName"
            onChange={this.handleChange}
          />
        </div>

        <div>
          <Multiselect
            onSelect={this.handleChange}
            name="block"
            value={this.state.block}
            options={this.blockOptions}
          />
          <Multiselect
            onSelect={this.handleChange}
            name="level"
            value={this.state.level}
            options={this.levelOptions}
          />
          <Multiselect
            onSelect={this.handleChange}
            name="room"
            value={this.state.room}
            options={this.roomOptions}
          />
          <Multiselect
            onSelect={this.handleChange}
            name="bed"
            value={this.state.bed}
            options={this.bedOptions}
          />{" "}
          <Multiselect
            onSelect={this.handleChange}
            name="temperature"
            value={this.state.temperature}
            options={this.tempOptions}
          />
        </div>
        {this.state.showLink && <a href={this.state.link}>link</a>}

        <button
          onClick={this.handleSubmit}
          className="btn btn-primary btn-lg btn-block"
        >
          Generate Link
        </button>
      </React.Fragment>
    );
  }

  handleSubmit = () => {
    const { time, userName, block, level, room, bed, temperature } = this.state;
    const link =
      `https://docs.google.com/forms/d/e/1FAIpQLScYIGWAYIoZYr6tdVIrAfHdO6q2m9SsT37eMwaXAUMgcTXBnQ/viewform?usp=pp_url` +
      `&entry.1599706972=${time}` +
      `&entry.77047786=${userName}` +
      `&entry.1011976168=${block}` +
      `&entry.1235957299=${level}` +
      `&entry.1392267126=${room.length === 1 ? "0" + room : room}` +
      `&entry.799738567=${bed}` +
      "&entry.1178451289=Normal+(%3C+38+degrees+celsius)";
    this.setState({ showLink: true, link });
    console.log(link);
  };
}

export default InputFields;
