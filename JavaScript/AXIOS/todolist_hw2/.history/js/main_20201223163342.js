import {
  getListTaskApi,
  deleteTaskApi,
  addTaskApi,
  getTaskById,
  updateStatusById,
} from "./Models/TaskService.js";

import Task from "./Models/Tasks.js";

const getId = (id) => {
  return document.getElementById(id);
};

const createListTask = () => {
  getListTaskApi()
    .then((result) => {
      let content = "";
      result.data.forEach((task) => {
        content += `
            <li>
                <span>${task.id} ${task.status} ${task.task}</span>
                <div class="buttons">
                    <button class="remove" onclick="deleteTask(${task.id})"> <i class="fa fa-trash-alt"></i></button>
                    <button class="complete" onclick="changeStatus(${task.id})"> <i class="far fa-check-circle"></i></button>
                </div>
            </li>
                `;

        if (task.status === "completed") {
          getId("completed").innerHTML = content;
        } else {
          getId("todo").innerHTML = content;
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
  deleteTaskApi(id)
    .then((result) => {
      alert("deleted!");
      createListTask();
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
  console.log(id);
  getTaskById(id)
    .then((result) => {
      // get info
      console.log(result.data);

      if (result.data.status === "todo") {
        const status = "completed";
        console.log(status);
      } else {
        status = "todo";
      }
      const id = result.data.id;
      const taskName = result.data.task;

      // khoi tao doi tuong
      const task = new Task(id, taskName, status);
      updateStatusById(task).then((result) => {
        alert("changed status");
        createListTask();
      });
    })
    .then.catch((err) => {
      console.log(err);
    });
}
