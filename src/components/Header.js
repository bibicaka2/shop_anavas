import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  {actFindProductByKeyWord} from '../actions/index';
import './../App.css';
const checkAuth = () => {
    if (localStorage.getItem('user') !== null ||localStorage.getItem('user')===[] ) return true;
    return false;
  }
const Menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true,
        className: 'fas fa-home'

    },
    {
        name: 'Sản phẩm',
        to: '/product-list',
        exact: true,
        className: 'fas fa-tshirt',
    },
  
    {
        name: 'Giỏ hàng',
        to: '/products-cart',
        exact: true,

        className: 'fas fa-shopping-cart',
    },
    
    {
        name: 'Đăng nhập',
        to: '/Login',
        exact: true,
        className: 'fas fa-user'
    },
];
const MenuLink = ({ label, to, activeOnlyWhenExact, name }) => {
    
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active' : '';
            if(label==='Đăng xuất' || label==='Đăng nhập')
            {
                if(checkAuth())
                {
                    label='Đăng xuất';
                }
                else
                {
                    label='Đăng nhập';
                    
                }
            }
           
            
            return (
               
                // them nhieu className dung `className`
                <li className={`nav-item  ${active}`} >
                    <Link to={to} className={`nav-item ${active} `}>  <i className={`${name}`}></i> {label}  </Link>
                </li>
            )
        }} />
    )
}

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
             key_word:"",
        }
    }
    
    handleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });

        this.props.find_product_by_key_word(value)
     
    }
  
    render() {
        return (
            <div className="">
                {/* <a href="#default" classNameName="logo">CompanyLogo</a>
            <div className="header__right"> */}
                {/* <a className="header__a header__active" href="#home">Home</a>
              <a className="header__a" href="#contact">Contact</a>
              <a className="header__a" href="#about">About</a> */}
                {/* {this.showMenus(Menus)}
            </div> */}
                <div className="navigation">

                </div>
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light height-80" id="ftco-navbar">
                    <div className="container">
                        <a className="navbar-brand" href="/#"><img className="logo__header" src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Header.svg" alt="" /> <span className="header__title">Cửa hàng quần áo</span></a>
                        {/* <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="oi oi-menu ">
                                <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
                                <label className="navigation__button">
                                    <span className="navigation__icon">&nbsp;</span>
                                </label>
                            </span>
                        </button>
                      */}
                      <form  className="navbar-form navbar-right" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <img className="header__icon-search" src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_tim_kiem.svg"/>
                        <input id="login" type="text" name="key_word" className="form-control form-control--find" onChange={this.handleChange} placeholder="Tìm kiếm"/>
                    </div>
                </form>
                     
                        <div className="navbar-collapse collapse" id="ftco-nav" >
                            <ul className="navbar-nav ml-auto">
                                {/* <li className="nav-item active"><a href="/Main/Menu" className="nav-link">Trang chủ</a></li>
                                <li className="nav-item"><a href="/Main/Services" className="nav-link">giỏ hàng</a></li>
                                <li className="nav-item"><a href="/Login/formDangNhap" className="nav-link">sản phẩm</a></li>
                                <li className="nav-item"><a href="/Login/formDangKy" className="nav-link">Đăng ký</a></li>
                                <li className="nav-item"><a href="/Login/formDangNhap" className="nav-link">Đăng Nhập</a></li> */}

                                {this.showMenus(Menus)}
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
    showMenus = (Menus) => {
        var result = null
        if (Menus.length > 0) {
            result = Menus.map((menu, index) => {
                return (
                    <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} name={menu.className} />
                )
            });
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
      product_type_list: state.productTypeList,
    }
  }
  
  const mapDispatchToProps=(dispatch,props)=>{
    return {
      find_product_by_key_word:(item)=>{
        dispatch(actFindProductByKeyWord(item));
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Header);



