
import React, { Component } from 'react';
import callApi from './../../utils/apiCaller';
class A_ProductStatusList extends Component {
 
    
   
    render() {
        return (
                <div class="page-container">
                    <header class="header-desktop">
                        <div class="section__content section__content--p30">
                            <div class="container-fluid">
                                <div class="header-wrap">
                                </div>
                            </div>
                        </div>
                    </header>
                    <div class="main-content">
                        <div class="section__content section__content--p30">
                            <div class="container-fluid">
                                <h2>Danh Sách kích thước sản phẩm</h2>
                                <p>
                                    <a href="/Admin/admin/formthemnuocuong">Thêm Mới</a>
                                </p>
                                <table class="table">
                                    <tbody><tr>
                                        <th>STT</th>
                                        <th>Mã</th>
                                        <th>Size</th>
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
    export default A_ProductStatusList;
