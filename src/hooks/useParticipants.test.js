import { renderHook } from '@testing-library/react-hooks'
import { getParticipants } from 'api'
import { useParticipants } from 'hooks'

jest.mock('../api/getParticipants.js', () => jest.fn())

const participants0 = [
  { id: 0, name: 'Antonio' },
  { id: 1, name: 'Francisco' },
]
const participants1 = [
  { id: 3, name: 'Elena' },
  { id: 1, name: 'Francisco' },
  { id: 2, name: 'Cristina' },
]

describe('getParticipants', () => {
  describe('with each iteration', () => {
    it('returns current list of participants', async () => {
      getParticipants.mockImplementation(() => Promise.resolve(participants0))
      const { result, waitForNextUpdate } = renderHook(() => useParticipants())
      await waitForNextUpdate()
      expect(result.current).toHaveLength(2)
      getParticipants.mockImplementation(() => Promise.resolve(participants1))
      await waitForNextUpdate()
      expect(result.current).toHaveLength(3)
    })
  })
})
