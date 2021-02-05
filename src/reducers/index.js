import {combineReducers} from 'redux';
import products from './products';
import cart from './cart';
import BillDetail from './BillDetail';
import message from './message';
import productTypeList from './productTypeList';
import productSize from './Product/productSize';
import saleOff from './SaleOff/saleOff';
import user from './User/user';
// import shippingInfomation from './ShippingInfomation/shippingInfomation';
const appReducers = combineReducers({
    products,
    cart,
    message,
    productTypeList,
    productSize,
    saleOff,
    BillDetail,
    user,
    // shippingInfomation
});
export default appReducers;