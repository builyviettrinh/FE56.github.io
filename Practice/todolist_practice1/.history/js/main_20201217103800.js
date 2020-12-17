var taskList = new TaskList();

getId("addItem").addEventListener("click", function () {
  var task = getId("newTask").value;
});

function getId(id) {
  return document.getElementById(id);
}
