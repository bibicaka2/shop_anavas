
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import PaginationContainer from '../containers/PaginationContainer';
import A_ProductActionContainer from './../containers/Admin/A_ProductActionContainer';
import A_ProductSizeActionContainer from './../containers/Admin/A_ProductSize/A_ProductSizeActionContainer';
import A_ProductSizeListContainer from './../containers/Admin/A_ProductSize/A_ProductSizeListContainer';
import SaleOffListContrainer from './../containers/SaleOffListContrainer';
import A_SaleOffActionContainer from './../containers/Admin/A_SaleOff/A_SaleOffActionContainer';
import A_UserActionContainer from './../containers/Admin/A_User/A_UserActionContainer';
import A_UserListContainer from '../containers/Admin/A_User/A_UserListContainer';
import A_BillDetailActionContainer from './../containers/Admin/A_BillDetail/A_BillDetailActionContainer';
import route_admin from './../routes/toolbar/admin';
import A_BillDetailListContainer from '../containers/Admin/A_BillDetail/A_BillDetailListContainer';
import A_ViewBillDetailListContainer from '../containers/Admin/A_BillDetail/A_ViewBillDetailListContainer';
const MenuLink = ({ path,label, to, activeOnlyWhenExact }) => {
 
    return (
        <Route path={to}    exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? '' : '';
            return (
                // them nhieu class dung `class`
                <li>
                    <Link to={to} className={` ${active} `}>
                        <i className="fas fa-chart-bar"></i>{`${label}`}
                    </Link>
                </li>

                // <li className={`header__a  my-li ${active}`} >
                //     <Link to={to} className={`header__a ${active} `}>{label}</Link>
                // </li>
            )
        }} />
    )
}
const checkAuth = () => {
    
    if (localStorage.getItem('user') !== null && sessionStorage.getItem('click_click')==='10')
    {
        return true;
    } 
    return false;
  }
class AdminPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count:0,
             path:"",
        }
    }
    
    
    check=()=>{
        var {match,history}=this.props;
        var {tag}=this.props;
      
        console.log(tag);
     
        if(checkAuth())
        {
           
            if(tag==='A_Product')
            {
                return( 
                <PaginationContainer tag={this.props.tag}></PaginationContainer>)
                
            }
            
            if(tag==='product-add')
            {
             
                return(
                    <A_ProductActionContainer match={match} history={history}></A_ProductActionContainer>
                )
            }
            if(tag==='product-edit')
            {
                return(
                    <A_ProductActionContainer match={match} history={history}></A_ProductActionContainer>
                )
            }
             //------------------------------------------------------------------------------------------///
            //--------------------------------------PRODUCTSIZE----------------------------------------///
            if(tag==='product_size-add')
            {
             
                return(
                    <A_ProductSizeActionContainer match={match} history={history}></A_ProductSizeActionContainer>
                )
            }
           
            if(tag==='product_size-edit')
            {
                
                return(
                    <A_ProductSizeActionContainer match={match} history={history}></A_ProductSizeActionContainer>
                )
            }
    
            if(tag=== 'A_ProductSize')
            {
              
                return(
                    <A_ProductSizeListContainer match={match} history={history}></A_ProductSizeListContainer>
                )
            }
            //------------------------------------------------------------------------------------------///
            //--------------------------------------SALEOFF---------------------------------------------///
            if(tag==='sale_off-add')
            {
            
                return(
                    <A_SaleOffActionContainer match={match} history={history}></A_SaleOffActionContainer>
                )
            }
        
            if(tag==='sale_off-edit')
            {
               console.log('391287312893718937129')
                return(
                    <A_SaleOffActionContainer match={match} history={history}></A_SaleOffActionContainer>
                )
            }
    
            if(tag=== 'A_SaleOff')
            {
                
                console.log('A_SaleOff')
                return(
                    <SaleOffListContrainer match={match} history={history}></SaleOffListContrainer>
                )
            }
                   //------------------------------------------------------------------------------------------///
            //--------------------------------------A_User---------------------------------------------///
            if(tag==='user-add')
            {
            
                return(
                    <A_UserActionContainer match={match} history={history}></A_UserActionContainer>
                )
            }
        
            if(tag==='user-edit')
            {
                return(
                    <A_UserActionContainer match={match} history={history}></A_UserActionContainer>
                )
            }
            if(tag=== 'A_User')
            {
                
                return(
                    <A_UserListContainer match={match} history={history}></A_UserListContainer>
                )
            }
                   //------------------------------------------------------------------------------------------///
            //--------------------------------------BillDetail---------------------------------------------///
            if(tag==='bill_detail-add')
            {
            
                return(
                    <A_BillDetailActionContainer match={match} history={history}></A_BillDetailActionContainer>
                )
            }
        
            if(tag==='bill_detail-edit')
            {
                return(
                    <A_BillDetailActionContainer match={match} history={history}></A_BillDetailActionContainer>
                )
            }
            if(tag==='bill_detail-view')
            {
               console.log('view')
                return(
                    <A_ViewBillDetailListContainer   match={match} history={history}></A_ViewBillDetailListContainer>
                )
            }
            if(tag=== 'A_BillDetail')
            {
                
                console.log('A_BillDetail')
                return(
                    <A_BillDetailListContainer match={match} history={history}></A_BillDetailListContainer>
                )
            }
          
        }
        else
        {
             alert('Vui lòng đăng nhập ');
          
             
        }

        //--------------------------------------PRODUCT----------------------------------------//
        //-------------------------------------------------------------------------------------//
    }
  
    render() {
        return (
            <div >
                <aside className="menu-sidebar d-none d-lg-block">
                    <div className="logo">
                        <a href="/Admin">
                            <img src="/Areas/Admin/Content/images/icon/logo.png" alt="Cool Admin" />
                        </a>
                    </div>
                    <div className="menu-sidebar__content js-scrollbar1 ps">
                    <header className="header-desktop"><div className="section__content section__content--p30">
                        
                        <div className="container-fluid"><div className="header-wrap"></div></div></div>
                         
                        </header>
                        <nav className="navbar-sidebar">
                    
                            <ul className="list-unstyled navbar__list">
                                {this.showMenus(route_admin)} 
                                {/* <li>
                                    <a href="/Admin/admin/LstThucKhach">
                                        <i className="fas fa-chart-bar"></i>Thực Khách
                                </a>
                                </li>

                                <li>
                                    <a href="/Admin/admin/lstdatban">
                                        <i className="fas fa-table"></i>Danh Sách sản phẩm
                                </a>
                                </li>
                                <li>
                                    <a href="/Admin/admin/LstHoaDon">
                                        <i className="fas fa-table"></i>Hóa Đơn
                                </a>
                                </li> */}
                                {/* <li>
                                    <a href="/Admin/admin/LstLoaiMonAn">
                                        <i className="fas fa-table"></i>Loại Món Ăn
                                </a>
                                </li>
                                <li>
                                    <a href="/Admin/admin/LstMonan">
                                        <i className="fas fa-table"></i>Món Ăn
                                </a>
                                </li>
                                <li>
                                    <a href="/Admin/admin/LstLoaiNuocUong">

                                        <i className="fas fa-table"></i>Loại Nước Uống
                                </a>
                                </li>
                                <li>
                                    <a href="/Admin/admin/Lstnuocuong">

                                        <i className="fas fa-table"></i>Nước Uống
                                </a>
                                </li>
                                <li>
                                    <a href="/Admin/admin/LstBanAn">
                                        <i className="fas fa-table"></i>Bàn Ăn
                                </a>
                                </li>
                                <li>
                                    <a href="/Admin/admin/Kho">
                                        <i className="fas fa-table"></i>Kho
                                </a>
                                </li>
                                <li>
                                    <a href="/Admin/admin/LstPhongan">

                                        <i className="fas fa-table"></i>Phòng Ăn
                                </a>
                                </li>
                                <li>
                                    <a href="/Admin/admin/Lstnguyenlieu">
                                        <i className="fas fa-table"></i>Nguyên Liệu
                                </a>
                                </li> */}
                                {/* <li className="has-sub">
                                    <a className="js-arrow" href="#">
                                        <i className="fas fa-copy"></i>Pages
                                </a>
                                    <ul className="list-unstyled navbar__sub-list js-sub-list">
                                        <li>
                                            <a href="#">Login</a>
                                        </li>
                                        <li>
                                            <a href="#">Register</a>
                                        </li>
                                        <li>
                                            <a href="#">Forget Password</a>
                                        </li>
                                    </ul>
                                </li> */}

                            </ul>
                        </nav>
                        <div className="ps__rail-x" style={{ left: 0 + 'px', bottom: 0 + 'px' }}><div className="ps__thumb-x" tabIndex="0" style={{ left: 0 + 'px', width: 0 + 'px' }}></div></div><div className="ps__rail-y" style={{ top: 0 + 'px', right: 0 + 'px' }}><div className="ps__thumb-y" tabIndex="0" style={{ top: 0 + 'px', height: 0 + 'px' }}></div></div></div>
                </aside>

               {this.check()}
                 
              
            </div>
      
      )

    }
    showMenus = (route_admin) => {
        var result = null
        if(checkAuth()){
            if (route_admin.length > 0) {
                result = route_admin.map((route, index) => {
                    return (
                        <MenuLink key={index} path={route.path}  label={route.name} to={route.path} activeOnlyWhenExact={route.exact} />
                    )
                });
            }
        }
        else
        {
            if (route_admin.length > 0) {
                result = route_admin.map((route, index) => {
                    if(route.name==='Trở lại')
                    {
                        return (
                            <MenuLink key={index} path={route.path}  label={route.name} to={route.path} activeOnlyWhenExact={route.exact} />
                        )
                    }
                });
            }
        }
       
       
        return result;
    }
}
export default AdminPage;



