import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { LoginModal } from 'components'
import { useMutateLogin } from 'hooks'

jest.mock('../hooks/useMutateLogin', () => jest.fn())

describe('LoginModal', () => {
  it('renders properly', () => {
    render(<LoginModal />)
    expect(screen.getByText(/name/i)).toBeInTheDocument()
    expect(screen.getByText(/password/i)).toBeInTheDocument()
    expect(screen.getByText(/log in/i)).toBeInTheDocument()
  })

  describe('submit button is pushed', () => {
    it('initiates login with provided input', () => {
      const mutate = jest.fn()
      useMutateLogin.mockImplementation(() => mutate)
      render(<LoginModal />)
      fireEvent.change(screen.getByTestId('input-name'), {
        target: { value: 'nombre' },
      })
      fireEvent.change(screen.getByTestId('input-password'), {
        target: { value: 'password' },
      })
      fireEvent.click(screen.getByText(/log in/i))
      expect(mutate).toHaveBeenCalledWith({
        name: 'nombre',
        password: 'password',
      })
    })
  })
})
