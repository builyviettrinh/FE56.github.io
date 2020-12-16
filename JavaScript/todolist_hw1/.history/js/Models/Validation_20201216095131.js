var taskList = new TaskList();
function Validation() {
  this.checkNull = function (input) {
    if (input === "") {
      window.alert("Vui long dien activity");
      return false;
    }
    return true;
  };
  this.checkDuplicate = function (task) {
    if (taskList.checkDuplicate(task) !== -1) {
      window.alert("bi trung");
      return false;
    }
    return true;
  };
}
