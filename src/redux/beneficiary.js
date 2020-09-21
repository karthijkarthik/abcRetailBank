import { SET_BENEFICIARY } from '../Constants/ActionTypes';

export const initialState = {
  beneficiaries: []
};

export const beneficiary = ( state = initialState, action = {}) => {
  console.log(action);
  switch (action.type) {
    case SET_BENEFICIARY:
      return {
        ...state,
        beneficiaries: action.payload
      };

    default:
      return state
  }
};

export default beneficiary
