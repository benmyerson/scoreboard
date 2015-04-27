'use strict';

describe('Controller: GamecreateCtrl', function () {

  // load the controller's module
  beforeEach(module('scoreboardApp'));

  var GamecreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GamecreateCtrl = $controller('GamecreateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
