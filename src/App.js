/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu/menu";
import { Component } from "react";
import Information from "./components/Information/Information";
import Manager from "./components/Manager/Manger";
class App extends Component {
  // showContent(routes) {
  //   var result = null;
  //   if (routes.length > 0) {
  //     result = routes.map((route, index) => {
  //       return (
  //         <Route
  //           key={index}
  //           path={route.path}
  //           exact={route.exact}
  //           component={route.main}
  //         />
  //       );
  //     });
  //   }
  //   return <Switch>{result}</Switch>;
  //}
  render() {
    return (
      <Router>
        <div className="container">
          {/* top */}
          <nav className="navbar navbar-default" role="navigation">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-ex1-collapse"
              >
                <span className="sr-only">ConTrol</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <img
                className="navbar-brand"
                style={{ padding: "5px" }}
                src="https://ut.edu.vn/public/img/images/Tin2017/7-11%20Nhan%20dien%20thuong%20hieu.jpg"
                alt="#"
              />
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              {/* <ul className="nav navbar-nav">
            <li className="active"><a href="#">Homepage</a></li>
            <li><a href="#">Manager</a></li>
          </ul> */}
              <Menu />
            </div>
            {/* /.navbar-collapse */}
          </nav>
          {/* homegape */}
         <Information/>
          {/* manager project */}
         <Manager/>
        </div>
      </Router>
    );
  }
}

export default App;
