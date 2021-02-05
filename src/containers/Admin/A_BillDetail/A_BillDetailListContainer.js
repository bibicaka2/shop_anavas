
import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from '../../../utils/apiCaller';
import { Link } from 'react-router-dom';
import { actDeleteToBillDetail } from '../../../actions/index';
import A_BillDetailList from '../../../components/Admin/BillDetail/A_BillDetailList';
import A_BillDetailItem from '../../../components/Admin/BillDetail/A_BillDetailItem';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import A_BillDetailCart from '../../../components/Admin/BillDetail/A_BillDetailCart';
import './../../../App.css';
import A_BillDetailCartItem from '../../../components/Admin/BillDetail/A_BillDetailCartItem';
class A_BillDetailListContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
             bill_detail_list:[],
        }
    }

    componentDidMount(){
        
        callApi('billinfo/list', 'POST', null).then(res => { 
            if(res)
            {
                this.setState({ bill_detail_list: res.data })
            }
         
          });

    }
 
    callApiAfterDelete=()=>{
        callApi('billinfo/list', 'POST', null).then(res => { 
            if(res)
            {
                this.setState({ bill_detail_list: res.data })
            }
          });
    }
   
    render() {
        //  let products ;
        var { bill_detail_list ,bill_detail_item} = this.state;
    
      
        return (

            <div>

                {/* <Link to="product-add" className="btn btn-info" >Thêm sản phẩm</Link>
                <br /> <br /> */}
              
                <div className="row_a">
                <A_BillDetailList>
                    {this.showProducts(bill_detail_list)}
                </A_BillDetailList>
                </div>
            
            </div>
        )
    }

    showProducts(bill_detail_list) {

     
        var result = null;
        var { actDeleteToBillDetail, history } = this.props;
        if (bill_detail_list.length > 0) {
            result = bill_detail_list.map((bill_detail_item, index) => {
             
                return (
                    <A_BillDetailItem  key={index} bill_detail_item={bill_detail_item} index={index+1} actDeleteToBillDetail={actDeleteToBillDetail} history={history} callApiAfterDelete ={this.callApiAfterDelete} />
                )
            })
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        bill_detail_list: state.bill_detail_list,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
     
        actDeleteToBillDetail: (bill_detail_list => {
           
            dispatch(actDeleteToBillDetail(bill_detail_list));
        })
    }
}
export default connect(null, mapDispatchToProps)(A_BillDetailListContainer);