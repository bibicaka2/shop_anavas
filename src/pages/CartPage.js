
import React, { Component } from 'react';
import CartContainer from './../containers/Cart/CartContainer';
import Header from './../components/Header';
import Footer from './../components/Footer';
class CartPage extends Component {

    render() {
        return (
           <div>
                <Header></Header>
                 <CartContainer/>
                 <Footer></Footer>
           </div>
             
          
        )
    }
}
export default CartPage ;



