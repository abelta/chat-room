import React from 'react'
import { render, screen } from '@testing-library/react'
import { Participants } from 'components'
import { useParticipants } from 'hooks'

jest.mock('../hooks/useParticipants.js', () => jest.fn())

describe('Participants', () => {
  beforeEach(() => {
    const participants = [
      { id: 0, name: 'Andrea' },
      { id: 1, name: 'Pablo' },
      { id: 2, name: 'Juanma' },
    ]
    useParticipants.mockImplementation(() => participants)
  })

  it('has same amount of cards as participants are provided', () => {
    render(<Participants />)
    expect(screen.getAllByTestId('participant-card')).toHaveLength(3)
  })
})
