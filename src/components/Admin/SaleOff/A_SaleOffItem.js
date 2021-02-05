
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
class A_SaleOffItem extends Component {
   

    render() {
        var { sale_off_item,index } = this.props;
      
        // var statusName = product.inventory>0 ? 'Còn hàng' : 'Hết hàng';
        // var statusClass = product.inventory >0? 'warning' : 'default';
        return (
            <tr>
                <td>{index}</td>
                <td>
                    {sale_off_item._id}
                </td>
                <td>
                    {sale_off_item.name}
                </td>
                <td>
                    {sale_off_item.discount}
                </td>
                <td>
                    {sale_off_item.from_date}
                </td>
                <td>
                    {sale_off_item.to_date}
                </td>
                <td>
                    {sale_off_item.code}
                </td>
                <td>
                { <Link to={`sale_off/${sale_off_item._id}/edit`} type="button" className="btn btn-success mr-10" >Sửa</Link> }
                    <button type="button" className="btn btn-danger" onClick={()=>this.onDeleteToProductSize(sale_off_item)}>Xóa</button>
                    {/* <a href="/Admin/admin/formsuanuocuong/1">Sửa</a> |
                                                <a href="/Admin/admin/actannuocuong/1">Ẩn</a> */}
                </td>
            </tr>
        
      )
    }
    onDeleteToProductSize=(item)=>{
        if(window.confirm('bạn có chắc muốn xóa k'))
        { 
           {this.props.DeleteToSaleOff(item);}
            {this.props.callApiAfterDeleteSaleOff(item)}
          
        }
  
  }

}
export default A_SaleOffItem;
