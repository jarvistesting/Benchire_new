import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "../store/actions/actions";
import { withRouter } from "react-router-dom";

class Sidebar extends Component {
  handleLogout = () => {
    this.props.handleLogout(JSON.parse(localStorage.getItem("userDetail")));
    localStorage.clear();
  };
  render() {
    return this.props.fromPage === "admin" ? (
      <div className="side-bar">
        <ul className="side-nav">
          <li className="side-nav--active">
            <Link
              to={{
                pathname: "/admin",
                state: {
                  from: "profile"
                }
              }}
            >
              Profile
            </Link>
          </li>
          <li className="side-nav">
            <Link
              to={{
                pathname: "/admin",
                state: {
                  from: "datalist"
                }
              }}
            >
              Data List
            </Link>
          </li>
          <li className="side-nav">
            <NavLink to="/" onClick={this.handleLogout}>
              LogOut
            </NavLink>
          </li>
        </ul>
      </div>
    ) : (
      <div className="side-bar">
        <ul className="side-nav">
          <li className="side-nav--active">
            <Link
              to={{
                pathname: "/user",
                state: {
                  from: "profile"
                }
              }}
            >
              Profile{" "}
            </Link>
          </li>
          <li className="side-nav">
            <NavLink to="/" onClick={this.handleLogout}>
              LogOut{" "}
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogout: userDetail => {
      dispatch(handleLogout(userDetail));
    }
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Sidebar));
