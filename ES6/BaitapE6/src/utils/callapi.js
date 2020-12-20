import { URL_API } from "./../config/constant.js";

const callApi = (uri, method, data) => {
    return axios({
        url: `${URL_API}/${uri}`,
        method,
        data,
    })
}

const getListProduct = () => {
    return axios({
        url: "https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/SanPham",
        method: "GET",
    });
};

const deleteProductApi = (id) => {
    return axios({
        url: `https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/SanPham/${id}`,
        method: "DELETE",
    });
};

const addProductApi = (product) => {
    return axios({
        url: "https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/SanPham",
        method: "POST",
        data: product,
    })
}

const getProductById = (id) => {
    return axios({
        url: `https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/SanPham/${id}`,
        method: "GET",
    })
}

const updateProductbyId = (product) => {
    return axios({
        url: `https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/SanPham/${product.id}`,
        method: "PUT",
        data: product,
    })
}

export { getListProduct, deleteProductApi, addProductApi, getProductById, updateProductbyId, callApi };