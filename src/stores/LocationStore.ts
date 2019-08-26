import alt from "../alt";
var LocationActions = require("../actions/LocationActions");
var LocationSource = require("../sources/LocationSource");
var FavoritesStore = require("./FavoritesStore");
import { hot } from "react-hot-loader";

class LocationStore {
  locations: any[];
  errorMessage: any;
  bindListeners(arg0: {
    handleUpdateLocations: any;
    handleFetchLocations: any;
    handleLocationsFailed: any;
    handleAddCity: any;
    setFavorites: any[];
  }) {
    throw new Error("Method not implemented.");
  }
  exportPublicMethods(arg0: { getLocation: (id: any) => any }) {
    throw new Error("Method not implemented.");
  }
  exportAsync(LocationSource: any) {
    throw new Error("Method not implemented.");
  }
  constructor() {
    this.locations = [];
    this.errorMessage = null;

    this.bindListeners({
      handleUpdateLocations: LocationActions.UPDATE_LOCATIONS,
      handleFetchLocations: LocationActions.FETCH_LOCATIONS,
      handleLocationsFailed: LocationActions.LOCATIONS_FAILED,
      handleAddCity: LocationActions.ADD_CITY,
      setFavorites: [
        LocationActions.FAVORITE_LOCATION,
        LocationActions.DEL_FROM_FAVORITE_LOCATION
      ]
    });

    this.exportPublicMethods({
      getLocation: this.getLocation
    });

    this.exportAsync(LocationSource);
  }

  handleUpdateLocations(locations) {
    this.locations = locations;
    this.errorMessage = null;
  }

  handleFetchLocations() {
    this.locations = [];
  }

  handleLocationsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  resetAllFavorites() {
    this.locations = this.locations.map(location => {
      return {
        id: location.id,
        name: location.name,
        has_favorite: false
      };
    });
  }

  setFavorites(location) {
    this.waitFor(FavoritesStore);

    var favoritedLocations = FavoritesStore.getState().locations;

    this.resetAllFavorites();

    favoritedLocations.forEach(location => {
      for (var i = 0; i < this.locations.length; i += 1) {
        if (this.locations[i].id === location.id) {
          this.locations[i].has_favorite = true;
          break;
        }
      }
    });
  }
  waitFor(FavoritesStore: any) {
    throw new Error("Method not implemented.");
  }
  //adding new city

  handleAddCity(location) {
    //   for (var i=0; i<=locations.length;i++){
    //   if(this.locations[i].name===location){
    //     alert('Location already Present');
    //     break;}
    //   else{
    //     let locationObject = {id:locations.length+1, name=location}
    //   this.locations.push(locationObject);
    //   break;
    // }}
    // var { locations } = this.getState();

    var locationObject = { id: this.locations.length + 1, name: location };
    this.locations.push(locationObject);
  }

  getLocation(id) {
    var { locations } = this.getState();
    for (var i = 0; i < locations.length; i += 1) {
      if (locations[i].id === id) {
        return locations[i];
      }
    }

    return null;
  }
  getState(): { locations: any } {
    throw new Error("Method not implemented.");
  }
}

module.exports = alt.createStore(LocationStore, "LocationStore");
