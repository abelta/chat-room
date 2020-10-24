/**
 * @param fn function
 * @param options object { probability }
 */
export default (fn, options = {}) => {
  const defaultOptions = { probability: 0.5 }
  const _options = { ...defaultOptions, ...options }
  if (Math.floor(Math.random() * 10) % (1 / _options.probability) === 0) fn()
}
