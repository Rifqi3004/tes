'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SupplierSchema extends Schema {
  up () {
    this.create('suppliers', (table) => {
      table.increments()
      table.string('supplier_name')
      table.string('address')
      table.string('phone')
      table.string('city')
      table.string('contact_person')
      table.timestamps()
    })
  }

  down () {
    this.drop('suppliers')
  }
}

module.exports = SupplierSchema
