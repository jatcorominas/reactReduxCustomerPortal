

import { combineReducers } from 'redux';
import customers from './customersReducer';
import customer from './customerReducer';

export default combineReducers({
	customers: customers,
	customer: customer,
});