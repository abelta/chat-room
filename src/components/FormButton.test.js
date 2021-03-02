import React from 'react'
import { render, screen } from '@testing-library/react'
import { FormButton } from 'components'

describe('FormButton', () => {
  it('renders a button', () => {
    render(<FormButton>click me</FormButton>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
