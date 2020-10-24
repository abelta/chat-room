import React from 'react'
// import { ReactQueryDevtools } from 'react-query-devtools'
import { ModalProvider } from 'react-modal-hook'
import { ChatView, Header, LoginController, MessageInput } from 'components'

export default () => (
  <ModalProvider>
    <div className="absolute w-screen h-screen subpixel-antialiased bg-gray-600 justify-items-center">
      <Header />
      <LoginController />
      <ChatView />
      <MessageInput />
      {/* <ReactQueryDevtools /> */}
    </div>
  </ModalProvider>
)
