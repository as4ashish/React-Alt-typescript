var LocationActions = require("../actions/LocationActions");
import { hot } from "react-hot-loader";

var mockData = "https://localhost:44311/api/locations";
// [
//   { id: 0, name: "Abu Dhabi" },
//   { id: 1, name: "Berlin" },
//   { id: 2, name: "Bogota" },
//   { id: 3, name: "Buenos Aires" },
//   { id: 4, name: "Cairo" },
//   { id: 5, name: "Chicago" },
//   { id: 6, name: "Lima" },
//   { id: 7, name: "London" },
//   { id: 8, name: "Miami" },
//   { id: 9, name: "Moscow" },
//   { id: 10, name: "Mumbai" },
//   { id: 11, name: "Paris" },
//   { id: 12, name: "San Francisco" }
// ];

function readJson() {
  return fetch(mockData);
}

var LocationSource = {
  fetchLocations(mockData) {
    return {
      remote() {
        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            if (true) {
              resolve(
                readJson()
                  .then(function(response) {
                    return response.json();
                  })
                  .then(function(myJson) {
                    return myJson;
                  })
              );
            } else {
              reject("Things have broken");
            }
          }, 250);
        });
      },

      local() {
        return null;
      },

      success: LocationActions.updateLocations
      //error: LocationActions.locationsFailed,
      //loading: LocationActions.fetchLocations
    };
  }
};

module.exports = LocationSource;
