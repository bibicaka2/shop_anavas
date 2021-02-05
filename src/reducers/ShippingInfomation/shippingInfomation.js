
// import * as types from './../../constants/ActionType';
// import callApi from './../../utils/apiCaller';

// var data = JSON.parse(sessionStorage.getItem('CART'));
// console.log('321321123')
// var data_customer =JSON.parse(sessionStorage.getItem('customer'))
// var customer= data_customer?data_customer:[];
// var initialState = data?data:[];
// const shippingInfomation = (state = initialState, action)=>{
//     var index=-1;
//     var {product,quantity,item}=action;
//     switch(action.type)
//     {
         
//             case types.BUY_TO_CART:
//         console.log('1111111111111111111111111111');
//             console.log(JSON.parse(sessionStorage.getItem('CART')))
//             console.log(data);
//             for(var i=0 ;i<state.length;i++)
//                 {               
//                     console.log('22222222222222222222222');
//                     var link_bill_info = List_Cart_Api(state);
//                     console.log(link_bill_info);
//                     callApi(`${link_bill_info}`,'POST',null);
//                     sessionStorage.setItem('customer',JSON.stringify([]));
//                     sessionStorage.setItem('I_Bill',JSON.stringify([]));
//                     state.splice(0,state.length);
//                     sessionStorage.setItem('CART',JSON.stringify(state));
                    
//                 }
//                 console.log([...state])
//             return [...state];
               
//         default:return[...state];
//     }
// }

// //http://localhost:8000/api/billinfo/create?product_detail[0][product_id]=456&product_detail[0][amount]=5&product_detail[1][product_id]=24&product_detail[1][amount]=23
//  var List_Cart_Api=(cart)=>{
//      var link=`billinfo/create?`;
     
//      //http://localhost:8000/api/billinfo/create?product_detail[0][product_id]=5fbefda23f43000080004cd2&name=Tien Test&address=Tien Tesst&phone=123456789&email=tranhungtien1199@gmail.com&product_detail[0][size_id]=S&product_detail[0][quantity]=6
//     console.log('32187632187632187362187')
//      if(cart.length>0)
//      {
//         for(var i=0 ; i<cart.length;i++)
//         {
//             link=`${link}product_detail[${i}][product_id]=${cart[i].product._id}&product_detail[${i}][size_id]=${cart[i].product.size}&product_detail[${i}][quantity]=${cart[i].quantity}&address=${customer.customer_address}&phone=${customer.customer_phone}&name=${customer.customer_name}&email=${customer.customer_email}&`  ;    
//         }
//      }
     
     
//      return link;
     
//  }

// export default shippingInfomation;