import React, { useRef } from 'react'
import { FormButton, FormInput } from 'components'
import { useMutateLogin } from 'hooks'

export default () => {
  const inputName = useRef()
  const inputPassword = useRef()
  const mutate = useMutateLogin()

  return (
    <div
      className="relative flex items-center justify-center w-screen h-screen bg-black bg-opacity-50"
      data-testid="login-modal"
    >
      <div className="p-12 bg-gray-300 border border-gray-800 border-solid shadow-2xl rounded-2xl">
        <FormInput name="name">
          <input
            placeholder="Name"
            ref={inputName}
            tabIndex={0}
            data-testid="input-name"
          />
        </FormInput>
        <FormInput name="password">
          <input
            type="password"
            placeholder="Password"
            ref={inputPassword}
            data-testid="input-password"
          />
        </FormInput>
        <div className="flex justify-center mt-10">
          <FormButton
            onClick={() =>
              mutate({
                name: inputName.current.value,
                password: inputPassword.current.value,
              })
            }
          >
            LOG IN
          </FormButton>
        </div>
      </div>
    </div>
  )
}
