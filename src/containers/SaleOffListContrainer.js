
import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from './../utils/apiCaller';
import { actDeleteToSaleOff } from './../actions/index';
import A_SaleOffList from './../components/Admin/SaleOff/A_SaleOffList';
import A_SaleOffItem from './../components/Admin/SaleOff/A_SaleOffItem';

class SaleOffListContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
             sale_off_list:[]
        }
    }
    UNSAFE_componentWillMount(){
        callApi('SaleOff/list', 'POST', null).then(res => { 
            this.setState({ sale_off_list: res.data })
          });
    }
    callApiAfterDelete=()=>{
        callApi('SaleOff/list', 'POST', null).then(res => { 
            this.setState({ sale_off_list: res.data })
          });
    }
    render() {
        //  let products ;
        var { sale_off_list } = this.state;
    

        return (

            <div>

                {/* <Link to="product-add" className="btn btn-info" >Thêm sản phẩm</Link>
                <br /> <br /> */}
                <div className="row_a">
                <A_SaleOffList>
                {this.showProducts(sale_off_list)}
                </A_SaleOffList>
                </div>
            </div>
        )
    }
    showProducts(sale_off_list) {

     
        var result = null;
        var { DeleteToSaleOff, history } = this.props;
        if (sale_off_list.length > 0) {
            result = sale_off_list.map((sale_off_item, index) => {
             
                return (
                    <A_SaleOffItem key={index} sale_off_item={sale_off_item} index={index+1} DeleteToSaleOff={DeleteToSaleOff} history={history} callApiAfterDeleteSaleOff ={this.callApiAfterDelete} />
                )
            })
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        sale_off_list: state.sale_off_list,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
     
        DeleteToSaleOff: (sale_off_list => {
            
            dispatch(actDeleteToSaleOff(sale_off_list));
        })
    }
}
export default connect(null, mapDispatchToProps)(SaleOffListContainer);