import * as Types from './../../constants/ActionType';
import callApi from './../../utils/apiCaller';
var initialState=[];

const user = ( state = initialState, action)=>{
    var {item}=action;   

    switch(action.type)
    {
        case Types.FETCH_USER:
    
     
        state=action.item;
        
        return [...state];
        
        case Types.ADD_TO_USER:    
       
        console.log('321321321312');
        console.log(item);
        if(item!==null)
        {
            console.log('321321321312');
            callApi(`user/register?first_name=${item.first_name}&last_name=${item.last_name}&password=${item.password}&email=${item.email}&phone=${item.phone}&sex=${item.sex}&dOb=${item.dOb}`,'POST',null).then(res=>{
            
                alert('Tạo thành công')

            });
            
        }
        return state;
        case Types.UPDATE_TO_USER:  
        console.log(item);
        if(item!==null)
        {  
            var user_token = JSON.parse(localStorage.getItem('user'));
            var header = { 'Authorization': `bearer ${user_token.token}` };
            // http://localhost:8000/api/user/update/info?update_type=6&first_name=abc123&last_name=ao123&password=cc&email=tranhungtien1139@gmail.com&phone=1234567791&dOb=23/02/2021&sex=1
            callApi(`user/update/info?update_type=6&first_name=${item.first_name}&last_name=${item.last_name}&password=${item.password}&email=${item.email}&phone=${item.phone}&sex=${item.sex}&dOb=${item.dOb}`,'POST',header).then(res=>{               
                alert('cập nhật thành công')
             });
             callApi(`user/list?token=${user_token.token}`, 'POST', null).then(res => { 
     
                 console.log('goi gium t di ma')
            
               });
             
        }
        return state;
      
        case Types.DELETE_TO_USER:    
        var user_token = JSON.parse(localStorage.getItem('user'));
        var header = { 'Authorization': `bearer ${user_token .token}` };
        callApi(`user/delete?delete_user_id=${item._id}`, 'POST', header).then(res => {
           if( res.data.message[0]==='user is using')
           {
               alert('Khong The Xoa Tai Khoan dang su dung')
           }
           else{
               alert('Xoa Thanh Cong')
           }
        });
            console.log('delete_user')
        return state;
        
        default:return[...state];
    }
 
}
export default user;