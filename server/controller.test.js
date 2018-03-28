// const controller = require('./controller')
// const massive = require('massive')
// require('dotenv').config()

// let db

// async function cleanDb(db) {
//   await db.clean_db()
// }

// beforeAll(async () => {
//   db = await massive(process.env.CONNECTION_STRING_TEST)
// })

// beforeEach(async () => {
//   await cleanDb(db)
// })

// test('it gets heroes', async () => {
//   await db.create_hero(['Superman', 'Eye lasers and cold breath', 'Clark "Errand Boy" Kent', 29])
//   const data = await db.get_heroes()
//   expect(data.length).toEqual(1)
// })

const controller = require('./controller')
const massive = require('massive')
require('dotenv').config()

let db

function cleanDb(db) {
  return db.clean_db()
}

beforeAll(() => {
  return massive(process.env.CONNECTION_STRING_TEST).then(database => {
    db = database
  })
})

beforeEach(() => {
  return cleanDb(db)
})

test('gets heroes', done => {
  // return db.create_hero(['Superman', 'Eye lasers and cold breath', 'Trevor Brown', 25]).then(() => {
  //   return db.get_heroes().then(heroes => {
  //     expect(heroes[0].age).toEqual(30)
  //   })
  // })
  let testPassed = false
  const req = {
    app: {
      get: () => db,
    }
  }
  const res = {
    status: () => {
      testPassed = true
      expect(testPassed).toBe(true)
      done()
      return {
        json: () => {}
      }
    }
  }
  controller.getHeroes(req, res)
})
