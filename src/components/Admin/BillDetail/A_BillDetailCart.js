
import React, { Component } from 'react';
import A_BillDetailCartItem from './A_BillDetailCartItem';
import callApi from './../../../utils/apiCaller';
class A_BillDetailCart extends Component {
constructor(props) {
    super(props)

    this.state = {
         flag:'a',
         sale_off:"undefined",
    }
}
UNSAFE_componentWillReceiveProps(next_props){
   
    var { bill_detail_item } = next_props;
    
    if(bill_detail_item.sale_off_id!=="undefined")
    {
        console.log('12312')
        callApi(`SaleOff/find?_id=${bill_detail_item.sale_off_id}`, 'POST', null).then(res => {
            if(res)
            {
    
                var sale_off = res.data.sale_off;
                    this.setState({
                        sale_off:sale_off,
             
            })
               
            }
           
         });
    }
   
}
    render() {
        var { bill_detail_item } = this.props;
        console.log(bill_detail_item)
        var {sale_off}=this.state;
      
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
                            <h2>Chi Tiết hóa đơn</h2>
                            <p>
                                <a href="/bill_detail">Trở về</a>
                            </p>
                            <div>
                                <h4>Hóa đơn</h4>
                                <hr></hr>
                                <table className="table">
                                    <tbody><tr>
                                        <th>
                                            STT
                                        </th>
                                        <th>
                                            sản phẩm
                                         </th>
                                        <th>
                                            size
                                        </th>
                                        <th>
                                            Số lượng
                                        </th>
                                        <th>
                                            Đơn giá
                                        </th>
                                        <th>Thành tiền</th>
                                        <th></th>
                                    </tr>
                               
                                
    
                                    {this.showItem(bill_detail_item)}
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                            {this.state.sale_off==="undefined"?"(Không có mã giảm giá)":"(Có mã giảm giá)"} <br/>
                                                Tổng cộng:
                                            </td>
                                            <td>
                                                
                                             <br/>   {this.showTotalAmount(bill_detail_item)}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




        )
    }
    showItem =(bill_detail_item) =>{
       
        var result=null;
        if (bill_detail_item) {
            if(bill_detail_item.length!==0)
            {   
                result =  bill_detail_item.product_detail.map((item1,index)=>{
                        return (
                                <A_BillDetailCartItem item={item1} key={index} index={index} >  </A_BillDetailCartItem>
                        )   
                    })
              
            
            }

        }
        return result;
    }

    showTotalAmount = (bill_detail_item) => {
        var {sale_off}=this.state;
        var total = 0;
        if (bill_detail_item) {
            if(bill_detail_item.length!==0)
            {   
              
                bill_detail_item.product_detail.map((item)=>{
                           total= total+ (item.price * item.quantity)
                          
                })
            
            }

        }
       if(sale_off!=="undefined")
       {
            return total-(total*parseInt(sale_off.discount));
       }
      
        return total;
    }

}
export default A_BillDetailCart;
