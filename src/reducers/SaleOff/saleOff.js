import * as Types from './../../constants/ActionType';
import callApi from './../../utils/apiCaller';
var initialState="";
const sale_off = (state = initialState, action)=>{
    var {item,sale_off_list}=action;
    switch(action.type)
    {
        
        case Types.FETCH_SALE_OFF:    
        console.log('vo redux product size');
        state=action.sale_off_list;
        
        return state;
        
        case Types.ADD_TO_SALE_OFF:    
      
        console.log(sale_off_list);
        if(sale_off_list!==null)
        {
            console.log(item);
           // http://localhost:8000/api/Products/create?name=ao&img=https://ananas.vn/wp-content/uploads/AGT0011_1-1.jpg&price=2000&status_id=SHIRT&description=aab&product_size_list[0][size_id]=S&product_size_list[0][inventory]=15&sale_id=123&rating=2&color=black&product_type_id=123&price_origin=20000&price_after_sale_off=210000&gender=NỮ
            //     callApi(`Products/create?name=${product.name}&img=${product.img}&price=${product.price}&status=${product.status}&description=${product.description}&inventory=${product.inventory}&rating=${product.rating}`, 'POST', null).then(res => {   
            // });
            // var add_product_Api = add_product_api(state);
            // callApi(`${add_product_Api}`,'POST',null);
            var add_sale_off_Api= `SaleOff/create?&name=${item.name}&discount=${item.discount}&from_date=${item.from_date}&to_date=${item.to_date}&code=${item.code}`
            callApi(`${add_sale_off_Api}`,'POST',null);
  
        }
        return item;

        case Types.UPDATE_TO_SALE_OFF:  
        if(item!==null)
        {
            console.log(item)
            console.log('3298163891273129879171932879128    ')
        //      //http://localhost:8000/api/Products/update?_id=5f73f7ec5d3500008700203a&name=iphone 1&img=https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445%26hei=445%26fmt=jpeg%26qlt=95%26op_sharpen=0%26resMode=bicub%26op_usm=0.5,0.5,0,0%26iccEmbed=0%26layer=comp%26.v=K7ik72&price=20001&description=aa&inventory=15&rating=2
        //     callApi(`Products/update?_id=${item.id}&name=${item.name}&img=${item.img}&price=${item.price}&status=${item.status}&description=${item.description}&inventory=${item.inventory}&rating=${item.rating}`, 'POST', null).then(res => {
        //    });
             var update_sale_off_Api= `SaleOff/update?_id=${item._id}&name=${item.name}&discount=${item.discount}&from_date=${item.from_date}&to_date=${item.to_date}&code=${item.code}`
            callApi(`${update_sale_off_Api}`,'POST',null);
  
        }
        return state;
      
        case Types.DELETE_TO_SALE_OFF:    
        console.log('vo redux')
        callApi(`SaleOff/delete?_id=${item._id}`, 'POST', null).then(res => {
        });
        
        return state;
        
        
        case Types.PRODUCT_FIND_BY_KEY_WORD:
        var {item}=action
           state= action.item;
           console.log(action.item)
          console.log(state);
            return state;
           
         
            default:return state;
    }
 
}

export default sale_off;