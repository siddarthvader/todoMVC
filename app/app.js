require('angular');
var todoMVC = angular.module('todoMVC', []);

todoMVC.controller('mainController',['$scope',function($scope){
    $scope.text="we are up";
}]);