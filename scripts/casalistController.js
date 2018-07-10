// Reference the 'casaList' module defined in /app.js
angular
  .module('casaList')
  .controller('casalistController', ($scope, casalistFactory) => { // inject the $scope object in controller
    $scope.casas = casalistFactory.getCasalist();
  });
