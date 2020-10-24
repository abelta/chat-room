import React from 'react'
import classNames from 'classnames'
import { useQuery } from 'react-query'

export default ({ user: { name, id }, content }) => {
  const { data: currentUser }  = useQuery('login')

  return (
    <article
      className={classNames(
        'text-gray-800 my-4',
        { 'font-bold text-red-500': id === currentUser?.id }
      )}
    >
      <span className="mr-4 font-bold">{name}:</span>
      <span>{content}</span>
    </article>
  )
}
