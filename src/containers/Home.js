import React, { Component } from "react";
import "./Home.css";
import CustomerList from './CustomerList';

export default class Home extends Component {

  renderLander() {
    return (
      <div className="lander">
        <h1>Customers</h1>
        <p>A React-Redux Customer app by Jose Alfonso Corominas email: jatcorominas@gmail.com, cell: +1-647-618-2080</p>
      </div>
    );
  }

  renderCustomers() {
    return (
      <CustomerList />
    );
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderCustomers() : this.renderLander()}
      </div>
    );
  }
}

