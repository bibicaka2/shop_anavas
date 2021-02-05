import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from './../../../utils/apiCaller';
import { actAddToSaleOff,actUpdateToSaleOff } from './../../../actions/index';
import './../../../App.css'
import A_SaleOffAction from '../../../components/Admin/SaleOff/A_SaleOffAction';

class A_SaleOffActionContainer extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
            _id: '',
            name: '',
            discount:'',
            from_date:'',
            to_date:'',
            code:'',
          
        }
    }
    componentDidMount(){
        var {match}=this.props;
        if(match){
           callApi(`SaleOff/find?_id=${match.params.id}`).then(res=>{      
            if(res){
                var sale_off_item = res.data.sale_off;
             
                this.setState({
                    _id:sale_off_item._id,
                    name:sale_off_item.name,
                    discount:sale_off_item.discount,
                    from_date:sale_off_item.from_date,
                    to_date:sale_off_item.to_date,
                    code: sale_off_item.code
                })
            
            }})
        }
        
    }
    render() {
        var {actAddToSaleOff,actUpdateToSaleOff,history}=this.props;
        return (
            <A_SaleOffAction actAddToSaleOff={actAddToSaleOff} actUpdateToSaleOff={actUpdateToSaleOff} sale_off_item={this.state} history={history} />
        
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actAddToSaleOff: (sale_off_item) => {
            dispatch(actAddToSaleOff(sale_off_item));
        },
        actUpdateToSaleOff: (sale_off_item) => {
            dispatch(actUpdateToSaleOff(sale_off_item));
        }
    }
}
const mapStateToProps = state => {
    return {
        sale_off_list: state.sale_off_list
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(A_SaleOffActionContainer);




