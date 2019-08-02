import {GET_LOCATION} from '../actions/user_actions';

export default function loginReducer(state = [], action){
  switch (action.type) {
    case GET_LOCATION:
      return action.payload.storeName;
    default:
      return state;
  }
}
