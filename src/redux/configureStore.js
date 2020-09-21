import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import globalReducer from './globalReducer';
import userDetails from './userDetails';
import beneficiary from './beneficiary';

export default function configureStore(preloadedState) {
  return createStore(
    combineReducers({
      globalState: globalReducer,
      userDetails: userDetails,
      beneficiary: beneficiary
    }),
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        thunkMiddleware
      )
    )
  )
}