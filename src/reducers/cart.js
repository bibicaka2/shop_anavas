// import { API_URL } from '../constants/Config';
import callApi from '../utils/apiCaller';
import * as types from './../constants/ActionType';
var data = JSON.parse(sessionStorage.getItem('CART'));



var initialState = data?data:[];

const cart = (state = initialState, action)=>{
    var index=-1;
    var {product,quantity,item}=action;

    switch(action.type)
    {
            case types.FETCH_TO_CART:
                state=JSON.parse(sessionStorage.getItem('CART'));
                return [...state];
            case types.ADD_TO_CART:
                index= findProductInCart(state,product) 
   
                if(index !==-1)
                { 
                    state[index].quantity+= parseInt(quantity);
                }
                else
                {
                    state.push({
                        product,
                        quantity
                    });
                }
                sessionStorage.setItem('CART',JSON.stringify(state));

                return [...state];
            case types.DELETE_TO_CART:
                index=findItemInCart(state,item)
                if(index!==-1)
                {   
                    state.splice(index,1);
                    sessionStorage.setItem('CART',JSON.stringify(state));
                }
                return [...state];
            case types.UPDATE_TO_CART:       
            var {quantity_update,item,size_update}=action;  

                index=findItemInCart(state,item)
                if(index!==-1)
                {
                    if(state[index].quantity >0 )
                    {   
                       
                        state[index].quantity=quantity_update;
                        sessionStorage.setItem('CART',JSON.stringify(state));
                    }
                   else{
                       if(quantity_update===-1)
                       {
                        return [...state];
                       }
                       else{
                        state[index].quantity=quantity_update;
                        sessionStorage.setItem('CART',JSON.stringify(state));
                       }
                   }
                  

                }
              
                return [...state];
                case types.BUY_TO_CART:
                   
                                                    
                                        var link_bill_info = List_Cart_Api(state);              
                                        callApi(`${link_bill_info}`,'POST',null);                      
                                    
                                  
                                    sessionStorage.setItem('customer',JSON.stringify([]));
                                    sessionStorage.setItem('I_Bill',JSON.stringify([]));
                                    state.splice(0,state.length);
                                    sessionStorage.setItem('CART',JSON.stringify(state)); 
                                return [...state];
            // case types.BUY_TO_CART:
            //     console.log(code)
            //     // for(var i=0 ;i<state.length;i++)
            //     // {               
            //     //     var link_bill_info = List_Cart_Api(state);
            //     //     callApi(`${link_bill_info}`,'POST',null);
            //     //     state.splice(0,state.length);
            //     //     sessionStorage.setItem('CART',JSON.stringify(state));
            //     // }
            //     // return [...state];
               
        default:return[...state];
    }
}

//http://localhost:8000/api/billinfo/create?product_detail[0][product_id]=456&product_detail[0][amount]=5&product_detail[1][product_id]=24&product_detail[1][amount]=23
var List_Cart_Api=(cart)=>{
    var data_customer =JSON.parse(sessionStorage.getItem('customer'));
    var customer= data_customer?data_customer:[];
    var data_sale_off =JSON.parse(sessionStorage.getItem('I_Bill'));
    var sale_off = data_sale_off?data_sale_off:[];
    var link=`billinfo/create?sale_off_id=${sale_off._id}&`;
    
    //http://localhost:8000/api/billinfo/create?product_detail[0][product_id]=5fbefda23f43000080004cd2&name=Tien Test&address=Tien Tesst&phone=123456789&email=tranhungtien1199@gmail.com&product_detail[0][size_id]=S&product_detail[0][quantity]=6
  
    if(cart.length>0)
    {
        console.log(cart);
       for(var i=0 ; i<cart.length;i++)
       {
           link=`${link}product_detail[${i}][product_id]=${cart[i].product._id}&product_detail[${i}][price]=${cart[i].product.price_origin}&product_detail[${i}][size_id]=${cart[i].product.size}&product_detail[${i}][quantity]=${cart[i].quantity}&address=${customer.customer_address}&phone=${customer.customer_phone}&name=${customer.customer_name}&email=${customer.customer_email}&`  ;    
       }
    }
    
    
    return link;
    
}
var findProductInCart=(cart,product)=>{
    var index =-1;
    if(cart.length>0)
    {
        for(var i=0 ; i<cart.length;i++)
        {
            if(cart[i].product._id===product._id)
            {
              if(product.size===cart[i].product.size)
              {
                index=i;
                break;
              }      
            }
        }
    }
    return index;
};
var findItemInCart=(cart,item)=>{
    var index=-1;
    if(cart.length>0)
    {
        for(var i=0 ; i<cart.length;i++)
        {
            if(cart[i].product._id===item.product._id)
            {
                index=i;
                break;
            }
        }
    }
    return index;
}
export default cart;