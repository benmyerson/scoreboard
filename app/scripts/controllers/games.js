'use strict';

/**
 * @ngdoc function
 * @name scoreboardApp.controller:GamesCtrl
 * @description
 * # GamesCtrl
 * Controller of the scoreboardApp
 */
angular.module('scoreboardApp')
  .controller('GamesCtrl', function ($scope, Ref, $firebaseArray, $location) {
    var games = $firebaseArray(Ref.child('games'));

    var createGame = function () {


      games.$add({
        startTime: new Date().toJSON(),
        current: true,
        player1: {
          id: $scope.player1,
          score: 0
        },
        player2: {
          id: $scope.player2,
          score: 0
        }
      }).then(function (ref) {
        $location.path('games/' + ref.key());
      });
    };

    var endGame = function (game) {
      game.current = false;
      games.$save(game);
    };

    $scope.games = games;
    $scope.player1 = '';
    $scope.player2 = '';
    $scope.createGame = createGame;
    $scope.endGame = endGame;
  });
