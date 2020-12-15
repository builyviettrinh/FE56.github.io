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
    var task = new Tasks(id, task, status);
    taskList.addTask(task);
    createTable(taskList.arr);
  }
});

// tao bang
function createTable(arr) {
  var content = "";
  arr.map(function (item, i) {
    content += `
            <li><span>${item.task}</span>
            <div class="buttons">
            <button class="remove" onclick=""> <i class="fa fa-trash-alt"></i></button>
            <button class="complete" onclick="changeStatus(30)">
        <i class="far fa-check-circle"></i>

      </button>
      </div>
      </li>
        `;
  });
  getId("todo").innerHTML = content;
}

// set localStorage
function getLocalStorage{
    localStorage.setItem("ListTask",JSON.stringify(taskList.arr));
}

// ham dung chung cho gon
function getId(id) {
  return document.getElementById(id);
}

// <i class="fas fa-check-circle"></i>;
