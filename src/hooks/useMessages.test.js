import { renderHook } from '@testing-library/react-hooks'
import { getMessages } from 'api'
import { useMessages } from 'hooks'

jest.mock('../api/getMessages')

const messages = [
  { id: 0, user: { id: 0, name: 'Alberto' }, content: 'xxxx' },
  { id: 1, user: { id: 0, name: 'Alberto' }, content: 'yyyy' },
  { id: 2, user: { id: 1, name: 'Ana' }, content: 'zzzz' },
]

describe('useMessages', () => {
  describe('with each update', () => {
    it('returns more messages', async () => {
      getMessages.mockImplementation(() => Promise.resolve(messages))

      const { result, waitForNextUpdate } = renderHook(() => useMessages())
      await waitForNextUpdate()
      expect(result.current).toHaveLength(3)
      getMessages.mockImplementation(() =>
        Promise.resolve([...messages, ...messages]),
      )
      await waitForNextUpdate()
      expect(result.current).toHaveLength(6)
    })
  })
})
