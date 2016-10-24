import React, { Component, PropTypes } from 'react';
import { isString } from 'lodash';
import { connect } from 'react-redux';

import { getToken } from '../../actions';

class CallbackHandler extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    getToken: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.callbackError = null;
  }

  componentWillMount() {
    if (!this.props.location.query.code || !isString(this.props.location.query.code)) {
      this.callbackError = 'Error callback. Please retry to connect';
    }

    this.code = this.props.location.query.code;
  }

  componentDidMount() {
    this.props.getToken(this.code);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.errorMessage !== '') {
      this.callbackError = nextProps.errorMessage;
    }
  }

  render() {
    if (this.callbackError) {
      return (
        <span><b>{this.callbackError}</b></span>
      );
    }

    return (
      <div className="loader-center">
        <div className="uil-spin-css" style={{ WebkitTransform: 'scale(0.6)' }}>
          <div><div /></div>
          <div><div /></div>
          <div><div /></div>
          <div><div /></div>
          <div><div /></div>
          <div><div /></div>
          <div><div /></div>
          <div><div /></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('MAPSTATE');
  console.log(state);
  return { errorMessage: state.auth.error };
}

export default connect(mapStateToProps, { getToken })(CallbackHandler);
