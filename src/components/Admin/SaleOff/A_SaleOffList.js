
import React, { Component } from 'react';
class A_SaleOffSizeList extends Component {
 
    
   
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
                                <h2>Danh Sách khuyến mãi</h2>
                                <p>
                                    <a href="/sale_off-add">Thêm Mới</a>
                                </p>
                                <table className="table">
                                    <tbody><tr>
                                        <th>STT</th>
                                        <th>Mã</th>
                                        <th>Tên khuyến mãi</th>
                                        <th>Thông số khuyến mãi</th>
                                        <th>ngày bắt đầu khuyến mãi</th>
                                        <th>ngày kết thức khuyến mãi</th>
                                        <th>code</th>
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
    export default A_SaleOffSizeList;
