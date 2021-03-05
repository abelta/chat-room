import { renderHook } from '@testing-library/react-hooks'
import { useCurrentUser } from 'hooks'

jest.mock('react-query', () => ({
  useQuery: () => ({ data: { id: 1, name: 'Ana' } }),
}))

describe('useCurrentUser', () => {
  describe('user is logged in', () => {
    it('returns current user', () => {
      const { result } = renderHook(() => useCurrentUser())
      expect(result.current).toEqual({ id: 1, name: 'Ana' })
    })
  })
})
