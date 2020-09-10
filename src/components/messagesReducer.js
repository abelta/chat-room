import { filterUnique } from '../helpers';

export default (state, { type, payload }) => {
  switch (type) {
    case 'addMessages':
      const { messages } = payload;
      return [...state, ...messages].filter(filterUnique);
    default: throw new Error();
  }
}

export const addMessages = (messages) => ({
  type: 'addMessages',
  payload: { messages },
});
