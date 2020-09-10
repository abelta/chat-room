import { rest } from 'msw';
import participants from './participants';
import messages, { currentMessages } from './messages';

export default [
  rest.get('/participants', (req, res, ctx) => (
    res(
      ctx.status(200),
      ctx.json(participants()),
    )
  )),

  rest.get('/messages', (req, res, ctx) => (
    res(
      ctx.status(200),
      ctx.json(messages()),
    )
  )),

  rest.post('/message', (req, res, ctx) => {
    const message = JSON.parse(req.body);
    currentMessages.addMessage(message);
    return res(ctx.status(200));
  }),
];
