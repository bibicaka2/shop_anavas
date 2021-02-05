import React from 'react';
// import HomePage from './pages/HomePage/HomePage';
import PaginationContainer from './../../containers/PaginationContainer'


const route_admin= [
  
    {
        name:"Sản phẩm",
        path:'/products',
    },
    // {
    //     name:"Loại sản phẩm",
    //     path:'/Admin/product_type',
    //     main:({match,history})=><PaginationContainer  tag='AdminPage' match={match} history={history}/>,
    //     exact: false
    // },
    // {
    //     name:"Size sản phẩm",
    //     path:'/Admin/product_size',
    //     main:({history})=><PaginationContainer tag='AdminPage' history={history}/>,
    //     exact: false
    // },
    // {
    //     name:"trạng thái sản phẩm",
    //     path:'/Admin/product_status',
    //     main:({match,history})=><PaginationContainer tag='AdminPage' match={match} history={history}/>,
    //     exact: false
    // },
    
    
    {
        name: "Khuyến mãi",
        path:'/sale_off',
   
    },
    {
        name: "Tài khoản",
        path:'/user',
       
    },
    {
        name: "Đơn hàng",
        path:'bill_detail',
        
    },
    {
        name: "Trở lại",
        path:'/product-list',
       
    },
    //  {
    //     path:'/NotFoundPage',
    //     exact: false,
    //     main:()=><PaginationContainer/>,
    //  },
   
];

export default route_admin