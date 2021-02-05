import React, { Component } from 'react';
import './../App.css';


class Products extends Component {
 
  render() {
   
    return (
      
      <div>
          {/* section-course */}
        <section className="" id="section-courses">

          {/* <div class="u-center-text u-margin-bottom-big">

            <h2 class="heading-secondary">
              Danh sách sản phẩm
            </h2>
          </div> */}
          <div className="prd1-cont container-fluid">
            <div className=" row__product--right">
            <i className="fal fa-home-lg"></i>
              {this.props.product_type_list}
              {/* <ProductTypes receive_gender={this.props.receive_gender} ></ProductTypes> */}
              <div className=" col-xs-12 col-sm-12 col-md-9 col-lg-9 prd1-right ">
                <div className=" row prd1-right-box">
                <img className="picture__title-size-L" src="https://ananas.vn/wp-content/uploads/desktop_productlist.jpg" alt='error' ></img>
                </div>
              
                <div className="row prd1-right-items ">
                  {/* <!-- Product --> */}
                  {this.props.children}
                </div>

              </div>
            </div>
          </div>

        </section>
      </div>
    )
  }

}
export default Products;


