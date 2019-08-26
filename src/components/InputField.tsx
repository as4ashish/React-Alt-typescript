import * as React from "react";
import * as LocationActions from "../actions/LocationActions";

export default class InputField extends React.Component<any, any> {
  takeCityName: string;
  constructor(props) {
    super(props);
    this.state = {
      takeCityName: ""
    };
    this.handleCityChangeName = this.handleCityChangeName.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getInitialState() {
    return { takeCityName: "" };
  }

  handleCityChangeName(event) {
    this.setState({ takeCityName: event.target.value });
  }

  handleClick() {
    var NewCityName = this.state.takeCityName;
    this.setState({ NewCityName: NewCityName });
    (LocationActions as any).addCity(NewCityName);
  }

  render() {
    return (
      <div>
        <h2>Enter a City Name to Add in Locations</h2>

        <input
          type="text"
          placeholder="City Name"
          value={this.state.takeCityName}
          onChange={this.handleCityChangeName}
        />
        <button
          style={{ backgroundColor: "Gray", color: "White" }}
          onClick={this.handleClick}
          value="submit"
        >
          Submit
        </button>
      </div>
    );
  }
}
