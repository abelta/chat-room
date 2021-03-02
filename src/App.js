import React from 'react'
// import { ReactQueryDevtools } from 'react-query-devtools'
import { ModalProvider } from 'react-modal-hook'
import {
  ChatView,
  Header,
  LoginController,
  MessageInput,
  Watermark,
} from 'components'

export default () => {
  return (
    <ModalProvider>
      <div className="absolute w-screen h-screen subpixel-antialiased bg-gray-600 justify-items-center">
        <Header />
        <LoginController />
        <ChatView />
        <MessageInput />
        <Watermark />
        {/* <ReactQueryDevtools /> */}
      </div>
    </ModalProvider>
  )
}
