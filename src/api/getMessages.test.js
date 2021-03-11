import { getMessages } from 'api'

jest.spyOn(window, 'fetch')

const messages = [
  { user: { id: 1, name: 'Juana' }, content: 'first message' },
  { user: { id: 2, name: 'Paca' }, content: 'second message' },
]

describe('getMessages', () => {
  beforeAll(() =>
    window.fetch.mockImplementation(() => ({
      then: () => messages,
    })),
  )

  it('makes a fetch call', () => {
    getMessages()
    expect(window.fetch).toHaveBeenCalledWith('/messages')
  })

  it('returns data', async () => {
    const data = await getMessages()
    expect(data).toEqual(messages)
  })
})
