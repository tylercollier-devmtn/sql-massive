const controller = require('./controller')
const massive = require('massive')
require('dotenv').config()

let db

async function cleanDb(db) {
  await db.clean_db()
}

beforeAll(async () => {
  db = await massive(process.env.CONNECTION_STRING_TEST)
})

beforeEach(async () => {
  await cleanDb(db)
})

test('it gets heroes', async () => {
  await db.create_hero(['Superman', 'Eye lasers and cold breath', 'Clark "Errand Boy" Kent', 29])
  const data = await db.get_heroes()
  expect(data.length).toEqual(1)
})
