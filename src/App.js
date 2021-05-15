/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";

import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="container">
      {/* top */}
      <nav className="navbar navbar-default" role="navigation">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span className="sr-only">ConTrol</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <img className="navbar-brand" style={{padding: '5px'}} src="https://ut.edu.vn/public/img/images/Tin2017/7-11%20Nhan%20dien%20thuong%20hieu.jpg" alt="#" />
        </div>
        {/* Collect the nav links, forms, and other content for toggling */}
        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Homepage</a></li>
            <li><a href="#">Manager</a></li>
          </ul>
          <form className="navbar-form navbar-left" role="search">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">User Name<b className="caret" /></a>
              <ul className="dropdown-menu">
                <li><a href="#">Edit Information</a></li>
                <li><a href="#">Log out</a></li>
              </ul>
            </li>
          </ul>
        </div>{/* /.navbar-collapse */}
      </nav>
      {/* homegape */}
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h4 className="panel-title">Thông tin cá nhân</h4>
              </div>
              <div className="panel-body">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <img src="http://www.iconarchive.com/icons/iconscity/flags/256/vietnam-icon.png" className="img-responsive" alt="Image" />
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <p>1</p>
                  <p>1</p>
                  <p>1</p>
                  <p>1</p>
                  <p>1</p>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <p>1</p>
                  <p>1</p>
                  <p>1</p>
                  <p>1</p>
                  <p>1</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">Panel title</h3>
              </div>
              <div className="panel-body">
                Panel content
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* manager project */}
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Panel title</h3>
          </div>
          <div className="panel-body">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-primary">
                <span className="fa fa-plus mr-5" />Thêm Công Việc
              </button>
              <div className="row mt-15">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Nhập từ khóa..." />
                    <span className="input-group-btn">
                      <button className="btn btn-primary" type="button">
                        <span className="fa fa-search mr-5" />Tìm
                      </button>
                    </span>
                  </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                      <li>
                        <a role="button">
                          <span className="fa fa-sort-alpha-asc pr-5">
                            Tên A-Z
                          </span>
                        </a>
                      </li>
                      <li>
                        <a role="button">
                          <span className="fa fa-sort-alpha-desc pr-5">
                            Tên Z-A
                          </span>
                        </a>
                      </li>
                      <li role="separator" className="divider" />
                      <li><a role="button">Trạng Thái Kích Hoạt</a></li>
                      <li><a role="button">Trạng Thái Ẩn</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td />
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <select className="form-control">
                            <option value={-1}>Tất Cả</option>
                            <option value={0}>Ẩn</option>
                            <option value={1}>Kích Hoạt</option>
                          </select>
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Học lập trình</td>
                        <td className="text-center">
                          <span className="label label-success">
                            Kích Hoạt
                          </span>
                        </td>
                        <td className="text-center">
                          <button type="button" className="btn btn-warning">
                            <span className="fa fa-pencil mr-5" />Sửa
                          </button>
                          &nbsp;
                          <button type="button" className="btn btn-danger">
                            <span className="fa fa-trash mr-5" />Xóa
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    ) 
  }
}

export default App;
