
import React, { Component } from 'react';
// import ProductsActionContainer from '../containers/ProductsActionContainer';
import A_ProductActionContainer from '../containers/Admin/A_ProductActionContainer';
class ProductActionPage extends Component {


    render() {
        var {match,history}=this.props;
        return (
           
                    <A_ProductActionContainer match={match} history={history} />
            
        )
    }
}

export default ProductActionPage;




