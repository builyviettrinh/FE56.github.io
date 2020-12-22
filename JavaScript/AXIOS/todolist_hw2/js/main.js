import { getListTaskApi, deleteTaskApi, addTaskApi, getTaskById, updateStatusById } from "./Models/TaskService.js";
import Task from "./Models/Tasks.js";

const getId = (id) => {
    return document.getElementById(id);
}

const createListTask = () => {
    getListTaskApi()
        .then((result) => {
            let content = "";
            result.data.forEach((task) => {
                content += `
                
                `
            })
        })
}