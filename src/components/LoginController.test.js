import React from 'react'
import { render, screen } from '@testing-library/react'
import { ModalProvider } from 'react-modal-hook'
import { LoginController } from 'components'
import { useCurrentUser } from 'hooks'

jest.mock('../hooks/useCurrentUser', () => jest.fn())

describe('LoginController', () => {
  beforeEach(() => {
    useCurrentUser.mockImplementation(() => undefined)
  })

  describe('user is not logged in', () => {
    it('renders login screen', () => {
      render(
        <ModalProvider>
          <LoginController />
        </ModalProvider>,
      )
      expect(screen.getByTestId('login-modal')).toBeInTheDocument()
    })
  })

  describe('user is logged in', () => {
    it('renders nothing', () => {
      useCurrentUser.mockImplementation(() => ({ name: 'annonymous' }))
      render(
        <ModalProvider>
          <LoginController />
        </ModalProvider>,
      )
      expect(screen.queryByTestId('login-modal')).not.toBeInTheDocument()
    })
  })
})
