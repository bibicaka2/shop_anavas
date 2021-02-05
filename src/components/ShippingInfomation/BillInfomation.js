import React, { Component } from 'react';
import CustomerInfomation from './CustomerInfomation';

class BillInfomation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             info_customer:'',
             I_Bill:''
        }
    }
    
    receive_info_customer=(abc)=>{
      
        this.setState({
            info_customer:abc,
        })
    }
    render() {
        var data_saleOff=JSON.parse(sessionStorage.getItem('I_Bill'));
        var saleOff=data_saleOff?data_saleOff:0;
        var {cart}=this.props;
        console.log(saleOff.count)
      
        return (
            <div className="main-cart container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 main-cart-left">

                        <div className="row"> 
                            <CustomerInfomation receive_info_customer={this.receive_info_customer}></CustomerInfomation>
                        </div>
                    </div>
                   <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 main-cart-right">

                <ul className="list-group">
                    <li className="list-group-item list-group-item__title">ĐƠN HÀNG</li>
                    <li className="list-group-item list-group-item__divider"></li>
            
                 
                    {this.props.showCartItem}
                 
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
                        <span className="list-group-item__title-3-1"><span className="current-price"> {this.showTotalAmount(cart,0,0)}</span> VND</span>
                    </li>
                    <li className="list-group-item text-2-2">
                        <span className="list-group-item__title-3">Giảm</span>
                        <span className="list-group-item__title-4-1">- <span className="discount">{this.showTotalAmount(cart,saleOff.discount,1)}</span> VND</span>
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
                        <span className="list-group-item__title-5-2"><span className="total-price">{this.showTotalAmount(cart,saleOff.discount,0)}</span> VND</span>
                    </li>
                    <li className="list-group-item">
                        <button  onClick={()=>this.onBuyToCart(cart)} className="btn btn-cart btn-complete-detail ">HOÀN TẤT ĐẶT HÀNG
                        </button>
                    </li>
                </ul>

            </div>
                </div>
            </div>
        )
    }
    showTotalAmount = (cart, discount, flag) => {
    
       if(typeof(discount)==="undefined")
       {
           discount=0
       }
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.price_origin * cart[i].quantity;
            }
        }
        if (flag === 1) {
            return total * discount
        }

        return total - (total * discount);
    }
    onBuyToCart=(cart)=>{
       

        if(this.state.info_customer!=='')
        {
            if(window.confirm('Đặt hàng thành công, bạn muốn quay về trang chủ không'))
            {
                var {history} =this.props
                history.push('/product-list');
            }
            sessionStorage.setItem('customer',JSON.stringify(this.state.info_customer));

            this.props.onBuyToCart(cart);
        }
        else{
            alert('Vui lòng nhập thông tin')
        }
      
        
     }
}
export default BillInfomation;


