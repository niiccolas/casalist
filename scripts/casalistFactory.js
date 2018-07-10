// Reference the 'casaList' module defined in /app.js
angular
  .module('casaList')
  .factory('casalistFactory', function ($http) { // a factory is used over a service since we only need to return the data as an object literal.

    function getCasalist() {
      return $http.get('data/data.json'); // Data lives outside the factory. Gets called thru $http, in a mock endpoint .json file
    };

    return {
      getCasalist: getCasalist
    }
  });