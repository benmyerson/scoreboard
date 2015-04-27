'use strict';

describe('Controller: GamedetailCtrl', function () {

  // load the controller's module
  beforeEach(module('scoreboardApp'));

  var GamedetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GamedetailCtrl = $controller('GamedetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
