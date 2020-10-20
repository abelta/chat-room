import React from 'react'
import './ParticipantCard.css'

export default ({ avatar, name }) => (
  <div className="participant-card">
    <img
      className="participant-card__avatar"
      src={avatar}
      alt={name}
    />
    <span>{name}</span>
  </div>
)
