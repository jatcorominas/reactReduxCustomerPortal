import React, { Component } from "react";
import './Info.css';
import CustomerInfo from './CustomerInfo';

export default class Add extends Component {

  renderLander() {
    return (
      <div className="lander">
        <h1>Customers</h1>
        <p>A React-Redux Customer app by Jose Alfonso Corominas email: jatcorominas@gmail.com, cell: +1-647-618-2080</p>
      </div>
    );
  }

  renderCustomerInfo() {
    return (
      <CustomerInfo customerId={this.props.match.params.id}/>
    );
  }

  render() {
    return (
      <div className="Info">
        {this.props.isAuthenticated ? this.renderCustomerInfo() : this.renderLander()}
      </div>
    );
  }
}