
import React, { Component } from 'react';



class A_UserList extends Component {
   

    render() {

        // var statusName = product.inventory>0 ? 'Còn hàng' : 'Hết hàng';
        // var statusClass = product.inventory >0? 'warning' : 'default';
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
                        <h2>Danh Sách tài khoản</h2>
                        <p>
                            <a href="/user-add">Thêm Mới</a>
                        </p>
                        <table className="table">
                            <tbody><tr>
                                <th>STT</th>
                                <th>Mã</th>
                                <th>Tên</th>
                                <th>SĐT</th>
                                <th>Giới tính</th>
                                <th>Ngày sinh</th>
                                <th>Email</th>
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
    onDeleteToProductSize=(item)=>{
        if(window.confirm('bạn có chắc muốn xóa k'))
        { 
           {this.props.actDeleteToBillDetail(item);}
            {this.props.callApiAfterDeleteProductSize(item)}
          
        }
  
  }

}
export default A_UserList;
