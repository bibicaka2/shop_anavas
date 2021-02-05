
import React, { Component } from 'react';

export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
        }
    }
    click_click=()=>{
        var a= this.state.count;
      this.setState({
          count: parseInt(a) +1
      })
      if(this.state.count===10)
      {
          var {history}=this.props
          this.setState({
              count:0,
          })
          sessionStorage.setItem('click_click','10');
          history.push('./admin')
      }
    }
    render() {
        return (

            <header className="header">
            <div className="header__logo-box">
                <img  src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Store.svg" className="header__logo" alt="logo" onClick={this.click_click}/>
            </div>
            <div className="header__text-box">
                <h3 className="heading-primary">
                    <span className="heading-primary--main">
                   {`T & C`}
                    </span>
                    <span className="heading-primary--sub">
                      STORE CLOTHES
                    </span>
                </h3>
                <a href="/product-list" className="btn btn-1  btn--white btn--animated">Chào mừng bạn đến shop </a>
            </div>
            </header>

        )
    }
}
export default Home;
