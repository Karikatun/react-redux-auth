import { handleActions } from 'redux-actions';

const initialState = {};

export default handleActions({
  ADD_USER(state, action) {
    return action.payload;
  },
  RESET_USER() {
    return initialState;
  },
}, initialState);