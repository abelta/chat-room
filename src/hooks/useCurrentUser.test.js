import { renderHook } from '@testing-library/react-hooks'
import { useQuery } from 'react-query'
import { useCurrentUser } from 'hooks'

jest.mock('react-query', () => {
  const user = { id: 1, name: 'Ana' }
  return {
    // useQuery: () => jest.fn(),
    useQuery: () => user,
  }
})

describe('useCurrentUser', () => {
  const user = { id: 1, name: 'Ana' }
  // beforeEach(() => useQuery.mockImplementation(() => user))
  it('returns current user', () => {
    const { result } = renderHook(() => useCurrentUser())
    // expect(useQuery).toHaveBeenCalledWith('login')
    expect(result).toBe(user)
  })
})
