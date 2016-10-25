import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import LoginButton from './Auth/loginButton';

class Header extends Component {
  static propTypes = {
    pathname: PropTypes.string.isRequired,
    authenticated: PropTypes.bool.isRequired,
  }
  constructor(props) {
    super(props);
    this.disabled = false;
  }

  componentWillMount() {
    if (this.props.pathname === '/callback') {
      this.disabled = true;
    }
  }

  renderLinks() {
    if (this.props.authenticated) {
      // show a link to sign out
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/signout">Sign out</Link>
        </li>
      );
    }

    return (
      <li className="nav-item">
        <LoginButton disabled={this.disabled} />
      </li>
    );
  }

  render() {
    return (
      <div className="page-header">
        <div className="header-container">
          <Link className="nav-link" to="/lists"><i>Mention Feed</i></Link>
          <nav className="navbar navbar-light">
            <ul className="nav navbar-nav">
              {this.renderLinks()}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps, null)(Header);
