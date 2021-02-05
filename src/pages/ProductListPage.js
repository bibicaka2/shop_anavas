
import React, { Component } from 'react';
//import ProductListContainer from '../containers/ProductListContainer';
import PaginationContainer from '../containers/PaginationContainer';
class ProductListPage extends Component {

  
    render() {
        return (
            
            // <div className="row">
            //     <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
            //     <ProductListContainer history={this.props.history}/>
            //     </div>
            // </div>
              <div >
         
              <PaginationContainer tag='ProductListPage'></PaginationContainer>
              
          </div>
            
            
        
        )
    }
    
}

export default ProductListPage;



