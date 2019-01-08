'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransactionDetailSchema extends Schema {
  up () {
    this.create('transaction_details', (table) => {
      table.increments()
      table.integer('transaction_id')
      table.string('stock_id')
      table.integer('quantity')
      table.float('discount')
      table.string('remarks')
      table.timestamps()
    })
  }

  down () {
    this.drop('transaction_details')
  }
}

module.exports = TransactionDetailSchema
