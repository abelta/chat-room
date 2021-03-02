import { useQuery } from 'react-query'
import { getParticipants } from 'api'

// Configured for long polling.
export default () => {
  const { data = [] } = useQuery(
    'participants',
    async () => await getParticipants(),
    { refetchInterval: 1000 },
  )
  return data
}
