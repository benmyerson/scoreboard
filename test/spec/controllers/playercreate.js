'use strict';

describe('Controller: PlayercreateCtrl', function () {

  // load the controller's module
  beforeEach(module('scoreboardApp'));

  var PlayercreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlayercreateCtrl = $controller('PlayercreateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
