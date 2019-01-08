
exports.up = function(knex, Promise) {
	return knex.schema.createTable('user_favorite', function (table) {
	  table.increments()
	  table.string('favorite')
	  table.integer('user_id').references('id').inTable('users').unsigned().onDelete('cascade')
	})  
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_favorite')
}
