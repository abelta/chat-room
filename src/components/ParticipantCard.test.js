import React from 'react'
import { render, screen } from '@testing-library/react'
import { ParticipantCard } from 'components'

describe('ParticipantCard', () => {
  const user = { avatar: 'http://bitbucket.com/my-avatar.png', name: 'Álvaro' }

  it('renders properly', () => {
    render(<ParticipantCard avatar={user.avatar} name={user.name} />)
    expect(screen.getByTestId('participant-card-avatar')).toHaveAttribute(
      'alt',
      user.name,
    )
    expect(screen.getByTestId('participant-card-avatar')).toHaveAttribute(
      'src',
      user.avatar,
    )
    expect(screen.getByTestId('participant-card-name')).toHaveTextContent(
      user.name,
    )
  })
})
