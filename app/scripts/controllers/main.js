'use strict';

/**
 * @ngdoc function
 * @name scoreboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scoreboardApp
 */
angular.module('scoreboardApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
