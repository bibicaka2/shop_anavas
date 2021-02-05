import React, { Component } from 'react';


import callApi from './../../utils/apiCaller';
class CartItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            _id:'',
             size_list:[],
        }
    }
    
    handleChange=(e)=>{
        var { item } = this.props;
        var target = e.target;
        var name = target.name;
        var value = target.value;
        if(name==='quantity')
        {
            console.log(item);
            this.onUpdateToCart(item,parseInt(value),item.product.size)
        }
        if(name==='size')
        {
            console.log(value);
            this.onUpdateToCart(item,item.quantity,value)
        }
        
    } 
    componentDidMount=()=>{
        var { item } = this.props;
        var find_product= `Products/findProduct?_id=${item.product._id}`
        callApi(`${find_product}`,'POST',null).then(res => {
                if(res)
                {
                this.setState({
                    _id : res.data.Product._id,
                    size_list: res.data.Product.product_size_list
                })
            }
          });

    }
    showSize_list(){
     
       var {size_list}=this.state;
        if(this.state.size_list)
        { 
            size_list.map((size,index)=>{     
                return (
                    <option key={index} value={size.size}>{size.size} </option>
                ) 
            })
       
       }
    }

    showQuantity_list(item){
        for(var i =0 ; i< item.quantity;i++)
        {

        }
    }
    render() {
        var { item } = this.props;
        var {size_list}=this.state;
        console.log(item.product.size);

        return (
            
            <div className="product-253661-35">
         
            <input type="hidden"  />
            <div className="product-info">
                <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9 item-2">
                    <div className="media">
                        <div className="media-left">
                            <a ><img className="media-object" src={item.product.img} height="283" width="283" /></a>
                        </div>
                        <div className="media-body">
                            <a ><h4 className="media-heading">{item.product.name}</h4>
                            </a>
                            <h5 className="price">
                                 <span className="saleoff"><strong>Giá:</strong> {item.product.price_origin}</span>
                            </h5>
                            <div className="row bottom row__bottom">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                                    <h5 className=" h5 media-body__h5">Size</h5>
                                    {console.log(item.product.size)}
                                    <select name="size" className="media-body--select"  defaultValue={item.product.size}  onChange={this.handleChange}   >
                                        {/* <option defaultValue={item.product.size}>{item.product.size} </option> */}
                                        <option value={item.product.size}>{item.product.size}</option>
                                        {
                                          size_list.map((size,index)=>{
                                            if(size.size_id !== item.product.size)
                                            {     
                                                return (
                                                    <option key={index} value={size.size_id}>{size.size_id} </option>
                                                ) 
                                            }

                                        })
                                        }

                                    </select>
                                    
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <h5 className=" h5 media-body__h5">Số lượng</h5>
                                    <select name="quantity" defaultValue={item.quantity}   onChange={this.handleChange}  className="media-body--select">
                                        <option>&nbsp;</option>
                                          
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={item.quantity}>{item.quantity}</option>
                                    </select>
         
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 item-2-1">
                    <div className="item-2-1__price">{item.product.price_origin * item.quantity }                                       </div>
                    <div className="status">Còn hàng</div>
                    <button className="media-body--button" type="btn" onClick={()=>this.onDeleteItemProduct(item)}> X</button>
                  
                </div>
               
            </div>
            
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 item-divider-1 "></div>
        </div>


        )
    }
    showSubTotal = (price_after_sale_off, quantity) => {
        return price_after_sale_off * quantity
    }
    onDeleteItemProduct = (item) => {
        this.props.onDeleteToCart(item);
    }
    onUpdateToCart = (item, value) => {
     
        this.props.onUpdateToCart(item, value)
    }

}

export default CartItem;


