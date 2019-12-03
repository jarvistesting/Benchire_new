import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import categoryJson from "../categoryData.json/category.json";
import axiosInstance from "../config/axiosConfig";

let userData = [];
class Profile extends Component {
  state = {
    selectedCategory: "capsules",
    categoryDetail: [],
    showLoading: true
  };

  componentDidMount() {
    userData = [{ ...JSON.parse(localStorage.getItem("userDetail")) }];
    this.fetchCategoryData();
  }

  fetchCategoryData = async (category = "capsules") => {
    try {
      const categoryDetail = await axiosInstance.get(`${category}`);
      this.setState({
        categoryDetail: [...categoryDetail.data],
        showLoading: false
      });
    } catch (err) {
      console.log("categories fetching error", err.message);
      this.setState({ categoryDetail: [], showLoading: false });
    }
  };

  handleCategoryChange = e => {
    this.setState({ selectedCategory: e.target.value, showLoading: true }, () =>
      this.fetchCategoryData(this.state.selectedCategory)
    );
  };

  renderSelectCategory = () => {
    let options = [];
    options = categoryJson.categories.map((category, index) => {
      return (
        <option key={index} value={`${category.value}`}>
          {category.title}
        </option>
      );
    });
    return options;
  };

  render() {
    return !this.props.location.state ||
      this.props.location.state.from === "profile" ? (
      <div className="user-view__content">
        <div
          className="user-view__form-container"
          style={{ width: "100%", maxWidth: "inherit", textAlign: "center" }}
        >
          <h2 className="heading-secondary ma-bt-md">Your Profile View</h2>
          <table className="striped" style={{ fontSize: "20px" }}>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((item, index) => {
                return (
                  <tr key={`profile-${index}`}>
                    <td>{item.fname}</td>
                    <td>{item.lname}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    ) : (
      <div className="user-view__content">
        <div
          className="user-view__form-container"
          style={{ width: "100%", maxWidth: "inherit", textAlign: "center" }}
        >
          <h1 style={{ textAlign: "center" }}>Categories</h1>
          <select
            style={{
              display: "block",
              fontSize: "14px",
              height: "35px",
              border: "1px solid gray",
              width: "50%",
              margin: "0 auto",
              marginBottom: "50px"
            }}
            value={this.state.selectedCategory}
            onChange={e => this.handleCategoryChange(e)}
          >
            {this.renderSelectCategory()}
          </select>
          {this.state.showLoading ? (
            <h1>Loading ...</h1>
          ) : this.state.categoryDetail.length ? (
            <div style={{ height: "300px", overflow: "scroll" }}>
              <table className="striped" style={{ fontSize: "20px" }}>
                <thead>
                  <tr>
                    {categoryJson[`${this.state.selectedCategory}`].map(
                      (item, index) => {
                        return item.tableHeading.map((val, key) => {
                          return (
                            <th key={`heading_${key}`}>
                              <div
                                style={{
                                  position: "absolute",
                                  marginTop: "-40px"
                                }}
                              >
                                {val}
                              </div>
                            </th>
                          );
                        });
                      }
                    )}
                  </tr>
                </thead>
                <tbody>
                  {this.state.categoryDetail.map((item, index) => {
                    return (
                      <tr key={`profile-${index}`}>
                        {categoryJson[`${this.state.selectedCategory}`].map(
                          value => {
                            return value.tableValue.map((val, key) => {
                              return (
                                <td
                                  key={`tablevalue-${key}-${index}`}
                                  id={`tablevalue-${key}-${index}`}
                                >
                                  {item[val]}
                                </td>
                              );
                            });
                          }
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);
