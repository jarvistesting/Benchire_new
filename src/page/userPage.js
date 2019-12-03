import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/Sidebar";
import Profile from "../components/Profile";
import "../css/style.css";

export class userPage extends Component {
  render() {
    return (
      <div className="userPage">
        <Header />
        <main className="main">
          <div className="user-view">
            <SideBar fromPage="user" />
            <Profile fromPage="user" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default withRouter(userPage);
