
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import products from '../reducers/products';
    import AOS from 'aos';
    import 'aos/dist/aos.css';
class ProductItem extends Component {
    componentDidMount(){
        AOS.init({
          duration : 1000
        })
      }
    render() {
        var { product, index } = this.props;
        console.log(index);
        var statusName = product.inventory>0 ? 'Còn hàng' : 'Hết hàng';
        var statusClass = product.inventory >0? 'warning' : 'default';
        return (
            <tr  data-aos="fade-up">
             
                <td>{index}</td>
                <td>{product._id}</td>
                <td>
                <img src={product.img}  
                                alt="" className="img-fluid z-depth-0" width="100px"
                                height="100px"
                                
                                />
                </td>
                <td>{product.name}</td>
               
                <td>{product.price}</td>
               
                <td>{product.description}</td>
                <td>{product.inventory}</td>
                <td>{product.rating}</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName} </span>
                </td>
                <td>
                    { <Link to={`product/${product._id}/edit`} type="button" className="btn btn-success mr-10" >Sửa</Link> }
                    <button type="button" className="btn btn-danger" onClick={()=>this.onDeleteToProduct(product)}>Xóa</button>
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
export default ProductItem;



