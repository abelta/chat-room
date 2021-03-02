import React from 'react'

export default ({ avatar, name }) => (
  <article className="block mb-2" data-testid="participant-card">
    <img
      className="inline object-center w-8 h-8 border border-gray-900 border-solid rounded-full"
      src={avatar}
      alt={name}
      data-testid="participant-card-avatar"
    />
    <span
      className="inline ml-2 font-sans font-semibold text-white"
      data-testid="participant-card-name"
    >
      {name}
    </span>
  </article>
)
