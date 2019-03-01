'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HomeSchema extends Schema {
  up () {
    this.create('homes', (table) => {
      table.increments()
      table.string('title').notNullable().unique()
      table.text('description').nullable()
      table.string('photo').nullable().defaultTo('default.jpg')
      table.float('price').notNullable().defaultTo(0.00)
      table.text('locale').nullable()
      table.enu('type', ['duplex', 'bungalow', 'penthouse', 'detached', 'flat']).defaultTo('duplex').nullable()
      table.integer('rooms').defaultTo(0)   
      table.integer('bathrooms').defaultTo(0)
      table.integer('kitchens').defaultTo(0)
      table.integer('floors').defaultTo(0)
      table.float('sq_footage').defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('homes')
  }
}

module.exports = HomeSchema
