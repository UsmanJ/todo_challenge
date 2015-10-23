toDoListApp.controller('toDoListController', [function() {

  var self = this;

  self.result ={
     "items": [
        "Go to gym",
        "Start Todo Challenge",
    ]
  };

  self.addTask = function() {
  console.log("I just added a task :)");
};
}]);
