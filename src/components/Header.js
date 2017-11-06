import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fireLogout } from '../actions/auth'

const Header = ({ fireLogout }) => (
  <header className="header">
  <div className="content-container">
  <div className="header__content">
    <Link className="header__title" to="/dashboard">
      <h1>Expensify</h1>
    </Link>
    <button className="login-button button-link" onClick={fireLogout}>Logout</button>
    </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  fireLogout: () => dispatch(fireLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);