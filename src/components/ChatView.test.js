import React from 'react'
import { render, screen } from '@testing-library/react'
import { ChatView } from 'components'

jest.mock('../hooks/useKeepScrollAtBottom.js', () => jest.fn())

describe('ChatView', () => {
  it('renders properly', () => {
    render(<ChatView />)
    expect(screen.getByTestId('messages')).toBeInTheDocument()
    expect(screen.getByTestId('participants')).toBeInTheDocument()
  })
})
