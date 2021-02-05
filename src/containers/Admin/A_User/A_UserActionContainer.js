    
import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from './../../../utils/apiCaller';
import { actAddToUser,actUpdateToUser } from './../../../actions/index';
import './../../../App.css'
import A_UserAction from '../../../components/Admin/User/A_UserAction';

class A_UserActionContainer extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
            _id: '',
            first_name: '',
            last_name: '',
            phone:'',
            sex:'',
            dOb:'',
            email:'',  
      
          
        }
    }
    componentDidMount(){
        var {match}=this.props;
        if(match){
           callApi(`user/find?_id=${match.params.id}`).then(res=>{  
               
            if(res.data.data.length!==0){
               
                var user_item = res.data.data;
                if(user_item)
                {
                    this.setState({
                        _id:user_item._id,
                        first_name: user_item.first_name,
                        last_name:user_item.last_name,
                        phone:user_item.phone,
                        sex:user_item.sex,
                        dOb:user_item.dOb,
                        email:user_item.email,  
                    })
                }
           
                
            }})
        }
        
    }
    render() {
        var {actAddToUser,actUpdateToUser,history}=this.props;
        return (
            <A_UserAction actAddToUser={actAddToUser} actUpdateToUser={actUpdateToUser} user_item={this.state} history={history} />
        
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actAddToUser: (user_item) => {
            dispatch(actAddToUser(user_item));
        },
        actUpdateToUser: (user_item) => {
            dispatch(actUpdateToUser(user_item));
        }
    }
}

export default connect(null, mapDispatchToProps)(A_UserActionContainer);




