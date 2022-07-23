

/**
 * hàm nhận vào 2 tham số và trả về kết quả true hoặc false. True khi hợp lệ và false khi không hợp lệ
 * @param {*} value Giá trị đầu vào
 * @param {*} selectorError Nơi in ra lỗi
 * @param {*} name  là text hiển thi ra tên trường bị lỗi
 */
 function kiemTraRong(value,selectorError,name){
    //.trim(): loại bỏ  khoảng trống đầu và cuối của chuổi
    if(value.trim() !==''){
        document.querySelector(selectorError).innerHTML='';
        return true;
    }
    document.querySelector(selectorError).innerHTML= name + 'Không được bỏ trống!';
    return false;

}

function kiemTraTatCaKyTu (value,selectorError,name){
    var regexLetter = /^[A-Za-z]+$/;
    if (regexLetter.test(value)){
        document.querySelector(selectorError).innerHTML='';
        return true;
    }
    document.querySelector(selectorError).innerHTML=name +' tất cả là chữ!';
    return false;
}

function kiemTraTatCaSo (value,selectorError,name){
    var regexLetter = /^[0-9]+$/;
    if (regexLetter.test(value)){
        document.querySelector(selectorError).innerHTML='';
        return true;
    }
    document.querySelector(selectorError).innerHTML=name +' tất cả là Số!';
    return false;
}

function kiemTraEmail(value,selectorError,name){
    var regexLetter =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexLetter.test(value)){
        document.querySelector(selectorError).innerHTML='';
        return true;
    }
    document.querySelector(selectorError).innerHTML=name +' định dạng không hợp lệ!';
    return false;
}

function kiemTraNgay(value,selectorError,name){
    var regexLetter = /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/gi;
    if (regexLetter.test(value)){
        document.querySelector(selectorError).innerHTML='';
        return true;
    }
    document.querySelector(selectorError).innerHTML=name +' không đúng định dạng ngày';
    return false;
}

function kiemTraDoDai(value,selectorError,name,minLength,maxLength){
    var lengthValue = value.length;
    if(lengthValue > maxLength || lengthValue < minLength){
        document.querySelector(selectorError).innerHTML= name +' từ '+minLength+' đến ' +maxLength+ ' ký tự ';
        return false;
    }
    document.querySelector(selectorError).innerHTML='';
}
function kiemTraGiaTri(value,selectorError,name,minValue,maxValue){
    value =Number(value);
    if(value > maxValue || value < minValue){
        document.querySelector(selectorError).innerHTML= name +' từ '+minValue+' đến ' +maxValue;
        return false;
    }
    document.querySelector(selectorError).innerHTML='';
}