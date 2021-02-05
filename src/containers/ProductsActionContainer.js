    
import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from './../utils/apiCaller';
import { actAddToProduct,actUpdateToProduct } from './../actions/index';
import './../App.css'
import { Link } from 'react-router-dom';
import ProductAction from './../components/ProductsAction';
import products from '../reducers/products';
class ProductsActionContainer extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            name: '',
            img: '',
            price: '',
            status: false,
            description: '',
            inventory: '',
            rating: '',

        }
    }
    componentDidMount(){
        var {match}=this.props;
        console.log(match);
        if(match){
           callApi(`Products/findProduct?_id=${match.params.id}`).then(res=>{      
            if(res){
                var product = res.data.Product;
                this.setState({
                    id:product._id,
                    name:product.name,
                    img: product.img,
                    price: product.price,
                    status:product.status,
                    description: product.description,
                    inventory: product.inventory,
                    rating:product.rating,
                })
            
            }})
        }
        
    }
    render() {
        var {actAddToProduct,actUpdateToProduct,history}=this.props;
        return (
            <ProductAction actAddToProduct={actAddToProduct} actUpdateToProduct={actUpdateToProduct} product={this.state} history={history} />
        
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductsActionContainer);




