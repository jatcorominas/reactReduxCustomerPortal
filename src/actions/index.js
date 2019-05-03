                                          
import history from '../history';

export const RECEIVE_CUSTOMERS = 'GET_CUSTOMERS';      
export const ADD_CUSTOMER = 'ADD_CUSTOMER';    
export const RECEIVE_CUSTOMER = 'RECEIVE_CUSTOMER';
export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';     
export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';
export const REPLACE_CUSTOMER = 'REPLACE_CUSTOMER';      

const apiUrl = 'http://localhost:8090/api/customers';   

const receiveCustomers = (data) => ({
  type: RECEIVE_CUSTOMERS,
  customers: data,
});                  


export const getCustomers = () => {
  return (dispatch) => {
    return fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        dispatch(receiveCustomers(data));
      })
      .catch(error => { 
        throw(error); 
      });
  };
};

export const addCustomer = ({ name, age }) => {                                                      
  return (dispatch) => {
    return fetch('http://localhost:8090/api/customers/create', {

          method: 'POST',
          body: JSON.stringify({
            name: name,
            age:  age,
            
          }),
            
           
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
    	.then(response =>response.json())                                                
      .then(data => {
        dispatch({type: ADD_CUSTOMER, payload: data});
      })
      .then(() => {
        history.push("/customers")                                                                        
      })
      .catch(error => { throw(error) });
  };
};

export const getCustomer = (id) => {
  return (dispatch) => {
    return fetch('http://localhost:8090/api/customers/' + id, {
        method: 'GET'
      })
      .then(response =>response.json())
      .then(data => {
        dispatch({type: RECEIVE_CUSTOMER, customer: data});
      })
      .catch(error => { 
        throw(error); 
      });
  };
};


export const deleteCustomer = (id) => {
  return (dispatch) => {
    return fetch('http://localhost:8090/api/customers/' + id, {
          method: 'DELETE'
      })
      .then(response => {
        dispatch({type: REMOVE_CUSTOMER, payload: {id}})
      })
      .then(() => {
        history.push("/customers")
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const updateCustomer = (customer) => { 
const customerId = customer.id;
  return (dispatch) => {
    return fetch('http://localhost:8090/api/customers/' + customer.id, {
        method: 'PUT',
        body: JSON.stringify({
        
          name: customer.name,
          age:  customer.age,
          active: customer.active
        }),
        headers: {
               "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response =>response.json())
      .then(data => {
        dispatch({type: UPDATE_CUSTOMER, payload: data})
        dispatch({type: REPLACE_CUSTOMER, payload: data})
      })
      .then(() => {
        history.push(`/customers/${customerId}`)
      })
      .catch(error => { throw(error) });
  };
};

