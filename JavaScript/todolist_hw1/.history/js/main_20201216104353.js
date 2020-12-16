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

  //   var id = parseInt((Math.random() * 4 + 1) * Math.pow(5, 5 - 1), 5);
  var id = Math.random().toString().slice(2, 4);
  //   var id = Math.random();
  var status = "todo";
  var task = new Tasks(id, task, status);
  taskList.addTask(task);
  createTable(taskList.arr);
  setLocalStorage();
});

// tao bang
function createTable(arr) {
  var content = "";
  arr.map(function (item, i) {
    content += `
        <ul>
            <li><span>${item.id} ${item.status} ${item.task}</span>
            <div class="buttons">
            <button class="remove" onclick="deleteTask(${item.id})"> <i class="fa fa-trash-alt"></i></button>
            <button class="complete" onclick="changeStatus(30)">
        <i class="far fa-check-circle"></i>

      </button>
      </div>
      </li>
      </ul>
        `;
  });
  getId("todo").innerHTML = content;
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

// ham dung chung cho gon
function getId(id) {
  return document.getElementById(id);
}

// <i class="fas fa-check-circle"></i>;
