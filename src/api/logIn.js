export default ({ name, password }) =>
  fetch(`/login?name=${name}&password=${password}`).then(res => res.json())
