function Validation() {
  this.kiemTraRong = function (input, spanId, mess) {
    if (input === "") {
      getEle(spanId).style.display = "block";
      getEle(spanId).innerHTML = mess;
      return false;
    }

    getEle(spanId).style.display = "none";
    getEle(spanId).innerHTML = "";
    return true;
  };

  this.kiemTraChucVu = function (ele, spanId, mess) {
    if (getEle(ele).selectedIndex !== 0) {
      // có chọn chức vụ
      getEle(spanId).style.display = "none";
      getEle(spanId).innerHTML = "";
      return true;
    }

    getEle(spanId).style.display = "block";
    getEle(spanId).innerHTML = mess;
    return false;
  };

  this.kiemTraDoDaiKyTu = function (input, spanId, mess, min, max) {
    if (input.length >= min && input.length <= max) {
      getEle(spanId).style.display = "none";
      getEle(spanId).innerHTML = "";
      return true;
    }

    getEle(spanId).style.display = "block";
    getEle(spanId).innerHTML = mess;
    return false;
  };

  this.kiemTraChuoi = function (input, spanId, mess) {
    var pattern = new RegExp(
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
    );

    if (pattern.test(input)) {
      getEle(spanId).style.display = "none";
      getEle(spanId).innerHTML = "";
      return true;
    }
    getEle(spanId).style.display = "block";
    getEle(spanId).innerHTML = mess;
    return false;
  };

  this.kiemTraEmail = function (input, spanId, mess) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.match(mailformat)) {
      getEle(spanId).style.display = "none";
      getEle(spanId).innerHTML = "";
      return true;
    }

    getEle(spanId).style.display = "block";
    getEle(spanId).innerHTML = mess;
    return false;
  };
}
