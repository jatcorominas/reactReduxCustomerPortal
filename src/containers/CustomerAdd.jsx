
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCustomer } from '../actions';             
import './CustomerAdd.css';         

class CustomerAdd extends React.Component {
  state = { name: '', age: '' };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addCustomer(this.state);                               
  };

  render() {
    return (

      <div className="CustomerAdd">
        <h4>Add Customer</h4>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <input type="text" name="name" required value={this.state.name} onChange={this.handleChange} 
              className="form-control" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="text" name="age" required value={this.state.age} onChange={this.handleChange} 
              className="form-control" placeholder="Age" />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-success">Create</button>
            <Link to={{ pathname: `/`}} className='btn btn-success'>  
            Cancel
            </Link>
          </div>
        </form>
      </div>

    );
  }
}

const mapDispatchToProps = { addCustomer };                     

export default connect(null, mapDispatchToProps)(CustomerAdd); 