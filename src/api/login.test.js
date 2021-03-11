import { logIn } from 'api'

jest.spyOn(window, 'fetch')

const user = { id: 1, name: 'Alfonso', avatar: 'http://avatar.com/1' }

describe('login', () => {
  const name = 'Alfonso'
  const password = 'xxxx'

  beforeAll(() =>
    window.fetch.mockImplementation(() => ({
      then: () => user,
    })),
  )

  it('makes a fetch call', () => {
    logIn({ name, password })
    expect(window.fetch).toHaveBeenCalledWith(
      `/login?name=${name}&password=${password}`,
    )
  })

  it('returns a user', async () => {
    const data = await logIn({ name, password })
    expect(data).toEqual(user)
  })
})
