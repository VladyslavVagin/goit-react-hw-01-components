import React from 'react';
import css from './FriendList.module.css'
import FriendListItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

const FriendList = (friends) => {
  return (
    <div>
      <ul className={css.friendList}>
      {friends.map(friend => FriendListItem(friend))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
