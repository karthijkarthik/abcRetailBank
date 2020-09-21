import React from 'react';
import { connect } from 'react-redux';

import LoginForm from './components/Login';
import Dashboard from './components/Dashboard';
import Beneficiary from './components/Beneficiary';
import Spinner from './components/Spinner';
import TransactionHistory from './components/TransactionHistory';
import Sidebar from './components/Sidebar';

import './App.css';

const ComponentList = {
  LoginForm: LoginForm,
  Dashboard: Dashboard,
  Beneficiary: Beneficiary,
  TransactionHistory: TransactionHistory
};

export const App = ({
  globalState
}) => {
  const { isLoading, isLoggedIn, currentPage } = globalState;
  const Component = ComponentList[currentPage];

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img src={require("./assets/logo.png")} className="App-logo" alt="logo" />
          <span>ABC Retail Bank</span>
        </div>
      </header>
      
      <div className="container">
        {isLoggedIn && <Sidebar />}
        {isLoading && <Spinner />}
        <Component />
      </div>
    </div>
  );
}

export const mapStateToProps = state => ({
  globalState: state.globalState
});

export default connect(
  mapStateToProps,
  null
)(App);
