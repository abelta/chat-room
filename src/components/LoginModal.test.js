import React from 'react'
import { render, screen } from '@testing-library/react'
import { logIn } from 'api'
import { LoginModal } from 'components'
import { useMutateLogin } from 'hooks'
import { userLogIn } from 'setupTests'

jest.mock('../hooks/useMutateLogin', () => jest.fn())
jest.mock('../api/logIn', () => jest.fn())

describe('LoginModal', () => {
  it('renders properly', () => {
    useMutateLogin.mockImplementation(() => ({
      mutate: jest.fn(),
      isLoading: false,
      isError: false,
    }))
    render(<LoginModal />)
    expect(screen.getByText(/name/i)).toBeInTheDocument()
    expect(screen.getByText(/password/i)).toBeInTheDocument()
    expect(screen.getByText(/log in/i)).toBeInTheDocument()
  })

  describe('submit button is clicked', () => {
    it('initiates login with provided input', () => {
      const name = 'nombre'
      const password = 'password'
      const mutate = jest.fn()
      useMutateLogin.mockImplementation(() => ({
        mutate,
        isLoading: false,
        isError: false,
      }))
      render(<LoginModal />)
      userLogIn(name, password)
      expect(mutate).toHaveBeenCalledWith({
        name,
        password,
      })
    })
  })
  describe('user credentials are invalid', () => {
    describe('submit button is clicked', () => {
      it('displays an error message', async () => {
        useMutateLogin.mockImplementation(() => ({
          isError: true,
          isLoading: false,
          mutate: jest.fn(),
        }))
        const name = 'wronguser'
        const password = 'xxx'
        render(<LoginModal />)
        userLogIn(name, password)
        await screen.findByTestId('login-modal-error')
        expect(screen.getByTestId('login-modal-error')).toBeInTheDocument()
      })

      it('displays an error message', async () => {
        jest.dontMock('../hooks/useMutateLogin')
        logIn.mockImplementation(() => {
          throw new Error()
        })
        const name = 'wronguser'
        const password = 'xxx'
        render(<LoginModal />)
        userLogIn(name, password)
        await screen.findByTestId('login-modal-error')
        expect(screen.getByTestId('login-modal-error')).toBeInTheDocument()
      })
    })
  })
})
