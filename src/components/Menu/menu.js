/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
const menus = [
  {
    name: "HomePage",
    to: "/",
    exact: true,
  },
  {
    name: "Manager",
    to: "/manager",
    exact: false,
  },
  {
    name: "About",
    to: "/about",
    exact: false,
  },
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};
class Menu extends Component {
  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
  render() {
    return (
      <div>
        <ul className="nav navbar-nav">{this.showMenus(menus)}</ul>
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              User Name
              <b className="caret" />
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Edit Information</a>
              </li>
              <li>
                <a href="#">Log out</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }

  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
}
export default Menu;
