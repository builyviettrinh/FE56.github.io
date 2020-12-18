var taskList = new TaskList();
var validation = new Validation();

getLocalStorage();

getId("addItem").addEventListener("click", function () {
  var task = getId("newTask").value;

  // check validation
  var isValid = true;

  isValid = 

  var idTask = Math.random().toString().slice(2, 4);
  var id = parseInt(idTask); // ep kieu
  var status = "todo";
  var tasks = new Tasks(id, task, status);
  taskList.addTask(tasks);
  createTable(taskList.arr);
  setLocalStorage();
});

function createTable(arr) {
  var content = "";
  arr.map(function (item, i) {
    content += `
            <ul>
                <li>
                    <span>${item.id} ${item.status} ${item.task}</span>
                    <div class="buttons">
                        <button class="remove" onclick="deleteTask(${item.id})"> <i class="fa fa-trash-alt"></i></button>
                        <button class="complete" onclick=""><i class="far fa-check-circle"></i>
                </li>
            </ul>
        `;
  });
  getId("todo").innerHTML = content;
}

//  get LocalStorage
function getLocalStorage() {
  if (localStorage.getItem("ListTask")) {
    taskList.arr = JSON.parse(localStorage.getItem("ListTask"));
    createTable(taskList.arr);
  }
}

// set LocalStorage
function setLocalStorage() {
  localStorage.setItem("ListTask", JSON.stringify(taskList.arr));
}

//delete task
function deleteTask(id) {
  taskList.deleteTask(id);
  createTable(taskList.arr);
  setLocalStorage();
}

function getId(id) {
  return document.getElementById(id);
}
