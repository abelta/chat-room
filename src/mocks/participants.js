import faker from 'faker'
import { arrayFilledWith, maybe } from 'helpers'

const participant = ({ id, name, avatar } = {}) => ({
  id: id || faker.random.number(),
  name: name || faker.internet.userName(),
  avatar: avatar || faker.internet.avatar(),
})

class Current {
  constructor() {
    this.participants = arrayFilledWith(() => participant(), 5)
    setInterval(() => this.addUser(), 3 * 1000)
    setInterval(() => this.removeUser(), 3 * 1000)
  }

  addUser = () => {
    maybe(() => this.participants.push(participant()))
  }

  removeUser = () => {
    if (this.participants.length <= 5) return
    maybe(() => {
      this.participants.splice(
        Math.floor(Math.random() * this.participants.length),
        1,
      )
    })
  }
}

const current = new Current()

const participants = () => current.participants

export default participants
export { participant, current as currentParticipants }
