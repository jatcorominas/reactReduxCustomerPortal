import React, { Component } from "react";
import './Add.css';
import CustomerAdd from './CustomerAdd';

export default class Add extends Component {

 renderLander() {
    return (
      <div className="lander">
        <h1>Customers</h1>
        <p>A React-Redux Customer app by Jose Alfonso Corominas email: jatcorominas@gmail.com, cell: +1-647-618-2080</p>
      </div>
    );
  }

  renderCustomerAdd() {
    return (
      <CustomerAdd />
    );
  }

  render() {
    return (
      <div className="Add">
        {this.props.isAuthenticated ? this.renderCustomerAdd() : this.renderLander()}
      </div>
    );
  }
}
