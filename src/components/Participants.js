import React from 'react'
import classNames from 'classnames'
import { ParticipantCard } from 'components'
import { useParticipants } from 'hooks'

export default ({ className }) => {
  const participants = useParticipants()

  return (
    <section
      className={classNames(
        'bg-teal-500 p-4 overflow-y-scroll-auto',
        className,
      )}
      data-testid="participants"
    >
      {participants.map(participant => (
        <ParticipantCard
          key={participant.id}
          {...participant}
          data-testid="participants-participant-card"
        />
      ))}
    </section>
  )
}
