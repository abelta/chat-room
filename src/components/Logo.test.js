import React from 'react'
import { render, screen } from '@testing-library/react'
import { Logo } from 'components'

describe('Logo', () => {
  it('renders appropriately', () => {
    render(<Logo />)
    expect(screen.getByText(/CHAT/)).toBeInTheDocument()
  })
})
