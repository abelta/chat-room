/**
 * @param callback function
 * @param options object { probability }
 */
export default (callback, options = {}) => {
  const defaultOptions = { probability: 0.5 }
  const _options = { ...defaultOptions, ...options }
  if (_options.probability === 0) return
  if (Math.floor(Math.random() * 10) % (1 / _options.probability) === 0)
    callback()
}
