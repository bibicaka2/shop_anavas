    
import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from '../../../utils/apiCaller';
import { actAddToBillDetail,actUpdateToBillDetail } from '../../../actions/index';
import './../../../App.css'
import A_BillDetailAction from '../../../components/Admin/BillDetail/A_BillDetailAction';
import A_BillDetailCart from '../../../components/Admin/BillDetail/A_BillDetailCart';
class A_BillDetailActionContainer extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
            bill_detail_item:[],
 
          
        }
    }
    componentDidMount(){
        var {match}=this.props;
        if(match){
           callApi(`BillInfo/find?_id=${match.params.id}`).then(res=>{      
            if(res){
                var bill_detail_item = res.data.bill_detail;
                this.setState({
                    bill_detail_item:bill_detail_item,
                 
                })
            
            }});
         
        }
        
    }
    render() {
        var {actAddToBillDetail,actUpdateToBillDetail,history}=this.props; 
            return (
                <A_BillDetailAction actAddToBillDetail={actAddToBillDetail} actUpdateToBillDetail={actUpdateToBillDetail}  bill_detail_item={this.state.bill_detail_item} history={history} />
            )     
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actAddToBillDetail: (bill_detail_item) => {
            
            dispatch(actAddToBillDetail(bill_detail_item));
        },
        actUpdateToBillDetail: (bill_detail_item) => {
            dispatch(actUpdateToBillDetail(bill_detail_item));
        }
    }
}
const mapStateToProps = state => {
    return {
        bill_detail_list: state.bill_detail_list
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(A_BillDetailActionContainer);




