export default (callback, length = 10) => Array.from(
  [...Array(length).keys()],
  elem => callback(),
);
