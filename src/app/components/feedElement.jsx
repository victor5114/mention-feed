import React, { PropTypes } from 'react';

const FeedElement = (props) =>
  <div className="mention-feed-item social-mention unread-mention">
    <div className="left-zone">
      <span
        className="mnt-avatar mention-avatar"
        style={{ height: '34px', lineHeight: '34px', width: '34px' }}
      >
        <span
          className="mention-avatar-image"
          style={{ height: '34px', lineHeight: '34px', width: '34px' }}
        >
          <span
            className="mention-avatar-image-wrap"
            style={{ height: '34px', lineHeight: '34px', width: '500px', marginLeft: '-233px' }}
          >
            <img
              className="mention-avatar-image-img"
              style={{ maxHeight: '34px' }}
              src={props.info.picture_url}
              alt={`${props.info.picture_url}`}
            />
          </span>
          <div className="inside-circle" />
        </span>
      </span>
      <div className="unread-dot" />
    </div>
    <div className="top-zone">
      <div className="mention-sentiment-dot mention-tone-0">
        <i className="neutral" />
      </div>
      <div className="mention-date" />
    </div>
    <div className="middle-zone">
      <div className="mention-source-name">{props.info.source_name}</div>
      <div className="mention-title">{props.info.title}</div>
      <div className="mention-description">
        {props.info.description_short}
      </div>
    </div>
    <div className="right-zone" />
  </div>;

FeedElement.propTypes = {
  info: PropTypes.object.isRequired,
};

export default FeedElement;
