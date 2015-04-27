'use strict';

/**
 * @ngdoc function
 * @name scoreboardApp.controller:GamedetailCtrl
 * @description
 * # GamedetailCtrl
 * Controller of the scoreboardApp
 */
angular.module('scoreboardApp')
  .controller('GamedetailCtrl', function ($scope, Ref, $firebaseObject, $location) {

    var game = $firebaseObject(Ref.child($location.path()));

    var scoreTarget = 21;
    var winner, loser;

    game.$loaded().then(function () {
      $scope.player1 = $firebaseObject(Ref.child('players/' + game.player1.id));
      $scope.player2 = $firebaseObject(Ref.child('players/' + game.player2.id));

    });

    var adjustScore = function (isPlayerOne, isIncrement) {
      if (isPlayerOne) {
        game.player1.score = parseInt(game.player1.score, 10);
        game.player1.score += (isIncrement) ? 1 : -1;
        game.player1.gamePoint = (game.player1.score >= scoreTarget-1);
        if (game.player1.gamePoint) {
          if (game.player1.score >= scoreTarget && game.player1.score >= game.player2.score + 2) {
            game.player1.winner = true;
            game.endTime = new Date().toJSON();
            winner = $scope.player1;
            loser = $scope.player2;
          }
        }
      }else {
        game.player2.score = parseInt(game.player2.score, 10);
        game.player2.score += (isIncrement) ? 1 : -1;
        game.player2.gamePoint = (game.player2.score >= scoreTarget-1);
        if (game.player2.gamePoint) {
          if (game.player2.score >= scoreTarget && game.player2.score >= game.player1.score + 2) {
            game.player2.winner = true;
            game.endTime = new Date().toJSON();
            winner = $scope.player2;
            loser = $scope.player1;
          }
        }
      }

      game.$save();
    };

    var finalizeGame = function () {
      if (winner){
        winner.wins ++;
        loser.losses ++;
        winner.$save();
        loser.$save();
      }

    };

    $scope.game = game;
    $scope.adjustScore = adjustScore;
    $scope.finalizeGame = finalizeGame;
  });
