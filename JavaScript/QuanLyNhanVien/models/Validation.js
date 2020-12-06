function Validation() {
    this.checkValidation = function(input, spanId, mess) {
        if (input === "") {
            getEle(spanId).style.display = "block";
            getEle(spanId).innerHTML = mess;
            return false;
        }
        getEle(spanId).style.display = "none";
        getEle(spanId).innerHTML = "";
        return true;
    };

    this.checkSelected = function(ele, spanId, mess) {
        if (getEle(ele).selectedIndex !== 0) {
            //co chuc vu
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML = "";
            return true;
        }
        getEle(spanId).style.display = "block";
        getEle(spanId).innerHTML = mess;
        return false;
    };

    this.checkLength = function(input, spanId, mess, min, max) {
        if (input.length >= min && input.length <= max) {
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML = "";
            return true;
        }
        getEle(spanId).style.display = "block";
        getEle(spanId).innerHTML = mess;
        return false;

    };

    this.checkCharacter = function(input, spanId, mess) {
        // var letters = /^[A-Za-z]+$/; // slide 57 (10)
        //if (input.match(letters))
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

    this.checkEmailFormat = function(input, spanId, mess) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (mailformat.test(input)) {
            getEle(spanId).style.display = "none";
            getEle(spanId).innerHTML = "";
            return true;
        }
        getEle(spanId).style.display = "block";
        getEle(spanId).innerHTML = mess;
        return false;

    }

}