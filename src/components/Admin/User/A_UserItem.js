
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class A_UserItem extends Component {
 
    
   
    render() {
        var { user_item,index } = this.props;
        return (
              
            <tr>
            <td>{index}</td>
            <td>
                {user_item._id}
            </td>
            <td>
                {`${user_item.first_name} ${user_item.last_name}`}
            </td>
            <td>
                {user_item.phone}
            </td>
            <td>
                {user_item.sex?'nam' : 'nữ'}
            </td>
            <td>
                {user_item.dOb}
            </td>
            <td>
                {user_item.email}
            </td>
            <td>
            { <Link to={`user/${user_item._id}/edit`} type="button" className="btn btn-success mr-10" >Sửa</Link> }
                <button type="button" className="btn btn-danger" onClick={()=>this.onDeleteToUser(user_item)}>Xóa</button>
                {/* <a href="/Admin/admin/formsuanuocuong/1">Sửa</a> |
                                            <a href="/Admin/admin/actannuocuong/1">Ẩn</a> */}
            </td>
        </tr>
      )
    }
    onDeleteToUser=(item)=>{
        if(window.confirm('bạn có chắc muốn xóa k'))
        { 
           {this.props.DeleteToUser(item);}
            {this.props.callApiAfterDeleteUser(item)}
          
        }
  
  }

}
    export default A_UserItem;
