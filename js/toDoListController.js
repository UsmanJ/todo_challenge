toDoListApp.controller('toDoListController', [function() {

  var self = this;
  self.taskList = [];
  self.view = 1;

  self.addTask = function() {
    self.taskList.push({ taskName: self.addTaskField, completed: false });
    self.taskItem = "";

    // var task = self.addTaskField;
    // var tasks = {};
    // var existingEntries = JSON.parse(localStorage.getItem(tasks));
    // if(existingEntries == null) existingEntries = [];
    // localStorage.setItem("task", JSON.stringify(task));
    // existingEntries.push(task);
    // localStorage.setItem(tasks, JSON.stringify(existingEntries));
  };

  self.toggleCompletion = function(item) {
    return item.completed ? item.completed = false : item.completed = true
  };

  self.clearCompleted = function(){
    self.itemList = self.itemList.filter(function(item){
      return !item.isCompleted;
    });
  };

  self.setView = function(selection){
    self.view = selection;
  };

  self.isView = function(selection){
    return self.view === selection;
  };
}]);
