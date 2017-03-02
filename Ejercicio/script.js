
var nohemi = angular.module('nohemi', []);
nohemi.controller('operacion', function($scope) {
$scope.precio = 8000
$scope.iva = 0.12
$scope.precio = $scope.precio
  $scope.iva = $scope.precio * $scope.iva;
}); 