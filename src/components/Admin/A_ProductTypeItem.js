
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
class A_ProductTypeItem extends Component {
   

    render() {
        var { product, index } = this.props;
        console.log(index);
        // var statusName = product.inventory>0 ? 'Còn hàng' : 'Hết hàng';
        // var statusClass = product.inventory >0? 'warning' : 'default';
        return (
            <tr>
                <td>{index}</td>
                <td>
                    {product._id}
                </td>
                <td>
                    {product.name}
                </td>
                <td>
                { <Link to={`product/${product._id}/edit`} type="button" className="btn btn-success mr-10" >Sửa</Link> }
                    <button type="button" className="btn btn-danger" onClick={()=>this.onDeleteToProduct(product)}>Xóa</button>
                    {/* <a href="/Admin/admin/formsuanuocuong/1">Sửa</a> |
                                                <a href="/Admin/admin/actannuocuong/1">Ẩn</a> */}
                </td>
            </tr>
        
      )
    }
    onDeleteToProduct=(item)=>{
        if(window.confirm('bạn có chắc muốn xóa k'))
        { 
           {this.props.DeleteToProduct(item);}
            {this.props.callApiAfterDelete(item)}
          
        }
  
  }

}
export default A_ProductTypeItem;
