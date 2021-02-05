
import React, { Component } from 'react';
import Home from './../components/Home'
// import PaginationContainer from '../containers/PaginationContainer';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
class HomePage extends Component {
   
    render() 
    {             
        var {history}=this.props;
        return (      
          <div>
                <Home history={history} > </Home>
         </div>
   
        )
    }
 
}
export default HomePage;
