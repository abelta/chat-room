import { useQuery } from 'react-query'
import { getMessages } from 'api'

// Long polling for messages.
export default () => {
  const { data = [] } = useQuery('messages', async () => await getMessages(), {
    keepPreviousData: true,
    refetchInterval: 500,
  })
  return data
}
