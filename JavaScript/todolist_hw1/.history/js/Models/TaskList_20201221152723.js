function TaskList() {
  this.arr = [];

  this.addTask = function (task) {
    this.arr.push(task);
  };

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

  this.timTask = function (task) {
    return this.arr.findIndex(function (item) {
      return task === item.task;
    });
  };
  this.getTaskById = function (id) {
    var viTri = this.timViTri(id);
    if (viTri !== -1) {
      return this.arr[viTri];
    }
  };

  this.updateStatus = function (tasks) {
    var viTri = this.timViTri(tasks.id);
    if (viTri !== -1) {
      this.arr[viTri] = tasks;
    }
  };
}
