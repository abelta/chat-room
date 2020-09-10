import faker from 'faker';
import { arrayFilledWith, maybe } from '../helpers';

const participant = () => ({
  id: faker.random.number.uuid,
  name: faker.internet.userName(),
  avatar: faker.internet.avatar(),
});

class Current {
  constructor() {
    this.participants = arrayFilledWith(elem => participant(), 5);
    setInterval(() => this.addUser(), 3 * 1000);
    setInterval(() => this.removeUser(), 3 * 1000);
  }

  addUser = () => {
    maybe(() => this.participants.push(participant()));
  }

  removeUser = () => {
    if (this.participants.length <= 5) return;
    maybe(() => {
      this.participants.splice(
        Math.floor(Math.random() * this.participants.length),
        1,
      );
    });
  }
}

const current = new Current();

const participants = () => current.participants;

export default participants;
export { participant, current as currentParticipants };
