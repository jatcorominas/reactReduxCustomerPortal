

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCustomer, deleteCustomer} from '../actions';
import './CustomerInfo.css';

class CustomerInfo extends Component {
  componentDidMount() {                                                         
    this.props.getCustomer(this.props.customerId);
  }

  render() {
    const customer = this.props.customer;
    return (
      <div className="CustomerInfo">
        <h1>Customer Information</h1>
        <h2>{customer.id}: {customer.name}</h2>
        <p>{customer.age} {JSON.stringify(customer.active)}</p>
        <div className="text-center">
          <Link to={{ pathname: `/customers/${customer.id}/edit`, state: { customer: customer } }} className='btn btn-success'>  
            Edit
          </Link>
          <button className="btn btn-success" type="button" onClick={() => this.props.deleteCustomer(customer.id)}>         
            Delete
          </button>
          <Link to="/customers" className="btn btn-success">Close</Link>                                                 
        </div>
        <hr/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ customer: state.customer });                 

const mapDispatchToProps = { getCustomer, deleteCustomer };                        

export default connect(mapStateToProps, mapDispatchToProps)(CustomerInfo);        