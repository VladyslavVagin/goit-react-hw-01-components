import React from 'react';
import css from './FriendListItem.module.css';
import clsx from 'clsx';

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

export default FriendListItem;
