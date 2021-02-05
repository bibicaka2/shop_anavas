    
import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from './../../../utils/apiCaller';
import { actAddToProductSize,actUpdateToProductSize } from './../../../actions/index';
import './../../../App.css'
import A_ProductSizeAction from '../../../components/Admin/ProductSize/A_ProductSizeAction';

class A_ProductSizeActionContainer extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
            _id: '',
            name: '',
          
        }
    }
    componentDidMount(){
        var {match}=this.props;
        if(match){
           callApi(`ProductSize/findProductSize?_id=${match.params.id}`).then(res=>{      
            if(res){
                var product_size_item = res.data.product_size;
             
                this.setState({
                    _id:product_size_item._id,
                    name:product_size_item.name,
                 
                })
            
            }})
        }
        
    }
    render() {
       
        var {actAddToProductSize,actUpdateToProductSize,history}=this.props;
        return (
            <A_ProductSizeAction actAddToProductSize={actAddToProductSize} actUpdateToProductSize={actUpdateToProductSize} product_size_item={this.state} history={history} />
        
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actAddToProductSize: (product_size_item) => {
            
            dispatch(actAddToProductSize(product_size_item));
        },
        actUpdateToProductSize: (product_size_item) => {
            dispatch(actUpdateToProductSize(product_size_item));
        }
    }
}
const mapStateToProps = state => {
    return {
        product_size_list: state.product_size_list
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(A_ProductSizeActionContainer);




