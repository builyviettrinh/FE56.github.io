var taskList = new TaskList();

getId("addItem").addEventListener("click", function () {
  var task = getId("newTask").value;
  //   console.log(task);

  // check validation
  if (task === "") {
    window.alert("Vui long dien activity");
  } else {
    var id = Math.random();
    var status = "todo";
    var task = new Task(id, task, status);
    taskList.addTask(task);
  }
});

// tao bang
function createTabel(arr) {
  var content = "";
  arr.map(function (item, i) {
    content += `
            <li><span>${item.task}</span><button class="remove" onclick="">
        <i class="fa fa-trash-alt"></i>
      </button></li>
        `;
  });
  getId("todo").innerHTML = content;
}
// ham dung chung cho gon
function getId(id) {
  return document.getElementById(id);
}
