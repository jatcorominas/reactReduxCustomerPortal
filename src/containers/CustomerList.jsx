

import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./CustomerList.css";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


class CustomerList extends Component {
  render() {                                                        
    if(this.props.customers.length) {                                
      return (
        <div className="CustomerList">
          <PageHeader>Existing Customers</PageHeader>
          {this.props.customers.map(customer => {                     
            return (
              <ListGroup>
                <LinkContainer key={ customer.id} to={`/customers/${customer.id}`}>
                  <ListGroupItem header={customer.name}>
                    <p>{customer.age} {JSON.stringify(customer.active)}</p>
                  </ListGroupItem>
                </LinkContainer>
              </ListGroup>
            );
          })}
        </div>
      )    
    } else {
      return (<div className="CustomerList">No Customers</div>)
    }
  }
}

const mapStateToProps = (state) => ({ customers: state.customers }); 

export default connect(mapStateToProps)(CustomerList);              