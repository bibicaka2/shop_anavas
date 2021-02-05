import React, { Component } from 'react';
import * as Message from './../constants/Message';
import A_DetailProduct from './../components/Admin/DetailProduct/A_DetailProduct';
import AOS from 'aos';
import 'aos/dist/aos.css';
class Product extends Component {
    componentDidMount() {
        AOS.init({
            duration: 1000
        })
    }
    onSave = (e) => {
        e.preventDefault(); 
    }
    render() {
        //  col-lg-4 col-md-6 mb-r
        var { product } = this.props;
        return (
            // col__product item
          
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4" data-aos="fade-up"  >
                    <div className="card">
                        <div className="card__side card__side--front">
                            <img className="card__picture card__picture--1" src={product.img} alt='error' />

                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--1 ">
                                    {product.name}
                                </span>

                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li className="card__details__li" >{product.name}</li>
                                    <li className="card__details__li">{product.color}</li>
                                    <li className="card__details__li">{product.price_origin}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Only</p>
                                     <p className="card__price-value">{product.price_after_sale_off}</p>
                                     <a href={`#product/${product._id}`} className="btn__custom btn__custom--white">Chi tiết</a>
                                    {/* <a href={`#product/${product._id}`} className="btn__custom btn__custom--white" onClick={() => this.onAddToCart(product)}>Chi tiet</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
               

                <A_DetailProduct product ={product} onAddToCart={this.onAddToCart}></A_DetailProduct>
                </div>
         

        )

    }
    onAddToCart = (product) => {
        console.log(product.quantity)
        this.props.onAddToCart(product,product.quantity);
        this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESSS);
    }
    // showRating = (rating) => {
    //     var x = 6

    //     var result = [];
    //     for (var i = 1; i <= rating; i++) {
    //         result.push(<i classNameName="fa fa-star" key={i}></i>);
    //     }
    //     for (var j = 1; j <= (5 - rating); j++) {
    //         result.push(<i classNameName="fa fa-star-o" key={x++} ></i>);
    //     }
    //     return result;
    // }


}
export default Product;


