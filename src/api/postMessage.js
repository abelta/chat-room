export default (message) => {
  console.log('MESSAGE', message);
  fetch(
  '/message',
  { method: 'post', body: JSON.stringify(message) },
)};
