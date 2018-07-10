// Reference the 'casaList' module defined in /app.js
angular
  .module('casaList')
  .controller('casalistController', function ($scope, casalistFactory) { // inject the $scope object in controller
    $scope.casas;

    casalistFactory.getCasalist().success(function (data) {
      $scope.casas = data;
    }).error(function (error) {
      console.log(error);
    });
  });
