import { postMessage } from 'api'

jest.spyOn(window, 'fetch')

describe('postMessage', () => {
  it('makes a fetch call', () => {
    const message = { user: { id: 1, name: 'Miranda' }, content: 'message' }
    postMessage(message)
    expect(window.fetch).toHaveBeenCalledWith('/message', {
      method: 'post',
      body: JSON.stringify(message),
    })
  })
})
