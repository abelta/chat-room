import React from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';
import { useQuery } from 'react-query';
import { logIn } from './api';
import { Input, Messages, Participants } from './components';

export default () => {
  useQuery('login', async () => await logIn());
  return (
    <div className="app">
      <h1>CHAT!</h1>
      <Participants />
      <Messages />
      <Input />
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}
