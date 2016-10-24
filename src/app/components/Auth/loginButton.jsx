/* eslint camelcase: "off"*/
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import config from '../../config';

class LoginButton extends Component {

  static propTypes = {
    auth: PropTypes.object.isRequired,
    disabled: PropTypes.bool.isRequired,
  };

  login() {
    const { baseUrl, client_id, redirect_uri } = config;
    window.location = `${baseUrl}/authorize?
      client_id=${client_id}&
      redirect_uri=${redirect_uri}&
      response_type=code`;
  }

  render() {
    if (!this.props.auth.authenticated) {
      return (
        <button
          onClick={() => { this.login(); }}
          className="btn btn-primary"
          disabled={this.props.disabled}
        >Login</button>
      );
    }

    return (<div />);
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, null)(LoginButton);
