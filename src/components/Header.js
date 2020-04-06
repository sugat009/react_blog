import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>React Blog</h1>
        </Link>
        <span className="white-text">{JSON.parse(localStorage.getItem('user')).email}</span>
        <button className="button button--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispath) => ({
  startLogout: () => dispath(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
