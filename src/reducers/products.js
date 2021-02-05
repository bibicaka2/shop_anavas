
import * as Types from './../constants/ActionType';
import callApi from './../utils/apiCaller';
var initialState=[];

const products = ( state = initialState, action)=>{
    var {item,product}=action;   
    console.log(state)
    switch(action.type)
    {
        case Types.FETCH_PRODUCTS:
        console.log(action.products)
     
        state=action.products;
        
        return [...state];
        
        case Types.ADD_TO_PRODUCT:    
        
        state=action.product;
        console.log(product);
        if(item!==null)
        {
           // http://localhost:8000/api/Products/create?name=ao&img=https://ananas.vn/wp-content/uploads/AGT0011_1-1.jpg&price=2000&status_id=SHIRT&description=aab&product_size_list[0][size_id]=S&product_size_list[0][inventory]=15&sale_id=123&rating=2&color=black&product_type_id=123&price_origin=20000&price_after_sale_off=210000&gender=NỮ
            //     callApi(`Products/create?name=${product.name}&img=${product.img}&price=${product.price}&status=${product.status}&description=${product.description}&inventory=${product.inventory}&rating=${product.rating}`, 'POST', null).then(res => {   
            // });
            var add_product_Api = add_product_api(state);
            callApi(`${add_product_Api}`,'POST',null);

            // callApi(`Products/create?name=${product.name}&img=${product.img}&price=${product.price}&status=${product.status}&description=${product.description}&inventory=${product.inventory}&rating=${product.rating}`, 'POST', null).then(res => {   
            // });
        }
        return state;

        
        case Types.UPDATE_TO_PRODUCT:  
        if(item!==null)
        {
           console.log(item);
        //      //http://localhost:8000/api/Products/update?_id=5f73f7ec5d3500008700203a&name=iphone 1&img=https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445%26hei=445%26fmt=jpeg%26qlt=95%26op_sharpen=0%26resMode=bicub%26op_usm=0.5,0.5,0,0%26iccEmbed=0%26layer=comp%26.v=K7ik72&price=20001&description=aa&inventory=15&rating=2
        //     callApi(`Products/update?_id=${item.id}&name=${item.name}&img=${item.img}&price=${item.price}&status=${item.status}&description=${item.description}&inventory=${item.inventory}&rating=${item.rating}`, 'POST', null).then(res => {
        //    });
             var add_product_Api = update_product_api(item);
            callApi(`${add_product_Api}`,'POST',null);
  
        }
        return state;
      
        case Types.DELETE_TO_PRODUCT:    
        callApi(`Products/delete?_id=${item._id}`, 'POST', null).then(res => {
        });
        
        return state;
        
        default:return[...state];
    }
 
}
var update_product_api=(product)=>{
    console.log(product)
    var link=`Products/update?_id=${product._id}`;
    //http://localhost:8000/api/Products/create?name=ao&img=https://ananas.vn/wp-content/uploads/AGT0011_1-1.jpg&price=2000&status_id=SHIRT&description=aab&product_size_list[0][size_id]=S&product_size_list[0][inventory]=15&sale_id=123&rating=2&color=black&product_type_id=123&price_origin=20000&price_after_sale_off=210000&gender=NỮ
    
    var length_list=product.product_size_list.length;
    var link_1=`&color=${product.color}&gender=${product.gender}&product_type_id=${product.product_type_id}&rating=${product.rating}&name=${product.name}&img=${product.img}&price_origin=${product.price_origin}&price_after_sale_off=${product.price_after_sale_off}&status_id=${product.status_id}&description=${product.description}`
    if(length_list>0)
    {
        
       for(var i=0 ; i<length_list;i++)
       {
           link=`${link}&product_size_list[${i}][size_id]=${product.product_size_list[i].size_id}&product_size_list[${i}][inventory]=${product.product_size_list[i].inventory}&`  ;    
       }
    }
    var api=`${link}${link_1}`
    return api;
    
}
var add_product_api=(product)=>{
    var link=`Products/create?`;
    //http://localhost:8000/api/Products/create?name=ao&img=https://ananas.vn/wp-content/uploads/AGT0011_1-1.jpg&price=2000&status_id=SHIRT&description=aab&product_size_list[0][size_id]=S&product_size_list[0][inventory]=15&sale_id=123&rating=2&color=black&product_type_id=123&price_origin=20000&price_after_sale_off=210000&gender=NỮ
    console.log('12398217391273981273912798')
    var length_list=product.product_size_list.length;
    var link_1=`&color=${product.color}&gender=${product.gender}&product_type_id=${product.product_type_id}&rating=${product.rating}&name=${product.name}&img=${product.img}&price_origin=${product.price_origin}&price_after_sale_off=${product.price_after_sale_off}&status_id=${product.status_id}&description=${product.description}`
    if(length_list>0)
    {
        
       for(var i=0 ; i<length_list;i++)
       {
           link=`${link}&product_size_list[${i}][size_id]=${product.product_size_list[i].size_id}&product_size_list[${i}][inventory]=${product.product_size_list[i].inventory}&`  ;    
       }
    }
    var api=`${link}${link_1}`
    return api;
    
}
export default products;