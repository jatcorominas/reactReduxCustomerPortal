
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateCustomer } from '../actions';
import './CustomerEdit.css';

class CustomerEdit extends React.Component {
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {                                                            
    event.preventDefault();
    const id = this.props.customer.id;
    const name = this.state.name ? this.state.name: this.props.customer.name;
    const age = this.state.age ? this.state.age : this.props.customer.age;
    const active = this.state.active ? this.state.active : this.props.customer.active;
    const customer = {id: id, name: name, age: age, active: active}
    this.props.updateCustomer(customer);
  };

  
  render() {
    return (
      <div className="CustomerEdit">
        <h1>Edit {this.props.customer.name}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" defaultValue={this.props.customer.name} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input type="text" name="age" defaultValue={this.props.customer.age} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="form-group">
            <label>Active</label>
            <input type="text" name="active" defaultValue={this.props.customer.active} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-success">Update</button>
            
            <Link to={{ pathname: `/customers/${this.props.customer.id}`, state: { customer: this.props.customer } }} className='btn btn-success'>  
            Cancel
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ customer: state.customer });

const mapDispatchToProps = { updateCustomer };

export default connect(mapStateToProps, mapDispatchToProps)(CustomerEdit);