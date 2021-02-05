
import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from '../../../utils/apiCaller';
import { actDeleteToUser } from '../../../actions/index';
import A_UserList from '../../../components/Admin/User/A_UserList';
import A_UserItem from '../../../components/Admin/User/A_UserItem';
import './../../../App.css';
class A_UserListContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
            user_list:[],
            tag:0,
        }
    }
    UNSAFE_componentWillMount=()=>{
      
        var user = JSON.parse(localStorage.getItem('user'));
        callApi(`user/list?token=${user.token}`, 'POST', null).then(res => { 

            console.log('goi gium t di ma')
            console.log(res.data)
            this.setState({user_list: res.data })
          });
          this.setState({
              tag:1
          })
    }

    callApiAfterDelete=()=>{
        var user = JSON.parse(localStorage.getItem('user'));
        callApi(`user/list?token=${user.token}`, 'POST', null).then(res => { 

            console.log('goi gium t di ma1')
            console.log(res.data)
            this.setState({user_list: res.data,tag:2 })
          });
         
    }
    componentDidUpdate=()=>{
        ;
            if(this.state.tag===1 ||this.state.tag===2 )
           {
               console.log('load');
               var user = JSON.parse(localStorage.getItem('user'));
               callApi(`user/list?token=${user.token}`, 'POST', null).then(res => { 
                
                   this.setState({user_list: res.data })
                 });
                 this.setState({
                     tag:0
                 })
           }
    
       }
    render() {
        //  let products ;
        var {user_list } = this.state;
    

        return (

            <div>

                {/* <Link to="product-add" className="btn btn-info" >Thêm sản phẩm</Link>
                <br /> <br /> */}
                <div className="row_a">
                <A_UserList>
                    {this.showProducts(user_list)}
                </A_UserList>
                </div>
            </div>
        )
    }
    showProducts(user_list) {

     
        var result = null;
        var { DeleteToUser, history } = this.props;
        if (user_list.length > 0) {
            result =user_list.map((user_item, index) => {
             
                return (
                    <A_UserItem key={index}user_item={user_item} index={index+1} DeleteToUser={DeleteToUser} history={history} callApiAfterDeleteUser ={this.callApiAfterDelete} />
                )
            })
        }
        return result;
    }
}
// const mapStateToProps = state => {
//     return {
//        user_list: state.user_list_list,
//     }
// }
const mapDispatchToProps = (dispatch, props) => {
    return {
     
        DeleteToUser: (user_list_list => {
            console.log('3218321879361287361287')
            dispatch(actDeleteToUser(user_list_list));
        })
    }
}
export default connect(null, mapDispatchToProps)(A_UserListContainer);