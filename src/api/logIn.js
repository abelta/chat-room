export default ({ name, password }) => (
  fetch(
    `/login?name=${name}&password=${password}`,
    { params: { name, password } },
  ).then(res => res.json())
)
