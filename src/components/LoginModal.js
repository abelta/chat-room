import React, { useRef } from 'react';
import { useMutation, useQueryCache } from 'react-query';
import { logIn } from '../api';

export default () => {
  const inputName = useRef();

  const inputPassword = useRef();

  const queryCache = useQueryCache();

  const [mutate] = useMutation(
    (name, password) => logIn({ name, password }),
    {
      onSuccess: data => queryCache.setQueryData(
        'login',
        () => data,
        { cacheTime: 'Infinity', staleTime: 'Infinity' },
      ),
    },
  );

  return (
    <div className="login-modal">
      <span>Name:</span>
      <input ref={inputName} />
      <span>Password:</span>
      <input
        type="password"
        ref={inputPassword}
      />
      <button
        onClick={() => {
          mutate(
            inputName.current.value,
            inputPassword.current.value,
        )}}
      >
        LOG IN
      </button>
    </div>
  )
};
