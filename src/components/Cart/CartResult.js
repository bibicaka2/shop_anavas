import React, { Component } from 'react';
import * as Message from './../../constants/Message';
import callApi from './../../utils/apiCaller'
import {Link} from 'react-router-dom';
class CartResult extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            _id: "",
            name: "",
            discount: 0,
            from_date: "",
            to_date: "",
             code:"",
             price_after_sale:'',
             mess:'',
        }
    }
    
    handleChange=(e)=>{
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
          });
    }
    check_code=()=>{
        
        callApi(`SaleOff/check?code=${this.state.code}`, 'POST', null).then(res => {
          
                if(res.data!==0)
                {
                    var sale_off=res.data.sale_off;
                    console.log(sale_off)
                    this.setState({
                        _id: sale_off._id,
                        name:sale_off.name,
                        discount:sale_off.discount,
                        from_date: sale_off.from_date,
                        code:sale_off.code,
                        to_date: sale_off.to_date,
                        mess:'nhập mã khuyến mãi thành công'
                    })  
                    sessionStorage.setItem('I_Bill',JSON.stringify(this.state));
                }
                else{
                    this.setState({
                        discount: 0,
                        mess:'Mã khuyến mãi không hợp lệ do sai cú pháp hoặc quá thời hạn áp dụng.'
                    })
                }
          });
    }
    render() {
        var { cart } = this.props;
      var {discount,code}=this.state
        return (
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 main-cart-right">
                <ul className="list-group">
                    <li className="list-group-item list-group-item__title">ĐƠN HÀNG</li>
                    <li className="list-group-item list-group-item__divider"></li>
                    <li className="list-group-item list-group-item__title-1">NHẬP MÃ KHUYẾN MÃI</li>
                    <li className="list-group-item list-group-item__title-2">{this.state.mess}
                        </li>
                    <li className="list-group-item">
                        <div className="input-group">
                            <input type="text" className="list-group-item__form-control text-uppercase" name="code" onChange={this.handleChange} defaultValue={this.state.code}   />
                            <span className="input-group-btn">
                                <button onClick={this.check_code} className="btn list-group-item__btn-apply" type="button">ÁP DỤNG</button>
                            </span>
                        </div>
                    </li>
                    <li className="list-group-item list-group-item__divider-1"></li>
                    <li className="list-group-item list-group-item__text-1">
                        <span className="list-group-item__title-3">Đơn hàng</span>
                        <span className="list-group-item__title-3-1 totalPriceOfCart">{this.showTotalAmount(cart,0)}</span>
                    </li>
                    <li className="list-group-item list-group-item__text-2">
                        <span className="list-group-item__title-3">Giảm</span>
                        <span className="list-group-item__title-4-1 totalDiscountOfCart">{this.showTotalAmount(cart,discount,1)}</span>
                    </li>
                    <li className="list-group-item list-group-item__divider-1"></li>
                    <li className="list-group-item">
                        <span className="list-group-item__title-5">TẠM TÍNH</span>
                        <span className="list-group-item__title-5-1 tempPrice">{this.showTotalAmount(cart,discount)}</span>
                    </li>
                    <li className="list-group-item">
                        <button data-href="https://ananas.vn/shipping-infomation/" className="btn list-group-item__btn-cart to-checkout">
                            
                            { <Link to={`shipping-infomation`}>TIẾP TỤC THANH TOÁN</Link> }
                         </button>
                    </li>
                </ul>
            </div>



        )
    }
    showTotalAmount = (cart,discount,flag) => {
        var total = 0;
      
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
    onBuyToCart = (cart) => {
        console.log(this.state)
     
        this.props.onChangeMessage(Message.MSG_BUY_TO_CART);
    }
}

export default CartResult;


