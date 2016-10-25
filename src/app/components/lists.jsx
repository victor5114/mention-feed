import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchAlertList } from '../actions';

class Lists extends Component {
  static propTypes = {
    fetchAlertList: PropTypes.func.isRequired,
    alertList: PropTypes.array,
  }

  constructor(props) {
    super(props);
    this.renderAlertList = this.renderAlertList.bind(this);
  }

  componentWillMount() {
    this.props.fetchAlertList();
  }

  renderAlertList() {
    return this.props.alertList.map(alert =>
      <li className="list-group-item" key={alert.id}>
        <Link to={`/lists/${alert.id}`}>{alert.name}</Link>
      </li>
    );
  }

  render() {
    // if (this.props.alertList.length === 0) {
    //   return <span>Loading alerts ...<span>
    // }

    return (
      <div className="row">
        <div className="col-xs-6 col-sm-3 col-md-3 col-lg-3">
          <ul className="list-group">
            {this.renderAlertList()}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { alertList: state.lists.alertList };
}

export default connect(mapStateToProps, { fetchAlertList })(Lists);
