var taskList = new TaskList();
function Validation() {
  this.checkNull = function (input) {
    if (input === "") {
      window.alert("Vui long dien activity");
      return false;
    }
  };
  this.checkDuplicate = function (task) {};
}
