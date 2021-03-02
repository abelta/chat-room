import React from 'react'
import { render, screen, wait } from '@testing-library/react'
import { Messages } from 'components'
import { useKeepScrollAtBottom, useMessages } from 'hooks'

jest.mock('../hooks/useKeepScrollAtBottom', () => jest.fn())
jest.mock('../hooks/useMessages', () => jest.fn())

describe('Messages', () => {
  beforeEach(() => {
    const messages = [
      { user: { id: 1, name: 'Alberto' }, content: 'nada' },
      { user: { id: 1, name: 'Alberto' }, content: 'hola' },
      { user: { id: 1, name: 'Alberto' }, content: 'adios' },
    ]
    useMessages.mockImplementation(() => messages)
  })
  describe('messages displayed', () => {
    it('has same number of messages as they are available at the time', () => {
      render(<Messages />)
      expect(screen.getAllByTestId('message-card')).toHaveLength(3)
    })
  })

  describe('scroll is always kept at bottom', () => {
    it('calls useKeepScrollAtBottom every time messages are updated', () => {
      expect(useKeepScrollAtBottom).toHaveBeenCalled()
    })
  })
})
