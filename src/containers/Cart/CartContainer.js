import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cart from '../../components/Cart/Cart';
import * as Message from '../../constants/Message';
import CartItem from '../../components/Cart/CartItem';
import CartResult from '../../components/Cart/CartResult'
import { actChangeMessage, actDeleteToCart, actUpdateToCart,actFetchToCart } from '../../actions/index'

//import cart from '../reducers/cart';
class CartContainer extends Component {

  render() {
    var { cart,products } = this.props;
    console.log(cart);
    console.log(products);
    return (
      <div >
        <Cart showCartItem={this.showCartItem(cart)} showTotalAmount={this.showTotalAmount(cart)}>
         
        </Cart>
      </div>
    )
  }
  showCartItem = (cart) => {
    var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
    var { onDeleteToCart, onUpdateToCart } = this.props;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem key={index} item={item} index={index} onDeleteToCart={onDeleteToCart} onUpdateToCart={onUpdateToCart} ></CartItem>
        );
      })
    }

    return result;
  }
  showTotalAmount = (cart) => {
    var result = null;
    var {  onChangeMessage } = this.props;
    if (cart.length > 0) {
      result = <CartResult cart={cart} onChangeMessage={onChangeMessage} />;
    }
    return result;
  }
}
const mapStateToProps = state => {

  return {
    cart: state.cart,
    products : state
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
   onFetchToCart:(cart)=>{
      dispatch(actFetchToCart(cart))
   },
    onDeleteToCart: (product) => {
      dispatch(actDeleteToCart(product))
    },
    onUpdateToCart: (product, quantity_update,size_update) => {
      dispatch(actUpdateToCart(product, quantity_update,size_update))
    },

    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message))
    }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);


