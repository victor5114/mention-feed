import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {

  static propTypes = {
    signoutUser: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return <div>Sorry to see you go...</div>;
  }
}

export default connect(null, actions)(Signout);
