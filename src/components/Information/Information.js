/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component } from "react";

class Information extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h4 className="panel-title">Thông tin cá nhân</h4>
              </div>
              <div className="panel-body">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <img
                    src="http://www.iconarchive.com/icons/iconscity/flags/256/vietnam-icon.png"
                    className="img-responsive"
                    alt="Image"
                  />
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
              <div className="panel-body">Panel content</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Information;