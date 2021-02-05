import React, { Component } from 'react';
import Products from '../components/Products';
import {connect} from 'react-redux';
import Product from '../components/Product';
import ProductTypes from '../components/ProductTypes';
import PropTypes from 'prop-types';
import  { actFetchProductType, actFindProductByKeyWord} from '../actions/index';
import callApi from '../utils/apiCaller';
import PaginationContainer from './PaginationContainer';
class ProductTypeContainer extends Component {
  receive_gender=(gender)=>{
      console.log(gender)
  }
  render() { 
    var {products}=this.props;
    var {product_type_list}=this.props;
    return(  
      <div>
       {/* <ProductTypes></ProductTypes> */}
        <Products receive_gender={this.receive_gender}>{this.showProducts(products)}</Products>
      </div>
      
    )    
  }
  
  showProductType(product_type_list){
    var  {product_type_list}=this.props
      var result=null;
      if(product_type_list.length>0)
      {
        result=product_type_list.map((product_type,index)=>{
          return<ProductTypes product_type={product_type}key={index} receive_gender={this.receive_gender}></ProductTypes>
        })
      }
  }
}
const mapStateToProps = state => {
  return {
    product_type_list: state.productTypeList,
  }
}

const mapDispatchToProps=(dispatch,props)=>{
  return {
    fetchAllProductType:(product_type_list)=>{     
      dispatch(actFetchProductType(product_type_list));
    },
    find_product_by_key_word:(item)=>{
      dispatch(actFindProductByKeyWord(item));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductTypeContainer);


