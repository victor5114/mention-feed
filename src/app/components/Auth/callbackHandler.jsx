import React, { Component, PropTypes } from 'react';
import { isString } from 'lodash';
import { connect } from 'react-redux';

import { getToken } from '../../actions';

class CallbackHandler extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    getToken: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.callbackError = null;
    console.log(props.location.query);
  }

  componentWillMount() {
    if (!this.props.location.query.code || !isString(this.props.location.query.code)) {
      this.callbackError = 'Error callback. Please retry to connect';
      console.error(this.callbackError);
    }

    this.code = this.props.location.query.code;
  }

  componentDidMount() {
    console.log(this.code);
    this.props.getToken(this.code);
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

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, { getToken })(CallbackHandler);
