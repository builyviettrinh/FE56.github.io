function NguoiDungService() {
    this.getListUserApi = function() {
        /**
         *  axios trả về đối tượng Promises (lời hứa)
         *  Promises (lời hứa):
         *      - Pending (Chờ)
         *      - Resolve: Lời hứa thực hiện dc (thành công) - then
         *      - Reject: Thất hứa (thất bại) - catch
         */
        return axios({
            //key: value
            url: "https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung",
            method: "GET",
        });
    };

    this.deleteUserApi = function(id) {
        return axios({
            url: `https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung/${id}`,
            method: "DELETE",
        });
    };

    this.addUserApi = function(user) {
        return axios({
            url: "https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung",
            method: "POST",
            data: user,
        });
    };

    this.getUserById = function(id) {
        return axios({
            url: `https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung/${id}`,
            method: "GET",
        });
    }

    this.updateUserApi = function(user) {
        return axios({
            url: `https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung/${user.id}`,
            method: "PUT",
            data: user,
        })
    }
}