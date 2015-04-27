
/**
 * @ngdoc function
 * @name scoreboardApp.directive:playerSelect
 * @description
 * # playerSelect
 *
 */
angular.module('scoreboardApp')
  .directive('playerSelect', ['Ref', '$firebaseArray', '$timeout', function (Ref, $firebaseArray, $timeout) {
    'use strict';

    return {
      restrict: 'E',
      scope: {
        model: '=player',
        playerLabel: '@',
        otherPlayer: '='
      },
      templateUrl: 'scripts/directives/templates/playerSelect.html',
      link: function(scope) {

        scope.players = $firebaseArray(Ref.child('players'));

        scope.changeFunction = function (){
          if (scope.model === 'new') {
            var newPlayerName = window.prompt('New Player Name?');
            var newVal = scope.players.$add({ name: newPlayerName });
            newVal.then(function () {
              $timeout(function() {
                scope.model = scope.players[scope.players.length-1].$id;
              },500);
            });
          }
        };

      }
    };
  }]);
