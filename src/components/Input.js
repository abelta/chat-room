import React, { useRef } from 'react'
import { useMutation, useQuery } from 'react-query'
import { postMessage } from '../api'
import './Input.css'

export default () => {
  const input = useRef()
  const button = useRef()

  const { data: user } = useQuery('login')

  const [mutate] = useMutation(content => postMessage({ user, content }))

  return (
    <section className="input">
      <input
        className="input__text"
        disabled={!user}
        ref={input}
        onKeyUp={({ key }) => key === 'Enter' && button.current.click()}
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
        ref={button}
      >
        SEND
      </button>
    </section>
  )
}
