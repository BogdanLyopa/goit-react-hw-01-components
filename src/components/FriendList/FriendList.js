import React from 'react';
import FriendListItem from './FriendListItem/FriendListItem';
import './FriendList.scss';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return <FriendListItem key={friend.id} {...friend} />;
      })}
    </ul>
  );
};

export default FriendList;
