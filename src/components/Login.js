import React from 'react';
import { connect } from 'react-redux';
import { fireLogin } from '../actions/auth'

export const Login = ({ fireLogin }) => (
      <div className="box-layout">
      <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
    <p>Your budget under your control.</p>
      <button className="login-button" onClick={fireLogin}>Login with Google</button>
      </div>
      </div>
);

const mapDispatchToProps = (dispatch) => ({
  fireLogin: () => dispatch(fireLogin())
});
export default connect(undefined, mapDispatchToProps)(Login);