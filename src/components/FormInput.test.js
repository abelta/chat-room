import React from 'react'
import { render, screen } from '@testing-library/react'
import { FormInput } from 'components'

describe('FormInput', () => {
  it('renders properly', () => {
    render(
      <FormInput name="nombre" className="clase">
        <input></input>
      </FormInput>,
    )
    expect(screen.getByText(/nombre/)).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByTestId('form-input')).toHaveClass('clase')
  })
})
