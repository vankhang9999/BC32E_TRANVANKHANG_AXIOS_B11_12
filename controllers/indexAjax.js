//GET lấy dữ liệu về
function layDanhSachProDuctApi(){
    var promise=axios({
        url:'http://svcy.myclass.vn/api/Product/GetAll',
        method:'GET',
    });
    promise.then(function(result){
        console.log(result.data);
        renderProDuct(result.data);
    });
    promise.catch(function(err){
        console.log(err);
    });
}
window.onload =function(){
    layDanhSachProDuctApi();
}
//POST: thêm dữ liệu
document.querySelector('#btnCreate').onclick=function(){

    var proDuct=new ProDuct();
    // lấy thông tin người dùng từ gia diện nhập liệu:
    proDuct.id=document.querySelector('#idpd').value;
    proDuct.img=document.querySelector('#image').value;
    proDuct.name=document.querySelector('#name').value;
    proDuct.description=document.querySelector('#priceDescrip').value;
    proDuct.type=document.querySelector('#ProductType').value;
    proDuct.price=document.querySelector('#price').value;
    var valid=true;
    valid&=kiemTraRong(proDuct.id,'#check-requid-id','id ')& kiemTraRong(proDuct.img,'#check-requid-img','Link ảnh ')&kiemTraRong(proDuct.name,'#check-requid-name','Name ')&kiemTraRong(proDuct.price,'#check-requid-price','Price ');
    if(!valid){
        return;
    }

    //console.log(proDuct);
    // đưa dữ liẹu về backend
    var promise=axios({
        url:'http://svcy.myclass.vn/api/Product/CreateProduct',
        method:'POST',
        data:proDuct//du lieu gui di
    });
    promise.then(function(result){
        console.log(result);
        layDanhSachProDuctApi();
    });
    promise.catch(function(err){
        console.log(err);
    })


}
//DELETE:
function xoaProDuct(idclick){
    //alert(idclick);
    var promise=axios({
        url:'http://svcy.myclass.vn/api/Product/DeleteProduct/'+idclick,
        method:'DELETE',
    });
    promise.then(function(result){
        console.log(result.data);
        layDanhSachProDuctApi();
    });
    promise.catch(function(err){
        console.log(err);
    })
}
//chỉnh sửa
function chinhSua(idclick){
    var promise=axios({
        url:'http://svcy.myclass.vn/api/Product/GetById/'+idclick,
        method:'GET',

    });
    promise.then(function(result){
        var proDuct=result.data;
        //load len cac the
        document.querySelector('#idpd').value=proDuct.id;
        document.querySelector('#image').value=proDuct.img
        document.querySelector('#name').value=proDuct.name;
        document.querySelector('#ProductType').value=proDuct.type;
        document.querySelector('#price').value=proDuct.price;
        document.querySelector('#priceDescrip').value=proDuct.description;
    })
}
//PUT:cap nhat
document.querySelector('#btnUpdate').onclick=function(){
    var proDuctUpdate=new ProDuct();
    proDuctUpdate.id=document.querySelector('#idpd').value;
    proDuctUpdate.img=document.querySelector('#image').value;
    proDuctUpdate.name=document.querySelector('#name').value;
    proDuctUpdate.type=document.querySelector('#ProductType').value;
    proDuctUpdate.price=document.querySelector('#price').value;
    proDuctUpdate.description=document.querySelector('#priceDescrip').value;
    //gọi api
    var promise=axios({
        url:'http://svcy.myclass.vn/api/Product/UpdateProduct/'+proDuctUpdate.id,
        method:'PUT',
        data:proDuctUpdate
    });
    promise.then(function(result){
        layDanhSachProDuctApi();
    });
    promise.catch(function(err){
        console.log(err);
    });
}
//secrch:tìm kím sản phẩm theo tên
document.querySelector('#btnsearch').onclick=function(){
    var name=document.querySelector('#searching').value;
    var promis=axios({
        url:'http://svcy.myclass.vn/api/Product/SearchByName?name='+name,
        method:'GET',
    });
    promis.then(function(result){
        console.log(result.data);
        renderSearchProDuct(result.data);
    });
    promis.catch(function(err){
        console.log(err);
    })

}


function renderProDuct(arrProduct){

    var html='';
    for(var index=0;index<arrProduct.length;index++){
        var pd=arrProduct[index];
        html+=`
            <tr>
                <td>${pd.id}</td>
                <td>${pd.name}</td>
                <td>${pd.price}</td>
                <td><img src='${pd.img}'></td>
                <td>${pd.description}</td>
                <td>${pd.type}</td>
                <td>
                    <button class="btn btn-primary mr-2" onclick="chinhSua('${pd.id}')">Sửa</button>
                    <button class="btn btn-danger mr-2" onclick="xoaProDuct('${pd.id}')">Xóa</button>
                </td>
            </tr>

        `;
    }
    document.querySelector('#tblproduct').innerHTML=html;
}
function renderSearchProDuct(arrProduct){

    var html='';
    for(var index=0;index<arrProduct.length;index++){
        var pd=arrProduct[index];
        html+=`
            <tr>
                <td>${pd.id}</td>
                <td>${pd.name}</td>
                <td>${pd.price}</td>
                <td><img src='${pd.img}'></td>
                <td>${pd.description}</td>
                <td>${pd.type}</td>
            </tr>

        `;
    }
    document.querySelector('#tblproductsearch').innerHTML=html;
}