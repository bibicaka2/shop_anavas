
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
class A_ProductItem extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
            _id: '',
            name: '',
            img: '',
            status: '',
            description: '',
            rating: 5,
            gender:'',
            color: '',
            price_origin: '',
            price_after_sale_off: '',
            sale_id:'',          
            size:'',
            quantity:0,
        }
    }
    abc=(product)=>{
        console.log(this.state)
        if(this.state.size ==='' || this.state.quantity===0)
        {
            alert('Vui lòng chọn size và số lượng');
        }
       else{
        this.props.onAddToCart(this.state);
        alert('Thêm giỏ hàng thành công');
       }
      
    }
  
    handleChange=(e)=>{
        var target = e.target;
        var name = target.name;
      
        var value = target.value;
        this.setState({
            [name]: value
          });
        if(name="quantity")
        {
            var {product}=this.props;
            this.setState({
                _id:product._id,
                name:product.name,
                img: product.img,
                price_origin: product.price_origin,
                price_after_sale_off: product.price_after_sale_off,
                status_id:product.status_id,
                product_type_id:product.product_type_id,
                sale_id:product.sale_id,
                description: product.description,
                rating:product.rating,
                color:product.color,
                gender:product.gender,
            })
        }
    }
    render() {
       var {product}=this.props
    
        // var statusName = product.inventory>0 ? 'Còn hàng' : 'Hết hàng';
        // var statusclassName = product.inventory >0? 'warning' : 'default';
        return (
            <div className="popup " id={`product/${product._id}`}>
            <div className="popup__content col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <div className="popup__left">
                    <img src={product.img} alt="Tour photo" className="popup__img" />
                    {/* <img src={product.img} alt="Tour photo" className="popup__img" /> */}
                </div>
                <div className="popup__right">
                    <a href="#" className="popup__close">&times;</a>
                    {/* <h2 className="heading-secondary u-margin-bottom-small">{product.name}</h2> */}
                    <div className=" ">
                        <h4 className="h4__detail_product">{product.name}</h4>
                        <h6 className="detail1__h6">
                            <input type="hidden" id="productId" value="253661" />
                            <span className="pull-left">Mã sản phẩm: <strong>{product._id}</strong></span>
                        <span className="pull-right">Loại: <strong>{product.status_id}</strong></span>
                        </h6>
                        <h5 className="detail1__h5  ">
                            <span className="saleprice">{product.price_after_sale_off}VND </span>

                        </h5>
                        <div className="divider"></div>
                        <h6 className="detail1__h6">{product.description} </h6>

                        <div className="divider"></div>
                        <div className="row ">
                            <div className="col-xs-12 col-sm-6 col-md-6 pd-0">
                                <h5 className="detail1__h5">SIZE</h5>
                                <select name="size" className="abo "  onChange={this.handleChange}>
                                    <option defaultValue="">&nbsp;</option>
                                    {
                                        product.product_size_list.map((product_size_item,index)=>{
                                            return(
                                                <option key={index} value={product_size_item.size_id}>{product_size_item.size_id}</option>
                                            )
                                        })
                                    }
                                    {/* <option>35</option>
                                    <option>36</option>
                                    <option disabled="">37</option>
                                    <option disabled="">38</option>
                                    <option disabled="">39</option>
                                    <option>40</option>
                                    <option>41</option>
                                    <option>42</option>
                                    <option>43</option>
                                    <option>44</option>
                                    <option>45</option>
                                    <option>46</option> */}
                                    
                                </select>
                                {/* <div className="btn-group bootstrap-select">

                                    <button type="button" className="dropdown-toggle btn" data-toggle="dropdown" data-id="pickSize" title="&amp;nbsp;">
                                        <span className="filter-option pull-left">&nbsp;
                                        </span>&nbsp;
                                        <span className="bs-caret">
                                            <span className="caret">

                                            </span>
                                        </span>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu__1 open " >
                                        <ul className="dropdown-menu dropdown-menu__inner inner" role="menu">
                                            <li data-original-index="0" className="dropdown-menu__li selected">
                                                <a  className="dropdown-menu__a"  data-tokens="null">
                                                    <span className="text">&nbsp;</span>
                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                </a>
                                            </li>
                                            <li data-original-index="1" className="dropdown-menu__li">
                                                <a  className="dropdown-menu__a" data-tokens="null">
                                                    <span className="text">35</span>
                                                    <span className="glyphicon glyphicon-ok check-mark"></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                              
                                </div> */}
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <h5 className="detail1__h5">SỐ LƯỢNG </h5>
                                <select name="quantity" onChange={this.handleChange} className="abo">
                                    <option defaultValue="">&nbsp;</option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                    <option value={11}>11</option>
                                    <option value={12}>12</option>
                                </select>
                           
                           
                            </div>
                            </div>
                            
                            <div className="row grp-btn1 ">
                                <a className="btn btn__btn-addcart" onClick={()=>this.abc(product)}>THÊM VÀO GIỎ HÀNG</a>
                                <a className="btn btn__btn-like addToWishList" data-img="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg" data-img-like="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_2.svg ?" data-img-unlike="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg">
                                    <img id="image-heart" src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Heart_product_1.svg" /></a>
                            </div>
                            <div className="row grp-btn1">
                                <a href="/products-cart" className="btn btn-checkout">THANH TOÁN</a>
                                <input type="hidden" id="_wpnonce" name="_wpnonce" value="70633404dd" /><input type="hidden" />
                            </div>
                            {/* ------------------------------------------------------------------------------ */}
                           
                        </div>
                    
                </div>
            </div>
        </div>
 
        
      )
    }


}
export default A_ProductItem;
