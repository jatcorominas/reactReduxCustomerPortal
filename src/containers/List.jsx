import React, { Component } from "react";
import './List.css';
import CustomerList from './CustomerList';

export default class Add extends Component {

  renderLander() {
    return (
      <div className="lander">
        <h1>Customers</h1>
        <p>A React-Redux Customer app by Jose Alfonso Corominas email: jatcorominas@gmail.com, cell: +1-647-618-2080</p>
      </div>
    );
  }

  renderCustomerList() {
    return (
      <CustomerList />
    );
  }

  render() {
    return (
      <div className="Add">
        {this.props.isAuthenticated ? this.renderCustomerList() : this.renderLander()}
      </div>
    );
  }
}