import {
  getListTaskApi,
  deleteTaskApi,
  addTaskApi,
  getTaskById,
  updateStatusById,
} from "./TaskService.js";

function Validattion(task) {
  if (task === "") {
    window.alert("Vui lòng điền activity");
  }
}
