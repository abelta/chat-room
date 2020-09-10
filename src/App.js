import React from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';
import { Input, Messages, Participants } from './components';

function App() {
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

export default App;
