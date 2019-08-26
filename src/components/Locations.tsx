import * as React from "react";
import { hot } from "react-hot-loader";
import * as AltContainer from "alt-container";
import * as LocationStore from "../stores/LocationStore";
import * as FavoritesStore from "../stores/FavoritesStore";
import InputField from "./InputField";
import Favorites from "./Favorites";
import AllLocations from "./AllLocations";

class Locations extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  // testd
  componentDidMount() {
    (LocationStore as any).fetchLocations();
  }

  render() {
    return (
      <div>
        <InputField />
        <h1>Locations</h1>
        <AltContainer store={LocationStore}>
          <AllLocations />
        </AltContainer>

        <h1>Favorites</h1>
        <AltContainer store={FavoritesStore}>
          <Favorites />
        </AltContainer>
      </div>
    );
  }
}

declare let module: object;

export default hot(module)(Locations);
