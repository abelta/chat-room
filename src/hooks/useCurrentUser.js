import { useQuery } from 'react-query'

export default () => {
  const { data } = useQuery('login')
  return data
}
