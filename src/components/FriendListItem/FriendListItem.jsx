import React from 'react';
import css from './FriendListItem.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const FriendListItem = friend => {
    const {avatar, name, id, isOnline} = friend;
  return (
    <li className={css.item} key={id}>
      <span className={clsx(css.status, isOnline === true ? css.online : css.offline)}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="{name} avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
