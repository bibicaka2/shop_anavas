import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductsAction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            name: '',
            img: '',
            price: '',
            status: false,
            description: '',
            inventory: '',
            rating: '',

        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });

    }
    onSubmit = (e) => {
        e.preventDefault();
      if(this.state.id==='')
      {
          console.log(this.state);
          console.log('create')
        this.props.actAddToProduct(this.state);
      }
      else{
          console.log('update')
          this.props.actUpdateToProduct(this.state);
      }
        var {history}= this.props;
      history.goBack();
       
    }
    // actAddToProduct=(product)=>{
    //    this.props.actAddToProduct(product);
    // }
    componentWillReceiveProps(nextprops){     
        var {product}=nextprops;  
        console.log(product )
        this.setState({
            id:product.id,
            name:product.name,
            img: product.img,
            price: product.price,
            description: product.description,
            inventory: product.inventory,
            rating:product.rating,
        })
    }
    render() {
        var {name,img,price,description,inventory,rating}=this.state;
       
        return(
            <div>
            <div className='container'>
                <div className="row ">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <img src={img}
                            alt="" className="img-fluid z-depth-0" width="500px"
                            height="100px" 
                        />
                    </div>
                    <div className={this.state.img === '' ? "col-xs-12 col-sm-12 col-md-12 col-lg-12" : "col-xs-8 col-sm-8 col-md-8 col-lg-8"}>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label >Tên sản phẩm</label>
                                <input type="text" className="form-control" name="name" onChange={this.onChange} value={name} />
                            </div>
                            <div className="form-group">
                                <label >Hình ảnh (Vui lòng nhập link dẫn)</label>
                                <input type="text" className="form-control" name="img" onChange={this.onChange} value={img} />
                            </div>
                            <div className="form-group">
                                <label >Giá</label>
                                <input type="number" className="form-control" name="price" onChange={this.onChange} value={price} />
                            </div>
                            <div className="form-group">
                                <label >Mô tả</label>
                                <textarea
                                    name="description"
                                    className="form-control"
                                    rows="3"
                                    onChange={this.onChange}
                                    value={description}
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label >Số lượng</label>
                                <input type="number" className="form-control" name="inventory" onChange={this.onChange} value={inventory} />
                            </div>
                            <div className="form-group">
                                <label >Xếp hạng</label>
                                <input type="number" className="form-control" name="rating" onChange={this.onChange} value={rating} />
                            </div>
                            <button type="submit" className="btn btn-primary">Lưu lại</button>
                            <Link to='/product' className="btn btn-primary">Hủy bỏ</Link>
                        </form>

                    </div>
                </div>

            </div>
        </div>


        )

    }

}


export default ProductsAction;

