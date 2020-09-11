import React, { useLayoutEffect, useReducer, useRef } from 'react';
import { useQuery } from 'react-query';
import { getMessages } from '../api';
import messagesReducer, { addMessages } from './messagesReducer';
import MessageCard from './MessageCard';
import './Messages.css';

export default () => {
  const scrollRef = useRef();

  const [messages, dispatch] = useReducer(messagesReducer, []);

  // Configured for long polling.
  useQuery(
    'messages',
    async () => await getMessages(),
    {
      refetchInterval: 1000,
      onSuccess: data => dispatch(addMessages(data)),
    },
  );

  useLayoutEffect(
    () => scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    }),
    [messages],
  );

  return (
    <div
      className="messages"
      ref={scrollRef}
    >
      {
        messages && (
          <ul>
            {
              messages.map((message, i) => (
                <li key={i}>
                  <MessageCard {...message} />
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  );
};
