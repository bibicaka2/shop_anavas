import React from 'react';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
// import HomePage from './pages/HomePage/HomePage';
 import NotFoundPage from  './pages/NotFoundPage';
import  PaginationPage  from './pages/PaginationPage';
import ProductActionPage from './pages/ProductActionPage';
import ProductListPage from './pages/ProductListPage';
import AdminPage from './pages/AdminPage';
import ProductPage from './pages/ProductPage';
import ProductTypes from './components/ProductTypes';
import Register from './components/User/Register';
import FormLogin from './components/User/FormLogin';
import Login from './components/User/Login';
import A_DetailProduct from './components/Admin/DetailProduct/A_DetailProduct';
import PaginationContainer from './containers/PaginationContainer';
import SaleOffListContrainer from './containers/SaleOffListContrainer';
import ShippingInfomationContainer from './containers/Shipping-Infomation/ShippingInfomationContainer';
const routes = [
    {
        path:'/',
        main:({match,history})=><HomePage match={match} history={history}/>,
        exact: true,
      

    },
    {
        path:'/ac',
        main:({match,history})=><A_DetailProduct match={match} history={history}/>,
        exact: true,
      
    },
    // {
    //     path:'/products',
    //     main:({history})=><ProductListPage history={history}/>,
    //     exact: false,
      
    // },
    {
        path:'/products-cart',
        main:()=><CartPage/>,
        exact: false,
      
    },
    {
        path:'/product-list',
        main:()=><ProductPage/>,
        exact: false,
    },
    //PRODUCT
    // {
    //     path:'/product-add',
    //     main:({history})=><ProductActionPage history={history}/>,
    //     exact: false,
      
    // },
    // {
    //     path:'/product/:id/edit',
    //     main:({match,history})=><ProductActionPage match={match} history={history}/>,
    //     exact: false,
      
    // },
    {
        path:'/Pagination/',
        main:(match)=><PaginationPage match={match}/>,
        exact: false,
      
    },

    //PRODUCTSIZE
    {
        path:'/product_size',
        main:({history})=><ProductListPage history={history}/>,
        exact: false,
      
    },

    {
        path:'/Login/',
        main:({match,history})=><FormLogin match={match} history={history}/>,
        exact: false,
      
    },
    {
        path:'/Register/',
        main:()=><Register/>,
        exact: false,
      
    },
    {
        path:'/productTypes/',
        main:()=><ProductTypes/>,
        exact: false,
      
    },

    //-------------------------------------------ADMIN-----------------------------------------------//

    //-------------------------------------------PRODUCT---------------------------------------------//
    {
        path:'/admin',
        main:()=><AdminPage tag='Admin'/>,
        exact: false,
       
    },
    {
        path:'/products',
        main:({match,history})=><AdminPage tag='A_Product'  match={match} history={history}/>,
        exact: false,
       
    },
    {
        path:'/product-add/',
        main:({history})=><AdminPage tag='product-add' history={history}/>,
        exact: false,
       
    },
    {
        path:'/product/:id/edit/',
        main:({match,history})=><AdminPage tag='product-edit' match={match} history={history}/>,
        exact: false,
       
    },
    {
        path:'/admin/product/:id/view/',
        main:({match,history})=><AdminPage tag='product-view' match={match} history={history}/>,
        exact: false,
       
    },
    //----------------------------------------------------------------------------------------------//
    //-------------------------------------------PRODUCT---------------------------------------------//
 
    {
        path:'/admin/product_size/',
        main:({match,history})=><AdminPage tag='A_ProductSize'  match={match} history={history}/>,
        exact: true,
       
    },
    {
        path:'/admin/product_size-add/',
        main:({match,history})=><AdminPage tag='product_size-add'  match={match} history={history}/>,
        exact: false,
      
    },
    {
        path:'/admin/product_size/:id/edit/',
        main:({match,history})=><AdminPage tag='product_size-edit' match={match} history={history}/>,
        exact: false,
     
    },
    //----------------------------------------------------------------------------------------------//
        //----------------------------------------------------------------------------------------------//
    //-------------------------------------------SaleOff---------------------------------------------//
 
    {
        path:'/sale_off',
        main:({match,history})=><AdminPage tag='A_SaleOff'  match={match} history={history}/>,
        exact: true,
     
    },
    {
        path:'/sale_off-add',
        main:({match,history})=><AdminPage tag='sale_off-add'  match={match} history={history}/>,
        exact: false,
       
    },
    {
        path:'/sale_off/:id/edit',
        main:({match,history})=><AdminPage tag='sale_off-edit' match={match} history={history}/>,
        exact: false,
      
    },
    {
        path:'sale_off/:id/detail',
        main:({match,history})=><AdminPage tag='A_SaleOff-detail' match={match} history={history}/>,
        exact: false,
      
    },
    //----------------------------------------------------------------------------------------------//
    //-------------------------------------shipping-infomation--------------------------------------//
 
      {
        path:'/shipping-infomation',
        main:({match,history})=><ShippingInfomationContainer match={match} history={history}/>,
        exact: false
    },
    //----------------------------------------------------------------------------------------------//
    //-------------------------------------User--------------------------------------//
    {
        path:'/user',
        main:({match,history})=><AdminPage tag='A_User'  match={match} history={history}/>,
        exact: true,
       
    },
    {
        path:'/user-add',
        main:({match,history})=><AdminPage tag='user-add'  match={match} history={history}/>,
        exact: false,
     
    },
    {
        path:'/user/:id/edit',
        main:({match,history})=><AdminPage tag='user-edit' match={match} history={history}/>,
        exact: false,
       
    },
 //----------------------------------------------------------------------------------------------//
    //-------------------------------------BillDetail--------------------------------------//


    {
        path:'/bill_detail',
        main:({match,history})=><AdminPage tag='A_BillDetail'  match={match} history={history}/>,
        exact: true,
       
    },
    {
        path:'/bill_detail-add',
        main:({match,history})=><AdminPage tag='bill_detail-add'  match={match} history={history}/>,
        exact: false,
        
    },
    {
        path:'/bill_detail/:id/edit',
        main:({match,history})=><AdminPage tag='bill_detail-edit' match={match} history={history}/>,
        exact: false,
        
    },
    {
        path:'/bill_detail/:id/view',
        main:({match,history})=><AdminPage tag='bill_detail-view' match={match} history={history}/>,
        exact: false,
       
    },
    {
        path:'/test',
        main:({match,history})=>  <SaleOffListContrainer tag='A_Product'></SaleOffListContrainer>,
        exact: false
    },
    // {
    //     path:'/Admin/sale_off-add',
    //     main:({match,history})=><AdminPage tag='sale_off-add'  match={match} history={history}/>,
    //     exact: false
    // },
    // {
    //     path:'/Admin/sale_off/:id/edit',
    //     main:({match,history})=><AdminPage tag='sale_off-edit' match={match} history={history}/>,
    //     exact: false
    // },
    // {
    //     path:'/Admin/sale_off/:id/detail',
    //     main:({match,history})=><AdminPage tag='A_SaleOff-detail' match={match} history={history}/>,
    //     exact: false
    // },
    //----------------------------------------------------------------------------------------------//


    
     {
        path:'/NotFoundPage',
        exact: false,
        main:()=><NotFoundPage/>,
     },
   
];
export default routes;