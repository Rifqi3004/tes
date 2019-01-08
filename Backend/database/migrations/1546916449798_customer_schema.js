'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomerSchema extends Schema {
  up () {
    this.create('customers', (table) => {
      table.string('customer_id').unique().primary()
      table.string('customer_name')
      table.string('address')
      table.string('phone')
      table.string('city')
      table.string('contact_person')
      table.timestamps()
    })
  }

  down () {
    this.drop('customers')
  }
}

module.exports = CustomerSchema
