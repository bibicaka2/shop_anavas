import React, { Component } from 'react';

class CartItemList extends Component {
    change_state=(is)=>{
      
        this.props.change_state(1);
        
    }
    render() {
     var {cart}=this.props;
     var data_I_Bill=JSON.parse(sessionStorage.getItem('I_Bill'));
     var saleOff=data_I_Bill?data_I_Bill:[];
     console.log('1234');
        return (
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 main-cart-right">

                <ul className="list-group">
                    <li className="list-group-item list-group-item__title">ĐƠN HÀNG</li>
                    <li className="list-group-item list-group-item__divider"></li>
            
                 
                    {this.props.children}
                 
                    {/* <li className="list-group-item text-1">
                        <span className="list-group-item__title-6 ">Urbas Unsettling - Low Top - Insignia/Sulphur</span>
                        <span className="list-group-item__title-6-1 ">490.000 VND</span>
                    </li>
                    <li className="list-group-item text-1-1">
                        <span className="list-group-item__title-6-2 title-6-2">Size: 36</span>
                        <span className="list-group-item__title-6-3 title-6-3">x 8</span>
                    </li>
                
                    <li className="list-group-item text-1">
                        <span className="list-group-item__title-6">Urbas Unsettling - Low Top - Insignia/Sulphur</span>
                        <span className="list-group-item__title-6-1">490.000 VND</span>
                    </li>
                    <li className="list-group-item text-1-1">
                        <span className="list-group-item__title-6-2">Size: 44</span>
                        <span className="list-group-item__title-6-3">x 5</span>
                    </li> */}
                   
                    
                    <li className="list-group-item divider-1"></li>
                    <li className="list-group-item text-1">
                        <span className="list-group-item__title-3">Đơn hàng</span>
                        <span className="list-group-item__title-3-1"><span className="current-price"> {this.showTotalAmount(cart,saleOff?saleOff.discount:0,0)}</span> VND</span>
                    </li>
                    <li className="list-group-item text-2-2">
                        <span className="list-group-item__title-3">Giảm</span>
                        <span className="list-group-item__title-4-1">- <span className="discount">{this.showTotalAmount(cart,saleOff?saleOff.discount:0,1)}</span> VND</span>
                    </li>
                    <li className="list-group-item text-2-3">
                        <span className="list-group-item__title-2-1">Phí vận chuyển</span>
                        <span className="list-group-item__title-2-2"><span className="shipping-fee">0</span> VND</span>
                    </li>
                    <li className="list-group-item text-2-3">
                        <span className="list-group-item__title-2-1">Phí thanh toán</span>
                        <span className="list-group-item__title-2-2"><span className="card-fee">0</span> VND</span>
                    </li>

                    <li className="list-group-item divider-1"></li>
                    <li className="list-group-item">
                        <span className="list-group-item__title-5">TỔNG CỘNG</span>
                        <span className="list-group-item__title-5-2"><span className="total-price">{this.showTotalAmount(cart,saleOff?saleOff.discount:0,0)}</span> VND</span>
                    </li>
                    <li className="list-group-item">
                        <button onSubmit={this.onSubmit} onClick={()=>this.change_state()} className="btn btn-cart btn-complete-detail"> HOÀN TẤT ĐẶT HÀNG
                        </button>
                    </li>
                </ul>

            </div>

        )
    }
    showTotalAmount = (cart,discount,flag) => {
     
        var total = 0;
      console.log(cart)
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.price_origin * cart[i].quantity;
            }
        }
        if(flag===1)
        {
            return total * discount
        }
       
        return total - (total * discount) ;
    }
}
export default CartItemList;


