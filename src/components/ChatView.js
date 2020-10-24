import React from 'react'
import { Messages, Participants } from 'components'

export default () => (
  <div
    className="container flex mx-auto mt-10 overflow-hidden border shadow-2xl rounded-2xl"
    style={{ height: '600px' }}
  >
    <Messages className="flex-1 w-auto" />
    <Participants className="w-64" />
  </div>
)
