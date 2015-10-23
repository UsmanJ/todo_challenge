describe('toDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('toDoListController');
  }));

  it('initialises with an empty to do list and ', function() {
    expect(ctrl.addTaskField).toBeUndefined();
  });
});

describe('when listing to do tasks', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('toDoListController');
  }));

  var items = [
      "Go to gym",
      "Start Todo Challenge",
  ];

  it('displays to do tasks', function() {
    expect(ctrl.result.items).toEqual(items);
  });
});
