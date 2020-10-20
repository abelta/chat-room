import React, { useEffect, useReducer, useRef } from 'react'
import { useQuery } from 'react-query'
import { getMessages } from '../api'
import messagesReducer, { addMessages } from './messagesReducer'
import MessageCard from './MessageCard'
import './Messages.css'

const REFETCH_INTERVAL = 500

export default () => {
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
      className="messages"
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
