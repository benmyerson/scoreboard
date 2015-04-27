'use strict';

describe('Controller: PlayersdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('scoreboardApp'));

  var PlayersdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlayersdetailCtrl = $controller('PlayersdetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
