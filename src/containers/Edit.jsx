import React, { Component } from "react";
import './Edit.css';
import CustomerEdit from './CustomerEdit';

export default class Edit extends Component {

  renderLander() {
    return (
      <div className="lander">
        <h1>Customers</h1>
        <p>A React-Redux Customer app by Jose Alfonso Corominas email: jatcorominas@gmail.com, cell: +1-647-618-2080</p>
      </div>
    );
  }

  renderCustomerEdit() {
    return (
      <CustomerEdit />
    );
  }

  render() {
    return (
      <div className="Edit">
        {this.props.isAuthenticated ? this.renderCustomerEdit() : this.renderLander()}
      </div>
    );
  }
}