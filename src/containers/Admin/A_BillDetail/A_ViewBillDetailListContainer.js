
import React, { Component } from 'react';
import callApi from '../../../utils/apiCaller';
import A_BillDetailCart from '../../../components/Admin/BillDetail/A_BillDetailCart';
import A_BillDetailCartItem from '../../../components/Admin/BillDetail/A_BillDetailCartItem';
import { connect } from 'react-redux';
import './../../../App.css';
import bill_detail from '../../../reducers/BillDetail';
import { actBuyToCart } from '../../../actions';
import A_BillDetailList from '../../../components/Admin/BillDetail/A_BillDetailList';
class A_ViewBillDetailListContainer extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
            data:[]
          
        }
    }
    componentDidMount(){
        var {match}=this.props;
        if(match){
           callApi(`billinfo/find?_id=${match.params.id}`).then(res=>{      
            if(res){
                var bill_detail = res.data.BillInfo;
             
                this.setState({
                    data:bill_detail
                 
                })
            
            }})
        }
        
    }
    render() {
        return (
            <A_BillDetailCart bill_detail_item={this.state.data}  />
        
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
     
    }
}
const mapStateToProps = state => {
    return {
        product_size_list: state.product_size_list
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(A_ViewBillDetailListContainer);


