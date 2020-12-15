var taskList = new TaskList();

getId("addItem").addEventListener("click", function () {
  var task = getId("newTask").value;
  //   console.log(task);

  // check validation
  if (task === "") {
    window.alert("Vui long dien activity");
  } else {
    var status = "todo";
    var task = new Task(task);
    taskList.addTask(task);
  }
});

// ham dung chung cho gon
function getId(id) {
  return document.getElementById(id);
}
