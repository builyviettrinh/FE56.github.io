const getListTaskApi = () => {
  return axios({
    url: "https://5d29df39f3e25400147244c8.mockapi.io/toDoList",
    method: "GET",
  });
};

const deleteTaskApi = (id) => {
  return axios({
    url: `https://5d29df39f3e25400147244c8.mockapi.io/toDoList/${id}`,
    method: "DELETE",
  });
};

const addTaskApi = (task) => {
  return axios({
    url: "https://5d29df39f3e25400147244c8.mockapi.io/toDoList",
    method: "POST",
    data: task,
  });
};

const getTaskById = (id) => {
  return axios({
    url: `https://5d29df39f3e25400147244c8.mockapi.io/toDoList/${id}`,
    method: "GET",
  });
};

const updateStatusById = (task) => {
  return axios({
    url: `https://5d29df39f3e25400147244c8.mockapi.io/toDoList/${task.id}`,
    method: "PUT",
    data: task,
  });
};

export {
  getListTaskApi,
  deleteTaskApi,
  addTaskApi,
  getTaskById,
  updateStatusById,
};
