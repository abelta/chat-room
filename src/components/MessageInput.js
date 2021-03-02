import React, { useRef } from 'react'
import { FormInput, FormButton } from 'components'
import { useCurrentUser, useMutatePostMessage } from 'hooks'

export default () => {
  const input = useRef()
  const button = useRef()
  const user = useCurrentUser()
  const mutate = useMutatePostMessage()

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
          if (content === '') return
          mutate({ user, content })
          input.current.value = ''
        }}
        ref={button}
      >
        SEND
      </FormButton>
    </section>
  )
}
