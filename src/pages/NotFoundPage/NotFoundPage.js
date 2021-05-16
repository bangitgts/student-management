/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { Link } from "react-router-dom";

class NotFoundPage extends Component {
  render() {
    return (
      <div class="container">
        <div class="page-wrap d-flex flex-row align-items-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-12 text-center">
                <h1 class="display-1 d-block">404</h1>
                <div class="mb-4 lead">
                  The page you are looking for was not found.
                </div>
                <Link to="/" className="btn btn-link">
                Back to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NotFoundPage;
