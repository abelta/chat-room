import React from 'react'
import { render, screen } from '@testing-library/react'
import { Watermark } from 'components'

describe('Watermark', () => {
  it('renders properly', () => {
    render(<Watermark />)
    expect(
      screen.getByText('https://github.com/abelta/chat-room'),
    ).toBeInTheDocument()
  })
})
