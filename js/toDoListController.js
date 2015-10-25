toDoListApp.controller('toDoListController', [function() {

  var self = this;
  self.taskList = [];
  self.view = 1;

  self.addTask = function() {
    self.taskList.push({ taskName: self.addTaskField, completed: false });
    self.tasktask = "";

    // var task = self.addTaskField;
    // var tasks = {};
    // var existingEntries = JSON.parse(localStorage.gettask(tasks));
    // if(existingEntries == null) existingEntries = [];
    // localStorage.settask("task", JSON.stringify(task));
    // existingEntries.push(task);
    // localStorage.settask(tasks, JSON.stringify(existingEntries));
  };

  self.toggleCompletion = function(task) {
    return task.completed ? task.completed = false : task.completed = true
  };

  self.clearCompleted = function(){
    self.taskList = self.taskList.filter(function(task){
      return !task.isCompleted;
    });
  };

  self.setView = function(selection){
    self.view = selection;
  };

  self.isView = function(selection){
    return self.view === selection;
  };
}]);
