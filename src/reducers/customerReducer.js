
import { RECEIVE_CUSTOMER , UPDATE_CUSTOMER} from '../actions';

export default function customerReducer(state = {}, action) {  //1
  switch (action.type) {
    case RECEIVE_CUSTOMER:                                     //2
      return action.customer;
    case UPDATE_CUSTOMER:
      return state;
    default:
      return state;
  }
};