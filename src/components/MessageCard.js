import React from 'react';
import classNames from 'classnames';

export default ({ user: { name, id }, content }) => (
  <div className={classNames('message-card', { 'mine': id === currentUser.id })}>
    <strong>{name}:</strong>
    <span>{content}</span>
  </div>
);
