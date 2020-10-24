import React, { useRef } from 'react'
import { useMutation, useQueryCache } from 'react-query'
import { logIn } from 'api'
import { FormButton, FormInput } from 'components'

export default () => {
  const inputName = useRef()

  const inputPassword = useRef()

  const queryCache = useQueryCache()

  const [mutate] = useMutation(
    (name, password) => logIn({ name, password }),
    {
      onSuccess: data => queryCache.setQueryData(
        'login',
        () => data,
        { cacheTime: 'Infinity', staleTime: 'Infinity' },
      ),
    },
  )

  return (
    <div className="relative flex items-center justify-center w-screen h-screen bg-black bg-opacity-50">
      <div className="p-12 bg-gray-300 border border-gray-800 border-solid shadow-2xl rounded-2xl">
        <FormInput name="name">
          <input
            placeholder="Name"
            ref={inputName}
            tabIndex={0}
          />
        </FormInput>
        <FormInput name="password">
          <input
            type="password"
            placeholder="Password"
            ref={inputPassword}
          />
        </FormInput>
        <div className="flex justify-center mt-10">
          <FormButton
            onClick={() => mutate(
              inputName.current.value,
              inputPassword.current.value,
            )}
          >
            LOG IN
          </FormButton>
        </div>
      </div>
    </div>
  )
}
