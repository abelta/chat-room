import { sleep } from 'helpers'

describe('sleep', () => {
  describe('used in an async function', () => {
    it('eventually resolves and executes subsequent lines', async () => {
      const subsequentFunction = jest.fn()
      await sleep(100)
      subsequentFunction()
      expect(subsequentFunction).toHaveBeenCalled()
    })
  })
})
