import { logIn } from 'api'

jest.spyOn(window, 'fetch')

describe('login', () => {
  it('makes a fetch call', () => {
    const name = 'Alfonso'
    const password = 'xxxx'
    logIn({ name, password })
    expect(window.fetch).toHaveBeenCalledWith(
      `/login?name=${name}&password=${password}`,
    )
  })
})
