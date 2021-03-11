// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import * as reactTestingLibrary from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import { server } from './mocks/server.js'
import { queryCache } from 'react-query'

// Setup for MSW
// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

// Setup for React-Query
afterEach(() => queryCache.clear())

export const userLogIn = (name, password) => {
  userEvent.type(screen.getByTestId('input-name'), name)
  userEvent.type(screen.getByTestId('input-password'), password)
  userEvent.click(screen.getByText(/log in/i))
}
