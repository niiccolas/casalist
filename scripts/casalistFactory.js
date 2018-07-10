// Reference the 'casaList' module defined in /app.js
angular
  .module('casaList')
  .factory('casalistFactory', function () { // a factory is used over a service since we only need to return the data as an object literal.
    var casalistData = [
      {
        type: 'House',
        price: 1500000,
        address: '05391 Reichert Spring',
        description: 'A unique four bedroom, three bathroom low build detached bungalow in a secluded location, discreetly set back from the road behind a magnificent 90 ft Japanese style garden with Koi pond.',
      },
      {
        type: 'House',
        price: 7250000,
        address: '323 Rhett Meadows',
        description: 'A stunning and unique newly built property of approx 6313 sq ft (586.5 sq m) which has been meticulously designed using the best materials sourced from all over the world located in this quiet cul-de-sac within easy reach of both Wimbledon Village and Wimbledon Park.',
      },
      {
        type: 'Flat',
        price: 33500000,
        address: '1408 Silas Centers',
        description: 'Penthouse apartment for sale in the heart of Knightsbridge An impressive penthouse located less than 100m from Harrods, this modern 6 bedroom apartment benefits from extensive roof terraces, a 24 hour concierge service, direct lift access, leisure facilities and underground parking.',
      },
    ];

    function getCasalist (){
      return casalistData;
    };

    return {
      getCasalist: getCasalist
    }
  });