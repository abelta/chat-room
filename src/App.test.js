import React from 'react'
import {
  act,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
import { userLogIn } from 'setupTests'
import { getMessages, getParticipants, logIn, postMessage } from 'api'
import App from './App'
import userEvent from '@testing-library/user-event'

jest.mock('api/logIn')
jest.mock('api/getParticipants')
jest.mock('api/getMessages')
jest.mock('api/postMessage')
jest.mock('hooks/useKeepScrollAtBottom')

const mockLoginError = () => {
  logIn.mockImplementationOnce(() => {
    throw new Error()
  })
}

const currentUser = {
  avatar: 'http://avatar.com/1',
  id: 1,
  name: 'rightuser',
}

const mockLoginSuccess = () => {
  logIn.mockImplementationOnce(() => Promise.resolve(currentUser))
}

describe('App', () => {
  it('has all of its components', () => {
    render(<App />)
    expect(screen.getByTestId('messages')).toBeInTheDocument()
    expect(screen.getByTestId('participants')).toBeInTheDocument()
    expect(screen.getByTestId('test-input')).toBeInTheDocument()
  })

  it('has calls being made', () => {
    render(<App />)
    expect(getParticipants).toHaveBeenCalled()
    expect(getMessages).toHaveBeenCalled()
  })

  describe('user is not logged in', () => {
    it('presents login modal', () => {
      render(<App />)
      expect(screen.getByTestId('login-modal')).toBeInTheDocument()
    })

    describe('user enters wrong credentials', () => {
      it('displays error message', async () => {
        mockLoginError()
        render(<App />)
        act(() => userLogIn('wronguser', 'xxx'))
        await screen.findByTestId('login-modal-error')
      })
    })

    describe('message input', () => {
      it('is disabled', () => {
        render(<App />)
        expect(screen.getByTestId('message-input-text')).not.toBeEnabled()
      })
    })

    describe('user logs in successfully', () => {
      it('hides login modal', async () => {
        mockLoginSuccess()
        render(<App />)
        act(() => userLogIn('rightuser', 'xxx'))
        await waitForElementToBeRemoved(() => screen.getByTestId('login-modal'))
      })
    })
  })

  describe('user is logged in', () => {
    describe('message input', () => {
      it('is enabled', async () => {
        mockLoginSuccess()
        render(<App />)
        act(() => userLogIn('rightuser', 'xxx'))
        await waitFor(() =>
          expect(screen.getByTestId('message-input-text')).toBeEnabled(),
        )
      })

      describe('submitting', () => {
        beforeEach(async () => {
          mockLoginSuccess()
          render(<App />)
          act(() => userLogIn('myuser', 'xxx'))
          await waitFor(() =>
            expect(screen.getByTestId('message-input-text')).toBeEnabled(),
          )
        })
        describe('without text', () => {
          it('does not send a message', async () => {
            userEvent.click(screen.getByTestId('message-input-button'))
            expect(postMessage).not.toHaveBeenCalled()
          })
        })

        describe('with text', () => {
          it('sends a message', async () => {
            const content = 'some message'
            act(() => {
              userEvent.type(screen.getByTestId('message-input-text'), content)
              userEvent.click(screen.getByTestId('message-input-button'))
            })

            await waitFor(() =>
              expect(postMessage).toHaveBeenCalledWith({
                user: currentUser,
                content,
              }),
            )
          })
        })
      })

      describe('participants', () => {
        beforeEach(() => {
          getParticipants.mockImplementationOnce(() =>
            Promise.resolve([
              { id: 0, name: 'Wanda', avatar: 'http://avatar.com/1' },
              { id: 1, name: 'Pietro', avatar: 'http://avatar.com/2' },
            ]),
          )
          render(<App />)
        })

        it('displays the result of the getParticipants call', async () => {
          const participants = screen.getByTestId('participants')
          await within(participants).findByText('Wanda')
          await within(participants).findByText('Pietro')
        })
      })

      describe('messages', () => {
        beforeEach(() => {
          getMessages.mockImplementationOnce(() =>
            Promise.resolve([
              { user: { id: 0, name: 'Pablo' }, content: 'some message' },
              {
                user: { id: 1, name: 'Ramona' },
                content: 'another message',
              },
            ]),
          )
          render(<App />)
        })

        it('displays the result of the getMessages call', async () => {
          const messages = screen.getByTestId('messages')
          await within(messages).findByText('some message')
          await within(messages).findByText('another message')
        })
      })
    })
  })
})
