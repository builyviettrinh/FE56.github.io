function TaskList() {
  this.arr = [];

  this.addTask = function (task) {
    this.arr.push(task);
  };

  this.timViTri = function (input) {
    return this.arr.findIndex(function (item) {
      return input === item.input;
    });
  };
}
