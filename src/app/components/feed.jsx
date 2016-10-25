import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchFeedList } from '../actions';
import FeedElement from './feedElement';

class Feed extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    feedList: PropTypes.array,
    fetchFeedList: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.renderFeedElement = this.renderFeedElement.bind(this);
  }

  componentWillMount() {
    this.props.fetchFeedList(this.props.params.alert_id);
  }

  renderFeedElement() {
    return this.props.feedList.map(feedElem => <FeedElement key={feedElem.id} info={feedElem} />);
  }

  render() {
    return (
      <div className="alert-panel-feed flex-display flex-column" id="list-panel">
        <div className="mnt-AbsoluWrap feed-wrapper flex-grow">
          <div className="wrapper">
            <div className="infini-wrap mnt-alert-feed bulk-edit-parent">
              <div className="mnt-alert-feed-slice" style={{ position: 'relative' }}>
                {this.renderFeedElement()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { feedList: state.lists.feedList };
}

export default connect(mapStateToProps, { fetchFeedList })(Feed);
