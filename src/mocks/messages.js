import faker from 'faker'
import { maybe } from 'helpers'
import { currentParticipants } from './participants'

const message = ({ id, user, content }) => ({
  id: id || faker.random.number,
  user,
  content: content || faker.commerce.productDescription(),
})

class Current {
  constructor() {
    this.idCount = 0
    this.messages = []
    setInterval(() => this.setNewMessages(), 2 * 1000)
    setInterval(() => this.cleanMessages(), 60 * 1000)
  }

  setNewMessages = () => {
    for (const user of currentParticipants.participants) {
      maybe(
        () => this.messages.push(message({ id: this.idCount, user })),
        { probability: 1/5 }
      )
    }
  }

  addMessage = (message) => {
    this.messages.push(message)
  }

  cleanMessages = () => {
    this.messages = this.messages.splice(this.messages.length - 25)
  }
}

const current = new Current()

const messages = () => current.messages

export default messages
export { message, current as currentMessages }
