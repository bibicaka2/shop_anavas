import React, { Component } from 'react';

// import * as action from "../../redux/actions/action";
// import FacebookLogin from "react-facebook-login";
import callApi from "../../utils/apiCaller";
import "./Login.css";
import './../../App.css';

class ForgotPass extends Component {
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
        <div className="authfy-panel panel-forgot">
        <div className="row">
            <div className="col-xs-12 col-sm-12">
                <div className="authfy-heading">
                    <h3 className="auth-title">Recover your password</h3>
                    <p>Fill in your e-mail address below and we will send you an email with further instructions.</p>
                </div>
                <form name="forgetForm" className="forgetForm" action="#" method="POST">
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Recover your password</button>
                    </div>
                    <div className="form-group">
                        <a className="lnk-toggler" data-panel=".panel-login" href="#">Already have an account?</a>
                    </div>
                    <div className="form-group">
                        <a className="lnk-toggler" data-panel=".panel-signup" href="#">Don’t have an account?</a>
                    </div>
                </form>
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
export default ForgotPass;
//export default connect(mapStateToProps, mapDispatchToProps)(Login);
