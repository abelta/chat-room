export default message => fetch(
  '/message',
  { method: 'post', body: JSON.stringify(message) },
)
