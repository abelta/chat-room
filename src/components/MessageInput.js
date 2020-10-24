import React, { useRef } from 'react'
import { useMutation, useQuery } from 'react-query'
import { postMessage } from 'api'
import { FormInput, FormButton } from 'components'

export default () => {
  const input = useRef()
  const button = useRef()

  const { data: user } = useQuery('login')

  const [mutate] = useMutation(content => postMessage({ user, content }))

  return (
    <section className="container flex p-0 mx-auto mt-4">
      <FormInput className="flex-1 w-auto">
        <input
          className="flex-1 w-auto"
          disabled={!user}
          ref={input}
          onKeyUp={({ key }) => key === 'Enter' && button.current.click()}
        />
      </FormInput>
      <FormButton
        className="ml-4"
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
      </FormButton>
    </section>
  )
}
