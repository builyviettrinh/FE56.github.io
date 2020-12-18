function TaskList() {
  this.arr = [];

  this.addTask = function (task) {
    this.arr.push(task);
  };

  this.timTask = function (task) {
    return this.arr.findIndex(function (item) {
      return task === item.task;
    });
  };

  // this.checkDuplicate = function (task) {
  //   var task = this.timTask(task);
  //   return task;
  // };

  this.timViTri = function (id) {
    return this.arr.findIndex(function (item) {
      return id === parseInt(item.id);
    });
  };

  this.deleteTask = function (id) {
    var viTri = this.timViTri(id);
    if (viTri !== -1) {
      return this.arr.splice(viTri, 1);
    }
  };
}
