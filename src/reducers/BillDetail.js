// import { API_URL } from '../constants/Config';
import callApi from '../utils/apiCaller';
import * as types from './../constants/ActionType';





var initialState = [];

const bill_detail = (state = initialState, action)=>{
   
    var {item}=action;

    switch(action.type)
    {
            case types.FETCH_BILL_DETAIL:
                // state=JSON.parse(sessionStorage.getItem('CART'));
                // return [...state];
            // case types.ADD_TO_BILL_DETAIL:
            //     index= findBillDetailtInCart(state,product) 
   
            //     if(index !==-1)
            //     { 
            //         state[index].quantity+= parseInt(quantity);
            //     }
            //     else
            //     {
            //         state.push({
            //             product,
            //             quantity
            //         });
            //     }
            //     sessionStorage.setItem('CART',JSON.stringify(state));

                return [...state];
            case types.DELETE_TO_BILL_DETAIL:
                console.log('vo vovovo ovovo')
                callApi(`billinfo/delete?_id=${item._id}`, 'POST', null).then(res => {
                });
                
            
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

export default bill_detail;