import React, { Component } from 'react';

class A_SaleOffAction extends Component {
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
            this.props.actAddToSaleOff(this.state);
        }
        else {
            console.log('update')
            this.props.actUpdateToSaleOff(this.state);
        }
       
        var { history } = this.props;
      history.goBack();

    }

    // actAddToProduct=(product)=>{
    //    this.props.actAddToProduct(product);
    // }
  
    componentWillReceiveProps(nextprops) {
        var { sale_off_item } = nextprops;
        console.log(sale_off_item);
        this.setState({
            _id: sale_off_item._id,
            name: sale_off_item.name,
            discount:sale_off_item.discount,
            from_date: sale_off_item.from_date,
            to_date: sale_off_item.to_date,
            code: sale_off_item.code,
        })
    }
   
    render() {
        var { name,from_date,to_date,code,discount} = this.state;   
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
                            <h2>Thông tin khuyến mãi</h2> <br />

                            <form onSubmit={this.onSubmit}>
                                <div>
                                    <a href="/sale_off">Quay Lại</a>
                                </div>
                                <input name="__RequestVerificationToken" type="hidden" />
                                <div className="form-horizontal">
                                    <h4 className="text-center">Thêm thông tin khuyến mãi </h4>
                                    <hr />
                                    <div className="form-group">
                                        <label >tên</label>
                                        <div className="col-md-10">
                                            <input name="name" onChange={this.onChange} defaultValue={name} className="form-control text-box single-line" type="text"  />
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >thông số khuyến mãi</label>
                                        <div className="col-md-10">
                                            <input name="discount" onChange={this.onChange} defaultValue={discount} className="form-control text-box single-line" type="value"  />
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >ngày bắt đầu</label>
                                        <div className="col-md-10">
                                            <input name="from_date" onChange={this.onChange} defaultValue={from_date} className="form-control text-box single-line" type="text"  />
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >ngày kết thúc</label>
                                        <div className="col-md-10">
                                            <input name="to_date" onChange={this.onChange} defaultValue={to_date} className="form-control text-box single-line" type="text"  />
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >code</label>
                                        <div className="col-md-10">
                                            <input name="code" onChange={this.onChange}  defaultValue={code} className="form-control text-box single-line" type="text"  />
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


export default A_SaleOffAction;

