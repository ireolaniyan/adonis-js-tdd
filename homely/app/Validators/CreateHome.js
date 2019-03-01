'use strict'

class CreateHome {
  get rules () {
    return {
      // validation rules
      title: 'required|string|min:5',
      description: 'string',
      photo: 'string',
      price: 'number',
      rooms: 'number',
      kitchens: 'number',
      sq_footage: 'number'
    }
  }
}

module.exports = CreateHome
