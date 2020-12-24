var taskList = new TaskList();

function Validation() {
  this.checkNull = function (input) {
    if (input === "") {
      window.alert("Vui lòng điền activity");
      return true;
    }
    return false;
  };
  this.checkDuplicate = function (task) {
    if (taskList.timTask(task) !== -1) {
      window.alert("Task bị trùng!");
      return true;
    }
    return false;
  };
}
