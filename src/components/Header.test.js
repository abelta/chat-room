import React from 'react'
import { render, screen } from '@testing-library/react'
import { Header } from 'components'

describe('Header', () => {
  it('renders propperly', () => {
    render(<Header />)
    expect(screen.getByText(/chat/i)).toBeInTheDocument()
  })
})
