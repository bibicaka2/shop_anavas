import React, { Component } from 'react';

class Cart extends Component {

    render() {
        var {showCartItem,showTotalAmount}=this.props

        return (
            <div className="main-cart container-fluid" data-cart-list="">
            <div className="row row__cart">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 main-cart-left">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 title-1">GIỎ HÀNG</div>
                    <div className="allCart" data-cart="3675610362108207280">
                        {showCartItem}
                    </div>
                    {/* <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 title-3">
                        <button className="btn btn-delall btn-clearAll">XÓA HẾT</button>
                    </div> */}
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 title-3">
                        <a  href='/product-list'  className="btn btn-cont">QUAY LẠI
                        MUA HÀNG
                    </a>
                    </div>

                </div>

            </div>
               
               {showTotalAmount}
            </div>
            <input type="hidden" value="1" className="isYourCart" />
        </div>
   
       
       )
    }
}
export default Cart;


