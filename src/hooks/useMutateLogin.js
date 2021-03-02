import { useMutation, useQueryCache } from 'react-query'
import { logIn } from 'api'

export default () => {
  const queryCache = useQueryCache()
  const [mutate] = useMutation(
    ({ name, password }) => logIn({ name, password }),
    {
      onSuccess: data =>
        queryCache.setQueryData('login', () => data, {
          cacheTime: 'Infinity',
          staleTime: 'Infinity',
        }),
    },
  )
  return mutate
}
