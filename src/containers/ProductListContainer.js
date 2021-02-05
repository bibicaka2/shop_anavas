
import React, { Component } from 'react';

import { connect } from 'react-redux';
import callApi from '../utils/apiCaller';
import { Link } from 'react-router-dom';
import { actDeleteToProduct, actFetchProducts } from '../actions/index';
import ProductItemList from '../components/ProductItemList';
import ProductItem from '../components/ProductItem';
import './../App.css';
class ProductListContainer
 extends Component {

    render() {
        //  let products ;
        var { products } = this.props;
        console.log(products);
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mr-30 mb-25 ">

                <Link to="product-add" className="btn btn-info" >Thêm sản phẩm</Link>
                <br /> <br />
                <ProductItemList>
                    {this.showProducts(products)}
                </ProductItemList>
            </div>
        )
    }
    showProducts(products) {
        console.log(products);
        var result = null;
        var { DeleteToProduct, history } = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                console.log(this.props.index+index);
                return (
                    <ProductItem key={this.props.index+index} product={product} index={this.props.index+index} DeleteToProduct={DeleteToProduct} history={history} callApiAfterDelete={this.props.callApiAfterDelete} />
                )
            })
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        products: state.products,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
     
        DeleteToProduct: (products => {
            dispatch(actDeleteToProduct(products));
        })
    }
}
export default connect(null, mapDispatchToProps)(ProductListContainer);



