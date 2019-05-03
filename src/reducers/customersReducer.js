import { RECEIVE_CUSTOMERS , ADD_CUSTOMER, REMOVE_CUSTOMER, REPLACE_CUSTOMER  } from '../actions';

const initialState = { articles: [] }
export default function customersReducer(state = initialState, action) {  
  switch (action.type) {
    case RECEIVE_CUSTOMERS:                                               
      return action.customers;
    case ADD_CUSTOMER:
      return [action.payload, ...state]
    case REMOVE_CUSTOMER:
      return state.filter(customer=> customer.id !== action.payload.id);
    case REPLACE_CUSTOMER:
      return state.map((customer) => {
        if (customer.id === action.payload.id) {
          return {
            ...customer,
            name: action.payload.name,
            age: action.payload.age,
            active: action.payload.active,
          }
        } else return customer;
      })
      
    default:                                                            
      return state;
  }
}
