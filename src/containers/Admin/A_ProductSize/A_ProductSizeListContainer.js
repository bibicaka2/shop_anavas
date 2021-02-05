
import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from './../../../utils/apiCaller';
import { Link } from 'react-router-dom';
import { actDeleteToProductSize, actFetchProductSize } from '../../../actions/index';
import A_ProductSizeList from '../../../components/Admin/ProductSize/A_ProductSizeList';
import A_ProductSizeItem from './../../../components/Admin/ProductSize/A_ProductSizeItem';
import './../../../App.css';
class A_ProductSizeListContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
             product_size_list:[]
        }
    }
    componentWillMount(){
        console.log('call size')
        callApi('ProductSize/list', 'POST', null).then(res => { 
            this.setState({ product_size_list: res.data })
          });
    }
    callApiAfterDelete=()=>{
        callApi('ProductSize/list', 'POST', null).then(res => { 
            this.setState({ product_size_list: res.data })
          });
    }
    render() {
        //  let products ;
        var { product_size_list } = this.state;
    

        return (

            <div>

                {/* <Link to="product-add" className="btn btn-info" >Thêm sản phẩm</Link>
                <br /> <br /> */}
                <div className="row_a">
                <A_ProductSizeList>
                    {this.showProducts(product_size_list)}
                </A_ProductSizeList>
                </div>
            </div>
        )
    }
    showProducts(product_size_list) {
        var result = null;
        var { DeleteToProductSize, history } = this.props;
        if (product_size_list.length > 0) {
            result = product_size_list.map((product_size_item, index) => {
             
                return (
                    <A_ProductSizeItem key={index} product_size_item={product_size_item} index={index+1} DeleteToProductSize={DeleteToProductSize} history={history} callApiAfterDeleteProductSize ={this.callApiAfterDelete} />
                )
            })
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        product_size_list: state.product_size_list,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
     
        DeleteToProductSize: (product_size_list => {
           
            dispatch(actDeleteToProductSize(product_size_list));
        })
    }
}
export default connect(null, mapDispatchToProps)(A_ProductSizeListContainer);