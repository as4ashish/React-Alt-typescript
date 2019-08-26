import alt from "../alt";

class LocationActions {
  updateLocations(locations) {
    console.log(locations);
    return locations;
    // this.dispatch(locations);
  }

  fetchLocations() {
    return;
  }

  locationsFailed(errorMessage) {
    return errorMessage;
    // this.dispatch(errorMessage);
  }

  favoriteLocation(location) {
    return location;
  }

  //new action for delete favorite
  delFromFavoriteLocation(location) {
    return location;
  }
  //new action for add city
  addCity(location) {
    return location;
  }
}

module.exports = alt.createActions(LocationActions);
