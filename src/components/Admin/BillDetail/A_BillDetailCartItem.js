
import React, { Component } from 'react';


class A_BillDetailCartItem extends Component {


    render() {
        var { item,index } = this.props;
        console.log(item);
        
        // var statusName = product.inventory>0 ? 'Còn hàng' : 'Hết hàng';
        // var statusClass = product.inventory >0? 'warning' : 'default';
        return (
    
                <tr>
                    <td>{index}</td>
                    <td>{item.product_id}</td>
                    <td>{item.size_id}</td>
                    <td>{item.quantity}</td>
                    
                    <td>{item.price}</td>
                    <td>{parseInt(item.quantity) * parseInt(item.price)}</td>
                </tr>                    
     )
    }
 

}
export default A_BillDetailCartItem;
