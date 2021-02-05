import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actBuyToCart, actChangeMessage } from '../../actions/index';
import * as Message from '../../constants/Message';
import BillInfomation from '../../components/ShippingInfomation/BillInfomation';
import BillInfomationItem from '../../components/ShippingInfomation/BillInfomationItem';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
// import { actBuyToCart, actChangeMessage, actDeleteToCart, actUpdateToCart } from '../../actions/index'

//import cart from '../reducers/cart';
class ShippingInfomationContainer  extends Component {

  render() {
    var { cart } = this.props;
    var {onBuyToCart}= this.props;
   
    return (
      <div >
        <Header></Header>
        <BillInfomation showCartItem={this.showCartItem(cart)} cart={cart} onBuyToCart={onBuyToCart} history={this.props.history} >
         
        </BillInfomation>
        <Footer></Footer>
      </div>
    )
  }
  showCartItem = (cart) => {
    var result = <div><tr><td>{Message.MSG_CART_EMPTY}</td></tr></div>;
    
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <BillInfomationItem  key={index}  item={item} index={index} history={this.props.history}  ></BillInfomationItem>
        );
      })
    }

    return result;
  }
}
const mapStateToProps = state => {
  console.log(state.cart);
  
  return {
    cart: state.cart,
   
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
  
    onBuyToCart: (product) => {
      dispatch(actBuyToCart(product))
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message))
    }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShippingInfomationContainer);


