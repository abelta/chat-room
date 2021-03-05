import { getParticipants } from 'api'

jest.spyOn(window, 'fetch')

describe('getParticipants', () => {
  it('makes a fetch call', () => {
    getParticipants()
    expect(window.fetch).toHaveBeenCalledWith('/participants')
  })
})
