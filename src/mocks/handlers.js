import { rest } from 'msw'
import { sleep } from 'helpers'
import participants, { participant } from './participants'
import messages, { currentMessages } from './messages'

export default [
  rest.get('/login', async (req, res, ctx) => {
    await sleep(1000)
    const name = req.url.searchParams.get('name')
    return res(
      ctx.status(200),
      ctx.json(participant({ name }))
    )
  }),

  rest.get('/participants', async (req, res, ctx) => {
    await sleep(500)
    return res(
      ctx.status(200),
      ctx.json(participants()),
    )
  }),

  rest.get('/messages', async (req, res, ctx) => {
    await sleep(500)
    return res(
      ctx.status(200),
      ctx.json(messages()),
    )
  }),

  rest.post('/message', async (req, res, ctx) => {
    await sleep(100)
    const message = JSON.parse(req.body)
    currentMessages.addMessage(message)
    return res(ctx.status(200))
  }),
]
