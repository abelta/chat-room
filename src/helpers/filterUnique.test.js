import { filterUnique } from 'helpers'

describe('filterUnique', () => {
  describe('used as an array filter', () => {
    it('filters out unique elements in an array', () => {
      const array = [1, 2, 1, 3, 3, 3, 4, 5, 1]
      expect(array.filter(filterUnique)).toEqual([1, 2, 3, 4, 5])
    })
  })
})
