export default () => (
  fetch(`/participants`)
  .then(res => res.json())
);
