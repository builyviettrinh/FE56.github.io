const getListTaskApi = () => {
    return axios({
        url: "",
        method: "GET",
    });
}

const deleteTaskApi = (id) => {
    return axios({
        url: ``,
        method: "DELETE",
    });
}

const addTaskApi = (task) => {
    return axios({
        url: "",
        method: "POST",
        data: task,
    })
}

const getTaskById = (id) => {
    return axos({
        url: "",
        method: "GET",
    })
}

const updateStatusById = (task) => {
    return axios({
        url: ``,
        method: "PUT",
        data: task,
    })
}

export { getListTaskApi, deleteTaskApi, addTaskApi, getTaskById, updateStatusById };