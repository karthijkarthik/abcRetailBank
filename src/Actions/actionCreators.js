import fetch from 'unfetch';

import { SET_CUSTOMER_ID, SET_PASSWORD, SET_LOGIN_ERROR, SET_USER_DETAILS } from '../Constants/ActionTypes';
import { changePage, toggleLoader, toggleLogedStatus } from './GlobalActions';
import { INVALID_USER, DASHBOARD } from '../Constants';

export const setCustomerId = (value) => ({
  type: SET_CUSTOMER_ID,
  payload: value
});

export const setPassword = (value) => ({
  type: SET_PASSWORD,
  payload: value
});

export const validateCustomer = () => (dispatch, getState) => {
  const { userDetails: { customerId, password, loginError } } = getState();
  dispatch(toggleLoader(true));
  
  return fetch(`http://localhost:3000/users/${customerId}`)
    .then(res => res.json())
    .then((result) => {
      if(Object.keys(result).length !== 0 && result.id === customerId && result.password === password) {
        dispatch(toggleLogedStatus(true));
        dispatch({ type: SET_USER_DETAILS, payload: result });
        dispatch(changePage(DASHBOARD));
        if(loginError !=='') {
          dispatch({ type: SET_LOGIN_ERROR, payload: '' });
        }
      } else {
        dispatch({ type: SET_LOGIN_ERROR, payload: INVALID_USER });
      }
      dispatch(toggleLoader(false));
    })
}

export const addBeneficiary = () => {
  console.log('Add Beneficiary');
}

export const updateBeneficiary = () => {
  console.log('Update Beneficiary');
}

export const deleteBeneficiary = () => {
  console.log('Delete Beneficiary');
}