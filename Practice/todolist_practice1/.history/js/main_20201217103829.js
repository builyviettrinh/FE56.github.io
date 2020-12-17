var taskList = new TaskList();

getId("addItem").addEventListener("click", function () {
  var task = getId("newTask").value;

  // check validation
  var isValid = true;
});

function getId(id) {
  return document.getElementById(id);
}
