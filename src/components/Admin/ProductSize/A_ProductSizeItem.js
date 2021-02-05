
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
class A_ProductItem extends Component {
   

    render() {
        var { product_size_item,index } = this.props;
      
        // var statusName = product.inventory>0 ? 'Còn hàng' : 'Hết hàng';
        // var statusClass = product.inventory >0? 'warning' : 'default';
        return (
            <tr>
                <td>{index}</td>
                <td>
                    {product_size_item._id}
                </td>
                <td>
                    {product_size_item.name}
                </td>
                <td>
                { <Link to={`product_size/${product_size_item._id}/edit`} type="button" className="btn btn-success mr-10" >Sửa</Link> }
                    <button type="button" className="btn btn-danger" onClick={()=>this.onDeleteToProductSize(product_size_item)}>Xóa</button>
                    {/* <a href="/Admin/admin/formsuanuocuong/1">Sửa</a> |
                                                <a href="/Admin/admin/actannuocuong/1">Ẩn</a> */}
                </td>
            </tr>
        
      )
    }
    onDeleteToProductSize=(item)=>{
        if(window.confirm('bạn có chắc muốn xóa k'))
        { 
           this.props.DeleteToProductSize(item);
            this.props.callApiAfterDeleteProductSize(item);
          
        }
  
  }

}
export default A_ProductItem;
