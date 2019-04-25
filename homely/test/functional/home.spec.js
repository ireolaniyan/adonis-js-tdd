'use strict'

const { test, trait } = use('Test/Suite')('Home')

trait('Test/ApiClient')

test('Should be able to create a new Home through the HTTP client', async ({ assert, client }) => {
  let data = {
    title: 'The Beech',
    description: `The Beech offers superb styling with clean lines and practicality throughout. 
                  The ground floor boasts a kitchen / diner, and large living room the width of the house, with doors opening out into the enclosed garden. There is also a WC which completes the ground floor accommodation. On the first floor you will discover an impressive master bedroom with en-suite and two further well-proportioned bedrooms with a family bathroom and storage cupboards.
                  Outside, there is an enclosed rear garden and designated parking.`,
    photo: 'the-beech-002342482.jpg',
    price: 255000.00,
    type: 'penthouse',
    locale: 'Elburton',
    rooms: 3,
    bathrooms: 2,
    kitchens: 1,
    floors: 3,
    sq_footage: 188.65
  }

  const response = await client.post('/api/v1/homes')
  .send(data)
  .end()

  // run assertions
  response.assertStatus(200)
  response.assertJSONSubset(data)
}).timeout(0)

test('Get a list of homes', async ({ assert, client }) => {

  const response = await client.get('api/v1/homes/all-homes').end()

  response.assertStatus(200)
  // response.assertJSONSubset(data)
}).timeout(0)

test('Edit information about a home', async ({ assert, client }) => {
  let data = {
    title: 'The Beech Upgraded',
    description: `The test room.`,
    // photo: 'the-beech-002342482.jpg',
    price: 300000.00,
    type: 'duplex',
    locale: 'Croydon',
    rooms: 4,
    bathrooms: 3,
    kitchens: 2,
    // floors: 3,
    // sq_footage: 188.65
  }

  try {
    const response = await client.put('/api/v1/homes/1')
    .send(data)
    .end()
  
    // run assertions
    response.assertStatus(200)
    response.assertJSONSubset(data)
  } catch ({ message }) {
    // This doesn't work as expected yet
    assert.equal(message, 'Home not found')
  }
}).timeout(0)
