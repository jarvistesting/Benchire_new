import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    email: "",
    password: "",
    role: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.login({ ...this.state });
  };

  handleChange = (e, fieldName = "") => {
    this.setState({ [`${fieldName}`]: e.target.value });
  };
  render() {
    return (
      <div className="login-app">
        <main className="main">
          <div className="login-form">
            <h2 className="heading-secondary ma-bt-lg">
              {" "}
              Log into your account
            </h2>
            <form onSubmit={this.handleSubmit} className="form form--login">
              <div className="form__group">
                <label className="form__label" htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form__input"
                  onChange={e => this.handleChange(e, "email")}
                  value={this.state.email}
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="form__group ma-bt-md">
                <label className="form__label" htmlFor="password">
                  {" "}
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form__input"
                  onChange={e => this.handleChange(e, "password")}
                  value={this.state.password}
                  placeholder="•••••"
                  minLength="5"
                  required
                />
              </div>
              <div className="form__group ma-bt-md">
                <label className="form__label" htmlFor="role">
                  {" "}
                  Role-:{" "}
                </label>
                <label>
                  <input
                    className="with-gap"
                    name="role"
                    type="radio"
                    onChange={e => this.handleChange(e, "role")}
                    value="admin"
                    required
                  />
                  <span className="checkmark">Admin</span>
                </label>
                <label className="right">
                  <input
                    className="with-gap"
                    name="role"
                    type="radio"
                    onChange={e => this.handleChange(e, "role")}
                    value="user"
                    required
                  />
                  <span className="checkmark">User</span>
                </label>
                {this.props.loginError ? (
                  <p
                    style={{
                      color: "red",
                      fontSize: 16,
                      fontWeight: "bold",
                      marginTop: "10px",
                      marginBottom: 0
                    }}
                  >
                    {this.props.loginError}
                  </p>
                ) : null}
              </div>
              <div className="form__group">
                <button type="submit" className="button button--green center">
                  Login
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginError: state.loginReducer.loginError
  };
};

export default connect(mapStateToProps, null)(Login);

