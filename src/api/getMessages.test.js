import { getMessages } from 'api'

jest.spyOn(window, 'fetch')

describe('getMessages', () => {
  it('returns a fetch call', () => {
    getMessages()
    expect(window.fetch).toHaveBeenCalledWith('/messages')
  })
})
