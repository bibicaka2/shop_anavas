import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import * as Message from './../constants/Message';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult'
import {  actChangeMessage, actDeleteToCart, actUpdateToCart,actFetchToCart } from './../actions/index'

//import cart from '../reducers/cart';
class CartContainer extends Component {
  componentDidMount(){
    this.actFetchToCart();
  }
  render() {
    var { cart } = this.props;
    return (
      <div className="container">
        <Cart>
          {this.showCartItem(cart)}
          {this.showTotalAmount(cart)}
        </Cart>
      </div>
    )
  }
  showCartItem = (cart) => {
    var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
    var { onDeleteToCart, onUpdateToCart } = this.props;
    console.log(cart);
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
      result = <CartResult cart={cart}  onChangeMessage={onChangeMessage} />;
    }
    return result;
  }
}
const mapStateToProps = state => {

  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchToCart: (product) => {
      dispatch(actFetchToCart(product))
    },
    onDeleteToCart: (product) => {
      dispatch(actDeleteToCart(product))
    },
    onUpdateToCart: (product, value) => {
      dispatch(actUpdateToCart(product, value))
    },
  
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message))
    }

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);


