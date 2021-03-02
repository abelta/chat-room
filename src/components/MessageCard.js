import React from 'react'
import classNames from 'classnames'
import { useCurrentUser } from 'hooks'

export default ({ user: { name, id }, content }) => {
  const currentUser = useCurrentUser()

  return (
    <article
      className={classNames('text-gray-800 my-4', {
        'font-bold text-red-500': id === currentUser?.id,
      })}
      data-testid="message-card"
    >
      <span className="mr-4 font-bold">{name}:</span>
      <span>{content}</span>
    </article>
  )
}
