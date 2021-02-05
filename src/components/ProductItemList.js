
import React, { Component } from 'react';
import './../App.css';
class ProductItemList extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">

          <h3 className="heading-secondary">Danh sách sản phẩm</h3>
        </div>
        <div className="panel-body">
        

          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã</th>
                <th>Hình ảnh</th>
                <th>Tên</th>
                <th >Giá</th>
                <th >Miêu tả </th>
                <th>Số lượng</th>
                <th>Xếp hạng</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {this.props.children}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default ProductItemList;



