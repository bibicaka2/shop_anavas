import React, { Component } from 'react';
class A_BillDetailAction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: '',
            name: '',
         
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
     
        if (this.state._id === '') {
          
            console.log('create')
            console.log(this.state)
            this.props.actAddToProductSize(this.state);
        }
        else {
            console.log('update')
            this.props.actUpdateToProductSize(this.state);
        }
       
        var { history } = this.props;
      history.goBack();

    }

    // actAddToProduct=(product)=>{
    //    this.props.actAddToProduct(product);
    // }
  
    componentWillReceiveProps(nextprops) {
        var { product_size_item } = nextprops;
        
        this.setState({
            _id: product_size_item._id,
            name: product_size_item.name,
          
        })
    }
   
    render() {
        var { name} = this.state;
        let products_size_list = [];
       
        
        return (

            <div class="page-container">
                <header class="header-desktop">
                    <div class="section__content section__content--p30">
                        <div class="container-fluid">
                            <div class="header-wrap">

                            </div>
                        </div>
                    </div>
                </header>
                <div className="main-content">
                    <div className="section__content section__content--p30">
                        <div className="container-fluid">
                            <h2>Thông tin đơn hàng</h2> <br />

                            <form onSubmit={this.onSubmit}>
                                <div>
                                    <a href="/Admin/product_size">Quay Lại</a>
                                </div>
                                <input name="__RequestVerificationToken" type="hidden" />
                                <div className="form-horizontal">
                                    <h4 className="text-center">Thêm kích thước </h4>
                                    <hr />
                                    <div className="form-group">
                                        <label>mã</label>
                                        <div className="col-md-10">
                                            <input name="name" onChange={this.onChange} value={name} className="form-control text-box single-line" type="text"  value={name}/>
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>tên khách hàng</label>
                                        <div className="col-md-10">
                                            <input name="name" onChange={this.onChange} value={name} className="form-control text-box single-line" type="text"  value={name}/>
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>SĐT</label>
                                        <div className="col-md-10">
                                            <input name="name" onChange={this.onChange} value={name} className="form-control text-box single-line" type="text"  value={name}/>
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Địa chỉ</label>
                                        <div className="col-md-10">
                                            <input name="name" onChange={this.onChange} value={name} className="form-control text-box single-line" type="text"  value={name}/>
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <div className="col-md-10">
                                            <input name="name" onChange={this.onChange} value={name} className="form-control text-box single-line" type="text"  value={name}/>
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>trạng thái</label>
                                        <div className="col-md-10">
                                            <input name="name" onChange={this.onChange} value={name} className="form-control text-box single-line" type="text"  value={name}/>
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>chi tiết sản phẩm</label>
                                        <div className="col-md-10">
                                            <input name="name" onChange={this.onChange} value={name} className="form-control text-box single-line" type="text"  value={name}/>
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>

                                  
                                    <div className="form-group">
                                        <div className="col-md-offset-2 col-md-10">
                                            <button type="submit" className="btn btn-default">Thêm</button>
                                        </div>
                                    </div>
                                </div>
                            </form>


                        </div>


                    </div>
                </div>
            </div>
        )

    }

}


export default A_BillDetailAction;

