import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import Router from "./Router";
import { withRouter } from "react-router-dom";
import { handleAutoSignIn } from "./store/actions/actions";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const loggedInUser = JSON.parse(localStorage.getItem("userDetail"));

    if (!isEmpty(loggedInUser) && loggedInUser.role) {
      this.handleRoute(loggedInUser.role);
      this.props.handleAutoSignIn(loggedInUser, this.handleRoute);
    } else {
      this.props.history.push("/");
    }
  }

  handleRoute = role => {
    if (role === "admin" && this.props.isLogin) {
      this.props.history.push("/admin");
    } else if (role === "user" && this.props.isLogin) {
      this.props.history.push("/user");
    }
  };

  render() {
    return (
      <div className="App">
        <Router />
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
    handleAutoSignIn: (userDetail, callback) => {
      dispatch(handleAutoSignIn(userDetail, callback));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
