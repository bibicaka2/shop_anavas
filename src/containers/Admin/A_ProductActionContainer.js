    
import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from './../../utils/apiCaller';
import { actAddToProduct,actUpdateToProduct } from './../../actions/index';
import './../../App.css'
import { Link } from 'react-router-dom';
import A_ProductAction from './../../components/Admin/A_ProductAction';

class A_ProductActionContainer extends Component {
  
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
            // sale_id:'',          
            test: 0,
            product_size_list:[
                  
                ]
        }
    }
    componentDidMount(){
        var {match}=this.props;
        console.log('44444444444444');
        if(match){
           callApi(`Products/findProduct?_id=${match.params.id}`).then(res=>{      
            if(res){
                var product = res.data.Product;
                this.setState({
                    _id:product._id,
                    name:product.name,
                    img: product.img,
                    price_origin: product.price_origin,
                    price_after_sale_off: product.price_after_sale_off,
                    status_id:product.status_id,
                    product_type_id:product.product_type_id,
                    // sale_id:product.sale_id,
                    description: product.description,
                    product_size_list: product.product_size_list,
                    rating:product.rating,
                    color:product.color,
                    gender:product.gender,
                })
            
            }})
        }
        
    }
    render() {
        var {actAddToProduct,actUpdateToProduct,history}=this.props;
        return (
            <A_ProductAction actAddToProduct={actAddToProduct} actUpdateToProduct={actUpdateToProduct} product={this.state} history={history} />
        
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actAddToProduct: (products) => {
            
            dispatch(actAddToProduct(products));
        },
        actUpdateToProduct: (products) => {
          
            dispatch(actUpdateToProduct(products));
        }
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(A_ProductActionContainer);




