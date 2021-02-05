import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
const Menus = [
  {
    name: 'Trang chủ',
    to: '/',
    exact: true
  },
  {
    name: 'Sản phẩm',
    to: '/Products',
    exact: true 
  },
]
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
      var active = match ? 'active' : '';
      return (
        // them nhieu class dung `class`
        <li className={`my-li ${active}`} >
          <Link to={to} className="my-link">{label}</Link>
          
        </li>
      )
    }} />
  )
}

class Menu extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">
          {this.showMenus(Menus)}

        </ul>
      </nav>

    );
  }

  // <MenuLink label={menu.name} to={menu.to} activeOnlyWhenExact={Menu.exact} />
  showMenus = (Menus) => {
    var result = null
    if (Menus.length > 0) {
      result = Menus.map((menu, index) => {
         return (
         <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />
         )
      });
    }
    return result;
  }
}

export default Menu;


