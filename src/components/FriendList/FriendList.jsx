import React from 'react';
import css from './FriendList.module.css'
import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = (friends) => {
  return (
    <div>
      <ul className={css.friendList}>
      {friends.map(friend => FriendListItem(friend))}
      </ul>
    </div>
  );
};

export default FriendList;
