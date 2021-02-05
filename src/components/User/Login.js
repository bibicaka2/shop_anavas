import React, { Component } from 'react';

// import * as action from "../../redux/actions/action";
// import FacebookLogin from "react-facebook-login";
import callApi from "../../utils/apiCaller";
const checkAuth = () => {
  console.log(localStorage.getItem('user'));
  if (localStorage.getItem('user') !== null) return true;
  return false;
}

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',

    }
  }
  remove_token() {
    var user = JSON.parse(localStorage.getItem('user'));
    var header = { 'Authorization': `bearer ${user.token}` }
    callApi(`user/log-out?api_token=${user.token}`, 'POST', header);
  }
  componentDidMount() {
    var { history } = this.props;
    if (checkAuth()) {
      alert('dang xuat thanh cong');
      this.remove_token();
      localStorage.removeItem('user');
      history.push('');
    }
  }
  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }
  checkLogin = (user) => {
    callApi(`user/log-in/?user=${user.email}&password=${user.password}`, 'POST', null).then(res => {
      var { history } = this.props;
      if (res.data.data.length === 0) {

        alert(
          "Sai mat khau"
        );

      }
      else {
        localStorage.setItem('user', JSON.stringify(res.data.data));

        history.push('/Admin');
      }

    });
  }
  onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.checkLogin(this.state);
  }

  render() {

    return (

      // <section className="section-enroll">
      //     <div className="row">
      //         <div className="enroll">
      //             <div className="enroll__form">
      //                 <form className="form">
      //                     <div>
      //                         <h2 onClick={this.onHandleSubmit} className="heading-secondary">
      //                             ADMIN STORE
      //                         </h2>
      //                     </div>

      //                     <div className="form__group">
      //                         <input type="email" name="email"  onChange={this.onHandleChange} className="form__input" placeholder="email" />
      //                         <label className="form__label">Email</label>
      //                     </div>

      //                     <div className="form__group">
      //                         <input  type="password" name="password" onChange={this.onHandleChange} className="form__input" placeholder="password" />
      //                         <label  className="form__label">Password</label>
      //                     </div>

      //                     <div className="form__group">
      //                         <a onClick={this.onHandleSubmit} className="btn__custom btn__custom--blue"  >
      //                             Submit &rarr;
      //                         </a>
      //                     </div>
      //                     <div className="form__group">
      //                         <a onClick={this.onHandleSubmit} className="btn__custom btn__custom--blue"  >
      //                             Submit &rarr;
      //                         </a>
      //                     </div>

      //                 </form>
      //             </div>
      //         </div>
      //     </div>
      // </section>
      <div className="authfy-panel panel-login text-center active ">
        <div className="authfy-heading">
          <h3 className="auth-title">Login to your account</h3>
          {/* <p>Don’t have an account? <a className="lnk-toggler" data-panel=".panel-signup" href="/#">Sign Up Free!</a></p> */}
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <form name="loginForm" className="loginForm" action="#" method="POST">
              <div className="form-group">
                <input id="login" type="text"  onChange={this.onHandleChange} className="form-control form-control-1 email" name="email" placeholder="Email address" />
              </div>
              <div className="form-group">
                <div className="pwdMask">
                  <input id="login" type="password"  onChange={this.onHandleChange} className="form-control form-control-1 password" name="password" placeholder="Password" />
                  <span className="fa fa-eye-slash pwd-toggle"></span>
                </div>
              </div>

              {/* <div className="row remember-row">
                <div className="col-xs-6 col-sm-6">
                  <label className="checkbox text-left">
                    <input type="checkbox" value="remember-me" />
                    <span className="label-text">Remember me</span>
                  </label>
                </div>
                <div className="col-xs-6 col-sm-6">
                  <p className="forgotPwd">
                    <a className="lnk-toggler" data-panel=".panel-forgot" href="/#">Forgot password?</a>
                  </p>
                </div>
              </div> */}

              <div className="form-group">
                <button onClick={this.onHandleSubmit}  className="btn btn-lg btn-primary btn-block" type="submit">Login with email</button>
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
    // onToggleLoginForm: () => {
    //   dispatch(action.isDisplaySignIn());
    // },
    // onAccountAccess: (account) => {
    //   dispatch(action.account(account));
    // },
    // onAddUser: (user) => {
    //   dispatch(action.actAddUserRequest(user));
    // },
//   };
// };
export default Login;
//export default connect(mapStateToProps, mapDispatchToProps)(Login);
