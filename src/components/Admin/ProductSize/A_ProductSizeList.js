
import React, { Component } from 'react';
class A_ProductSizeList extends Component {
 
    
   
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
                                <h2>Danh Sách kích thước sản phẩm</h2>
                                <p>
                                    <a href="/product_size-add">Thêm Mới</a>
                                </p>
                                <table className="table">
                                    <tbody><tr>
                                        <th>STT</th>
                                        <th>Mã</th>
                                        <th>Tên</th>
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
    export default A_ProductSizeList;
