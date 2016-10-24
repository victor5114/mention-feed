import React, { Component, PropTypes } from 'react';

import LoginButton from './Auth/loginButton';

class Header extends Component {
  static propTypes = {
    pathname: PropTypes.string.isRequired,
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

  render() {
    return (
      <div className="page-header">
        <div className="header-container">
          <h1>Mention dev test</h1>
          <nav className="navbar navbar-light">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <LoginButton disabled={this.disabled} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
