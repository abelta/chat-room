import React, { useEffect, useReducer, useRef } from 'react'
import { useQuery } from 'react-query'
import classNames from 'classnames'
import { getMessages } from 'api'
import messagesReducer, { addMessages } from './messagesReducer'
import { MessageCard } from 'components'

const REFETCH_INTERVAL = 500

export default ({ className }) => {
  const scrollRef = useRef()

  const [messages = [], dispatch] = useReducer(messagesReducer, [])

  // Long polling for messages.
  useQuery(
    'messages',
    async ({ data: messages = [] }) => await getMessages(),
    {
      refetchInterval: REFETCH_INTERVAL,
      onSuccess: data => dispatch(addMessages(data)),
    },
  )

  // Always scrolls to bottom.
  useEffect(
    () => scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    }),
    [messages],
  )

  return (
    <section
      className={classNames('p-6 bg-gray-100 overflow-y-scroll', className)}
      ref={scrollRef}
    >
      {
        messages.map((message, i) => (
          <MessageCard
            key={i}
            {...message}
          />
        ))
      }
    </section>
  )
}
