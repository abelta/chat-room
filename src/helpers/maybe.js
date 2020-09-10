export default fn => {
  if (Math.floor(Math.random() * 10) % 2 === 0) fn();
}
