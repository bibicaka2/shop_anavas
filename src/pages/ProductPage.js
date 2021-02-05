
import React, { Component } from 'react';
import PaginationContainer from '../containers/PaginationContainer';
import Header from '../components/Header';
import Footer from '../components/Footer';
class ProductPage extends Component {
   
    render() 
    {             
        return (      
          <div>
             <Header></Header>
            <PaginationContainer tag='HomePage'/>
            <Footer></Footer>
         </div>
   
        )
    }
 
}
export default ProductPage;
