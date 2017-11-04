import React from 'react';
import { connect } from 'react-redux';
import { fireLogin } from '../actions/auth'

export const Login = ({ fireLogin }) => (
      <div>
          <button onClick={fireLogin}>Login</button>
      </div>
);

const mapDispatchToProps = (dispatch) => ({
  fireLogin: () => dispatch(fireLogin())
});
export default connect(undefined, mapDispatchToProps)(Login);