import React, { useRef } from 'react'
import classNames from 'classnames'
import { MessageCard } from 'components'
import { useKeepScrollAtBottom, useMessages } from 'hooks'

export default ({ className }) => {
  const scrollRef = useRef()
  const messages = useMessages()
  useKeepScrollAtBottom(scrollRef, [messages])

  return (
    <section
      className={classNames('p-6 bg-gray-100 overflow-y-scroll', className)}
      ref={scrollRef}
      data-testid="messages"
    >
      {messages.map((message, i) => (
        <MessageCard key={i} {...message} />
      ))}
    </section>
  )
}
