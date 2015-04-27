'use strict';

/**
 * @ngdoc function
 * @name scoreboardApp.controller:PlayersCtrl
 * @description
 * # PlayersCtrl
 * Controller of the scoreboardApp
 */
angular.module('scoreboardApp')
  .controller('PlayersCtrl', function ($scope, Ref, $firebaseArray) {
    var players = $firebaseArray(Ref.child('players'));

    var addPlayer = function () {
      var newPlayerName = window.prompt('Player\'s Name?');
      players.$add({
        name: newPlayerName
      });
    };

    var playerSelection = function (e) {
      console.log(e);
    };

    $scope.players = players;
    $scope.addPlayer = addPlayer;
    $scope.playerSelection = playerSelection;
  });
