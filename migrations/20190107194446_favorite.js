
exports.up = function(knex, Promise) {
	return knex.schema.createTable('favorites', function (table) {
	  table.increments()
	  table.string('fav')
	})  
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('favorites')
}
