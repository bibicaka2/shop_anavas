
import React, { Component } from 'react';
import callApi  from './../../../utils/apiCaller';
import { Link } from 'react-router-dom';

class A_BillDetailItem extends Component {
   

    render() {
        var { bill_detail_item,index } = this.props;
        console.log(bill_detail_item);
        
        // var statusName = product.inventory>0 ? 'Còn hàng' : 'Hết hàng';
        // var statusClass = product.inventory >0? 'warning' : 'default';
        return (
            <tr>
                <td>{index}</td>
                <td>
                    {bill_detail_item._id}
                </td>
                <td>
                    {bill_detail_item.name}
                </td>
                <td>
                    {bill_detail_item.address}
                </td>
                <td>
                    {bill_detail_item.phone}
                </td>
                <td>
                    {bill_detail_item.status}
                </td>
                
                <td>




                {/* { <Link to={`bill_detail/${bill_detail_item._id}/edit`} type="button" className="btn btn-warning mr-10" >Sửa</Link> } */}
                { <Link to={`/bill_detail/${bill_detail_item._id}/view`}  type="button" className="btn btn-info mr-10" >Chi tiết</Link> }
                {/* <button type="button" className="btn btn-info mr-10">Chi tiết</button> */}
                    <button type="button" className="btn btn-danger mr-10" onClick={()=>this.onDeleteToBillDetail(bill_detail_item)}>Xóa</button>
                    <button type="button" className={bill_detail_item.status==="Đang xử lí"?"btn btn-primary":"btn btn-success"}onClick={()=>this.confirm_bill_detail(bill_detail_item)}>Xác nhận đơn hàng</button>
                    {/* <a href="/Admin/admin/formsuanuocuong/1">Sửa</a> |
                                                <a href="/Admin/admin/actannuocuong/1">Ẩn</a> */}
                </td>
            </tr>
        
      )
    }
    confirm_bill_detail=(bill_detail_item)=>{
        if(bill_detail_item.status==='Đang xử lí')
        {
            
            callApi(`billinfo/confirm?_id=${bill_detail_item._id}`, 'POST', null).then(res => { 
                if(res)
                {
                  
                    this.props.callApiAfterDelete(bill_detail_item);
                }
              });
        }
 
    }
    onDeleteToBillDetail=(item)=>{
        if(window.confirm('bạn có chắc muốn xóa k'))
        { 
           {this.props.actDeleteToBillDetail(item);}
            {this.props.callApiAfterDelete(item)}
          
        }
  
  }


}
export default A_BillDetailItem;
