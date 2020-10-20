import React from 'react'
import { useQuery } from 'react-query'
import { getParticipants } from '../api'
import ParticipantCard from './ParticipantCard'
import './Participants.css'

export default () => {
  // Configured for long polling.
  const { data: participants = []} = useQuery(
    'participants',
    async () => await getParticipants(),
    {  refetchInterval: 1000 },
  )

  return (
    <section className="participants">
      {
        participants.map((participant) => (
            <ParticipantCard
              key={participant.id}
              {...participant}
            />
        ))
      }
    </section>
  )
}
