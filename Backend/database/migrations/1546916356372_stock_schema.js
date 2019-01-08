'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StockSchema extends Schema {
  up () {
    this.create('stocks', (table) => {
      table.string('stock_id').unique().primary()
      table.string('stock_name')
      table.integer('unit_id')
      table.integer('price_unit')
      table.integer('quantity')
      table.integer('supplier_id')
      table.string('warehouse_id')
      table.integer('reorder_point')
      table.timestamps()
    })
  }

  down () {
    this.drop('stocks')
  }
}

module.exports = StockSchema
