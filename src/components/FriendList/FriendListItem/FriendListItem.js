import React from 'react';
import PropTypes from 'prop-types';

import './FriendListItem.scss';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className="item">
      <span
        className="status"
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar: 'https://i.stack.imgur.com/l60Hf.png',
};

FriendListItem.protoTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};
export default FriendListItem;
