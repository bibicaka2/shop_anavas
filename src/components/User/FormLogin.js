import React, { Component } from 'react';
// import * as action from "../../redux/actions/action";
// import FacebookLogin from "react-facebook-login";
import callApi from "../../utils/apiCaller";
import Login from "./Login";
import ForgotPasss from "./ForgotPass";
import  Register from "./Register";
import Header from './../Header';
class FormLogin extends Component {


    render() {
        var {history}=this.props;
        return (
            <div>
    <Header></Header>
            <div className="container-fluid login__layout">
                <div className="row">
                    <div className="authfy-container col-xs-12 col-sm-10 col-md-8 col-lg-6 col-sm-offset-1 col-md-offset-2 col-lg-offset-3">

                        {/* <!-- login khac --> */}
                        {/* <div className="col-sm-5 authfy-panel-left">
                            <div className="brand-col">
                                <div className="headline">
                                  
                                    <div className="brand-logo">
                                        <a href="index.html"><img src="./../../../img/devforum.png" width="200" alt="brand-logo" /></a>
                                    </div>

                                    <p>Login </p>

                                    <div className="row social-buttons">
                                        <div className="col-xs-4 col-sm-4 col-md-12">
                                            <a href="#" className="btn btn-block btn-facebook">
                                            <i className="fab fa-facebook-square"></i> <span className="hidden-xs hidden-sm">Signin with facebook</span>
                                            </a>
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-12">
                                            <a href="#" className="btn btn-block btn-twitter">
                                                <i className="fa fa-twitter"></i> <span className="hidden-xs hidden-sm">Signin with twitter</span>
                                            </a>
                                        </div>
                                        <div className="col-xs-4 col-sm-4 col-md-12">
                                            <a href="#" className="btn btn-block btn-google">
                                                <i className="fa fa-google-plus"></i> <span className="hidden-xs hidden-sm">Signin with google</span>
                                            </a>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                  */}
                        {/* <!-- //login --> */}
                        <div className="col-sm-7 authfy-panel-right">

                            <div className="authfy-login">

                                <Login history={history}></Login>
                                {/* <ForgotPasss></ForgotPasss>
                                <Register></Register> */}
                                {/* <!-- //register --> */}
       

             
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        listUser: state.ListUser,
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        // onToggleLoginForm: () => {
        //   dispatch(action.isDisplaySignIn());
        // },
        // onAccountAccess: (account) => {
        //   dispatch(action.account(account));
        // },
        // onAddUser: (user) => {
        //   dispatch(action.actAddUserRequest(user));
        // },
    };
};
export default FormLogin;
//export default connect(mapStateToProps, mapDispatchToProps)(Login);
