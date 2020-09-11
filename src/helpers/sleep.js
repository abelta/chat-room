// export default (milliseconds) => {
//   const date = Date.now();
//   let currentDate = undefined;
//   do {
//     currentDate = Date.now();
//   } while (currentDate - date < milliseconds);
// };

export default ms => new Promise(resolve => setTimeout(resolve, ms));
