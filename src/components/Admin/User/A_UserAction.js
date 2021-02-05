import React, { Component } from 'react';

class A_UserAction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: '',
           first_name:'',
           last_name:'',
            phone:'',
            sex:'',
            dOb:'',
            email:'',  
            password:'', 
         
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
    console.log(this.state._id);
        if (this.state._id === '') {
          
            console.log('create')
           
            this.props.actAddToUser(this.state);
        }
        else {
            console.log('update')
            this.props.actUpdateToUser(this.state);
        }
      
        var { history } = this.props;
        
      history.goBack();

    }

    // actAddToProduct=(product)=>{
    //    this.props.actAddToProduct(product);
    // }
  
    componentWillReceiveProps(nextprops) {
        var { user_item } = nextprops;
        console.log(user_item);
        if(user_item)
        {
            this.setState({
                _id:user_item._id,
                first_name: user_item.first_name,
                last_name: user_item.last_name,
                phone:user_item.phone,
                sex:user_item.sex,
                dOb:user_item.dOb,
                email:user_item.email,  
                password:user_item.password,
            
            })
        }
    
    }
   
    render() {
           
        
        var {user_item}=this.props;  
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
                            <h2>Thông tin tài khoản</h2> <br />

                            <form onSubmit={this.onSubmit}>
                                <div>
                                    <a href="/user">Quay Lại</a>
                                </div>
                                <input name="__RequestVerificationToken" type="hidden" />
                                <div className="form-horizontal">
                                    <h4 className="text-center">{this.state._id?'cập nhật tài khoản':'Thêm tài khoản'} </h4>
                                    <hr />
                                    <div className="form-group">
                                        <label >Họ</label>
                                        <div className="col-md-10">
                                            <input name="first_name" onChange={this.onChange}  className="form-control text-box single-line" type="text"  defaultValue={user_item.first_name}/>
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >Tên</label>
                                        <div className="col-md-10">
                                            <input name="last_name" onChange={this.onChange}  className="form-control text-box single-line" type="text"  defaultValue={user_item.last_name}/>
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >Email</label>
                                        <div className="col-md-10">
                                            <input name="email" onChange={this.onChange}  className="form-control text-box single-line" type="Email"  defaultValue={user_item.email}/>
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >Mật khẩu</label>
                                        <div className="col-md-10">
                                            <input name="password" onChange={this.onChange}  className="form-control text-box single-line" type="Password"  defaultValue={user_item.password}/>
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >SĐT</label>
                                        <div className="col-md-10">
                                            <input name="phone" onChange={this.onChange}  className="form-control text-box single-line" type="text"  defaultValue={user_item.phone}/>
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label >Giới tính</label>
                                        <div className="col-md-10">
                                            <input name="sex" onChange={this.onChange} className="form-control text-box single-line" type="text"  defaultValue={user_item.sex}/>
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label > Ngày sinh</label>
                                        <div className="col-md-10">
                                            <input name="dOb" onChange={this.onChange} className="form-control text-box single-line" type="text"  defaultValue={user_item.dOb}/>
                                            <span className="field-validation-valid text-danger" ></span>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-offset-2 col-md-10">
                                            <button type="submit" onClick={()=>this.onSubmit} className="btn btn-default">Thêm</button>
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


export default A_UserAction;

