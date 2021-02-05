import * as types from './../constants/ActionType';

export const actChangeMessage=(message)=>{
    return {
        type:types.CHANGE_MESSAGE,
        message
    }
};
//CART
export const actFetchToCart=(item)=>{
    return {
        type:types.FETCH_TO_CART,
        item
    }
};
export const actUpdateToCart=(item,quantity_update,size_update)=>{
    return {
        type:types.UPDATE_TO_CART,
        item,
        quantity_update,
        size_update,
    }
};
export const actBuyToCart=(item)=>{
    return {
        type:types.BUY_TO_CART,
        item ,
      
    }
};
export const actDeleteToCart=(item)=>{
    return {
        type:types.DELETE_TO_CART,
        item
    }
};
export const actAddToCart =(product,quantity)=>{
    return{
        type: types.ADD_TO_CART,
        product,
        quantity,
    }
};



//---------------------------------PRODUCT-------------------------------------
export const actFetchProducts=(products)=>{
    return {
        type : types.FETCH_PRODUCTS,
        products
    }
};

export const actAddToProduct =(product,quantity)=>{
    return{
        type: types.ADD_TO_PRODUCT,
        product,
    }
};
export const actDeleteToProduct=(item)=>{
    return {
        type:types.DELETE_TO_PRODUCT,
        item
    }
};
export const actUpdateToProduct=(item,value)=>{
    return {
        type:types.UPDATE_TO_PRODUCT,
        item,
        value
    }
};

//--------------------------------------------------------------------------//
export const actFetchProductType=(item)=>{
    return {
        type:types.PRODUCT_TYPE_LIST,
       item
    }
};
export const actFindProductByKeyWord=(item)=>{
    return {
        type:types.PRODUCT_FIND_BY_KEY_WORD,
       item
    }
};
//------------------------------------------------------------------------//
//--------------------------PRODUCTSIZE-----------------------------------

export const actFetchProductSize=(products)=>{
    return {
        type : types.FETCH_PRODUCTS_SIZE,
        products
    }
};

export const actAddToProductSize =(product,quantity)=>{
    return{
        type: types.ADD_TO_PRODUCT_SIZE,
        product,
    }
};
export const actDeleteToProductSize=(item)=>{
    return {
        type:types.DELETE_TO_PRODUCT_SIZE,
        item
    }
};
export const actUpdateToProductSize=(item)=>{
    return {
        type:types.UPDATE_TO_PRODUCT_SIZE,
        item,
    
    }
};
//------------------------------------------------------------------------//
//--------------------------SALEOFF-----------------------------------

export const actFetchSaleOff=(sale_off_list)=>{
    return {
        type : types.FETCH_SALE_OFF,
        sale_off_list
    }
};

export const actAddToSaleOff =(item)=>{
    return{
        type: types.ADD_TO_SALE_OFF,
        item,
    }
};
export const actDeleteToSaleOff=(item)=>{
    return {
        type:types.DELETE_TO_SALE_OFF,
        item
    }
};
export const actUpdateToSaleOff=(item,value)=>{
    return {
        type:types.UPDATE_TO_SALE_OFF,
        item,
        value
    }
};
//------------------------------------------------------------------------//


//------------------------------------------------------------------------//
//--------------------------BILLDETAIL-----------------------------------

export const actFetchBillDetail=(bill_detail_list)=>{
    return {
        type : types.FETCH_BILL_DETAIL,
        bill_detail_list
    }
};

export const actAddToBillDetail =(item)=>{
    return{
        type: types.ADD_TO_BILL_DETAIL,
        item,
    }
};
export const actDeleteToBillDetail=(item)=>{
    return {
        type:types.DELETE_TO_BILL_DETAIL,
        item
    }
};
export const actUpdateToBillDetail=(item,value)=>{
    return {
        type:types.UPDATE_TO_BILL_DETAIL,
        item,
        value
    }
};
//------------------------------------------------------------------------//
//------------------------------------------------------------------------//
//--------------------------USER-----------------------------------

export const actFetchUser=(user_list)=>{
    return {
        type : types.FETCH_USER,
        user_list
    }
};

export const actAddToUser =(item)=>{
    return{
        type: types.ADD_TO_USER,
        item,
    }
};
export const actDeleteToUser=(item)=>{
    return {
        type:types.DELETE_TO_USER,
        item
    }
};
export const actUpdateToUser=(item,value)=>{
    return {
        type:types.UPDATE_TO_USER,
        item,
        value
    }
};
//------------------------------------------------------------------------//