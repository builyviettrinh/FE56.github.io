import {
  getListTaskApi,
  deleteTaskApi,
  addTaskApi,
  getTaskById,
  updateStatusById,
} from "./Models/TaskService.js";

import Task from "./Models/Tasks.js";

let isLoading = true;

const checkLoading = (isLoading) => {
  let loader = document.createElement("div");
  loader.classList.add("load");
  if (isLoading) {
    document.getElementsByClassName("card").append(loader);
  } else {
    document.getElementsByClassName("card").remove(loader);
  }
};

const getId = (id) => {
  return document.getElementById(id);
};

const createListTask = () => {
  getListTaskApi()
    .then((result) => {
      let content = "";
      getId("todo").innerHTML = "";
      getId("completed").innerHTML = "";
      result.data.forEach((task) => {
        content = `
            <li>
                <span>${task.id} ${task.status} ${task.task}</span>
                <div class="buttons">
                    <button class="remove" onclick="deleteTask(${task.id})"> <i class="fa fa-trash-alt"></i></button>
                    <button class="complete" onclick="changeStatus(${task.id})"> <i class="far fa-check-circle"></i></button>
                </div>
            </li>
                `;

        if (task.status === "completed") {
          getId("completed").innerHTML += content;
        } else {
          getId("todo").innerHTML += content;
        }
      });
      //   getId("todo").innerHTML = content;
    })
    .catch((err) => {
      console.log(err);
    });
};

createListTask();

//delete task
window.deleteTask = deleteTask;

function deleteTask(id) {
  isLoading = true;
  checkLoading(isLoading);
  deleteTaskApi(id)
    .then((result) => {
      alert("deleted!");
      createListTask();
      isLoading = false;
      checkLoading(isLoading);
    })
    .catch((err) => {
      console.log(err);
    });
}

// add task
getId("addItem").addEventListener("click", function () {
  // get info
  const taskName = getId("newTask").value;
  const status = "todo";

  // khoi tao doi luong
  const task = new Task("", taskName, status);

  // add task
  addTaskApi(task)
    .then((result) => {
      alert("added");
      createListTask();
    })
    .catch((err) => {
      console.log(err);
    });
});

// change status
window.changeStatus = changeStatus;
function changeStatus(id) {
  getTaskById(id)
    .then((result) => {
      // get info
      console.log(result.data);

      if (result.data.status != "completed") {
        result.data.status = "completed";
        console.log(result.data.status);
      } else {
        result.data.status = "todo";
      }
      const status = result.data.status;
      const id = result.data.id;
      const taskName = result.data.task;

      // khoi tao doi tuong
      const task = new Task(id, taskName, status);
      console.log(task);

      updateStatusById(task).then((result) => {
        alert("changed status");
        createListTask();
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
