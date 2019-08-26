import * as React from "react";
import { hot } from "react-hot-loader";
import * as AltContainer from "alt-container";
import * as LocationStore from "../stores/LocationStore";
import * as LocationActions from "../actions/LocationActions";

class AllLocations extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  addFave(ev) {
    var location = (LocationStore as any).getLocation(
      Number(ev.target.getAttribute("data-id"))
    );
    (LocationActions as any).favoriteLocation(location);
  }

  render() {
    if (this.props.errorMessage) {
      return <div>{this.props.errorMessage}</div>;
    }

    if ((LocationStore as any).isLoading()) {
      return (
        <div>
          <img src="ajax-loader.gif" />
        </div>
      );
    }

    return (
      <ul>
        {this.props.locations.map((location, i) => {
          var faveButton = (
            <button
              onClick={this.addFave}
              data-id={location.id}
              style={{ backgroundColor: "white", color: "black" }}
            >
              Favorite
            </button>
          );

          return (
            <li key={i}>
              {location.name}{" "}
              {location.has_favorite ? (
                <span style={{ backgroundColor: "yellow" }}> Added </span>
              ) : (
                faveButton
              )}
            </li>
          );
        })}
      </ul>
    );
  }
}

declare let module: object;

export default hot(module)(AllLocations);
