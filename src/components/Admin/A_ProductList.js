
import React, { Component } from 'react';

class A_ProductList extends Component {
 
    
   
    render() {
        return (

                <div className="page-container">
                    
                    <header className="header-desktop">
                        <div className="section__content section__content--p30">
                            <div className="container-fluid">
                                <div className="header-wrap">
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="main-content">
                        <div className="section__content section__content--p30">
                            <div className="container-fluid">
                                <h2>Danh Sách sản phẩm</h2>
                                <p>
                                    <a href="/product-add">Thêm Mới</a>
                                </p>
                                <table className="table">
                                    <tbody><tr>
                                        <th>STT</th>
                                        <th>Mã</th>
                                        <th>Hình ảnh</th>
                                        <th>Tên</th>
                                        <th>Giá gốc</th>
                                        <th>giá sau khuyến mãi</th>
                                        <th>Kiểu sản phẩm</th>
                                        {/* <th>Mã giảm giá</th> */}
                                        <th>Miêu tả</th>
                                        <th>Size/Số lượng</th>
                                        <th>Loại sản phẩm</th>
                                        <th>Màu sắc</th>
                                        <th>Giới tính</th>
                                        <th></th>
                                    </tr>
                                    {this.props.children}
                            
                                    </tbody></table>
                            </div>
                        </div>
                    </div>
                </div>
        
      )
    }

}
    export default A_ProductList;
