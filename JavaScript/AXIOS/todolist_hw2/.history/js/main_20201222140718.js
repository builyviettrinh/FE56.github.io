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

        // if (item.status === "completed") {
        //   getId("completed").innerHTML += content;
        // } else {
        //   getId("todo").innerHTML += content;
        // }
      });
      getId("todo").innerHTML = content;
    })
    .catch((err) => {
      console.log(err);
    });
};

createListTask();
