import { arrayFilledWith } from 'helpers'

describe('arrayFilledWith', () => {
  describe('no length parameter is passed', () => {
    it('returns an array of 10 elements with the content specified in the callback parameter', () => {
      const result = arrayFilledWith(() => 'A')
      expect(result).toHaveLength(10)
      result.forEach(elem => expect(elem).toEqual('A'))
    })
  })

  describe('length parameter is passed', () => {
    it('returns an array of the given length', () => {
      const result = arrayFilledWith(() => 'A', 5)
      expect(result).toHaveLength(5)
    })
  })
})
