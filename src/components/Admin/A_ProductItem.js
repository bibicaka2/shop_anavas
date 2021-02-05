
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class A_ProductItem extends Component {
   

    render() {
        var { product, index } = this.props;
        // var statusName = product.inventory>0 ? 'Còn hàng' : 'Hết hàng';
        // var statusClass = product.inventory >0? 'warning' : 'default';
        return (
            <tr >        
                <td>{index}</td>
                <td>
                    {product._id}
                </td>
                <td>
                         <img src={product.img}  
                                alt="" className="img-fluid z-depth-0" width="100px"
                                height="80px"/>
                </td>
                <td>
                    {product.name}
                 </td>
                <td>
                    {product.price_origin}
                                            </td>
                <td>
                   {product.price_after_sale_off}
                </td>
                <td>
                   {product.status_id}
                </td>
              
                <td>
                    {product.description}
                </td>
               
                <td>
                        {product.product_size_list.map((product_size,index)=>(
                        <div key={index}>
                            {product_size.size_id} : {product_size.inventory}
                            <br/>
                        </div>
                    ))}
                </td>
                <td>
                    {product.product_type_id}
                </td>
                <td>
                    {product.color}
                </td>
                <td>
                    {product.gender}
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
export default A_ProductItem;
