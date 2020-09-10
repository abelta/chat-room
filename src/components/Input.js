import React, { useRef } from 'react';
import { useMutation } from 'react-query';
import { postMessage } from '../api';
import './Input.css';

export default () => {
  const input = useRef();

  const user = { id: 999, name: 'YOU' };

  const [mutate] = useMutation(async content => await postMessage({ user, content }));

  return (
    <div className="input">
      <input
        className="input__text"
        ref={input}
      />
      <button
        className="input__button"
        onClick={() => {
          const content = input.current.value;
          if (content === undefined) return;
          mutate(content);
          input.current.value = '';
        }}
      >
        SEND
      </button>
    </div>
  );
};
