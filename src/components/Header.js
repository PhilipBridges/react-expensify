import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fireLogout } from '../actions/auth'

const Header = ({ fireLogout }) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <button onClick={fireLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  fireLogout: () => dispatch(fireLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);