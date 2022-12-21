const {v4:uuid} = require('uuid')
const {Timestamp} = require('google-protobuf/google/protobuf/timestamp_pb')
const {faker} = require('@faker-js/faker')

const configProto = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
}

const randomId = () => {
  return uuid();
}

const toDateNow = () => {
  const timeMS = Date.now();

  const timestamp = new Timestamp();
  timestamp.setSeconds(Math.floor(timeMS / 1000)); // (timeMS / 1000) gives me a float number but setSeconds expects an integer
  timestamp.setNanos((timeMS % 1000) * 1e6);
  return timestamp
}

const getFakerUser = (max_length) => {
  const users = [];
  for (let i = 0; i < max_length; i++) {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()

    users.push({
      id: randomId(),
      fullname: `${firstName} ${lastName}`,
      email: faker.internet.email(firstName, lastName),
      country: faker.address.country()
    })
  }

  return users;
}

const getDifferenceTime = (min, max) => {
  const diff = max.getTime() - min.getTime();
  const seconds = diff/1000
  return Math.abs(seconds)
}

module.exports = {
  configProto,
  randomId,
  toDateNow,
  getFakerUser,
  getDifferenceTime
}