import React, { Component } from 'react';

// import * as action from "../../redux/actions/action";
// import FacebookLogin from "react-facebook-login";
import callApi from "../../utils/apiCaller";
import "./Login.css";
import './../../App.css';

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      first_name:'',
      last_name:'',
      dOb:'',
      sex:'',
      email: '',
      phone: '',
    }
  }

  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    // if (name === 'password' && this.state.password !== value) {
    //   alert("error password");
    // }
    this.setState({
      [name]: value
    });
  }
  test(){
    var info_user=this.state;
    //http://localhost:8000/api/user/register?first_name=aa&last_name=bb&password=cc&email=ten_toi.123.1993@gmail.com&phone=1234578998&sex=1&dOb=02/03/1999
    callApi(`user/register/?first_name=${info_user.first_name}&phone=${info_user.phone}&last_name=${info_user.last_name}&sex=${info_user.sex}&dOb=${info_user.dOb}&email=${info_user.email}&password=${info_user.password}`, 'POST', null).then(res => {
      console.log(res.data.message);
      if(res){
        alert('tao thanh cong')
        
      }
      else{
        
      }

    });
  }
  onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.test();
  }
  check = () => {

  }
  render() {

    return (
      // <div className="container mt-50">
      //   <div className="row">
      //     <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      //       <div className="panel panel-primary">
      //         <div className="panel-heading">
      //           <h3 className="panel-title">Form</h3>
      //         </div>
       
      //         <div className="panel-body">

      //           <form onSubmit={this.onHandleSubmit} >
      //             <div className="form-group">
      //               <label >Tài khoản</label>
      //               <input
      //                 name="username"
      //                 type="text"
      //                 className="form-control"
      //                 onChange={this.onHandleChange}

      //               />
      //             </div>

      //             <div className="form-group">
      //               <label >Mật khẩu</label>
      //               <input
      //                 name="password"
      //                 type="password"
      //                 className="form-control"
      //                 onChange={this.onHandleChange}

      //               />
      //             </div>
      //             <div className="form-group">
      //               <label >sex</label>
      //               <input
      //                 name="sex"
      //                 type="password"
      //                 className="form-control"
      //                 onChange={this.onHandleChange}

      //               />
      //             </div>
      //             <div className="form-group">
      //               <label >tên</label>
      //               <input
      //                 name="last_name"
      //                 type="text"
      //                 className="form-control"
      //                 onChange={this.onHandleChange}

      //               />
      //             </div>
      //             {/* <div className="form-group">
      //               <label >Nhập lại mật khẩu
      //              </label>
      //               <input
      //                 name="confirmPassword"
      //                 type="password"
      //                 className="form-control "
      //                 onChange={this.onHandleChange}

      //               />
      //             </div> */}
      //             <div className="form-group">
      //               <label >Họ </label>
      //               <input
      //                 name="first_name"
      //                 type="text"
      //                 className="form-control"
      //                 onChange={this.onHandleChange}

      //               />
      //             </div>
      //             <div className="form-group">
      //               <label >email</label>
      //               <input
      //                 name="email"
      //                 type="text"
      //                 className="form-control"
      //                 onChange={this.onHandleChange}

      //               />
      //             </div>
      //             <div className="form-group">
      //               <label >phone</label>
      //               <input
      //                 name="phone"
      //                 type="text"
      //                 className="form-control"
      //                 onChange={this.onHandleChange}
      //               />
      //             </div>
      //             <div className="form-group">
      //               <label >dOb</label>
      //               <input
      //                 name="dOb"
      //                 type="text"
      //                 className="form-control"
      //                 onChange={this.onHandleChange}
      //               />
      //             </div>
      //             <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
      //            <button type="reset" className="btn btn-primary">Reset</button>
      //           </form>

      //         </div>
      //       </div>


      //     </div>
      //   </div>

      // </div>
      <div className="authfy-panel panel-signup text-center ">
      <div className="row">
          <div className="col-xs-12 col-sm-12">
              <div className="authfy-heading">
                  <h3 className="auth-title">Sign up for free!</h3>
              </div>
              <form name="signupForm" className="signupForm" action="#" method="POST">
                  <div className="form-group">
                      <input   onChange={this.onHandleChange} type="email" className="form-control" name="email" placeholder="Email" />
                  </div>
                  <div className="form-group">
                      <input type="text" className="form-control" name="username" placeholder="Tài khoản" />
                  </div>
                  <div className="form-group">
                      <div className="pwdMask">
                          <input  onChange={this.onHandleChange} type="password" className="form-control" name="password" placeholder="Mật Khẩu" />
                          <span className="fa fa-eye-slash pwd-toggle"></span>
                      </div>
                  </div>
                  <div className="form-group">
                      <input type="text"  onChange={this.onHandleChange} className="form-control" name="last_name" placeholder="Tên" />
                  </div>
                  <div className="form-group">
                      <input type="text"  onChange={this.onHandleChange} className="form-control" name="first_name" placeholder="Họ" />
                  </div>
                  <div className="form-group">
                      <input type="text"  onChange={this.onHandleChange} className="form-control" name="phone" placeholder="Số điện Thoại" />
                  </div>
                  <div className="form-group">
                      <input type="text"  onChange={this.onHandleChange} className="form-control" name="sex" placeholder="Giới tính" />
                  </div>
                  <div className="form-group">
                  {/* <input type="text" className="form-control">  </input> */}
                  {/* <div className="input-group date" id="datetimepicker">
                    <input type="text" className="form-control"/>
                    <div className="input-group-addon input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-calendar"></i></span>
                    </div>
                </div> */}
                

                  
                      <input type="text" className="form-control" name="dOb" placeholder="Ngày sinh" />
                  </div>
                  <div className="form-group">
                      <p className="term-policy text-muted small">I agree to the <a href="/#">privacy policy</a> and <a href="/#">terms of service</a>.</p>
                  </div>
                  <div className="form-group">
                      <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up with email</button>
                  </div>
              </form>
              <a className="lnk-toggler" data-panel=".panel-login" href="/#">Already have an account?</a>
          </div>
      </div>
      
  </div>



    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     listUser: state.ListUser,
//   };
// };
// const mapDispatchToProps = (dispatch, props) => {
//   return {
//     // onToggleLoginForm: () => {
//     //   dispatch(action.isDisplaySignIn());
//     // },
//     // onAccountAccess: (account) => {
//     //   dispatch(action.account(account));
//     // },
//     // onAddUser: (user) => {
//     //   dispatch(action.actAddUserRequest(user));
//     // },
//   };
// };
export default Register;
//export default connect(mapStateToProps, mapDispatchToProps)(Login);
