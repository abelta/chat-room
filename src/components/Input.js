import React, { useRef } from 'react'
import { useMutation, useQuery } from 'react-query'
import { postMessage } from '../api'
import './Input.css'

export default () => {
  const input = useRef()

  const { data: user } = useQuery('login')

  const [mutate] = useMutation(content => postMessage({ user, content }))

  return (
    <div className="input">
      <input
        className="input__text"
        disabled={!user}
        ref={input}
      />
      <button
        className="input__button"
        disabled={!user}
        onClick={() => {
          const content = input.current.value
          if (content === undefined) return
          mutate(content)
          input.current.value = ''
        }}
      >
        SEND
      </button>
    </div>
  )
}
