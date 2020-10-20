import React from 'react'
// import { ReactQueryDevtools } from 'react-query-devtools'
import { ModalProvider } from 'react-modal-hook'
import { Input, LoginController, Logo, Messages, Participants } from './components'

export default () => {
  return (
    <ModalProvider>
      <div className="app">
        <Logo />
        <LoginController />
        <Participants />
        <Messages />
        <Input />
        {/* <ReactQueryDevtools /> */}
      </div>
    </ModalProvider>
  )
}
