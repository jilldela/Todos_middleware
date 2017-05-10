import merge from 'lodash/merge';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';

const initialState = ['this'];

export const errorReducer = (state = [], action) => {


  switch (action.type) {
    case RECEIVE_ERRORS:
      console.log("RECEIVE_ERRORS");
      let newState = [];
      newState.push(action.errors);
      return newState;
    // case CLEAR_ERRORS:
    //   newState = [];
    //   return newState;
    default:
      console.log("DEFAULT");
      return state;
  }
};
