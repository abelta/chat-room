import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MessageInput } from 'components'
import { useCurrentUser, useMutatePostMessage } from 'hooks'

jest.mock('../hooks/useCurrentUser')
jest.mock('../hooks/useMutatePostMessage')

describe('MessageInput', () => {
  it('renders properly', () => {
    render(<MessageInput />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  describe('user is not logged in', () => {
    beforeEach(() => {
      useCurrentUser.mockImplementation(() => undefined)
    })

    it('is disabled', () => {
      render(<MessageInput />)
      expect(screen.getByRole('textbox')).toBeDisabled()
      expect(screen.getByRole('button')).toBeDisabled()
    })
  })

  describe('user is logged in', () => {
    const user = { id: 1, name: 'Alberto' }
    beforeEach(() => {
      useCurrentUser.mockImplementation(() => user)
    })

    it('is enabled', () => {
      render(<MessageInput />)
      expect(screen.getByRole('textbox')).toBeEnabled()
      expect(screen.getByRole('button')).toBeEnabled()
    })

    describe('post button is clicked', () => {
      const mutate = jest.fn()

      beforeEach(() => {
        useMutatePostMessage.mockImplementation(() => mutate)
      })

      describe('nothing is written in', () => {
        it('does not post message', () => {
          render(<MessageInput />)
          userEvent.click(screen.getByRole('button'))
          expect(mutate).not.toHaveBeenCalled()
        })
      })

      describe('something is written in', () => {
        const content = 'something written in'
        it('posts message', () => {
          render(<MessageInput />)
          userEvent.type(screen.getByRole('textbox'), content)
          userEvent.click(screen.getByRole('button'))
          expect(mutate).toHaveBeenCalledWith({ user, content })
        })
      })
    })

    describe('ENTER key is pressed', () => {
      const mutate = jest.fn()

      beforeEach(() => {
        useMutatePostMessage.mockImplementation(() => mutate)
      })

      describe('nothing is written in', () => {
        it('does not post message', async () => {
          render(<MessageInput />)
          await userEvent.type(screen.getByRole('textbox'), '{enter}')
          expect(mutate).not.toHaveBeenCalled()
        })
      })

      describe('something is written in', () => {
        const content = 'something written in'

        it('posts message', () => {
          render(<MessageInput />)
          userEvent.type(screen.getByRole('textbox'), content)
          userEvent.type(screen.getByRole('textbox'), '{enter}')
          expect(mutate).toHaveBeenCalledWith({ user, content })
        })
      })
    })
  })
})
