import React from 'react'
import { ReactQueryDevtools } from 'react-query-devtools'
import { ModalProvider } from 'react-modal-hook'
import { Input, LoginController, Messages, Participants } from './components'

export default () => {
  return (
    <ModalProvider>
      <div className="app">
        <h1>CHAT!</h1>
        <LoginController />
        <Participants />
        <Messages />
        <Input />
        <ReactQueryDevtools />
      </div>
    </ModalProvider>
  )
}
