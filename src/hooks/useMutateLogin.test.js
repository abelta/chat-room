import { act, renderHook } from '@testing-library/react-hooks'
import { useMutateLogin } from 'hooks'
import { logIn } from 'api'

jest.mock('../api/logIn', () => jest.fn())

describe('useMutateLogin', () => {
  it('returns a function', () => {
    const { result } = renderHook(() => useMutateLogin())
    expect(result.current).toBeInstanceOf(Function)
  })

  describe('returned function', () => {
    it('calls api/login', async () => {
      const name = 'Alberto'
      const password = 'xxx'
      const { result, waitFor } = renderHook(() => useMutateLogin())
      await act(async () => {
        result.current({ name, password })
        await waitFor(() => result.current.isSuccess)
      })

      expect(logIn).toHaveBeenCalledWith({ name, password })
    })
  })
})
