import { maybe } from 'helpers'

describe('maybe', () => {
  describe('with a probability of 0', () => {
    it('does not ever execute callback', () => {
      const callback = jest.fn()
      maybe(callback, { probability: 0 })
      expect(callback).not.toHaveBeenCalled()
    })
  })
  describe('with a probability of 1', () => {
    it('executes callback', () => {
      const callback = jest.fn()
      maybe(callback, { probability: 1 })
      expect(callback).toHaveBeenCalled()
    })
  })
})
