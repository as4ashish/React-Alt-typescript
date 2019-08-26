import * as React from "react";
import { hot } from "react-hot-loader";
import * as AltContainer from "alt-container";
import * as LocationStore from "../stores/LocationStore";
import * as LocationActions from "../actions/LocationActions";

class Favorites extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  delFave(ev) {
    var location = (LocationStore as any).getLocation(
      Number(ev.target.getAttribute("data-id"))
    );
    (LocationActions as any).delFromFavoriteLocation(location);
  }

  render() {
    return (
      <ul>
        {this.props.locations.map((location, i) => {
          var delButton = (
            <button
              onClick={this.delFave}
              data-id={location.id}
              style={{ backgroundColor: "Red", color: "White" }}
            >
              Delete
            </button>
          );
          return (
            <li key={i}>
              {location.name} {location.has_favorite ? " " : delButton}
            </li>
          );
        })}
      </ul>
    );
  }
}

declare let module: object;

export default hot(module)(Favorites);
