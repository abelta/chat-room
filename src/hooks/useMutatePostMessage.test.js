import { act, renderHook } from '@testing-library/react-hooks'
import { useMutatePostMessage } from 'hooks'
import { postMessage } from 'api'

jest.mock('../api/postMessage')

describe('useMutatePostMessage', () => {
  it('returns a function', () => {
    const { result } = renderHook(() => useMutatePostMessage())
    expect(result.current).toBeInstanceOf(Function)
  })

  describe('returned function', () => {
    it('posts a message', async () => {
      const user = { id: 1, name: 'Manolo' }
      const content = 'CONTENT'
      const { result, waitFor } = renderHook(() => useMutatePostMessage())
      await act(async () => {
        result.current({ user, content })
        await waitFor(() => result.current.isSuccess)
      })
      expect(postMessage).toHaveBeenCalledWith({ user, content })
    })
  })
})
