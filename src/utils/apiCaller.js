import axios from 'axios';
import * as Config from './../constants/Config';
export default function callApi(endpoint,method='POST',headers){
    
    return  axios({
        method: 'POST',
        url:`${Config.API_URL}/${endpoint}`,
        data:null,
        headers:headers?headers:null,
       }).catch(err=>{
           
       });
};

// export default function callApiGET(endpoint,method='POST',body ){
//     return  axios({
//         method: 'GET',
//         url:`${Config.API}/${endpoint}`,
//         data:body
//        }).catch(err=>{
           
//        });
// };