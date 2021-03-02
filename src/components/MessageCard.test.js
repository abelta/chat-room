import React from 'react'
import { render, screen } from '@testing-library/react'
import { MessageCard } from 'components'
import { useCurrentUser } from 'hooks'

jest.mock('../hooks/useCurrentUser', () => jest.fn())

describe('MessageCard', () => {
  const currentUser = { name: 'Fernando', id: 88 }

  beforeEach(() => {
    useCurrentUser.mockImplementation(() => currentUser)
  })

  describe('message user is different as current user', () => {
    it('has not special class', () => {
      render(
        <MessageCard
          user={{ id: 11, name: 'annonymous' }}
          content="something"
        />,
      )
      expect(screen.getByTestId('message-card')).not.toHaveClass(
        'font-bold text-red-500',
      )
    })
  })

  describe('message user is same as current user', () => {
    it('has special class', () => {
      render(<MessageCard user={currentUser} content="something" />)
      expect(screen.getByTestId('message-card')).toHaveClass(
        'font-bold text-red-500',
      )
    })
  })
})
