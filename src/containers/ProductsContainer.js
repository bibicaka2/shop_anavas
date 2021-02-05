import React, { Component } from 'react';
import Products from './../components/Products';
import { connect } from 'react-redux';
import Product from './../components/Product';
import ProductTypes from './../components/ProductTypes';
import { actAddToCart, actChangeMessage, actFetchProducts, actFetchProductType, actFindProductByKeyWord } from './../actions/index';

class ProductsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sort_gender: "TẤT CẢ",
      sort_status: "",
      money:"",
      key_word:""
    }

  }
  componentWillMount(){
    console.log("12321312");
  }
  receive_gender = (gender) => {
    this.setState({
      sort_gender: gender
    })
  };
  receive_status = (status) => {
    this.setState({
      sort_status: status
    })
  };
  receive_money = (money) => {
    this.setState({
      money: money
    })
  };
  receive_keyword=(keyword)=>{
    this.setState({
      keyword:keyword
    })
  }
  render() {
    var { products } = this.props;

    var { product_type_list } = this.props;

    return (
      <div>
        {/* <ProductTypes></ProductTypes> */}
        {/* <Products product_type_list={this.showProductType(product_type_list)} receive_money={this.receive_money} receive_status={this.receive_status} receive_gender={this.receive_gender}>{this.showProducts(products)}</Products> */}
        <Products product_type_list={this.showProductType(product_type_list)} >{this.showProducts(products)}</Products>
      </div>

    )
  }

  showProducts(products) {
    var { products, key_word } = this.props;

    // var sort = [this.state.sort_gender, this.state.sort_status];
    var result = null;
    var { onAddToCart } = this.props;
    var { onChangeMessage } = this.props;
    console.log(key_word)
    if (products.length > 0) {
     
      result = products.map((product, index) => {
      if(key_word!=="")
      {
        if(product.name.toLowerCase().indexOf(key_word.toLowerCase())!==-1)
        {
          console.log('voo dayyy111')
          if (this.state.sort_gender === "TẤT CẢ") {
            if (this.state.sort_status === "") {
              if(this.state.money === "<200000VNĐ" && parseInt(product.price_origin)<200000)
              {
                console.log(product.price_origin);  
               return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
              }
              else if(this.state.money === "<400000VNĐ" && parseInt(product.price_origin)<400000){
             
               return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
              }
              else if(this.state.money === "<500000VNĐ" && parseInt(product.price_origin)<500000){
               return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
              }
              else if(this.state.money === "") {
                return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
              }
              
            }
            else if (product.status_id === this.state.sort_status) {
              if(this.state.money === "<200000VNĐ" && parseInt(product.price_origin)<200000)
              {
               return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
              }
              else if(this.state.money === "<400000VNĐ" && parseInt(product.price_origin)<400000){
               return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
              }
              else if(this.state.money === "<500000VNĐ" && parseInt(product.price_origin)<500000){
               return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
              }
              else if(this.state.money === ""){
                return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
              }
            }
  
        
          }
          else if(this.state.sort_gender ===product.gender)
          {
        
            if (this.state.sort_status === "") {
              if(this.state.money === "<200000VNĐ" && parseInt(product.price_origin)<200000)
              {
               return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
              }
              else if(this.state.money === "<400000VNĐ" && parseInt(product.price_origin)<400000){
               return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
              }
              else if(this.state.money === "<500000VNĐ" && parseInt(product.price_origin)<500000){
               return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
              }
              else if(this.state.money === "") {
                return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
              }
            }
            else if (product.status_id === this.state.sort_status) {
              if(this.state.money === "<200000VNĐ" && parseInt(product.price_origin)<200000)
              {
               return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
              }
              else if(this.state.money === "<400000VNĐ" && parseInt(product.price_origin)<400000){
               return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
              }
              else if(this.state.money === "<500000VNĐ" && parseInt(product.price_origin)<500000){
               return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
              }
              else  if(this.state.money === ""){
                return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
              }
            }
          }
        }
  
        
      }
      else{
    
        if (this.state.sort_gender === "TẤT CẢ") {
          if (this.state.sort_status === "") {
            if(this.state.money === "<200000VNĐ" && parseInt(product.price_origin)<200000)
            {
              console.log(product.price_origin);  
             return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
            }
            else if(this.state.money === "<400000VNĐ" && parseInt(product.price_origin)<400000){
           
             return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
            }
            else if(this.state.money === "<500000VNĐ" && parseInt(product.price_origin)<500000){
             return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
            }
            else if(this.state.money === "") {
              return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
            }
            
          }
          else if (product.status_id === this.state.sort_status) {
            if(this.state.money === "<200000VNĐ" && parseInt(product.price_origin)<200000)
            {
             return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
            }
            else if(this.state.money === "<400000VNĐ" && parseInt(product.price_origin)<400000){
             return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
            }
            else if(this.state.money === "<500000VNĐ" && parseInt(product.price_origin)<500000){
             return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
            }
            else if(this.state.money === ""){
              return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
            }
          }

      
        }
        else if(this.state.sort_gender ===product.gender)
        {
      
          if (this.state.sort_status === "") {
            if(this.state.money === "<200000VNĐ" && parseInt(product.price_origin)<200000)
            {
             return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
            }
            else if(this.state.money === "<400000VNĐ" && parseInt(product.price_origin)<400000){
             return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
            }
            else if(this.state.money === "<500000VNĐ" && parseInt(product.price_origin)<500000){
             return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
            }
            else if(this.state.money === "") {
              return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
            }
          }
          else if (product.status_id === this.state.sort_status) {
            if(this.state.money === "<200000VNĐ" && parseInt(product.price_origin)<200000)
            {
             return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
            }
            else if(this.state.money === "<400000VNĐ" && parseInt(product.price_origin)<400000){
             return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
            }
            else if(this.state.money === "<500000VNĐ" && parseInt(product.price_origin)<500000){
             return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
            }
            else  if(this.state.money === ""){
              return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
            }
          }
        }
   
        
      }
     

        // if(this.state.sort_status===""){
        //   return <Product key={index} product={product} onAddToCart ={onAddToCart} onChangeMessage={onChangeMessage} />
        // }
        // else if(product.status_id===this.state.sort_status ){
        //   return <Product key={index} product={product} onAddToCart ={onAddToCart} onChangeMessage={onChangeMessage} />
        //  }



      })
    }
    return result;
  }
  showProductType(product_type_list) {
    var { product_type_list } = this.props;
    var result = null;
    if (product_type_list.length > 0) {
      return <ProductTypes product_type_list={product_type_list} receive_gender={this.receive_gender} receive_money={this.receive_money} receive_keyword={this.receive_keyword} receive_status={this.receive_status} > </ProductTypes>
    }
    return result;
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    product_type_list: state.productTypeList,
    key_word:state.saleOff

  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      console.log(product)
      dispatch(actAddToCart(product, parseInt(product.quantity)));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    },
    fetchAllProducts: (products) => {

      dispatch(actFetchProducts(products));
    },
    fetchAllProductType: (product_type_list) => {
      dispatch(actFetchProductType(product_type_list));
    },
    findProductByKeyWord: (item) => {
      dispatch(actFindProductByKeyWord(item));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);


