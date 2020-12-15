function TaskList() {
  this.arr = [];

  this.addTask = function (tasks) {
    this.arr.push(tasks);
  };
  this.timViTri = function (input) {
    return this.arr.findIndex(function (item) {
      return input === item.input;
    });
  };
}
