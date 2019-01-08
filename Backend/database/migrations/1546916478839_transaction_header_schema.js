'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransactionHeaderSchema extends Schema {
  up () {
    this.create('transaction_headers', (table) => {
      table.increments()
      table.string('transaction_date')
      table.string('customer_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('transaction_headers')
  }
}

module.exports = TransactionHeaderSchema
