export default () => (
  fetch(`/messages`)
  .then(res => res.json())
)
