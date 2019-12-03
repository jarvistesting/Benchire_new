import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import { isEmpty } from "lodash";
import { connect } from "react-redux";
import { showAlert } from "../alerts";
import "../css/style.css";
import * as actionCreator from "../store/actions/actions";

class Layout extends Component {
  handleRoute = role => {
    if (role === "admin" && this.props.isLogin) {
      showAlert('success', 'Admin Login Successfully.', 5);
      this.props.history.push("/admin");
    } else if (role === "user" && this.props.isLogin) {
      showAlert('success', 'User Login Successfully.', 5);
      this.props.history.push("/user");
    }
  };

  handleSubmit = (userDetail = {}) => {
    if (!isEmpty(userDetail)) {
      this.props.getUserDetail(userDetail, this.handleRoute);
    } else {
      // console.log("login not successful");
      showAlert('error', 'Admin Login Successfully.', 5);

    }
  };

  render() {
    return (
      <div className="Layout">
        <Header />
        <Login login={this.handleSubmit} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userDetail: state.loginReducer.userDetail,
    isLogin: state.loginReducer.isLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserDetail: (userDetail, callback) => {
      dispatch(actionCreator.getUserDetail(userDetail, callback));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
