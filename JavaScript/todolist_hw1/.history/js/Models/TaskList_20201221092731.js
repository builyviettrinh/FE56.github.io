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
    return this.arr.findIndex(function (item) {
      console.log((item.status.innerText = "completed"));
      if (item.status == "todo") {
        return item.status.innerText == "completed";
      } else {
        return item.status;
      }
    });
  };

  this.updateStatus = function (tasks) {
    this.arr.push(task);
  };
}
