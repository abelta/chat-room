import { getParticipants } from 'api'

jest.spyOn(window, 'fetch')

const participants = [
  { id: 1, avatar: 'http://avatar.com/1', name: 'Virginia' },
  { id: 2, avatar: 'http://avatar.com/2', name: 'Mario' },
]

describe('getParticipants', () => {
  beforeAll(() =>
    window.fetch.mockImplementation(() => ({
      then: () => participants,
    })),
  )

  it('makes a fetch call', () => {
    getParticipants()
    expect(window.fetch).toHaveBeenCalledWith('/participants')
  })

  it('returns data', async () => {
    const data = await getParticipants()
    expect(data).toEqual(participants)
  })
})
