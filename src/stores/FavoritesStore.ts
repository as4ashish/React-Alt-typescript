import alt from "../alt";
var LocationActions = require("../actions/LocationActions");
import { hot } from "react-hot-loader";

class FavoritesStore {
  locations: any[];
  bindListeners(arg0: { addFavoriteLocation: any; delFavoriteLocation: any }) {
    throw new Error("Method not implemented.");
  }
  constructor() {
    this.locations = [];

    this.bindListeners({
      addFavoriteLocation: LocationActions.FAVORITE_LOCATION,
      delFavoriteLocation: LocationActions.DEL_FROM_FAVORITE_LOCATION
    });
  }

  addFavoriteLocation(location) {
    this.locations.push(location);
  }
  //new action for delete
  delFavoriteLocation(location) {
    // alert("delFavoriteLocation");
    this.locations = this.locations.filter(function(item) {
      return item.name !== location.name;
    });
  }
}

module.exports = alt.createStore(FavoritesStore, "FavoritesStore");
