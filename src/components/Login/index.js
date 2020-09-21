import React from 'react';
import { connect } from 'react-redux';
import { Grid, TextField, Button } from '@material-ui/core';

import './login.css';

import {
  setPassword,
  setCustomerId,
  validateCustomer
} from '../../Actions/actionCreators';

export const Login = ({
  userDetail,
  dispatchSetPassword,
  dispatchSetCustomerId,
  dispatchValidateCustomer
}) => {
  const { customerId, password, loginError } = userDetail;

  return (
    <div className="loginContainer">
      <span className="welcomeText">Welcome to ABC e-Banking Login</span>
      <span className="loginHintText">Please enter your Customer ID and Password to login</span>
      <Grid container justify="center">
        <Grid item md={true} sm={true} xs={true}>
          <TextField 
              id="customerId" 
              label="Customer ID" 
              type="text" 
              fullWidth 
              required
              value={customerId}
              error={loginError !==''}
              onChange={(event) => {
                dispatchSetCustomerId(event.target.value);
              }} />
        </Grid>
      </Grid>
      <Grid container justify="center" style={{ marginTop: '10px' }}>
        <Grid item md={true} sm={true} xs={true}>
          <TextField 
              id="password" 
              label="Password" 
              type="password" 
              fullWidth 
              required
              value={password}
              error={loginError !==''}
              onChange={(event) => {
                dispatchSetPassword(event.target.value);
              }} />
        </Grid>
      </Grid>
      <Grid container justify="center" style={{ marginTop: '20px' }}>
        <Button 
            variant="contained" 
            color="primary"
            disabled={(customerId === '' || password === '')}
            onClick={() => dispatchValidateCustomer()}
        >Login</Button>
      </Grid>
    </div>
  );
}

export const mapStateToProps = state => ({
  userDetail: state.userDetails
});

const mapDispatchToProps = {
  dispatchSetPassword: setPassword,
  dispatchSetCustomerId: setCustomerId,
  dispatchValidateCustomer: validateCustomer
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);