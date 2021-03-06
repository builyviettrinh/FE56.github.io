var taskList = new TaskList();
var validation = new Validation();

getLocalStorage();

getId("addItem").addEventListener("click", function () {
  var task = getId("newTask").value;
  //   console.log(task);

  // check validation
  var isValid = true;

  isValid = validation.checkNull(task) && validation.checkDuplicate(task);

  if (!isValid) return;

  var idTask = Math.random().toString().slice(2, 4);
  var id = parseInt(idTask);
  var status = "todo";
  var tasks = new Tasks(id, task, status);
  taskList.addTask(tasks);
  createTable(taskList.arr);
  setLocalStorage();
});

// tao bang
function createTable(arr) {
  var content = "";
  arr.map(function (item, i) {
    content += `
        <ul>
            <li>
            <span>${item.id} ${item.status} ${item.task}</span>
            <div class="buttons">
                <button class="remove" onclick="deleteTask(${item.id})"> <i class="fa fa-trash-alt"></i></button>
                <button class="complete" onclick="changeStatus(${item.id})"> <i class="far fa-check-circle"></i></button>
            </div>
            </li>
      </ul>
        `;
  });
  // getId("todo").innerHTML = content;
  if (status === "completed") {
    getId("completed").innerHTML = content;
  } else {
    getId("todo").innerHTML = content;
  }
}

// get localStorage
function getLocalStorage() {
  if (localStorage.getItem("ListTask")) {
    taskList.arr = JSON.parse(localStorage.getItem("ListTask"));
    createTable(taskList.arr);
  }
}

// set localStorage
function setLocalStorage() {
  localStorage.setItem("ListTask", JSON.stringify(taskList.arr));
}

// delete task
function deleteTask(id) {
  taskList.deleteTask(id);
  createTable(taskList.arr);
  setLocalStorage();
}

// change status
function changeStatus(id) {
  // lay thong tin
  // taskList.getTaskById(id);
  var tasks = taskList.getTaskById(id);
  console.log(taskList.getTaskById(id));
  console.log(tasks.status);
  if (tasks.status === "todo") {
    tasks.status.innerText = "completed";
    console.log(tasks.status);
  }
  status = "todo";

  var tasks = new Tasks(id, task, status);

  taskList.updateStatus(tasks);
  createTable(taskList.arr);
  setLocalStorage();
}

// ham dung chung cho gon
function getId(id) {
  return document.getElementById(id);
}

// <i class="fas fa-check-circle"></i>;
