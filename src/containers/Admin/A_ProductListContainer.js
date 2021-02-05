
import React, { Component } from 'react';

import { connect } from 'react-redux';
import callApi from '../../utils/apiCaller';
import { Link } from 'react-router-dom';
import { actDeleteToProduct, actFetchProducts } from '../../actions/index';
import A_ProductList from '../../components/Admin/A_ProductList';
import A_ProductItem from '../../components/Admin/A_ProductItem';
import './../../App.css';
class A_ProductListContainer extends Component {

    render() {
        //  let products ;
        var { products } = this.props;
        console.log(products);
        return (

            <div>

                {/* <Link to="product-add" className="btn btn-info" >Thêm sản phẩm</Link>
                <br /> <br /> */}
                <A_ProductList>
                    {this.showProducts(products)}
                </A_ProductList>
            </div>
        )
    }
    showProducts(products) {
        console.log(products);
        var result = null;
        var { DeleteToProduct, history } = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
             
                return (
                    <A_ProductItem key={this.props.index+index} product={product} index={this.props.index+index} DeleteToProduct={DeleteToProduct} history={history} callApiAfterDelete={this.props.callApiAfterDelete} />
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
export default connect(null, mapDispatchToProps)(A_ProductListContainer);



