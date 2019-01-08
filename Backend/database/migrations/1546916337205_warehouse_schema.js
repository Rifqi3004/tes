'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WarehouseSchema extends Schema {
  up () {
    this.create('warehouses', (table) => {
      table.string('warehouse_id').unique().primary()
      table.string('warehouse_name')
      table.string('adress')
      table.string('officer')
      table.timestamps()
    })
  }

  down () {
    this.drop('warehouses')
  }
}

module.exports = WarehouseSchema
