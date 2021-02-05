import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import routes from './routes';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        {/* <!-- Header --> */}       
          
       
          <main id="mainContainer">
         
            {/* <!-- Products --> */}
            {/* <ProductsContainer /> */}
            {/* <!-- Message --> */}
            {/* <MessageContainer /> */}
            {/* <!-- Cart --> */}
            {/* <CartContainer /> */}
            <Switch>{this.showContentMenus(routes)}</Switch>
            </main>
          {/* <!-- Footer --> */}
 

       
        {/* <footer></footer> */}
      </Router>


    )
  }

  showContentMenus = (routes) => {
    var result = null;
    
    if (routes.length > 0) {
      result = routes.map((route, index) => {

        return (<Route key={index} path={route.path} exact={route.exact} component={route.main} />)
      });

    }
    return result;
  }
}

export default App;


