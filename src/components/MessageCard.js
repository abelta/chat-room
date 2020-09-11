import React from 'react';
import classNames from 'classnames';
import { useQuery } from 'react-query';
import './MessageCard.css';

export default ({ user: { name, id }, content }) => {
  const { data: currentUser }  = useQuery('login');

  return (
    <div className={classNames('message-card', { 'mine': id === currentUser?.id })}>
      <strong>{name}:</strong>
      <span>{content}</span>
    </div>
  );
};
