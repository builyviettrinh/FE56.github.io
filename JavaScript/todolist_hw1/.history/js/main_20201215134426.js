var taskList = new TaskList();
var validation = new Validation();

getId("addItem").addEventListener("click", function () {
  var task = getId("newTask").value;
  //   console.log(task);

  // check validation
  var isValid = true;

  isValid = validation.checkNull(task) && validation.checkDuplicate();
});

if (!isValid) return;

var task = new Task(task);
taskList.addTask(task);

// ham dung chung cho gon
function getId(id) {
  return document.getElementById(id);
}
