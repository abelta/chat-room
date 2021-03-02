import { useMutation } from 'react-query'
import { postMessage } from 'api'

export default () => {
  const [mutate] = useMutation(({ user, content }) =>
    postMessage({ user, content }),
  )
  return mutate
}
