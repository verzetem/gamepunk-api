
exports.up = function(knex, Promise) {
	return knex.schema.createTable('user_favorite', function (table) {
	  table.increments()
	  table.string('favorite')
	  table.integer('users_id').references('users.id').unsigned().onDelete('cascade')
	})  
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_favorite')
}
