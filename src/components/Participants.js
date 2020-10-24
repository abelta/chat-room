import React from 'react'
import { useQuery } from 'react-query'
import classNames from 'classnames'
import { getParticipants } from 'api'
import { ParticipantCard } from 'components'

export default ({ className }) => {
  // Configured for long polling.
  const { data: participants = []} = useQuery(
    'participants',
    async () => await getParticipants(),
    {  refetchInterval: 1000 },
  )

  return (
    <section className={classNames('bg-teal-500 p-4 overflow-y-scroll-auto', className)}>
      {
        participants.map(participant => (
          <ParticipantCard
            key={participant.id}
            {...participant}
          />
        ))
      }
    </section>
  )
}
